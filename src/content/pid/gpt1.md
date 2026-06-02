---
published: 2026-04-23 20:07:25
updated: 2026-04-23 20:07:47
---
好，我现在把**最终版代码框架**给你整理成一套能直接替换思路的版本。

先说清楚这版的设计目标：

* 适配你现在这套硬件：**STM32H745 + 线阵CCD + 舵机转向 + 直流电机 + 编码器 + 串口屏**。这些在你现有 `main.c / main.h / 中断文件` 里都已经存在。
* 保留你原来的底层接口：

  * `CCD_Read()`
  * `Encoder_Init()`
  * `UART2_Init()`
  * `TIM2_Init()`
  * `TIM4_Init()`
  * `CCD_Curve_Plot()`
    这些你原工程已经写好了。
* 把上层控制改成：

  * **感知层**
  * **赛道状态识别层**
  * **转向控制层**
  * **速度控制层**
  * **UI命令层**

---

# 一、这次代码逻辑怎么分层

## 1）感知层

写在 `main.c` 里，紧接着 CCD 处理相关函数后面。
用途：

* 读取 CCD 原始 128 点
* 提取 `TargetIdx`
* 计算偏差 `Track_Error`
* 计算偏差变化 `Error_Delta`

---

## 2）赛道状态识别层

也写在 `main.c`。
用途：

* 判断当前是
  **直道 / 缓弯 / 急弯 / S弯 / 异常丢线**
* 不是识别“第几张地图”，而是识别“当前路段类型”

这个设计是为了同时兼容你发的 4 张赛道图。

---

## 3）转向控制层

写在 `main.c`。
用途：

* 根据赛道状态，切换不同的 `Kp / Kd`
* 输出舵机 PWM
* 当前版本用 **PD**
* 不是不用 I，而是先让转向环更稳；速度环里已经用了 I

---

## 4）速度控制层

写在 `main.c`。
用途：

* 根据赛道状态决定目标速度
* 再由编码器速度反馈做 **PI**
* 这样小车不会在直道和急弯都用同一个速度策略

---

## 5）UI命令层

写在 `main.c` 主循环的 `switch` 里。
用途：

* page3 的按钮和滑条控制：

  * 启动
  * 停止
  * 基础速度增减
  * Kp/Kd 微调
  * 曲线页开关

你原代码已经有串口屏协议接收和曲线显示基础，课件也给了相同协议思路。

---

# 二、这版最终框架建议你只改哪个文件

## 必改

* `main.c`

## 小改

* `main.h`

## 不用动

* `stm32h7xx_it.c`
* `stm32h7xx_it.h`
* `stm32h7xx_hal_msp.c`

因为这些文件现在已经完成了 UART/TIM 中断和 GPIO 初始化。

---

# 三、main.h 要补什么

在 `main.h` 里，建议补这几个函数声明。
放在原来函数声明区域最后面即可：

```c id="12lazk"
void Car_Start(void);
void Car_Stop(void);
void Motor_Set_Forward(void);
void Motor_Set_PWM(uint16_t pwm);
void Steering_Set_PWM(uint16_t pwm);

void CCD_Data_Process(void);
void Track_State_Judge(void);
void Track_Param_Update(void);
void Target_Speed_Update(void);
void Track_PD_Control(void);
void Speed_PI_Control(void);

void UI_Send_Number(char *name,int value);
void UI_Send_Status(void);
void Int_To_Str(int value,uint8_t *buf,uint8_t *len);
```

---

# 四、最终版 main.c 的整体流程

主循环最终会变成：

1. 解析 UI 命令
2. 采 CCD
3. 提取中线
4. 计算误差
5. 判断当前路段状态
6. 更新转向参数
7. 做转向 PD
8. 计算编码器速度
9. 定时触发速度 PI
10. 定时刷新 UI 状态

---

# 五、完整最终版 main.c

下面我直接给你一版**完整框架版 `main.c`**。
这版基于你原始工程整理，保留原有硬件接口和初始化方式，核心新增的是：

* 赛道状态识别
* 分场景转向 PD
* 分场景目标速度
* 速度 PI
* 新的 page3 命令逻辑

```c
/**
  ******************************************************************************
  * @file    main.c
  * @author  based on original project, reorganized for final track framework
  * @brief   STM32H745 smart car final control framework
  ******************************************************************************
  */

/* Includes ------------------------------------------------------------------*/
#include "main.h"

/* Private function prototypes -----------------------------------------------*/
static void MPU_Config(void);
static void SystemClock_Config(void);
static void CPU_CACHE_Enable(void);
static void Error_Handler(void);

/* 新增内部控制函数声明 */
void Car_Start(void);
void Car_Stop(void);
void Motor_Set_Forward(void);
void Motor_Set_PWM(uint16_t pwm);
void Steering_Set_PWM(uint16_t pwm);

void Track_State_Judge(void);
void Track_Param_Update(void);
void Target_Speed_Update(void);
void Track_PD_Control(void);
void Speed_PI_Control(void);

void UI_Send_Number(char *name,int value);
void UI_Send_Status(void);
void Int_To_Str(int value,uint8_t *buf,uint8_t *len);

/* Private variables ---------------------------------------------------------*/

/* ADC handler declaration */
ADC_HandleTypeDef hadc1;

/* TIM handler declaration */
TIM_HandleTypeDef TimHandleT1;  //Encoder Handler
TIM_HandleTypeDef TimHandleT2;  //DC Motor Handler
TIM_HandleTypeDef TimHandleT4;  //Steering + time base Handler

TIM_OC_InitTypeDef sConfig;

/* UART handler declaration */
UART_HandleTypeDef UartHandle;   //USART2 touch panel
UART_HandleTypeDef UartHandle1;  //UART4 wireless

/* Touch panel communication define */
uint8_t StartSTR[3]={0xff,0xff,0xff};
uint8_t EndSTR[3]={0xff,0xff,0xff};
uint8_t HeaderTxBuffer1[]="cls BLACK";
uint8_t HeaderTxBuffer2[]="page cube_aigc";
uint8_t HeaderTxBuffer3[]="n0.val=";
uint8_t HeaderTxBuffer4[]="add 1,1,80";
uint8_t HeaderTxBuffer5[]="add 1,2,";
uint8_t HeaderTxBuffer6[]="add 1,2,90";
uint8_t HeaderTxBuffer7[]="add 1,3,160";

/* Buffer used for data reception */
uint8_t aRxBuffer[16]="";
uint8_t RxBuffer[16];
uint8_t Touch_pannel_Uart2_RxBuffer[MAX_LEN];
uint8_t Touch_pannel_recieve_len=0;
uint8_t Touch_pannel_recieve_completed=0;
uint8_t Touch_pannel_recieve=0;
uint8_t Touch_pannel_data_receive_start=0;
uint8_t RxBuffer1[16];

uint8_t Wireless_Uart4_RxBuffer[MAX_LEN1];
uint8_t Wireless_Uart4_recieve_len=0;
uint8_t Wireless_Uart4_recieve_completed=0;
uint8_t Wireless_Uart4_recieve=0;
uint8_t Wireless_Uart4_data_receive_start=0;

/* ADC data temp process */
uint16_t cnt=0;
uint16_t j=0;
uint32_t adc_buff[3*N];
uint16_t tmp0;
uint8_t tmp1;
uint8_t tmp2;
uint8_t tmp3;
uint8_t tmp4;
uint8_t tmp5;
uint8_t tmp6;
uint16_t tmp7;
uint8_t data[8];
uint8_t data1[8];
uint32_t adc_output[3];
uint16_t ADV[128]={0};
__IO uint16_t uhADCxConvertedValue=0;

/* Counter Prescaler value */
uint32_t uhPrescalerValue=0;
uint32_t uhPrescalerValue1=0;
uint32_t Pulse_Value=0;

/* Steering data */
uint16_t UpperLimit=1900;
uint16_t LowerLimit=1100;
uint16_t ServoCmd=1500;
uint16_t TempServoCmd=750;

/* CCD process data */
int16_t DxMax=0,DxMin=0;
int16_t dX[188];
uint16_t MaxIdx=0,MinIdx=0,TargetIdx=63,jTargetIdx=63;
int8_t Curve_Indicate=0;

/* Motor speed measurement */
uint16_t motor1_speed=0;
uint16_t motor1_direct=0;
int motor1_count=0;
int motor1_lastcount=0;
int motor1_overflowNum=0;
uint16_t PULSE_PRE_ROUND=360;
int N1=0;

uint8_t Time_Count_20mS_Index=0x0;
int32_t current_position=0;
float CAR_Current_Speed=0.0f;
int32_t Speed_Measurement_Pos=32500;

/*======================= 最终版控制框架变量 =======================*/

/* 自动运行标志 */
uint8_t Auto_Run_Enable=0;
uint8_t Speed_Loop_Flag=0;

/* 误差相关 */
int16_t Track_Error=0;
int16_t Last_Track_Error=0;
int16_t Error_Delta=0;
int16_t Error_Abs=0;
int16_t Error_Delta_Abs=0;

/* 赛道状态定义 */
typedef enum
{
  TRACK_STRAIGHT=0,
  TRACK_GENTLE=1,
  TRACK_SHARP=2,
  TRACK_S_CURVE=3,
  TRACK_LOST=4
}TrackState_t;

TrackState_t Track_State=TRACK_STRAIGHT;
TrackState_t Last_Track_State=TRACK_STRAIGHT;

/* 转向参数 */
float Steer_Kp=6.0f;
float Steer_Kd=9.0f;
float Steer_Ki=0.0f;               //当前默认不用，先保留
float Steer_Error_Integral=0.0f;

/* 速度参数 */
float Speed_Kp=2.2f;
float Speed_Ki=0.18f;
float Speed_Error=0.0f;
float Speed_Error_Integral=0.0f;

/* 目标速度 */
float Base_Target_Speed=30.0f;     //UI主调参数
float Target_Speed=20.0f;

/* 电机输出 */
int16_t Motor_PWM_Output=PULSE8_VALUE;
int16_t Motor_PWM_Max=(int16_t)(PERIOD_VALUE*85/100);
int16_t Motor_PWM_Min=(int16_t)(PERIOD_VALUE*12/100);

/* 舵机输出中心和限幅 */
uint16_t Steer_Center=750;
uint16_t Steer_Left_Limit=550;
uint16_t Steer_Right_Limit=950;

/* UI刷新分频 */
uint16_t Ui_Refresh_Cnt=0;

/**
  * @brief  Main program
  * @param  None
  * @retval None
  */
int main(void)
{
  int32_t timeout;

  MPU_Config();
  CPU_CACHE_Enable();

  timeout=0xFFFF;
  while((__HAL_RCC_GET_FLAG(RCC_FLAG_D2CKRDY)!=RESET)&&(timeout-->0));
  if(timeout<0)
  {
    Error_Handler();
  }

  HAL_Init();
  SystemClock_Config();

  __HAL_RCC_HSEM_CLK_ENABLE();
  HAL_HSEM_FastTake(HSEM_ID_0);
  HAL_HSEM_Release(HSEM_ID_0,0);

  MX_ADC1_Init();
  CCD_HW_Init();

  BSP_LED_Init(LED1);
  BSP_LED_Init(LED3);

  __HAL_UART_DISABLE_IT(&UartHandle,UART_IT_RXFT);

  DC_Motor_Init();
  Step_Motor_Init();
  Encoder_Init();

  BSP_LED_On(LED1);
  BSP_LED_On(LED3);
  HAL_Delay(500);
  BSP_LED_Off(LED1);
  BSP_LED_Off(LED3);

  UART2_Init();
  UART4_Init();

  TIM2_Init();
  TIM4_Init();

  BSP_LED_On(LED1);
  Step0_Motor_Ready();
  Step1_Motor_Ready();
  BSP_LED_Off(LED1);

  /* Infinite loop */
  while(1)
  {
    /*======================= UI命令解析层 =======================*/
    switch(Touch_pannel_Uart2_RxBuffer[1])
    {
      case 0x21:   //START
        Car_Start();
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x23:   //STOP
        Car_Stop();
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x24:   //SPD+
        Base_Target_Speed+=2.0f;
        if(Base_Target_Speed>60.0f) Base_Target_Speed=60.0f;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x25:   //SPD-
        Base_Target_Speed-=2.0f;
        if(Base_Target_Speed<10.0f) Base_Target_Speed=10.0f;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x26:   //slider set base speed
        Base_Target_Speed=(float)Touch_pannel_Uart2_RxBuffer[2];
        if(Base_Target_Speed<10.0f) Base_Target_Speed=10.0f;
        if(Base_Target_Speed>60.0f) Base_Target_Speed=60.0f;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x31:   //KP+
        Steer_Kp+=0.5f;
        if(Steer_Kp>20.0f) Steer_Kp=20.0f;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x32:   //KP-
        Steer_Kp-=0.5f;
        if(Steer_Kp<0.5f) Steer_Kp=0.5f;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x33:   //KD+
        Steer_Kd+=0.5f;
        if(Steer_Kd>20.0f) Steer_Kd=20.0f;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x34:   //KD-
        Steer_Kd-=0.5f;
        if(Steer_Kd<0.0f) Steer_Kd=0.0f;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x50:   //进入CCD曲线页
        Curve_Indicate=0x55;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      case 0x51:   //退出CCD曲线页
        Curve_Indicate=0x0;
        Touch_pannel_Uart2_RxBuffer[1]=0x0;
        break;

      default:
        if(Curve_Indicate==0x55)
        {
          CCD_Curve_Plot();
        }
        break;
    }

    if(Touch_pannel_recieve_completed==1)
    {
      Touch_pannel_recieve_completed=0x0;
    }

    /*======================= 感知层 =======================*/
    CCD_Read();
    CCD_Data_Process();

    Track_Error=(int16_t)TargetIdx-63;
    Error_Delta=Track_Error-Last_Track_Error;

    /*======================= 状态识别层 =======================*/
    Track_State_Judge();

    /*======================= 参数更新层 =======================*/
    Track_Param_Update();

    /*======================= 转向控制层 =======================*/
    Track_PD_Control();

    /*======================= 速度测量 =======================*/
    CAR_Current_Speed=Calculate_Speed();

    /*======================= 速度控制层 =======================*/
    if((Auto_Run_Enable==1)&&(Speed_Loop_Flag==1))
    {
      Speed_Loop_Flag=0;
      Target_Speed_Update();
      Speed_PI_Control();
    }

    /*======================= UI状态刷新 =======================*/
    Ui_Refresh_Cnt++;
    if(Ui_Refresh_Cnt>=20)
    {
      Ui_Refresh_Cnt=0;
      UI_Send_Status();
    }

    Last_Track_Error=Track_Error;
  }
}

/**
  * @brief  System Clock Configuration
  */
static void SystemClock_Config(void)
{
  RCC_ClkInitTypeDef RCC_ClkInitStruct;
  RCC_OscInitTypeDef RCC_OscInitStruct;
  HAL_StatusTypeDef ret=HAL_OK;

  HAL_PWREx_ConfigSupply(PWR_DIRECT_SMPS_SUPPLY);
  __HAL_PWR_VOLTAGESCALING_CONFIG(PWR_REGULATOR_VOLTAGE_SCALE1);

  while(!__HAL_PWR_GET_FLAG(PWR_FLAG_VOSRDY)) {}

  RCC_OscInitStruct.OscillatorType=RCC_OSCILLATORTYPE_HSI;
  RCC_OscInitStruct.HSEState=RCC_HSE_OFF;
  RCC_OscInitStruct.HSIState=RCC_HSI_ON;
  RCC_OscInitStruct.HSICalibrationValue=RCC_HSICALIBRATION_DEFAULT;
  RCC_OscInitStruct.CSIState=RCC_CSI_OFF;
  RCC_OscInitStruct.PLL.PLLState=RCC_PLL_NONE;

  ret=HAL_RCC_OscConfig(&RCC_OscInitStruct);
  if(ret!=HAL_OK)
  {
    Error_Handler();
  }

  RCC_ClkInitStruct.ClockType=RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                             |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource=RCC_SYSCLKSOURCE_HSI;
  RCC_ClkInitStruct.AHBCLKDivider=RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider=RCC_HCLK_DIV1;
  RCC_ClkInitStruct.APB2CLKDivider=RCC_HCLK_DIV1;

  ret=HAL_RCC_ClockConfig(&RCC_ClkInitStruct,FLASH_LATENCY_4);
  if(ret!=HAL_OK)
  {
    Error_Handler();
  }
}

/**
* @brief  CPU L1-Cache enable.
*/
static void CPU_CACHE_Enable(void)
{
  SCB_EnableICache();
  SCB_EnableDCache();
}

/**
  * @brief  Error handler
  */
static void Error_Handler(void)
{
  BSP_LED_On(LED3);
  while(1) { ; }
}

/**
  * @brief  Configure MPU
  */
static void MPU_Config(void)
{
  MPU_Region_InitTypeDef MPU_InitStruct;

  HAL_MPU_Disable();

  MPU_InitStruct.Enable=MPU_REGION_ENABLE;
  MPU_InitStruct.BaseAddress=0x00;
  MPU_InitStruct.Size=MPU_REGION_SIZE_4GB;
  MPU_InitStruct.AccessPermission=MPU_REGION_NO_ACCESS;
  MPU_InitStruct.IsBufferable=MPU_ACCESS_NOT_BUFFERABLE;
  MPU_InitStruct.IsCacheable=MPU_ACCESS_NOT_CACHEABLE;
  MPU_InitStruct.IsShareable=MPU_ACCESS_SHAREABLE;
  MPU_InitStruct.Number=MPU_REGION_NUMBER0;
  MPU_InitStruct.TypeExtField=MPU_TEX_LEVEL0;
  MPU_InitStruct.SubRegionDisable=0x87;
  MPU_InitStruct.DisableExec=MPU_INSTRUCTION_ACCESS_DISABLE;

  HAL_MPU_ConfigRegion(&MPU_InitStruct);
  HAL_MPU_Enable(MPU_PRIVILEGED_DEFAULT);
}

#ifdef USE_FULL_ASSERT
void assert_failed(uint8_t* file,uint32_t line)
{
  while(1) { ; }
}
#endif

/* USER CODE BEGIN 4 */
void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart)
{
  HAL_GPIO_TogglePin(GPIOB,LED3_PIN);

  if((huart->Instance==USART2)&&(HAL_UART_Receive_IT(huart,&Touch_pannel_recieve,1)==HAL_OK))
  {
    if((char)Touch_pannel_recieve==0x5A)
    {
      Touch_pannel_data_receive_start=0x1;
    }

    if((Touch_pannel_recieve_len<MAX_LEN)&&(Touch_pannel_data_receive_start==0x1))
    {
      Touch_pannel_Uart2_RxBuffer[Touch_pannel_recieve_len]=(char)Touch_pannel_recieve;
      if((char)Touch_pannel_recieve==0xA5)
      {
        Touch_pannel_recieve_completed=1;
        Touch_pannel_recieve_len=0;
        Touch_pannel_data_receive_start=0x0;
      }
      else
      {
        Touch_pannel_recieve_len+=1;
      }
    }
  }

  if((huart->Instance==UART4)&&(HAL_UART_Receive_IT(huart,&Wireless_Uart4_recieve,1)==HAL_OK))
  {
    if(((char)Wireless_Uart4_recieve&0x7F)==0x0F)
    {
      Wireless_Uart4_data_receive_start=0x1;
      Wireless_Uart4_recieve_len=0x0;
    }

    if((Wireless_Uart4_recieve_len<MAX_LEN1)&&(Wireless_Uart4_data_receive_start==0x1))
    {
      Wireless_Uart4_RxBuffer[Wireless_Uart4_recieve_len]=(char)Wireless_Uart4_recieve&0x7F;
      Wireless_Uart4_recieve_len+=1;
    }
    else
    {
      Wireless_Uart4_recieve_completed=1;
      Wireless_Uart4_recieve_len=0;
      Wireless_Uart4_data_receive_start=0x0;
    }
  }
}

/*======================= 原底层初始化与驱动函数 =======================*/

static void DC_Motor_Init(void)
{
  GPIO_InitTypeDef GPIO_InitStruct={0};
  __HAL_RCC_GPIOA_CLK_ENABLE();
  __HAL_RCC_GPIOB_CLK_ENABLE();

  HAL_GPIO_WritePin(GPIOA,GPIO_PIN_0,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOA,GPIO_PIN_1,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOB,GPIO_PIN_10,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOB,GPIO_PIN_11,GPIO_PIN_SET);

  GPIO_InitStruct.Pin=GPIO_PIN_0;
  GPIO_InitStruct.Mode=GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull=GPIO_PULLUP;
  GPIO_InitStruct.Speed=GPIO_SPEED_FREQ_LOW;
  HAL_GPIO_Init(GPIOA,&GPIO_InitStruct);

  GPIO_InitStruct.Pin=GPIO_PIN_1;
  HAL_GPIO_Init(GPIOA,&GPIO_InitStruct);

  GPIO_InitStruct.Pin=GPIO_PIN_10;
  HAL_GPIO_Init(GPIOB,&GPIO_InitStruct);

  GPIO_InitStruct.Pin=GPIO_PIN_11;
  HAL_GPIO_Init(GPIOB,&GPIO_InitStruct);
}

static void Step_Motor_Init(void)
{
  GPIO_InitTypeDef GPIO_InitStruct={0};
  __HAL_RCC_GPIOA_CLK_ENABLE();
  __HAL_RCC_GPIOB_CLK_ENABLE();
  __HAL_RCC_GPIOC_CLK_ENABLE();
  __HAL_RCC_GPIOD_CLK_ENABLE();
  __HAL_RCC_GPIOG_CLK_ENABLE();

  GPIO_InitStruct.Pin=GPIO_PIN_6;
  GPIO_InitStruct.Mode=GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull=GPIO_NOPULL;
  GPIO_InitStruct.Speed=GPIO_SPEED_FREQ_LOW;
  HAL_GPIO_Init(GPIOG,&GPIO_InitStruct);

  GPIO_InitStruct.Pin=GPIO_PIN_2;
  HAL_GPIO_Init(GPIOB,&GPIO_InitStruct);

  HAL_GPIO_WritePin(GPIOA,GPIO_PIN_3,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOB,GPIO_PIN_1,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_2,GPIO_PIN_RESET);

  GPIO_InitStruct.Pin=GPIO_PIN_3;
  HAL_GPIO_Init(GPIOA,&GPIO_InitStruct);

  GPIO_InitStruct.Pin=GPIO_PIN_1;
  HAL_GPIO_Init(GPIOB,&GPIO_InitStruct);

  GPIO_InitStruct.Pin=GPIO_PIN_2;
  HAL_GPIO_Init(GPIOC,&GPIO_InitStruct);
}

void spi0_write(uint8_t add,uint32_t temp)
{
  uint8_t reg_add=add;
  uint8_t data1=(uint8_t)(temp>>24);
  uint8_t data2=(uint8_t)(temp>>16);
  uint8_t data3=(uint8_t)(temp>>8);
  uint8_t data4=(uint8_t)(temp>>0);

  HAL_GPIO_WritePin(CSN0_GPIO_Port,CSN0_Pin,GPIO_PIN_RESET);

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI0_GPIO_Port,MOSI0_Pin,(reg_add&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    reg_add<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_SET);
  }

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI0_GPIO_Port,MOSI0_Pin,(data1&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    data1<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_SET);
  }

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI0_GPIO_Port,MOSI0_Pin,(data2&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    data2<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_SET);
  }

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI0_GPIO_Port,MOSI0_Pin,(data3&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    data3<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_SET);
  }

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI0_GPIO_Port,MOSI0_Pin,(data4&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    data4<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK0_GPIO_Port,CLK0_Pin,GPIO_PIN_SET);
  }

  HAL_Delay(1);
  HAL_GPIO_WritePin(CSN0_GPIO_Port,CSN0_Pin,GPIO_PIN_SET);
}

void spi1_write(uint8_t add,uint32_t temp)
{
  uint8_t reg_add=add;
  uint8_t data1=(uint8_t)(temp>>24);
  uint8_t data2=(uint8_t)(temp>>16);
  uint8_t data3=(uint8_t)(temp>>8);
  uint8_t data4=(uint8_t)(temp>>0);

  HAL_GPIO_WritePin(CSN1_GPIO_Port,CSN1_Pin,GPIO_PIN_RESET);

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI1_GPIO_Port,MOSI1_Pin,(reg_add&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    reg_add<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_SET);
  }

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI1_GPIO_Port,MOSI1_Pin,(data1&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    data1<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_SET);
  }

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI1_GPIO_Port,MOSI1_Pin,(data2&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    data2<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_SET);
  }

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI1_GPIO_Port,MOSI1_Pin,(data3&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    data3<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_SET);
  }

  for(int i=0;i<8;i++)
  {
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_RESET);
    HAL_GPIO_WritePin(MOSI1_GPIO_Port,MOSI1_Pin,(data4&0x80)?GPIO_PIN_SET:GPIO_PIN_RESET);
    data4<<=1;
    HAL_Delay(1);
    HAL_GPIO_WritePin(CLK1_GPIO_Port,CLK1_Pin,GPIO_PIN_SET);
  }

  HAL_Delay(1);
  HAL_GPIO_WritePin(CSN1_GPIO_Port,CSN1_Pin,GPIO_PIN_SET);
}

void CCD_HW_Init(void)
{
  __HAL_RCC_GPIOA_CLK_ENABLE();
  __HAL_RCC_GPIOC_CLK_ENABLE();

  GPIO_InitTypeDef GPIO_InitStructure;
  GPIO_InitStructure.Pin=GPIO_PIN_6;
  GPIO_InitStructure.Mode=GPIO_MODE_ANALOG;
  GPIO_InitStructure.Pull=GPIO_NOPULL;
  HAL_GPIO_Init(GPIOA,&GPIO_InitStructure);

  GPIO_InitStructure.Pin=GPIO_PIN_3;
  GPIO_InitStructure.Mode=GPIO_MODE_OUTPUT_PP;
  GPIO_InitStructure.Speed=GPIO_SPEED_FREQ_LOW;
  GPIO_InitStructure.Pull=GPIO_PULLUP;
  HAL_GPIO_Init(GPIOC,&GPIO_InitStructure);

  GPIO_InitStructure.Pin=GPIO_PIN_5;
  HAL_GPIO_Init(GPIOC,&GPIO_InitStructure);

  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_5,GPIO_PIN_RESET);
  HAL_GPIO_WritePin(GPIOA,GPIO_PIN_6,GPIO_PIN_RESET);
}

void CCD_Read(void)
{
  uint8_t i=0,tslp=0,jj=0;
  Linear_CCD_Flush();

  for(jj=0;jj<20;jj++)
  {
    Dly_us();
  }

  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_5,GPIO_PIN_SET);
  Dly_us();
  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_SET);
  Dly_us();
  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_5,GPIO_PIN_RESET);
  Dly_us();
  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_RESET);
  Dly_us();

  for(i=0;i<128;i++)
  {
    ADV[tslp]=(HAL_ADC_GetValue(&hadc1))&(0xffff);
    ++tslp;

    HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_SET);
    Dly_us();
    HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_RESET);
    Dly_us();
    Dly_us();
  }

  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_SET);
  Dly_us();
  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_RESET);
}

void Linear_CCD_Flush(void)
{
  uint8_t index=0;

  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_5,GPIO_PIN_SET);
  Dly_us();
  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_SET);
  Dly_us();
  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_5,GPIO_PIN_RESET);
  Dly_us();
  HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_RESET);
  Dly_us();

  for(index=0;index<128;index++)
  {
    HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_SET);
    Dly_us();
    Dly_us();
    HAL_GPIO_WritePin(GPIOC,GPIO_PIN_3,GPIO_PIN_RESET);
    Dly_us();
    Dly_us();
  }
}

void Dly_us(void)
{
  uint8_t jj=0;
  for(jj=0;jj<64;jj++)
  {
    Dly();
  }
}

void Dly(void)
{
  uint32_t ii;
  for(ii=0;ii<100;ii++);
}

static void MX_ADC1_Init(void)
{
  GPIO_InitTypeDef GPIO_InitStruct={0};
  ADC_ChannelConfTypeDef sConfigAdc={0};

  __HAL_RCC_ADC12_CLK_ENABLE();
  __HAL_RCC_ADC_CONFIG(RCC_ADCCLKSOURCE_CLKP);
  __HAL_RCC_GPIOC_CLK_ENABLE();
  __HAL_RCC_GPIOA_CLK_ENABLE();

  GPIO_InitStruct.Pin=GPIO_PIN_4|GPIO_PIN_5|GPIO_PIN_6;
  GPIO_InitStruct.Mode=GPIO_MODE_ANALOG;
  GPIO_InitStruct.Pull=GPIO_NOPULL;
  HAL_GPIO_Init(GPIOA,&GPIO_InitStruct);

  HAL_NVIC_SetPriority(ADC_IRQn,0,0);

  hadc1.Instance=ADC1;

  if(HAL_ADC_DeInit(&hadc1)!=HAL_OK)
  {
    Error_Handler();
  }

  hadc1.Init.ClockPrescaler=ADC_CLOCK_ASYNC_DIV2;
  hadc1.Init.Resolution=ADC_RESOLUTION_12B;
  hadc1.Init.ScanConvMode=DISABLE;
  hadc1.Init.EOCSelection=ADC_EOC_SINGLE_CONV;
  hadc1.Init.LowPowerAutoWait=DISABLE;
  hadc1.Init.ContinuousConvMode=ENABLE;
  hadc1.Init.NbrOfConversion=1;
  hadc1.Init.DiscontinuousConvMode=DISABLE;
  hadc1.Init.NbrOfDiscConversion=1;
  hadc1.Init.ExternalTrigConv=ADC_SOFTWARE_START;
  hadc1.Init.ExternalTrigConvEdge=ADC_EXTERNALTRIGCONVEDGE_NONE;
  hadc1.Init.ConversionDataManagement=ADC_CONVERSIONDATA_DR;
  hadc1.Init.Overrun=ADC_OVR_DATA_OVERWRITTEN;
  hadc1.Init.OversamplingMode=DISABLE;

  if(HAL_ADC_Init(&hadc1)!=HAL_OK)
  {
    Error_Handler();
  }

  if(HAL_ADCEx_Calibration_Start(&hadc1,ADC_CALIB_OFFSET,ADC_SINGLE_ENDED)!=HAL_OK)
  {
    Error_Handler();
  }

  sConfigAdc.Channel=ADC_CHANNEL_3;
  sConfigAdc.Rank=ADC_REGULAR_RANK_1;
  sConfigAdc.SamplingTime=ADC_SAMPLETIME_8CYCLES_5;
  sConfigAdc.SingleDiff=ADC_SINGLE_ENDED;
  sConfigAdc.OffsetNumber=ADC_OFFSET_NONE;
  sConfigAdc.Offset=0;
  sConfigAdc.OffsetSignedSaturation=DISABLE;

  if(HAL_ADC_ConfigChannel(&hadc1,&sConfigAdc)!=HAL_OK)
  {
    Error_Handler();
  }

  if(HAL_ADC_Start(&hadc1)!=HAL_OK)
  {
    Error_Handler();
  }
}

/*======================= CCD数据处理：只提中线，不直接打舵机 =======================*/
void CCD_Data_Process(void)
{
  DxMax=0;
  DxMin=0;
  MaxIdx=0;
  MinIdx=0;

  for(j=0;j<124;j++)
  {
    dX[j]=ADV[j]-ADV[j+3];

    if(DxMin>dX[j])
    {
      DxMin=dX[j];
      MinIdx=j;
    }

    if(DxMax<dX[j])
    {
      DxMax=dX[j];
      MaxIdx=j;
    }
  }

  if(MaxIdx<MinIdx)
  {
    TargetIdx=(MaxIdx+MinIdx)>>1;
  }
  else
  {
    TargetIdx=63;
  }
}

void Encoder_GPIO_Init(void)
{
  __HAL_RCC_GPIOA_CLK_ENABLE();
  __HAL_RCC_GPIOE_CLK_ENABLE();

  GPIO_InitTypeDef GPIO_InitStruct={0};

  GPIO_InitStruct.Pin=GPIO_PIN_8;
  GPIO_InitStruct.Mode=GPIO_MODE_AF_PP;
  GPIO_InitStruct.Pull=GPIO_PULLUP;
  GPIO_InitStruct.Speed=GPIO_SPEED_FREQ_HIGH;
  GPIO_InitStruct.Alternate=GPIO_AF1_TIM1;
  HAL_GPIO_Init(GPIOA,&GPIO_InitStruct);

  GPIO_InitStruct.Pin=GPIO_PIN_11;
  HAL_GPIO_Init(GPIOE,&GPIO_InitStruct);
}

void Encoder_TIM1_Init(void)
{
  __HAL_RCC_TIM1_CLK_ENABLE();
  TIM_Encoder_InitTypeDef sConfigEnc={0};
  TIM_MasterConfigTypeDef sMasterConfig={0};

  TimHandleT1.Instance=TIM1;
  TimHandleT1.Init.Prescaler=0;
  TimHandleT1.Init.CounterMode=TIM_COUNTERMODE_UP;
  TimHandleT1.Init.Period=0xFFFF;
  TimHandleT1.Init.ClockDivision=TIM_CLOCKDIVISION_DIV1;
  TimHandleT1.Init.AutoReloadPreload=TIM_AUTORELOAD_PRELOAD_DISABLE;

  sConfigEnc.EncoderMode=TIM_ENCODERMODE_TI12;
  sConfigEnc.IC1Selection=TIM_ICSELECTION_DIRECTTI;
  sConfigEnc.IC2Selection=TIM_ICSELECTION_DIRECTTI;
  sConfigEnc.IC1Prescaler=TIM_ICPSC_DIV1;
  sConfigEnc.IC2Prescaler=TIM_ICPSC_DIV1;
  sConfigEnc.IC1Polarity=TIM_ICPOLARITY_RISING;
  sConfigEnc.IC2Polarity=TIM_ICPOLARITY_RISING;
  sConfigEnc.IC1Filter=0x0F;
  sConfigEnc.IC2Filter=0x0F;

  if(HAL_TIM_Encoder_Init(&TimHandleT1,&sConfigEnc)!=HAL_OK)
  {
    Error_Handler();
  }

  sMasterConfig.MasterOutputTrigger=TIM_TRGO_RESET;
  sMasterConfig.MasterOutputTrigger2=TIM_TRGO2_RESET;
  sMasterConfig.MasterSlaveMode=TIM_MASTERSLAVEMODE_DISABLE;

  if(HAL_TIMEx_MasterConfigSynchronization(&TimHandleT1,&sMasterConfig)!=HAL_OK)
  {
    Error_Handler();
  }
}

void Encoder_Init(void)
{
  Encoder_GPIO_Init();
  Encoder_TIM1_Init();

  __HAL_TIM_SetCounter(&TimHandleT1,Speed_Measurement_Pos);

  if(HAL_TIM_Encoder_Start(&TimHandleT1,TIM_CHANNEL_1)!=HAL_OK)
  {
    Error_Handler();
  }

  if(HAL_TIM_Encoder_Start(&TimHandleT1,TIM_CHANNEL_2)!=HAL_OK)
  {
    Error_Handler();
  }
}

int32_t Get_Encoder_Position(void)
{
  return __HAL_TIM_GET_COUNTER(&TimHandleT1);
}

float Calculate_Speed(void)
{
  float speed;
  float temp_speed=0.0f;

  if(current_position>=Speed_Measurement_Pos)
  {
    temp_speed=current_position-Speed_Measurement_Pos;
    motor1_direct=0x5A;
  }
  else
  {
    temp_speed=Speed_Measurement_Pos-current_position;
    motor1_direct=0xA5;
  }

  speed=(temp_speed/1000.0f)*7.5f;
  return speed;
}

void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)
{
  if(htim->Instance==TIM4)
  {
    switch(Time_Count_20mS_Index)
    {
      case 0x0:
        Time_Count_20mS_Index++;
        __HAL_TIM_SetCounter(&TimHandleT1,Speed_Measurement_Pos);
        break;

      case 0x5:
        Time_Count_20mS_Index++;
        current_position=Get_Encoder_Position();
        Speed_Loop_Flag=1;
        break;

      default:
        Time_Count_20mS_Index++;
        break;
    }

    if(Time_Count_20mS_Index>=0x9)
    {
      Time_Count_20mS_Index=0x0;
    }
  }
}

/*======================= UART初始化 =======================*/
void UART2_Init(void)
{
  UartHandle.Instance=USARTx;
  UartHandle.Init.BaudRate=9600;
  UartHandle.Init.WordLength=UART_WORDLENGTH_8B;
  UartHandle.Init.StopBits=UART_STOPBITS_1;
  UartHandle.Init.Parity=UART_PARITY_NONE;
  UartHandle.Init.HwFlowCtl=UART_HWCONTROL_NONE;
  UartHandle.Init.Mode=UART_MODE_TX_RX;
  UartHandle.Init.ClockPrescaler=UART_PRESCALER_DIV1;
  UartHandle.Init.OneBitSampling=UART_ONE_BIT_SAMPLE_DISABLE;
  UartHandle.Init.OverSampling=UART_OVERSAMPLING_16;

  if(HAL_UART_Init(&UartHandle)!=HAL_OK)
  {
    Error_Handler();
  }

  HAL_UARTEx_SetRxFifoThreshold(&UartHandle,UART_RXFIFO_THRESHOLD_1_4);
  HAL_UARTEx_EnableFifoMode(&UartHandle);
  __HAL_UART_ENABLE_IT(&UartHandle,UART_IT_RXFT);
  HAL_UART_Receive_IT(&UartHandle,(uint8_t*)&RxBuffer,1);
}

void UART4_Init(void)
{
  UartHandle1.Instance=USARTy;
  UartHandle1.Init.BaudRate=100000;
  UartHandle1.Init.WordLength=UART_WORDLENGTH_8B;
  UartHandle1.Init.StopBits=UART_STOPBITS_1;
  UartHandle1.Init.Parity=UART_PARITY_NONE;
  UartHandle1.Init.HwFlowCtl=UART_HWCONTROL_NONE;
  UartHandle1.Init.Mode=UART_MODE_TX_RX;
  UartHandle1.Init.ClockPrescaler=UART_PRESCALER_DIV1;
  UartHandle1.Init.OneBitSampling=UART_ONE_BIT_SAMPLE_DISABLE;
  UartHandle1.Init.OverSampling=UART_OVERSAMPLING_16;

  if(HAL_UART_Init(&UartHandle1)!=HAL_OK)
  {
    Error_Handler();
  }

  HAL_UARTEx_SetRxFifoThreshold(&UartHandle1,UART_RXFIFO_THRESHOLD_1_4);
  HAL_UARTEx_EnableFifoMode(&UartHandle1);
  __HAL_UART_ENABLE_IT(&UartHandle1,UART_IT_RXFT);
  HAL_UART_Receive_IT(&UartHandle1,(uint8_t*)&RxBuffer1,1);
}

/*======================= PWM初始化 =======================*/
void TIM2_Init(void)
{
  uhPrescalerValue1=(uint32_t)(SystemCoreClock/(2*250000))-1;

  TimHandleT2.Instance=TIMy;
  TimHandleT2.Init.Prescaler=uhPrescalerValue1;
  TimHandleT2.Init.Period=PERIOD_VALUE;
  TimHandleT2.Init.ClockDivision=0;
  TimHandleT2.Init.CounterMode=TIM_COUNTERMODE_UP;
  TimHandleT2.Init.RepetitionCounter=0;

  if(HAL_TIM_PWM_Init(&TimHandleT2)!=HAL_OK)
  {
    Error_Handler();
  }

  sConfig.OCMode=TIM_OCMODE_PWM1;
  sConfig.OCPolarity=TIM_OCPOLARITY_HIGH;
  sConfig.OCFastMode=TIM_OCFAST_DISABLE;
  sConfig.OCNPolarity=TIM_OCNPOLARITY_HIGH;
  sConfig.OCNIdleState=TIM_OCNIDLESTATE_RESET;
  sConfig.OCIdleState=TIM_OCIDLESTATE_RESET;
  sConfig.Pulse=PULSE1_VALUE;

  if(HAL_TIM_PWM_ConfigChannel(&TimHandleT2,&sConfig,TIM_CHANNEL_1)!=HAL_OK)
  {
    Error_Handler();
  }
}

void TIM4_Init(void)
{
  uhPrescalerValue=(uint32_t)(SystemCoreClock/(2*250000))-1;

  TimHandleT4.Instance=TIMz;
  TimHandleT4.Init.Prescaler=uhPrescalerValue;
  TimHandleT4.Init.Period=PERIOD_VALUE;
  TimHandleT4.Init.ClockDivision=0;
  TimHandleT4.Init.CounterMode=TIM_COUNTERMODE_UP;
  TimHandleT4.Init.RepetitionCounter=0;

  if(HAL_TIM_PWM_Init(&TimHandleT4)!=HAL_OK)
  {
    Error_Handler();
  }

  sConfig.OCMode=TIM_OCMODE_PWM1;
  sConfig.OCPolarity=TIM_OCPOLARITY_HIGH;
  sConfig.OCFastMode=TIM_OCFAST_DISABLE;
  sConfig.OCNPolarity=TIM_OCNPOLARITY_HIGH;
  sConfig.OCNIdleState=TIM_OCNIDLESTATE_RESET;
  sConfig.OCIdleState=TIM_OCIDLESTATE_RESET;

  sConfig.Pulse=PULSE1_VALUE;
  if(HAL_TIM_PWM_ConfigChannel(&TimHandleT4,&sConfig,TIM_CHANNEL_1)!=HAL_OK)
  {
    Error_Handler();
  }

  sConfig.Pulse=PULSE2_VALUE;
  if(HAL_TIM_PWM_ConfigChannel(&TimHandleT4,&sConfig,TIM_CHANNEL_2)!=HAL_OK)
  {
    Error_Handler();
  }

  if(HAL_TIM_PWM_Start(&TimHandleT4,TIM_CHANNEL_1)!=HAL_OK)
  {
    Error_Handler();
  }

  if(HAL_TIM_PWM_Start(&TimHandleT4,TIM_CHANNEL_2)!=HAL_OK)
  {
    Error_Handler();
  }

  HAL_NVIC_SetPriority(TIM4_IRQn,0,0);
  HAL_NVIC_EnableIRQ(TIM4_IRQn);
  HAL_TIM_Base_Start_IT(&TimHandleT4);
}

/*======================= 步进电机相关保留 =======================*/
void Step0_Motor_Ready()
{
  spi0_write(0x80,0x00000004);
  spi0_write(0x90,0x00070A03);
  spi0_write(0xEC,0x00410153);
  spi0_write(0xF0,0xC40C001E);
  spi0_write(0xA4,0x000003E8);
  spi0_write(0xA5,0x00000350);
  spi0_write(0xA6,0x000007D0);
  spi0_write(0xA7,0x000186A0);
  spi0_write(0xA8,0x000002BC);
  spi0_write(0xAA,0x00000578);
  spi0_write(0xAB,0x0000000A);
  spi0_write(0xA0,0x00000000);
  spi0_write(0x21,0x00000000);
  spi0_write(0xA1,0x0);
}

void Step1_Motor_Ready()
{
  spi1_write(0x80,0x00000004);
  spi1_write(0x90,0x00070A03);
  spi1_write(0xEC,0x00410153);
  spi1_write(0xF0,0xC40C001E);
  spi1_write(0xA4,0x000003E8);
  spi1_write(0xA5,0x00000350);
  spi1_write(0xA6,0x000007D0);
  spi1_write(0xA7,0x000186A0);
  spi1_write(0xA8,0x000002BC);
  spi1_write(0xAA,0x00000578);
  spi1_write(0xAB,0x0000000A);
  spi1_write(0xA0,0x00000000);
  spi1_write(0x21,0x00000000);
  spi1_write(0xA1,0x0);
}

void STEP_MOTOR_Forward()
{
  spi0_write(0xA7,0x000);
  spi0_write(0xA4,0x000003E8);
  spi0_write(0xA5,0x0000C350);
  spi0_write(0xA6,0x000001F4);
  spi0_write(0xA7,0x00030D40);
  spi0_write(0xA8,0x000002BC);
  spi0_write(0xAA,0x00000578);
  spi0_write(0xAB,0x0000000A);
  spi0_write(0xA0,0x00000000);

  spi1_write(0xA7,0x000);
  spi1_write(0xA4,0x000003E8);
  spi1_write(0xA5,0x0000C350);
  spi1_write(0xA6,0x000001F4);
  spi1_write(0xA7,0x00030D40);
  spi1_write(0xA8,0x000002BC);
  spi1_write(0xAA,0x00000578);
  spi1_write(0xAB,0x0000000A);
  spi1_write(0xA0,0x00000000);

  HAL_Delay(100);
  spi1_write(0xAD,0x000F86A0);
  spi0_write(0xAD,0x000F86A0);

  HAL_Delay(1000);
  HAL_Delay(1000);
  HAL_Delay(1000);
  HAL_Delay(1000);
  HAL_Delay(1000);
  HAL_Delay(1000);
}

void STEP_MOTOR_Backward()
{
  spi0_write(0xA7,0x00030D40);
  spi0_write(0xA4,0x000003E8);
  spi0_write(0xA5,0x0000C350);
  spi0_write(0xA6,0x000001F4);
  spi0_write(0xA7,0x00030D40);
  spi0_write(0xA8,0x000002BC);
  spi0_write(0xAA,0x00000578);
  spi0_write(0xAB,0x0000000A);
  spi0_write(0xA0,0x00000000);

  spi1_write(0xA7,0x00030D40);
  spi1_write(0xA4,0x000003E8);
  spi1_write(0xA5,0x0000C350);
  spi1_write(0xA6,0x000001F4);
  spi1_write(0xA7,0x00030D40);
  spi1_write(0xA8,0x000002BC);
  spi1_write(0xAA,0x00000578);
  spi1_write(0xAB,0x0000000A);
  spi1_write(0xA0,0x00000000);

  HAL_Delay(100);
  spi1_write(0xAD,0x0000);
  spi0_write(0xAD,0x0000);

  HAL_Delay(1000);
  HAL_Delay(1000);
  HAL_Delay(1000);
  HAL_Delay(1000);
  HAL_Delay(1000);
  HAL_Delay(1000);
}

void CCD_Curve_Plot()
{
  for(j=0;j<128;j++)
  {
    adc_output[1]=ADV[j];
    tmp0=adc_output[1]%1000;
    tmp1=adc_output[1]/1000+0x30;
    tmp2=tmp0%100;
    tmp3=tmp0/100+0x30;
    tmp4=tmp2%10;
    tmp5=tmp2/10+0x30;
    tmp6=tmp4+0x30;

    data[0]=tmp3;
    data[1]=tmp5;
    data[2]=tmp6;

    HAL_UART_Transmit(&UartHandle,StartSTR,3,10);
    HAL_UART_Transmit(&UartHandle,HeaderTxBuffer5,countof(HeaderTxBuffer5)-1,10);
    HAL_UART_Transmit(&UartHandle,data,3,10);
    HAL_UART_Transmit(&UartHandle,EndSTR,3,10);
  }
}

/*======================= 最终版上层控制逻辑 =======================*/
void Car_Start(void)
{
  Auto_Run_Enable=1;
  Speed_Error_Integral=0.0f;
  Steer_Error_Integral=0.0f;
  Last_Track_Error=0;
  Motor_Set_Forward();
  Motor_Set_PWM((uint16_t)Motor_PWM_Output);
}

void Car_Stop(void)
{
  Auto_Run_Enable=0;
  HAL_TIM_PWM_Stop(&TimHandleT2,TIM_CHANNEL_1);
  HAL_GPIO_WritePin(GPIOA,GPIO_PIN_0,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOA,GPIO_PIN_1,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOB,GPIO_PIN_10,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOB,GPIO_PIN_11,GPIO_PIN_SET);
}

void Motor_Set_Forward(void)
{
  HAL_GPIO_WritePin(GPIOA,GPIO_PIN_1,GPIO_PIN_RESET);
  HAL_GPIO_WritePin(GPIOB,GPIO_PIN_10,GPIO_PIN_SET);
  HAL_GPIO_WritePin(GPIOB,GPIO_PIN_11,GPIO_PIN_RESET);
}

void Motor_Set_PWM(uint16_t pwm)
{
  if(pwm>Motor_PWM_Max) pwm=Motor_PWM_Max;
  if(pwm<Motor_PWM_Min) pwm=Motor_PWM_Min;

  Motor_PWM_Output=pwm;

  HAL_TIM_PWM_Stop(&TimHandleT2,TIM_CHANNEL_1);
  sConfig.Pulse=Motor_PWM_Output;
  HAL_TIM_PWM_ConfigChannel(&TimHandleT2,&sConfig,TIM_CHANNEL_1);
  HAL_TIM_PWM_Start(&TimHandleT2,TIM_CHANNEL_1);
}

void Steering_Set_PWM(uint16_t pwm)
{
  if(pwm>Steer_Right_Limit) pwm=Steer_Right_Limit;
  if(pwm<Steer_Left_Limit) pwm=Steer_Left_Limit;

  TempServoCmd=pwm;

  HAL_TIM_PWM_Stop(&TimHandleT4,TIM_CHANNEL_1);
  sConfig.Pulse=TempServoCmd;
  HAL_TIM_PWM_ConfigChannel(&TimHandleT4,&sConfig,TIM_CHANNEL_1);
  HAL_TIM_PWM_Start(&TimHandleT4,TIM_CHANNEL_1);

  HAL_TIM_PWM_Stop(&TimHandleT4,TIM_CHANNEL_2);
  sConfig.Pulse=TempServoCmd;
  HAL_TIM_PWM_ConfigChannel(&TimHandleT4,&sConfig,TIM_CHANNEL_2);
  HAL_TIM_PWM_Start(&TimHandleT4,TIM_CHANNEL_2);
}

void Track_State_Judge(void)
{
  Error_Abs=(Track_Error>=0)?Track_Error:(-Track_Error);
  Error_Delta_Abs=(Error_Delta>=0)?Error_Delta:(-Error_Delta);

  Last_Track_State=Track_State;

  if(MaxIdx>=MinIdx)
  {
    Track_State=TRACK_LOST;
  }
  else if((Track_Error*Last_Track_Error<0)&&(Error_Delta_Abs>6))
  {
    Track_State=TRACK_S_CURVE;
  }
  else if((Error_Abs<6)&&(Error_Delta_Abs<3))
  {
    Track_State=TRACK_STRAIGHT;
  }
  else if((Error_Abs<18)&&(Error_Delta_Abs<8))
  {
    Track_State=TRACK_GENTLE;
  }
  else
  {
    Track_State=TRACK_SHARP;
  }
}

void Track_Param_Update(void)
{
  switch(Track_State)
  {
    case TRACK_STRAIGHT:
      Steer_Kp=4.5f;
      Steer_Kd=6.0f;
      break;

    case TRACK_GENTLE:
      Steer_Kp=6.0f;
      Steer_Kd=9.0f;
      break;

    case TRACK_SHARP:
      Steer_Kp=9.0f;
      Steer_Kd=8.0f;
      break;

    case TRACK_S_CURVE:
      Steer_Kp=6.5f;
      Steer_Kd=12.0f;
      break;

    case TRACK_LOST:
      Steer_Kp=5.0f;
      Steer_Kd=5.0f;
      break;

    default:
      Steer_Kp=6.0f;
      Steer_Kd=9.0f;
      break;
  }
}

void Target_Speed_Update(void)
{
  switch(Track_State)
  {
    case TRACK_STRAIGHT:
      Target_Speed=Base_Target_Speed;
      break;

    case TRACK_GENTLE:
      Target_Speed=Base_Target_Speed-6.0f;
      break;

    case TRACK_SHARP:
      Target_Speed=Base_Target_Speed-14.0f;
      break;

    case TRACK_S_CURVE:
      Target_Speed=Base_Target_Speed-10.0f;
      break;

    case TRACK_LOST:
      Target_Speed=10.0f;
      break;

    default:
      Target_Speed=Base_Target_Speed-8.0f;
      break;
  }

  if(Target_Speed<10.0f) Target_Speed=10.0f;
  if(Target_Speed>60.0f) Target_Speed=60.0f;
}

void Track_PD_Control(void)
{
  int16_t steer_delta;
  uint16_t steer_cmd;

  steer_delta=(int16_t)(Steer_Kp*Track_Error+Steer_Kd*Error_Delta);
  steer_cmd=(uint16_t)((int16_t)Steer_Center+steer_delta);

  Steering_Set_PWM(steer_cmd);
}

void Speed_PI_Control(void)
{
  Speed_Error=Target_Speed-CAR_Current_Speed;
  Speed_Error_Integral+=Speed_Error;

  if(Speed_Error_Integral>300.0f) Speed_Error_Integral=300.0f;
  if(Speed_Error_Integral<-300.0f) Speed_Error_Integral=-300.0f;

  Motor_PWM_Output+=(int16_t)(Speed_Kp*Speed_Error+Speed_Ki*Speed_Error_Integral);

  if(Motor_PWM_Output>Motor_PWM_Max) Motor_PWM_Output=Motor_PWM_Max;
  if(Motor_PWM_Output<Motor_PWM_Min) Motor_PWM_Output=Motor_PWM_Min;

  Motor_Set_Forward();
  Motor_Set_PWM((uint16_t)Motor_PWM_Output);
}

/*======================= UI状态显示辅助 =======================*/
void Int_To_Str(int value,uint8_t *buf,uint8_t *len)
{
  uint8_t temp[8];
  uint8_t i=0,jj=0;
  int v=value;

  if(v<0)
  {
    buf[0]='-';
    v=-v;
    jj=1;
  }

  if(v==0)
  {
    buf[jj++]='0';
    *len=jj;
    return;
  }

  while(v>0)
  {
    temp[i++]=(uint8_t)('0'+(v%10));
    v/=10;
  }

  while(i>0)
  {
    buf[jj++]=temp[--i];
  }

  *len=jj;
}

void UI_Send_Number(char *name,int value)
{
  uint8_t cmd[24];
  uint8_t num[8];
  uint8_t cmd_len=0;
  uint8_t num_len=0;
  uint8_t i=0;

  while(name[cmd_len]!=0)
  {
    cmd[cmd_len]=(uint8_t)name[cmd_len];
    cmd_len++;
  }

  cmd[cmd_len++]='=';

  Int_To_Str(value,num,&num_len);

  for(i=0;i<num_len;i++)
  {
    cmd[cmd_len++]=num[i];
  }

  HAL_UART_Transmit(&UartHandle,StartSTR,3,10);
  HAL_UART_Transmit(&UartHandle,cmd,cmd_len,10);
  HAL_UART_Transmit(&UartHandle,EndSTR,3,10);
}

void UI_Send_Status(void)
{
  /* 这里的组件名后面你改UI时如果不一致，再一起改 */
  UI_Send_Number("n0.val",(int)CAR_Current_Speed);
  UI_Send_Number("n1.val",(int)TargetIdx);
  UI_Send_Number("n2.val",(int)Track_Error);
  UI_Send_Number("n3.val",(int)Motor_PWM_Output);
}
```

---

# 六、这份代码里每个部分写在哪里

## 1）主循环上方

放：

* 全局变量
* 状态枚举
* 参数定义

## 2）原来的底层驱动函数区域

保留：

* UART 初始化
* TIM 初始化
* ADC 初始化
* CCD 读数
* 编码器测速
* 步进电机函数

## 3）在 `CCD_Data_Process()` 附近

把它改成只提取 `TargetIdx`，不要直接在里面控制舵机。
你原来 `CCD_Data_Process()` 里是直接算完就打舵机的。

## 4）在文件后半段

新增：

* `Track_State_Judge()`
* `Track_Param_Update()`
* `Target_Speed_Update()`
* `Track_PD_Control()`
* `Speed_PI_Control()`
* `UI_Send_Status()`

---

# 七、这版代码的实现逻辑

## 1）为什么这样能兼容四张赛道

因为它不再假设只有一种路段，而是根据误差特征切状态：

* 误差很小 → 直道
* 误差中等 → 缓弯
* 误差很大 → 急弯
* 误差正负快速翻转 → S弯
* 边沿不合理 → 丢线/异常

这正好对应你发的四种赛道图。

## 2）为什么速度要按状态给

因为：

* 椭圆赛道可以高速
* 方形拐角必须显著降速
* 复杂赛道的 S 弯不能刚出弯就全速恢复

## 3）为什么转向先用 PD

因为你当前首要目标是：

* 稳
* 易调
* 能覆盖多赛道
  PD 比一开始就把转向 PID 拉满更容易落地。

---

# 八、你现在真正需要做的事情

先做两步：

## 第一步

按我上面这版，把 `main.c` 改成这个框架。

## 第二步

在 `main.h` 里补我前面给你的函数声明。

---

# 九、提醒你两个很重要的地方

## 1）UI 数字组件名字

我在代码里用了：

* `n0`
* `n1`
* `n2`
* `n3`

如果你的页面里这些数字组件名字不是这个，后面我们改 UI 的时候要一起改。

## 2）page3 的命令字

我这版默认还是按你之前同意的映射：

* `0x21` START
* `0x23` STOP
* `0x24` SPD+
* `0x25` SPD-
* `0x26` 滑条设速度
* `0x31` KP+
* `0x32` KP-
* `0x33` KD+
* `0x34` KD-
* `0x50` 曲线页
* `0x51` 退出曲线页

你原工程和课件都已经有基于这一类命令字的串口屏通信框架。

---

# 十、你下一步最合适的顺序

先别急着把 UI 全部改完。
建议顺序是：

1. 先把这版代码替进去
2. 在最简单那张椭圆赛道上试跑
3. 确认：

   * 能启动
   * 能停
   * 能跟线
   * 速度不会乱飘
4. 然后我再陪你逐页改 UI

你下一条把你准备修改的 UI 页面里，**page3 的按钮事件界面**发我，我就继续帮你把每个按钮怎么填一条条写出来。
