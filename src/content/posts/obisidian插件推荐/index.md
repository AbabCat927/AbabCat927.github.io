---
title: 利其器（一）：obisidian插件推荐
published: 2025-10-22
pinned: false
updated: 2025-10-22
description: 纯主观介绍几个能提升体验和效率的obisidian插件
image: ""
tags:
  - 教程
  - obisidian
  - 插件
password: ""
category: 技术
licenseName: MIT
sourceLink: ""
draft: false
---
obsidian 作为一个强大的双链笔记和知识管理工具，其真正的魅力在于其高度的可扩展性。丰富的插件社区为我们提供了无限的可能性，让我们可以根据自己的需求，将 obsidian 打造成独一无二的称手利器。

:::tip

**本篇文章内容有限，如果你对某个插件较感兴趣，请点链接自己去看。**

:::

> ### [KaTeX to MathJax](https://github.com/pejakovic/obsidian-convert-katex-to-mathjax)
>
> **描述：** 方便粘贴AI生成的公式，粘贴时自动把 `\[` `\]`替换成`$$`


该插件通过自动将`KaTeX` 表达式转换为` MathJax` ，从而更轻松地将 `ChatGPT` 生成的内容或其他基于 `KaTeX`的数学集成到 Obsidian Vault 中。
当然如果你不嫌麻烦的话，每一次在prompt上改进也是可以的，这里只是提供一种省事的方法。

想了解其他内容，点击标题可跳转到对应的github页面，自己去查。

---

> ### [Latex Suite](https://github.com/artisticat1/obsidian-latex-suite)
>
> **描述：** 方便快速打公式


#### 常用用法示例：
* 输入 `sqx` ➔ `\sqrt{x}`
* 输入 `a/b` ➔ `\frac{a}{b}` (输入 `/` 触发)
* 输入 `sin @t` ➔ `\sin \theta` (希腊字母快捷方式)
* 输入 `par f x` + `Tab` ➔ `\frac{\partial f}{\partial x}`

#### 其他常用功能

* **矩阵快捷键**
    * 在矩阵环境 (`matrix`, `align` 等)中，`Tab` 插入 `&`，`Enter` 插入 `\\` 并换行。
* **隐藏标记**
    * 隐藏 LaTeX 源码，直接显示美化后的数学符号，光标移入时显示源码。
* **便捷导航**
    * 在公式末尾按 `Tab` 跳出 `$` 符号；在括号内按 `Tab` 跳到下一个右括号。
* **内联预览**
    * 光标在内联公式 (`$...$`) 中时，弹出预览窗口。
* **括号自动缩放与高亮**
    * 触发 `\sum`, `\int` 等片段时自动添加 `\left` 和 `\right`；匹配的括号会同色显示和高亮。

#### **自定义：** 
* 插件自带常用片段，用户可以在设置中修改、删除或添加自己的片段。

---

> ### [Smart Composer](https://github.com/glowingjade/obsidian-smart-composer)
>
> **描述：** 方便问AI，能实现Copilot类似的效果，支持设置embedding模型做RAG，支持MCP

#### 功能举例

* **引用笔记：** 
	* 在聊天中输入 `@文件名` ➔ AI 将引用该文件/文件夹作为上下文。
* **应用编辑 ：**
	* AI 助手提供“应用编辑”建议，可一键采纳修改文档。
* **多媒体上下文：** 
	* 粘贴 Youtube 链接 ➔ 自动提取字幕作为上下文。
* **多媒体上下文：** 
	* 拖拽或粘贴图片/网站链接 ➔ AI 将识别内容作为上下文。
* **Vault搜索 (RAG)：** 
	* 按 `Cmd+Shift+Enter`  ➔ 自动在整个保险库中进行语义搜索，查找最相关的笔记。
* **模型上下文协议 (MCP)：** 
	* 允许连接到外部 AI 工具和数据源。
* **提示模板 ：** 
	* 在聊天视图中输入 `/` 来创建和重用常用提示。
* **本地模型支持：** 
	* 通过 `Ollama` 在本地运行开源 LLM，保护隐私和离线使用。
* **自定义模型：** 
	* 支持连接 `OpenAI`, `Anthropic`, `Google (Gemini)`, `Groq`, `Ollama`, `Azure` 等多种模型。
* **自定义系统提示：** 
	* 为所有聊天对话定义自己的系统提示。

---

> ### [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin?tab=readme-ov-file)
>
> **描述：** 一个足够强大的绘图工具，可画示意图，概念图等等。

#### 核心功能
* 将功能强大的 `Excalidraw` 画板集成到 Obsidian 中。在库中创建、存储、编辑 Excalidraw 绘图，并将绘图嵌入到 Markdown 笔记中。
#### 深度集成与链接

* **Markdown 作为文件**
    * 绘图文件本身就是 `.md` 文件，这意味着它们支持 `标签 (Tags)` 和 `YAML Frontmatter`，并且会显示在关系图谱中。

* **内容嵌入 (拖拽支持)**
    * 支持将 `Markdown 笔记`、`图片`、`LaTeX 公式` 甚至 `YouTube 视频`拖入画板。
    * 嵌入的 Markdown 笔记在画板中会渲染显示。

* **双向链接与块引用**
    * **链接：** 在绘图内部可使用 `[[内部链接]]`，链接会自动更新，并显示在文件的“反向链接”中。
    * **嵌入：** 在绘图内部可使用 `![[嵌入笔记]]` 来嵌入其他笔记或图片。
    * **图像块引用：** 支持链接到绘图中的特定元素或区域 ，实现对绘图的精准引用。

#### 自动化与高级工具

* **脚本引擎**
    * 提供强大的脚本支持，用于执行宏和自动化重复任务（如连接元素、创建图表等）。
* **OCR 支持**
    * 集成 Taskbone OCR，可以识别图像中的文本。
* **SVG 导入**
    * 支持将 SVG 文件转换为 Excalidraw 元素。
* **自定义笔刷**
    * 支持自定义钢笔、荧光笔并固定在侧边栏。

#### 自定义与导出

* **模板支持**
    * 可以为新绘图指定模板，用以统一默认样式 (如颜色、字体、笔触、背景等)。
* **自定义调色板**
    * 允许用户在设置中或通过模板文件自定义 Excalidraw 的颜色面板。
* **自动导出**
    * 由于 Obsidian Publish 不支持 Excalidraw，此插件可自动将绘图导出为 `PNG` 或 `SVG`。
    * 支持为深色/浅色模式分别导出图像。

