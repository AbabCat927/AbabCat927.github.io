---
title: 基础Markdown与HTML教程
published: 2025-10-17 15:02:36
updated: 2025-12-01 10:52:13
description: 一个适用于本主题写作的教程
image: ""
tags:
  - Markdown
  - HTML
  - 教程
category: 技术
draft: false
---

本文主要介绍一些适用于本网站写作常用的基础语法与格式。如果想要系统学习Markdown语法，可以去下列网站学习，一些最基础的用法，这里就不再赘述。

> ### [Markdown 教程](https://www.runoob.com/markdown/md-tutorial.html)
>
> **描述：** Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。
>
> **来源：** [菜鸟教程](https://www.runoob.com)


<div class="not-prose w-full my-12 bg-[#0b0c15] border border-gray-800 rounded-lg overflow-hidden relative shadow-2xl group select-none">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-50"></div>
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
<div class="flex items-center justify-between px-6 py-3 border-b border-gray-800 bg-[#121420]">
<div class="flex items-center gap-3">
<div class="flex gap-1"><div class="w-1.5 h-1.5 rounded-full bg-red-500"></div><div class="w-1.5 h-1.5 rounded-full bg-yellow-500"></div><div class="w-1.5 h-1.5 rounded-full bg-green-500"></div></div>
<span class="text-xs font-mono text-blue-400 tracking-[0.2em] font-bold">NAVIGATION_PROTOCOL</span>
</div>
<span class="text-[10px] text-gray-600 font-mono">SYS.READY</span>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
<div class="p-6 hover:bg-white/5 transition-colors duration-300 relative group/col">
<div class="absolute top-0 left-0 w-1 h-0 bg-blue-500 transition-all duration-300 group-hover/col:h-full"></div>
<a href="#github-仓库卡片" class="block mb-6 group/link">
<h3 class="text-lg font-bold text-white mb-1 flex items-center gap-2 group-hover/link:text-blue-400 transition-colors">
<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
GitHub 仓库
</h3>
<div class="text-xs text-gray-500">Repository & Source</div>
</a>
<div class="space-y-3">
<a href="#警告/提示框" class="block text-sm font-bold text-gray-300 hover:text-white mb-2">⚠ 警告/提示框</a>
<ul class="space-y-2 border-l border-gray-700 pl-4 ml-1">
<li><a href="#基本语法" class="block text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all">基本语法</a></li>
<li><a href="#自定义标题" class="block text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all">自定义标题</a></li>
<li><a href="#github-语法" class="block text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all">GitHub 语法</a></li>
<li><a href="#隐藏内容" class="block text-xs text-gray-500 hover:text-blue-400 hover:translate-x-1 transition-all">隐藏内容</a></li>
</ul>
</div>
</div>
<div class="p-6 hover:bg-white/5 transition-colors duration-300 relative group/col">
<div class="absolute top-0 left-0 w-1 h-0 bg-purple-500 transition-all duration-300 group-hover/col:h-full"></div>
<a href="#mermaid-绘图示例" class="block mb-4">
<h3 class="text-lg font-bold text-white mb-1 group-hover/col:text-purple-400 transition-colors">Mermaid 绘图</h3>
<div class="text-xs text-gray-500">Diagrams & Charts</div>
</a>
<div class="grid grid-cols-2 gap-2">
<a href="#流程图示例" class="p-2 bg-[#1a1d2d] rounded border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group/item">
<div class="text-xs font-bold text-gray-300 group-hover/item:text-white">流程图</div>
<div class="text-[10px] text-gray-600 group-hover/item:text-purple-400">Flowchart</div>
</a>
<a href="#时序图示例" class="p-2 bg-[#1a1d2d] rounded border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group/item">
<div class="text-xs font-bold text-gray-300 group-hover/item:text-white">时序图</div>
<div class="text-[10px] text-gray-600 group-hover/item:text-purple-400">Sequence</div>
</a>
<a href="#甘特图示例" class="p-2 bg-[#1a1d2d] rounded border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group/item">
<div class="text-xs font-bold text-gray-300 group-hover/item:text-white">甘特图</div>
<div class="text-[10px] text-gray-600 group-hover/item:text-purple-400">Gantt</div>
</a>
<a href="#类图示例" class="p-2 bg-[#1a1d2d] rounded border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group/item">
<div class="text-xs font-bold text-gray-300 group-hover/item:text-white">类图</div>
<div class="text-[10px] text-gray-600 group-hover/item:text-purple-400">Class</div>
</a>
<a href="#状态图示例" class="p-2 bg-[#1a1d2d] rounded border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group/item">
<div class="text-xs font-bold text-gray-300 group-hover/item:text-white">状态图</div>
<div class="text-[10px] text-gray-600 group-hover/item:text-purple-400">State</div>
</a>
<a href="#饼图示例" class="p-2 bg-[#1a1d2d] rounded border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all group/item">
<div class="text-xs font-bold text-gray-300 group-hover/item:text-white">饼图</div>
<div class="text-[10px] text-gray-600 group-hover/item:text-purple-400">Pie</div>
</a>
</div>
</div>
<div class="p-6 hover:bg-white/5 transition-colors duration-300 relative group/col">
<div class="absolute top-0 left-0 w-1 h-0 bg-green-500 transition-all duration-300 group-hover/col:h-full"></div>
<a href="#嵌入视频" class="block mb-4">
<h3 class="text-lg font-bold text-white mb-1 group-hover/col:text-green-400 transition-colors">嵌入视频</h3>
<div class="text-xs text-gray-500">Multimedia Integration</div>
</a>
<ul class="space-y-3">
<li>
<a href="#示例代码结构概览" class="flex items-center justify-between group/item">
<span class="text-sm text-gray-400 group-hover/item:text-white transition-colors">代码结构</span>
<span class="text-[10px] font-mono text-gray-600 border border-gray-700 px-1 rounded group-hover/item:border-green-500/50 group-hover/item:text-green-500">STRUCT</span>
</a>
</li>
<li>
<a href="#youtube-嵌入代码解释" class="flex items-center justify-between group/item">
<span class="text-sm text-gray-400 group-hover/item:text-white transition-colors">YouTube</span>
<span class="text-[10px] font-mono text-gray-600 border border-gray-700 px-1 rounded group-hover/item:border-red-500/50 group-hover/item:text-red-500">YT</span>
</a>
</li>
<li>
<a href="#bilibili-嵌入代码解释" class="flex items-center justify-between group/item">
<span class="text-sm text-gray-400 group-hover/item:text-white transition-colors">Bilibili</span>
<span class="text-[10px] font-mono text-gray-600 border border-gray-700 px-1 rounded group-hover/item:border-pink-500/50 group-hover/item:text-pink-400">BILI</span>
</a>
</li>
</ul>
</div>
</div>
</div>

---

## GitHub 仓库卡片

这里可以添加链接到 GitHub 仓库的动态卡片，在页面加载时，仓库信息会从 GitHub API 中拉取。

::github{repo="AbabCat927/AbabCat927.github.io"}

使用代码 `::github{repo="AbabCat927/AbabCat927.github.io"}` 创建一个 GitHub 仓库卡片。

```markdown
::github{repo="AbabCat927/AbabCat927.github.io"}
```

---

## 警告/提示框

支持以下类型的警告/提示框：`note` `tip` `important` `warning` `caution`

:::note

这里可以添加**便条**信息。

:::

:::tip

这里可以添加**提示**信息。

:::

:::important

这里可以添加**重要**信息。

:::

:::warning

这里可以添加**警告**信息。

:::

:::caution

这里可以添加**提醒**信息。

:::

### 基本语法

```markdown
:::note
这里填写内容。
:::
```

### 自定义标题

警告/提示框的标题可以自定义。

:::note[自定义标题]

这是一个带有自定义标题的 note。

:::

```markdown
:::note[自定义标题]
这是一个带有自定义标题的 note。
:::
```

### GitHub 语法

> [!TIP]
> 
> 这里同样支持 GitHub 语法。

```
> [!NOTE]
> 这里支持 GitHub 语法。

> [!TIP]
> 这里同样支持 GitHub 语法。
```

### 隐藏内容 

这里可以向文本中添加隐藏内容。该文本也同样支持 **Markdown** 语法。

你能看到后面一句吗，:spoiler[被隐藏了 **114514**]!

Markdown

```markdown
你能看到后面一句吗，:spoiler[被隐藏了 **114514**]!
```

---

## Mermaid 绘图示例

要使用 Mermaid，只需在代码块中指定 `mermaid` 语言，Mermaid 会自动将这些描述转换为精美的可视化图表。

### 流程图示例

```
graph TD
    A[开始] --> B{条件检查}
    B -->|是| C[处理步骤 1]
    B -->|否| D[处理步骤 2]
    C --> E[子流程]
    D --> E
    subgraph E [子流程详情]
        E1[子步骤 1] --> E2[子步骤 2]
        E2 --> E3[子步骤 3]
    end
    E --> F{另一个决策}
    F -->|选项 1| G[结果 1]
    F -->|选项 2| H[结果 2]
    F -->|选项 3| I[结果 3]
    G --> J[结束]
    H --> J
    I --> J
```

### 时序图示例

时序图显示了对象之间随时间变化的交互。

```
sequenceDiagram
    participant 用户
    participant Web应用
    participant 服务器
    participant 数据库

    用户->>Web应用: 提交登录请求
    Web应用->>服务器: 发送认证请求
    服务器->>数据库: 查询用户凭证
    数据库-->>服务器: 返回用户数据
    服务器-->>Web应用: 返回认证结果
    
    alt 认证成功
        Web应用->>用户: 显示欢迎页面
        Web应用->>服务器: 请求用户数据
        服务器->>数据库: 获取用户偏好设置
        数据库-->>服务器: 返回偏好设置
        服务器-->>Web应用: 返回用户数据
        Web应用->>用户: 加载个性化界面
    else 认证失败
        Web应用->>用户: 显示错误信息
        Web应用->>用户: 提示重新输入
    end
```

### 甘特图示例

甘特图非常适合显示项目日程和时间线。

```
gantt
    title 网站开发项目时间表
    dateFormat  YYYY-MM-DD
    axisFormat  %m/%d
    
    section 设计阶段
    需求分析          :a1, 2023-10-01, 7d
    UI 设计           :a2, after a1, 10d
    原型创建          :a3, after a2, 5d
    
    section 开发阶段
    前端开发          :b1, 2023-10-20, 15d
    后端开发          :b2, after a2, 18d
    数据库设计        :b3, after a1, 12d
    
    section 测试阶段
    单元测试          :c1, after b1, 8d
    集成测试          :c2, after b2, 10d
    用户验收测试      :c3, after c2, 7d
    
    section 部署阶段
    生产环境部署      :d1, after c3, 3d
    正式上线          :milestone, after d1, 0d
```

### 类图示例

类图显示了系统的静态结构，包括类、属性、方法以及它们之间的关系。

```
classDiagram
    class 用户 {
        +String 用户名
        +String 密码
        +String 邮箱
        +Boolean 是否激活
        +登录()
        +登出()
        +更新个人资料()
    }
    
    class 文章 {
        +String 标题
        +String 内容
        +Date 发布日期
        +Boolean 是否发布
        +发布()
        +编辑()
        +删除()
    }
    
    class 评论 {
        +String 内容
        +Date 评论日期
        +添加评论()
        +删除评论()
    }
    
    class 分类 {
        +String 名称
        +String 描述
        +添加文章()
        +移除文章()
    }
    
    用户 "1" -- "*" 文章 : 撰写
    用户 "1" -- "*" 评论 : 发表
    文章 "1" -- "*" 评论 : 包含
    文章 "*" -- "1" 分类 : 属于
```

### 状态图示例

状态图显示了对象在其生命周期中所经历的状态序列。

```
stateDiagram-v2
    [*] --> 草稿
    
    草稿 --> 审核中 : 提交
    审核中 --> 草稿 : 拒绝
    审核中 --> 已批准 : 批准
    已批准 --> 已发布 : 发布
    已发布 --> 已归档 : 归档
    已发布 --> 草稿 : 撤回
    
    state 已发布 {
        [*] --> 可见
        可见 --> 隐藏 : 暂时隐藏
        隐藏 --> 可见 : 恢复
        可见 --> [*]
        隐藏 --> [*]
    }
    
    已归档 --> [*]
```

### 饼图示例

饼图是显示比例和百分比数据的理想选择。

```
pie title 网站流量来源分析
    "搜索引擎" : 45.6
    "直接访问" : 30.1
    "社交媒体" : 15.3
    "引荐链接" : 6.4
    "其他来源" : 2.6
```

---

## 嵌入视频

`<iframe>`（Inline Frame，内联框架）是 HTML 中用于在一个网页中嵌入另一个网页的元素。视频平台正是通过这个标签来嵌入他们的播放器。

### 示例代码结构概览

以下是嵌入代码的基本结构：

```html
<iframe 
    width="宽度设置" 
    height="高度设置" 
    src="视频播放器链接" 
    title="框架标题" 
    frameborder="边框设置" 
    allow="权限设置" 
    allowfullscreen
></iframe>
```

### YouTube 嵌入代码解释

下面是一段典型的 YouTube 嵌入代码及其属性解释：

```html
<iframe 
    width="100%" 
    height="468" 
    src="https://www.youtube.com/embed/C-CYwNz3z8w" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
></iframe>
```

|**属性**|**含义**|
|---|---|
|`width="100%"`|播放器宽度占网页容器的 **100%**，通常用于响应式布局。|
|`height="468"`|播放器的高度固定为 **468 像素**。|
|`src="..."`|嵌入内容的 **URL**。它是 YouTube 视频播放器的服务链接。|
|`title="..."`|框架的标题，用于 **SEO 和可访问性**。|
|`frameborder="0"`|设置框架**边框为 0**，即无边框。|
|`allow="..."`|**权限设置**，允许播放器使用浏览器的一些功能，如自动播放（`autoplay`）、全屏（`picture-in-picture`）等。|
|`allowfullscreen`|**允许**用户将视频切换到**全屏模式**。|

<iframe 
    width="100%" 
    height="468" 
    src="https://www.youtube.com/embed/C-CYwNz3z8w" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
></iframe>


### Bilibili 嵌入代码解释

Bilibili 的嵌入代码格式略有不同，但原理相似：

```html
<iframe 
    width="100%" 
    height="468" 
    src="//player.bilibili.com/player.html?bvid=BV1JThqzwEGq&p=1&autoplay=0" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    allowfullscreen="true" 
    &autoplay=0 
></iframe>
```

|**属性**|**含义**|
|---|---|
|`src="..."`|播放器链接，`bvid` 后跟着的是视频 ID，`&autoplay=0` 表示不自动播放。|
|`scrolling="no"`|**禁用**框架的滚动条。|
|`border="0"`, `frameborder="no"`, `framespacing="0"`|兼容性设置，用于确保**无边框**显示。|
|`allowfullscreen="true"`|允许全屏播放。|

<iframe 
    width="100%" 
    height="468" 
    src="https://player.bilibili.com/player.html?bvid=BV1JThqzwEGq&p=1&autoplay=0" 
    scrolling="no" 
    border="0" 
    frameborder="no" 
    framespacing="0" 
    allowfullscreen="true" 
    &autoplay=0 
></iframe>

---

