---
title: Markdown拓展教程
published: 2025-10-17
updated: 2025-10-17
description: 一个基于本主题的md拓展用法
image: ""
tags:
  - Markdown
  - Test
category: Examples
draft: false
---
## GitHub 仓库卡片

这里可以添加链接到 GitHub 仓库的动态卡片，在页面加载时，仓库信息会从 GitHub API 中拉取。

::github{repo="AbabCat927/AbabCat927.github.io"}

使用代码 `::github{repo="AbabCat927/AbabCat927.github.io"}` 创建一个 GitHub 仓库卡片。

```markdown
::github{repo="AbabCat927/AbabCat927.github.io"}
```

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
> 这里 GitHub 语法。

> [!TIP]
> 这里同样支持 GitHub 语法。
```

### 隐藏内容 

这里可以向文本中添加隐藏内容。该文本也同样支持 **Markdown** 语法。

你能看到后面一句吗，:spoiler[被隐藏了 **ayyy**]!

Markdown

```markdown
你能看到后面一句吗，:spoiler[被隐藏了 **ayyy**]!
```