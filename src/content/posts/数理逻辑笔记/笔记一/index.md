---
title: 数理逻辑——命题逻辑基本概念
published: 2025-11-10
pinned: false
updated: 2025-11-10
description: 这是我离散数学课程的笔记
image: ""
tags:
  - 笔记
  - 数理逻辑
password: ""
encrypted: false
category: 笔记
licenseName: MIT
sourceLink: ""
draft: true
---
好的，我理解您的需求。您希望我将两份PDF笔记合并，并以Markdown源码的形式直接提供给您，以便您复制和后续编辑，并且不使用“canvas”（即文件生成功能）。

以下是根据您提供的两份PDF内容，逐页整理并合并的Markdown源码，已尽可能保留所有主要内容。

---

# 离散数学笔记：命题逻辑 (第一、二章)

---

## 第一章：命题逻辑的基本概念

### 1.1 命题：什么是命题

* **命题 (proposition)**：是一个**非真即假**的陈述句。
    * 必须是**陈述句**，而非命令句、疑问句或感叹句等。
    * 表达的内容可**判断真假**，而且非真即假（二值逻辑）。
    * 真假的判定：与事实是否相符。
    * **悖论**不是命题（例如：“我正在说假话”）。
* **真值 (truth value)**：命题具有两种可能的取值，即**真 (true)** 和 **假 (false)**。
    * 常写做 T 和 F。
    * 任何命题的真值都是**唯一**的。

#### 示例

1.  “4是素数。”
    * 是命题，真值为 F。
2.  “$\sqrt{5}$ 是无理数。”
    * 是命题，真值为 T。
3.  “x大于y。”
    * 不是命题，真值不确定。
4.  “火星上有水。”
    * 是命题，真值唯一（即使我们目前可能不知道）。
5.  “请不要吸烟！”
    * 不是命题，非陈述句。
6.  “我正在说假话。”
    * 不是命题，是悖论。
7.  “$1+101=110$。”
    * 是命题，真值与所讨论问题范围有关（例如，在二进制下为T，十进制下为F）。
8.  “张三和李四是同学。”
    * 是命题，真值唯一且需视具体情况确定。
9.  “2050年的元旦是晴天。”
    * 是命题，真值唯一。

---

### 1.2 命题的符号化表示

* 为了对命题进行逻辑演算，利用数学手段将命题符号化（形式化）。
* **命题常项**：例如用 `P` 表示“雪是白的”。
* **命题变项**：例如用 `P` 表示任意命题。
* 在命题逻辑演算中，两者处理原则是一样的，可不做区分。

---

### 1.3 简单命题和复合命题

* **简单命题（原子命题）**：简单句，不包含任何“并且”，“或者”之类的联结词。
    * 例如：雪是白的。
    * 特点：不可分割。
* **复合命题（分子命题）**：成分命题经联结词联结而成。
    * 例如：张三是教师**并且**雪是白的。
    * 特点：可以分割。
* **复合命题的真值**：是其成分命题真值的**函数**。当成分命题被赋予任一真值组合时，联结词完全决定了复合命题的真值。

---

### 1.4 命题联结词

形式逻辑只关心命题有真假的可能性，及复合命题的真假规律性。

| 联结词 | 名称 | 符号 | 读作 | 日常S |
| :--- | :--- | :--- | :--- | :--- |
| **否定** | Negation | $\neg P$ | 非 P | “不是P”, “P是不对的” |
| **合取** | Conjunction | $P \wedge Q$ | P 与 Q | “P并且Q”, “P和Q”, “虽然P但是Q” |
| **析取** | Disjunction | $P \vee Q$ | P 或 Q | “P或者Q” (可兼或) |
| **蕴涵** | Implication | $P \rightarrow Q$ | P 蕴涵 Q | “如果P那么Q”, “P是Q的充分条件” |
| **双条件** | Biconditional | $P \leftrightarrow Q$ | P 等价 Q | “P当且仅当Q”, “P是Q的充要条件” |

#### 1.4.1 否定 (Negation): $\neg$

* $\neg P$ 为真 **iff** $P$ 为假。

**真值表**：
| P | $\neg P$ |
|:---:|:---:|
| T | F |
| F | T |

#### 1.4.2 合取 (Conjunction): $\wedge$

* $P \wedge Q$ 为真 **iff** $P$ 和 $Q$ 均为真。

**真值表**：
| P | Q | $P \wedge Q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |
* *与日常用语差异*：逻辑中的 $\wedge$ 不关心两命题是否有意义上的联系，也不表达“转折”语气。

#### 1.4.3 析取 (Disjunction): $\vee$

* $P \vee Q$ 为假 **iff** $P$ 和 $Q$ 均为假。（即，只要有一个为真，就为真）

**真值表**：
| P | Q | $P \vee Q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |
* *与日常用语差异*：日常用语中的“或”往往具有“不可兼”的涵义（异或），而 $\vee$ 是**可兼或**。

#### 1.4.4 蕴涵 (Implication): $\rightarrow$

* $P \rightarrow Q$ 为假 **iff** $P$ 真而 $Q$ 假。（即，“前件为真，后件为假”）
* $P$ 称**前件** (antecedent)，$Q$ 称**后件** (consequent)。

**真值表**：
| P | Q | $P \rightarrow Q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | **F** |
| F | T | T |
| F | F | T |
* *蕴涵与推理*：$\rightarrow$ 的最重要用途是进行命题间的推理。如果已知 $P \rightarrow Q$ 为真，那么只要 $P$ 为真，必能推知 $Q$ 为真（**Modus Ponens**，肯定前件式）。
* *与日常用语差异*：$\rightarrow$ 称为**实质蕴涵** (material implication)，只反映真值间关系，与命题内容是否相关无关。

#### 1.4.5 双条件 (Biconditional / Equivalence): $\leftrightarrow$

* $P \leftrightarrow Q$ 为真 **iff** $P$ 和 $Q$ 真值相同。

**真值表**：
| P | Q | $P \leftrightarrow Q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |
* *验证*：$P \leftrightarrow Q$ 和 $(P \rightarrow Q) \wedge (Q \rightarrow P)$ 真值表相同。

---

### 1.5 命题公式 (Well-formed Formula, wff)

* **合式公式 (wff) 的递归定义**：
    1.  命题变元（原子命题）是合式公式。
    2.  如果 $P$、$Q$ 是合式公式，那么 $(\neg P)$、$(P \wedge Q)$、$(P \vee Q)$、$(P \rightarrow Q)$ 和 $(P \leftrightarrow Q)$ 是合式公式。
    3.  命题公式仅限于此。
* **简写约定（优先级）**：
    $\neg$ > $\wedge$ > $\vee$ > $\rightarrow$ > $\leftrightarrow$
    * 相同联结词按从左到右的次序。
* **无括号表示法**：
    * 波兰表示法（前缀）：$\rightarrow P \vee Q R$
    * 逆波兰表示法（后缀）：$P Q R \vee \rightarrow$

---

### 1.6 命题公式的真值 (语义)

* **解释 (Interpretation) / 真值指派 (Assignment)**：对公式中 $P_1, ..., P_n$ 的一组真值指派。
* $n$ 个变元共有 $2^n$ 个不同的解释。
* **重言式 (Tautology)**：或称**永真式**。若公式在**任一**解释下值都为 T。
    * 例如：$P \vee \neg P$
* **矛盾式 (Contradiction)**：或称**永假式**、不可满足式。若公式在**任一**解释下值都为 F。
    * 例如：$P \wedge \neg P$
* **可满足式 (Satisfiable)**：若公式在**某个**解释下值为 T。
    * 重言式一定是可满足式。

#### 三类公式间关系

* $\alpha$ 永真 $\Leftrightarrow$ $\neg \alpha$ 永假
* $\alpha$ 可满足 $\Leftrightarrow$ $\alpha$ 非永假
* $\alpha$ 非可满足 $\Leftrightarrow$ $\alpha$ 永假

#### 代入规则

* **定理**：若 $\alpha$ 是重言式，将 $\alpha$ 中的某个命题变元 $P$ 的**所有**出现都替换成**同一**公式 $\beta$，记为 $\alpha[P/\beta]$，则 $\alpha[P/\beta]$ 也是重言式。

---

### 1.7 自然语句的形式化表示

* **方法**：
    1.  确定简单命题，并用命题符号 $P, Q, ...$ 表示。
    2.  确定简单命题之间的关系，并用命题联结词将它们联结起来。
* **示例**：
    * (1) 张三不是学生。
        * $P$: 张三是学生。 形式化为: $\neg P$
    * (2) 张三既聪明又用功。
        * $P$: 张三聪明。$Q$: 张三用功。 形式化为: $P \wedge Q$
    * (3) 张三一感冒就发烧。
        * $P$: 张三感冒。$Q$: 张三发烧。 形式化为: $P \rightarrow Q$
    * (4) 张三或李四当班长。（不可兼或）
        * $P$: 张三当班长。$Q$: 李四当班长。 形式化为: $(P \wedge \neg Q) \vee (\neg P \wedge Q)$
* **练习题中的重要形式**：
    * “如果P，那么Q”：$P \rightarrow Q$
    * “只有P，才Q”：$Q \rightarrow P$
    * “除非P，否则Q”：$\neg P \rightarrow Q$ (等价于 $P \vee Q$)

---
---

## 第二章：命题逻辑的等值和推理演算

### 2.1 等值关系

* **等值 (逻辑等价, Logical Equivalence)**：给定两个命题公式 $\alpha$ 和 $\beta$。若在所有解释下，$\alpha$ 和 $\beta$ 的真值都相同，就称 $\alpha$ 和 $\beta$ 等值。
* **记作**：$\alpha = \beta$ (或 $\alpha \Leftrightarrow \beta$)。

#### 如何判断两公式等值

1.  **真值表法**：
    * 例如：证明 $P \rightarrow Q = \neg P \vee Q$
| P | Q | $P \rightarrow Q$ | $\neg P \vee Q$ |
|:---:|:---:|:---:|:---:|
| T | T | T | T |
| T | F | F | F |
| F | T | T | T |
| F | F | T | T |
    * 由于两列真值完全相同，所以等值。
2.  **等值定理**：
    * **定理**：$\alpha = \beta$ **iff** $\alpha \leftrightarrow \beta$ 是**重言式**。
3.  **利用基本等值式进行推导**。

* **等值关系 " = " 的性质**：
    * 自反性：$\alpha = \alpha$
    * 对称性：若 $\alpha = \beta$，则 $\beta = \alpha$
    * 传递性：若 $\alpha = \beta$ 且 $\beta = \gamma$，则 $\alpha = \gamma$
* **置换规则**：
    * **定理**：若 $\alpha = \beta$，且 $\gamma'$ 是将 $\gamma$ 中的子公式 $\alpha$ 替换为 $\beta$ 得到的，则 $\gamma = \gamma'$。

---

### 2.2 基本等值式（等价定律）

#### 1. 结合律
* $(P \vee Q) \vee R = P \vee (Q \vee R)$
* $(P \wedge Q) \wedge R = P \wedge (Q \wedge R)$

#### 2. 交换律
* $P \vee Q = Q \vee P$
* $P \wedge Q = Q \wedge P$

#### 3. 分配律
* $P \vee (Q \wedge R) = (P \vee Q) \wedge (P \vee R)$
* $P \wedge (Q \vee R) = (P \wedge Q) \vee (P \wedge R)$

#### 4. 吸收律
* $P \vee (P \wedge Q) = P$
* $P \wedge (P \vee Q) = P$

#### 5. 摩根定律 (De Morgan's Laws)
* $\neg(P \vee Q) = \neg P \wedge \neg Q$
* $\neg(P \wedge Q) = \neg P \vee \neg Q$

#### 6. 幂等律
* $P \vee P = P$
* $P \wedge P = P$

#### 7. 补余律
* $P \vee \neg P = T$ (Tautology)
* $P \wedge \neg P = F$ (Contradiction)

#### 8. 同一律 / 零律
* $P \vee F = P$
* $P \vee T = T$
* $P \wedge T = P$
* $P \wedge F = F$

#### 9. 否定相关
* $\neg\neg P = P$
* $\neg(P \rightarrow Q) = P \wedge \neg Q$
* $\neg(P \leftrightarrow Q) = (P \wedge \neg Q) \vee (\neg P \wedge Q)$ (异或)

#### 10. 蕴涵/等价相关
* $P \rightarrow Q = \neg P \vee Q$ (蕴涵等值式)
* $P \rightarrow Q = \neg Q \rightarrow \neg P$ (逆否命题)
* $P \leftrightarrow Q = (P \rightarrow Q) \wedge (Q \rightarrow P)$
* $P \leftrightarrow Q = (P \wedge Q) \vee (\neg P \wedge \neg Q)$

---

### 2.3 联结词完备集

* **真值函数**：命题联结词可看作是真值函数。
    * $n$ 元联结词（真值函数）共有 $2^{2^n}$ 个。
        * 一元：$2^{2^1} = 4$ 个 (如 $\neg P$, $P$, $T$, $F$)
        * 二元：$2^{2^2} = 16$ 个 (如 $\wedge$, $\vee$, $\rightarrow$, $\leftrightarrow$, $\uparrow$, $\downarrow$, $\overline{\vee}$)
* **完备集**：设 C 是联结词的集合，如果对任一命题公式都有由 C 中联结词表示出来的公式与之等值，就说 C 是**完备的** (adequate) 联结词集合。
* **常用完备集**：
    * $\{\neg, \wedge, \vee\}$
    * $\{\neg, \vee\}$
    * $\{\neg, \wedge\}$
    * $\{\neg, \rightarrow\}$
    * $\{\uparrow\}$ (NAND，与非)
    * $\{\downarrow\}$ (NOR，或非)

---

### 2.4 范式 (Normal Form)

* **析取范式 (DNF)**：由**合取式**利用 $\vee$ 联结而成的公式。
    * 形如：$(\dots) \vee (\dots) \vee \dots \vee (\dots)$
* **合取范式 (CNF)**：由**析取式**利用 $\wedge$ 联结而成的公式。
    * 形如：$(\dots) \wedge (\dots) \wedge \dots \wedge (\dots)$
* **范式定理**：任一公式都有与之等值的合取范式和析取范式。

#### 求解范式（等值变换法）

1.  **消去 $\rightarrow, \leftrightarrow$**：
    * $\alpha \rightarrow \beta = \neg \alpha \vee \beta$
    * $\alpha \leftrightarrow \beta = (\alpha \wedge \beta) \vee (\neg \alpha \wedge \neg \beta)$ (求 DNF)
    * $\alpha \leftrightarrow \beta = (\alpha \vee \neg \beta) \wedge (\neg \alpha \vee \beta)$ (求 CNF)
2.  **否定词深入到变元前**：
    * 利用 De Morgan 律：$\neg(\alpha \wedge \beta) = \neg \alpha \vee \neg \beta$ 和 $\neg(\alpha \vee \beta) = \neg \alpha \wedge \neg \beta$
    * 利用双重否定：$\neg\neg \alpha = \alpha$
3.  **合(析)取词深入**：
    * 利用分配律：$\alpha \wedge (\beta \vee \gamma) = (\alpha \wedge \beta) \vee (\alpha \wedge \gamma)$ (求 DNF)
    * 利用分配律：$\alpha \vee (\beta \wedge \gamma) = (\alpha \vee \beta) \wedge (\alpha \vee \gamma)$ (求 CNF)

---

### 2.5 主范式

* **极小项 (Minterm)**：$n$ 个命题变元都在其中**出现一次**的**合取式**。
    * 例如 $P, Q$ 有 4 个极小项：$\neg P \wedge \neg Q$ ($m_0$), $\neg P \wedge Q$ ($m_1$), $P \wedge \neg Q$ ($m_2$), $P \wedge Q$ ($m_3$)
    * 每个极小项只在一个解释下为真。
* **主析取范式 (PDNF)**：仅由**极小项**构成的**析取式**。
    * 定理：任一公式都有**唯一**与之等值的主析取范式。
    * **求法1 (真值表法)**：找出所有使公式为 T 的解释，将它们对应的**极小项**析取 ( $\vee$ ) 起来。
* **极大项 (Maxterm)**：$n$ 个命题变元都在其中**出现一次**的**析取式**。
    * 例如 $P, Q$ 有 4 个极大项：$P \vee Q$ ($M_0$), $P \vee \neg Q$ ($M_1$), $\neg P \vee Q$ ($M_2$), $\neg P \vee \neg Q$ ($M_3$)
    * 每个极大项只在一个解释下为假。
* **主合取范式 (PCNF)**：仅由**极大项**构成的**合取式**。
    * 定理：任一公式都有**唯一**与之等值的主合取范式。
    * **求法1 (真值表法)**：找出所有使公式为 F 的解释，将它们对应的**极大项**合取 ( $\wedge$ ) 起来。

---

### 2.6 推理形式与重言蕴涵

* **推理形式**：从前提 $\alpha_1, \alpha_2, \dots, \alpha_n$ 推出结论 $\beta$。
* **正确的推理形式**：前提为真，结论必为真的推理形式。
* **重言蕴涵 (Tautological Implication)**：
    * 给定两个公式 $\alpha$ 和 $\beta$，在任一解释下，若 $\alpha$ 为真则 $\beta$ 必为真，就称 $\alpha$ **重言蕴涵** $\beta$，或称 $\beta$ 是 $\alpha$ 的**逻辑推论**。
    * **记作**：$\alpha \Rightarrow \beta$。
    * 从前提集合 $\Gamma = \{\alpha_1, \dots, \alpha_n\}$ 推出 $\beta$，记作 $\Gamma \Rightarrow \beta$。

#### 如何证明 $\alpha \Rightarrow \beta$

1.  **真值表法**：检查所有 $\alpha$ 为 T 的行，$\beta$ 是否也为 T。
2.  **定理1**：$\alpha \Rightarrow \beta$ **iff** $\alpha \rightarrow \beta$ 是**重言式**。
3.  **定理2**：$\alpha \Rightarrow \beta$ **iff** $\alpha \wedge \neg \beta$ 是**矛盾式**。

---

### 2.7 基本的重言蕴涵式 (推理定律)

1.  **分离规则 (Modus Ponens)**：
    * $P \wedge (P \rightarrow Q) \Rightarrow Q$
2.  **拒取规则 (Modus Tollens)**：
    * $(P \rightarrow Q) \wedge \neg Q \Rightarrow \neg P$
3.  **假言三段论 (Hypothetical Syllogism)**：
    * $(P \rightarrow Q) \wedge (Q \rightarrow R) \Rightarrow P \rightarrow R$
4.  **析取三段论 (Disjunctive Syllogism)**：
    * $(P \vee Q) \wedge \neg P \Rightarrow Q$
5.  **化简规则**：
    * $P \wedge Q \Rightarrow P$
    * $P \wedge Q \Rightarrow Q$
6.  **附加规则**：
    * $P \Rightarrow P \vee Q$
7.  **合取引入**：
    * $P, Q \Rightarrow P \wedge Q$ (作为两个前提)
8.  **构造性二难**：
    * $(P \rightarrow Q) \wedge (R \rightarrow S) \wedge (P \vee R) \Rightarrow Q \vee S$
9.  **破坏性二难**：
    * $(P \rightarrow Q) \wedge (R \rightarrow S) \wedge (\neg Q \vee \neg S) \Rightarrow \neg P \vee \neg R$

---

### 2.8 推理演算

* **推理演算**：引入一些推理规则，利用前提和基本推理公式（重言式），实现逐步推进的推理过程。

#### 推理规则

1.  **前提引入规则 (P)**：推理过程中可随时引入前提。
2.  **结论引用规则 (T)**：推理过程中得到的中间结论可用作后续推理的前提。
3.  **代入规则**：对重言式的命题变项可使用代入。
4.  **置换规则 (E)**：可对任何子公式用等值公式置换。

#### 证明方法

1.  **直接证明法**：
    * 从前提 $P_1, \dots, P_n$ 出发，利用上述规则和基本蕴涵式，一步步推导出结论 $\beta$。
2.  **条件证明规则 (CP 规则)**：
    * 为证明 $\alpha_1 \wedge \dots \wedge \alpha_n \Rightarrow (\beta \rightarrow \gamma)$，
    * 可将 $\beta$ 作为**附加前提**引入，
    * 若能证明 $\alpha_1 \wedge \dots \wedge \alpha_n \wedge \beta \Rightarrow \gamma$，则原式成立。
3.  **归谬证明法 (反证法)**：
    * 为证明 $\alpha_1 \wedge \dots \wedge \alpha_n \Rightarrow \beta$，
    * 可将结论的否定 $\neg \beta$ 作为**附加前提**引入，
    * 若能证明 $\alpha_1 \wedge \dots \wedge \alpha_n \wedge \neg \beta \Rightarrow F$ (矛盾式)，则原式成立。

---

### 2.9 归结推理法 (Resolution)

* **归结**：一种简单而有效的证明方法，是自动定理证明的基础。
* **原理**：归结法是一种反驳过程，利用定理 $\alpha \Rightarrow \beta$ **iff** $\alpha \wedge \neg \beta$ 是**矛盾式**。
* **归结证明过程**：
    1.  **目标**：证明 $\alpha \Rightarrow \beta$。
    2.  **转化**：将 $\alpha \wedge \neg \beta$ 化为**合取范式 (CNF)**。
    3.  **子句集S**：将CNF中的每个析取式（称为**子句**）放入集合 S。
    4.  **归结**：
        * **归结规则**：若 S 中有两个子句 $C_1 = L \vee C_1'$ 和 $C_2 = \neg L \vee C_2'$，则可以对其进行归结，得到新的子句（归结式） $C_{res} = C_1' \vee C_2'$，并将其放入 S 中。
    5.  **重复**：重复第(4)步。
    6.  **结论**：
        * 若S中出现了**空子句 $\Box$** (即 $F$)，则证明 $\alpha \wedge \neg \beta$ 是矛盾式，故 $\alpha \Rightarrow \beta$ 成立。
        * 若无法归结出新子句，且未出现空子句，则 $\alpha \Rightarrow \beta$ 不成立。

* **示例**：证明 $P \rightarrow Q, P \Rightarrow Q$
    1.  **目标**：$(P \rightarrow Q) \wedge P \Rightarrow Q$
    2.  **转化**：证明 $[ (P \rightarrow Q) \wedge P ] \wedge \neg Q$ 是矛盾式。
    3.  **CNF**：$(\neg P \vee Q) \wedge P \wedge \neg Q$
    4.  **子句集S**：
        * (1) $\neg P \vee Q$
        * (2) $P$
        * (3) $\neg Q$
    5.  **归结**：
        * (4) $Q$ (由 (1) 和 (2) 归结)
        * (5) $\Box$ (由 (3) 和 (4) 归结)
    6.  **结论**：出现空子句，证明成立。