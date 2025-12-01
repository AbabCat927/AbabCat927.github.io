---
title: 本博客文章图片排版的探究
published: 2025-12-01 09:54:23
pinned: false
updated: 2025-12-01 10:54:25
description: 一个适用于本主题写作的教程
image: ""
tags:
  - 笔记
  - 教程
password: ""
encrypted: true
category: 技术
licenseName: MIT
sourceLink: ""
draft: false
---
起初我觉得把图片一个一个拖到文件夹很麻烦，就安装了一个 Obsidian 的插件来方便我在复制图片到文章的时候直接把图片放进对应文件夹并完成重命名，相关信息可以看我推荐插件的那篇博客，具体格式如下：

```Markdown
![[test1.jpg]]
```

但有一个致命的问题，就是网页端根本无法加载出这个图片，这个只适合在 Obsidian 本地预览。

能够在 Obsidian 和网页都能预览的格式是：

```Markdown
![标题](test1.jpg)
```

但这种方式也有很大的问题，这个方式下，图片和网页是自适配的，图片的长度和网页长度是对齐的，这导致了如果一张图片是竖屏的，就会占用非常多的空间，观感很不好，这种格式根本就没办法调整图片的长宽，左浮右浮，并列排放等等。

为了解决这个问题，那我就只能放弃写存粹的 Markdown 了，现在尝试利用 HTML 的 `<div>` 标签包裹我的 Markdown 图片语法。

---

#### 竖屏/长图限制

```html
<div class="w-full max-w-[300px] mx-auto my-4">

![标题](test1.jpg)

</div>
```
  * `max-w-[300px]` 强行把图片容器限制在 300px 宽，`mx-auto` 让它居中。

---

#### 左右浮动

```html
<div class="float-right w-1/3 ml-6 mb-4 rounded-lg overflow-hidden shadow-md">

![标题](test1.jpg)

</div>
```
  * `float-right` 右浮动，`w-1/3` 占宽度的三分之一，`ml-6` 给左边的文字留空隙。

---

#### 双图并排

```html
<div class="flex justify-between gap-4 my-4">
  <div class="w-1/2 rounded-lg overflow-hidden shadow-sm">
  
![图1](test1.jpg)

  </div>
  <div class="w-1/2 rounded-lg overflow-hidden shadow-sm">
  
![图2](test2.jpg)

  </div>
</div>
```
  * 利用 Tailwind 的 Flex 布局 (`flex`) 和间距 (`gap-4`) 实现并排。

:::important
在 `<div>` 和 `![]()` 之间必须留有空行，否则 Markdown 无法被解析
:::

后面内容是针对一些特殊效果的示例，可以参考我的另一篇讲 Tailwind CSS 的文章。

---

#### 伪 macOS 窗口风格

```html
<div class="rounded-xl overflow-hidden bg-gray-900 shadow-2xl my-8 border border-gray-700 max-w-[800px] mx-auto">
  <div class="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700 gap-2">
    <div class="w-3 h-3 rounded-full bg-red-500"></div>
    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div class="w-3 h-3 rounded-full bg-green-500"></div>
    <div class="ml-4 text-xs text-gray-400 font-mono">Game_Engine_Preview.exe</div>
  </div>
  <div class="relative">

![窗口模式](test1.jpg)

  </div>
</div>
```


-----

#### 照片堆叠

```html
<div class="bg-white p-3 pb-10 shadow-xl rotate-2 hover:rotate-0 transition-all duration-500 w-fit mx-auto my-10 transform border border-gray-200 rounded-sm">

![堆叠](test1.jpg)

<div class="text-center text-gray-500 font-serif mt-4 text-sm tracking-widest">OBSIDIAN MEMORIES</div>
</div>
```

-----

#### 聚焦放大镜

```html
<div class="rounded-xl overflow-hidden shadow-lg my-8 group w-full max-w-[600px] mx-auto border border-gray-100">
  <div class="transform group-hover:scale-110 transition-transform duration-700 ease-in-out">

![聚焦效果](test1.jpg)

  </div>
</div>
```
