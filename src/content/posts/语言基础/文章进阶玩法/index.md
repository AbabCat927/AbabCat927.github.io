---
title: 进阶写作与Tailwind CSS实践
published: 2025-11-27 18:41:46
pinned: false
updated: 2025-12-01 10:52:08
description: 一个适用于本主题写作的教程
image: ""
tags:
  - 教程
  - 笔记
password: ""
encrypted: false
category: 技术
licenseName: MIT
sourceLink: ""
draft: false
---
我的博客集成了 **Tailwind CSS**，那么我就可以直接写带 Tailwind 类的 HTML。下面大多以炫技为主，你喜欢的话，复制直接拿来用就好了。

---

<div class="not-prose w-full my-8 bg-[#0b0c15] rounded-xl border border-gray-800/60 overflow-hidden relative shadow-2xl select-none group">
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
<div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
<div class="flex items-center justify-between px-5 py-3 border-b border-gray-800 bg-[#121420]/80 backdrop-blur-sm">
<div class="flex items-center gap-3">
<div class="w-2 h-2 bg-cyan-500 rounded-sm animate-ping"></div>
<span class="text-xs font-mono text-cyan-400 tracking-[0.2em] font-bold">SYSTEM_MODULES</span>
</div>
<span class="text-[10px] text-gray-600 font-mono">16 LOADED</span>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-gray-800/50 border-b border-gray-800">
<a href="#流光渐变文字" class="relative p-4 bg-[#0e1016] hover:bg-cyan-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-cyan-500 transition-colors">01 UI</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-cyan-400 group-hover/item:translate-x-1 transition-all duration-300">流光渐变文字</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#毛玻璃卡片" class="relative p-4 bg-[#0e1016] hover:bg-cyan-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-cyan-500 transition-colors">02 UI</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-cyan-400 group-hover/item:translate-x-1 transition-all duration-300">毛玻璃卡片</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#伪终端窗口" class="relative p-4 bg-[#0e1016] hover:bg-green-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-green-500 transition-colors">03 TERM</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-green-400 group-hover/item:translate-x-1 transition-all duration-300">伪终端窗口</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#折叠框" class="relative p-4 bg-[#0e1016] hover:bg-yellow-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-yellow-500 transition-colors">04 COMP</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-yellow-400 group-hover/item:translate-x-1 transition-all duration-300">折叠框</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#嵌入3D模型" class="relative p-4 bg-[#0e1016] hover:bg-purple-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-purple-500 transition-colors">05 3D</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-purple-400 group-hover/item:translate-x-1 transition-all duration-300">嵌入3D模型</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-purple-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#技能属性卡" class="relative p-4 bg-[#0e1016] hover:bg-red-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-red-500 transition-colors">06 GAME</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-red-400 group-hover/item:translate-x-1 transition-all duration-300">技能属性卡</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#动态加载条" class="relative p-4 bg-[#0e1016] hover:bg-blue-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-blue-500 transition-colors">07 ANIM</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all duration-300">动态加载条</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#拟物化机械键盘按键" class="relative p-4 bg-[#0e1016] hover:bg-gray-800 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-white transition-colors">08 INPUT</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">拟物键盘按键</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#代码文件名条" class="relative p-4 bg-[#0e1016] hover:bg-cyan-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-cyan-500 transition-colors">09 CODE</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-cyan-400 group-hover/item:translate-x-1 transition-all duration-300">代码文件名条</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#数据面板" class="relative p-4 bg-[#0e1016] hover:bg-blue-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-blue-400 transition-colors">10 DATA</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all duration-300">数据面板</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-blue-400 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#动态警报横幅" class="relative p-4 bg-[#0e1016] hover:bg-yellow-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-yellow-500 transition-colors">11 ALERT</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-yellow-400 group-hover/item:translate-x-1 transition-all duration-300">动态警报横幅</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#解密效果" class="relative p-4 bg-[#0e1016] hover:bg-emerald-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-emerald-500 transition-colors">12 SEC</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-emerald-400 group-hover/item:translate-x-1 transition-all duration-300">解密效果</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#数学绘图" class="relative p-4 bg-[#0e1016] hover:bg-pink-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-pink-500 transition-colors">13 MATH</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-pink-400 group-hover/item:translate-x-1 transition-all duration-300">数学绘图</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#闪卡" class="relative p-4 bg-[#0e1016] hover:bg-indigo-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-indigo-500 transition-colors">14 VFX</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-indigo-400 group-hover/item:translate-x-1 transition-all duration-300">闪卡特效</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#实时行情滚动条" class="relative p-4 bg-[#0e1016] hover:bg-orange-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-orange-500 transition-colors">15 TICKER</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-orange-400 group-hover/item:translate-x-1 transition-all duration-300">实时行情滚动条</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
<a href="#仿钱包连接" class="relative p-4 bg-[#0e1016] hover:bg-rose-900/10 transition-colors group/item h-24 flex flex-col justify-between">
<div class="text-[10px] text-gray-600 font-mono group-hover/item:text-rose-500 transition-colors">16 WEB3</div>
<div class="text-sm font-bold text-gray-400 group-hover/item:text-rose-400 group-hover/item:translate-x-1 transition-all duration-300">仿钱包连接</div>
<div class="absolute bottom-0 left-0 w-full h-[2px] bg-rose-500 scale-x-0 group-hover/item:scale-x-100 transition-transform origin-left"></div>
</a>
</div>
</div>

---



## 流光渐变文字

<div class="not-prose text-center my-8">
  <span class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
    LEVEL UP YOUR CODE
  </span>
</div>


```html
<div class="not-prose text-center my-8">
  <span class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
    LEVEL UP YOUR CODE
  </span>
</div>
```

  * **原理**：利用 `bg-clip-text` 把背景裁切成文字形状，加上 `animate-pulse` 让它呼吸闪烁。
  * **注**：`not-prose` 是 Tailwind Typography 插件的一个类，用来防止博客默认的文章样式干扰自定义设计。

---


## 毛玻璃卡片

<div class="not-prose relative my-8 p-6 rounded-2xl overflow-hidden shadow-xl 
            border border-gray-300/50 dark:border-white/20 
            bg-white/60 dark:bg-black/20 backdrop-blur-xl">
            
  <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
  <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
  
  <div class="relative z-10">
    <h3 class="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
      🎮 电脑环境配置
    </h3>
    <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
      <li class="flex items-center">✅ CPU: AMD Ryzen 7500F</li>
      <li class="flex items-center">✅ GPU: RTX 4060 Ti 16G</li>
    </ul>
  </div>
</div>


```html
<div class="not-prose relative my-8 p-6 rounded-2xl overflow-hidden shadow-xl 
            border border-gray-300/50 dark:border-white/20 
            bg-white/60 dark:bg-black/20 backdrop-blur-xl">
            
  <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
  <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
  
  <div class="relative z-10">
    <h3 class="text-xl font-bold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
      🎮 电脑环境配置
    </h3>
    <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
      <li class="flex items-center">✅ CPU: AMD Ryzen 7500F</li>
      <li class="flex items-center">✅ GPU: RTX 4060 Ti 16G</li>
    </ul>
  </div>
</div>
```

  * **注**：利用 `backdrop-filter: blur` 实现磨砂玻璃质感。

---


## 伪终端窗口

<div class="not-prose my-6 rounded-lg overflow-hidden bg-[#1e1e1e] shadow-2xl border border-gray-700 font-mono text-sm">
  <div class="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
    <div class="w-3 h-3 rounded-full bg-red-500"></div>
    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div class="w-3 h-3 rounded-full bg-green-500"></div>
    <div class="ml-2 text-gray-400 text-xs">cxz-terminal — -zsh</div>
  </div>
  <div class="p-4 text-gray-300">
    <div class="flex">
      <span class="text-green-400 mr-2">➜</span>
      <span class="text-blue-400 mr-2">~</span>
      <span class="typing-effect">npm run build</span>
    </div>
    <div class="mt-2 text-gray-500">
      > Astro v4.0.0<br>
      > Building client...<br>
      <span class="text-green-400">✓ Completed in 1.45s</span>
    </div>
  </div>
</div>


```html
<div class="not-prose my-6 rounded-lg overflow-hidden bg-[#1e1e1e] shadow-2xl border border-gray-700 font-mono text-sm">
  <div class="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
    <div class="w-3 h-3 rounded-full bg-red-500"></div>
    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div class="w-3 h-3 rounded-full bg-green-500"></div>
    <div class="ml-2 text-gray-400 text-xs">cxz-terminal — -zsh</div>
  </div>
  <div class="p-4 text-gray-300">
    <div class="flex">
      <span class="text-green-400 mr-2">➜</span>
      <span class="text-blue-400 mr-2">~</span>
      <span class="typing-effect">npm run build</span>
    </div>
    <div class="mt-2 text-gray-500">
      > Astro v4.0.0<br>
      > Building client...<br>
      <span class="text-green-400">✓ Completed in 1.45s</span>
    </div>
  </div>
</div>
```

---

## 折叠框

<details class="not-prose group my-4 bg-red-500/10 border border-red-500/20 rounded-lg open:bg-red-500/5 transition-all duration-300">
  <summary class="cursor-pointer p-4 font-bold text-red-500 flex justify-between items-center select-none">
    <span>⚠️ 警告：包含《传送门》结局剧透</span>
    <span class="group-open:rotate-180 transition-transform duration-300">▼</span>
  </summary>
  <div class="p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-red-500/10 mt-2">
    The cake is a lie. 蛋糕是个谎言，GLaDOS 其实一直都知道...
  </div>
</details>

```html
<details class="not-prose group my-4 bg-red-500/10 border border-red-500/20 rounded-lg open:bg-red-500/5 transition-all duration-300">
  <summary class="cursor-pointer p-4 font-bold text-red-500 flex justify-between items-center select-none">
    <span>⚠️ 警告：包含《传送门》结局剧透</span>
    <span class="group-open:rotate-180 transition-transform duration-300">▼</span>
  </summary>
  <div class="p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-red-500/10 mt-2">
    The cake is a lie. 蛋糕是个谎言，GLaDOS 其实一直都知道...
  </div>
</details>
```

  * **注**：利用 HTML5 原生的 `details` 和 `summary` 标签，不需要 JS 就能做折叠效果。

---

## 嵌入3D模型

<div class="not-prose my-8 w-full h-[450px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] border border-blue-500/30 relative group bg-black">
  <div class="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-all duration-500 pointer-events-none z-10">
    <span class="text-white/80 border border-white/30 px-4 py-2 rounded-full backdrop-blur-md text-sm group-hover:opacity-0 transition-opacity">
      👆 点击并拖拽查看 3D 模型
    </span>
  </div>
  
  <iframe 
    title="Sci-Fi Drone" 
    frameborder="0" 
    allowfullscreen 
    mozallowfullscreen="true" 
    webkitallowfullscreen="true" 
    allow="autoplay; fullscreen; xr-spatial-tracking" 
    xr-spatial-tracking 
    execution-while-out-of-viewport 
    execution-while-not-rendered 
    web-share 
    src="https://sketchfab.com/models/ebea8df5042d447fa3ae2c45de3056fd/embed?autostart=0&ui_theme=dark&dnt=1" 
    class="w-full h-full"
  >
  </iframe>
</div>
<p class="text-center text-sm opacity-60 -mt-4 mb-8">鼠标拖拽旋转，滚轮可以缩放</p>

```html

<div class="not-prose my-8 w-full h-[450px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] border border-blue-500/30 relative group bg-black">
  <div class="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-all duration-500 pointer-events-none z-10">
    <span class="text-white/80 border border-white/30 px-4 py-2 rounded-full backdrop-blur-md text-sm group-hover:opacity-0 transition-opacity">
      点击并拖拽查看3D模型
    </span>
  </div>
  
  <iframe 
    title="Sci-Fi Drone" 
    frameborder="0" 
    allowfullscreen 
    mozallowfullscreen="true" 
    webkitallowfullscreen="true" 
    allow="autoplay; fullscreen; xr-spatial-tracking" 
    xr-spatial-tracking 
    execution-while-out-of-viewport 
    execution-while-not-rendered 
    web-share 
    src="https://sketchfab.com/models/ebea8df5042d447fa3ae2c45de3056fd/embed?autostart=0&ui_theme=dark&dnt=1" 
    class="w-full h-full"
  >
  </iframe>
</div>
<p class="text-center text-sm opacity-60 -mt-4 mb-8">鼠标拖拽旋转，滚轮可以缩放</p>
```
  * **注**：看看代码的话，不用我说你也应该知道怎么调整和修改。

---

## 技能属性卡

利用 Tailwind 的 Group Hover 特性实现交互。

<div class="not-prose my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="group relative bg-slate-800 p-6 rounded-xl overflow-hidden border-2 border-red-900 hover:border-red-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(239,68,68,0.5)]">
    <div class="absolute -right-4 -bottom-4 text-9xl text-red-500/10 group-hover:text-red-500/20 transition-all group-hover:rotate-12">💪</div>
    <h3 class="text-2xl font-bold text-red-500 mb-2">STRENGTH (力量)</h3>
    <div class="text-4xl font-black text-white mb-4">A+</div>
    <div class="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
      <div class="h-full bg-gradient-to-r from-red-800 to-red-500 w-[90%] group-hover:animate-pulse"></div>
    </div>
    <p class="text-slate-400 text-sm mt-4">精通 C++ 与底层架构，能扛住高并发压力。</p>
  </div>

  <div class="group relative bg-slate-800 p-6 rounded-xl overflow-hidden border-2 border-emerald-900 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.5)]">
    <div class="absolute -right-4 -bottom-4 text-9xl text-emerald-500/10 group-hover:text-emerald-500/20 transition-all group-hover:rotate-12">⚡</div>
    <h3 class="text-2xl font-bold text-emerald-500 mb-2">AGILITY (敏捷)</h3>
    <div class="text-4xl font-black text-white mb-4">S</div>
    <div class="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
      <div class="h-full bg-gradient-to-r from-emerald-800 to-emerald-500 w-[98%] group-hover:animate-pulse"></div>
    </div>
    <p class="text-slate-400 text-sm mt-4">快速学习新技术，代码交付速度极快。</p>
  </div>
  
   <div class="group relative bg-slate-800 p-6 rounded-xl overflow-hidden border-2 border-blue-900 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)]">
    <div class="absolute -right-4 -bottom-4 text-9xl text-blue-500/10 group-hover:text-blue-500/20 transition-all group-hover:rotate-12">🧠</div>
    <h3 class="text-2xl font-bold text-blue-500 mb-2">INTELLECT (智力)</h3>
    <div class="text-4xl font-black text-white mb-4">A</div>
    <div class="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
      <div class="h-full bg-gradient-to-r from-blue-800 to-blue-500 w-[85%] group-hover:animate-pulse"></div>
    </div>
    <p class="text-slate-400 text-sm mt-4">擅长算法设计与复杂系统架构分析。</p>
  </div>
</div>

```html
<div class="not-prose my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="group relative bg-slate-800 p-6 rounded-xl overflow-hidden border-2 border-red-900 hover:border-red-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(239,68,68,0.5)]">
    <div class="absolute -right-4 -bottom-4 text-9xl text-red-500/10 group-hover:text-red-500/20 transition-all group-hover:rotate-12">💪</div>
    <h3 class="text-2xl font-bold text-red-500 mb-2">STRENGTH (力量)</h3>
    <div class="text-4xl font-black text-white mb-4">A+</div>
    <div class="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
      <div class="h-full bg-gradient-to-r from-red-800 to-red-500 w-[90%] group-hover:animate-pulse"></div>
    </div>
    <p class="text-slate-400 text-sm mt-4">精通 C++ 与底层架构，能扛住高并发压力。</p>
  </div>

  <div class="group relative bg-slate-800 p-6 rounded-xl overflow-hidden border-2 border-emerald-900 hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.5)]">
    <div class="absolute -right-4 -bottom-4 text-9xl text-emerald-500/10 group-hover:text-emerald-500/20 transition-all group-hover:rotate-12">⚡</div>
    <h3 class="text-2xl font-bold text-emerald-500 mb-2">AGILITY (敏捷)</h3>
    <div class="text-4xl font-black text-white mb-4">S</div>
    <div class="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
      <div class="h-full bg-gradient-to-r from-emerald-800 to-emerald-500 w-[98%] group-hover:animate-pulse"></div>
    </div>
    <p class="text-slate-400 text-sm mt-4">快速学习新技术，代码交付速度极快。</p>
  </div>
  
   <div class="group relative bg-slate-800 p-6 rounded-xl overflow-hidden border-2 border-blue-900 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.5)]">
    <div class="absolute -right-4 -bottom-4 text-9xl text-blue-500/10 group-hover:text-blue-500/20 transition-all group-hover:rotate-12">🧠</div>
    <h3 class="text-2xl font-bold text-blue-500 mb-2">INTELLECT (智力)</h3>
    <div class="text-4xl font-black text-white mb-4">A</div>
    <div class="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
      <div class="h-full bg-gradient-to-r from-blue-800 to-blue-500 w-[85%] group-hover:animate-pulse"></div>
    </div>
    <p class="text-slate-400 text-sm mt-4">擅长算法设计与复杂系统架构分析。</p>
  </div>
</div>
```
  * **悬停反馈**：鼠标放上去时，卡片上浮 (`hover:-translate-y-2`)，边框变亮，底部出现对应颜色的光晕 (`hover:shadow-[...]`)。
  * **细节动画**：进度条在悬停时会呼吸闪烁 (`group-hover:animate-pulse`)，背景的大图标会旋转 (`group-hover:rotate-12`)。

---

## 动态加载条

用来表示进度的动态元素。
<div class="not-prose my-8 p-6 bg-[#1a1b26] rounded-xl border border-gray-800 relative overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[shimmer_2s_infinite_linear]" style="background-size: 200% 100%;"></div>
  
  <h4 class="text-cyan-400 mb-4 font-mono flex items-center">
    <span class="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-ping"></span>
    > 正在初始化神经链接...
  </h4>
  
  <div class="relative w-full h-4 bg-gray-900/50 rounded-full overflow-hidden border border-gray-700/50 backdrop-blur">
    <style>
      @keyframes load-progress {
        0% { width: 5%; }
        100% { width: 85%; }
      }
    </style>
    <div class="h-full bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 rounded-full relative" 
         style="animation: load-progress 3s ease-out forwards; width: 85%;">
         <div class="absolute right-0 top-0 h-full w-10 bg-white/50 blur-[10px]"></div>
    </div>
  </div>
  <div class="flex justify-between text-xs font-mono text-cyan-300/50 mt-2">
    <span>STATUS: CONNECTING</span>
    <span>85% COMPLETE</span>
  </div>
</div>


```html
<div class="not-prose my-8 p-6 bg-[#1a1b26] rounded-xl border border-gray-800 relative overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[shimmer_2s_infinite_linear]" style="background-size: 200% 100%;"></div>
  
  <h4 class="text-cyan-400 mb-4 font-mono flex items-center">
    <span class="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-ping"></span>
    > 正在初始化神经链接...
  </h4>
  
  <div class="relative w-full h-4 bg-gray-900/50 rounded-full overflow-hidden border border-gray-700/50 backdrop-blur">
    <style>
      @keyframes load-progress {
        0% { width: 5%; }
        100% { width: 85%; }
      }
    </style>
    <div class="h-full bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 rounded-full relative" 
         style="animation: load-progress 3s ease-out forwards; width: 85%;">
         <div class="absolute right-0 top-0 h-full w-10 bg-white/50 blur-[10px]"></div>
    </div>
  </div>
  <div class="flex justify-between text-xs font-mono text-cyan-300/50 mt-2">
    <span>STATUS: CONNECTING</span>
    <span>85% COMPLETE</span>
  </div>
</div>
```

  * **组合动画**：使用了自定义动画 `shimmer`（通过内联 style 模拟流光），进度条使用了 CSS `@keyframes` 实现从短变长的加载效果。
  * **呼吸灯**：使用了 `animate-ping` 做了一个呼吸的指示灯，进度条尖端加了高光模糊，增加了质感。

---

## 拟物化机械键盘按键

<div class="not-prose my-8 p-8 bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center gap-4 flex-wrap border border-gray-200 dark:border-gray-700">
  <style>
    .kbd-key {
      background: linear-gradient(to bottom, #f9fafb, #e5e7eb);
      color: #374151;
      border: 1px solid #d1d5db;
      box-shadow: 0 4px 0 #9ca3af, 0 5px 5px rgba(0,0,0,0.1);
      transition: all 0.1s;
    }
    /* 暗色模式适配 */
    .dark .kbd-key {
      background: linear-gradient(to bottom, #374151, #1f2937);
      color: #e5e7eb;
      border: 1px solid #4b5563;
      box-shadow: 0 4px 0 #111827, 0 5px 5px rgba(0,0,0,0.3);
    }
    /* 按下效果 */
    .kbd-key:active {
      transform: translateY(4px);
      box-shadow: 0 0 0 #9ca3af, inset 0 2px 4px rgba(0,0,0,0.1);
    }
    .dark .kbd-key:active {
      box-shadow: 0 0 0 #111827, inset 0 2px 4px rgba(0,0,0,0.3);
    }
  </style>

  <span class="text-gray-500 dark:text-gray-400 text-sm font-bold mr-2">快捷键：</span>
  
  <button class="kbd-key px-4 py-2 rounded-lg font-mono font-bold text-lg cursor-pointer select-none">CTRL</button>
  <span class="text-gray-400">+</span>
  <button class="kbd-key px-4 py-2 rounded-lg font-mono font-bold text-lg cursor-pointer select-none">ALT</button>
  <span class="text-gray-400">+</span>
  <button class="kbd-key px-4 py-2 rounded-lg font-mono font-bold text-lg cursor-pointer select-none">DEL</button>
</div>

```html
<div class="not-prose my-8 p-8 bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center gap-4 flex-wrap border border-gray-200 dark:border-gray-700">
  <style>
    .kbd-key {
      background: linear-gradient(to bottom, #f9fafb, #e5e7eb);
      color: #374151;
      border: 1px solid #d1d5db;
      box-shadow: 0 4px 0 #9ca3af, 0 5px 5px rgba(0,0,0,0.1);
      transition: all 0.1s;
    }
    /* 暗色模式适配 */
    .dark .kbd-key {
      background: linear-gradient(to bottom, #374151, #1f2937);
      color: #e5e7eb;
      border: 1px solid #4b5563;
      box-shadow: 0 4px 0 #111827, 0 5px 5px rgba(0,0,0,0.3);
    }
    /* 按下效果 */
    .kbd-key:active {
      transform: translateY(4px);
      box-shadow: 0 0 0 #9ca3af, inset 0 2px 4px rgba(0,0,0,0.1);
    }
    .dark .kbd-key:active {
      box-shadow: 0 0 0 #111827, inset 0 2px 4px rgba(0,0,0,0.3);
    }
  </style>

  <span class="text-gray-500 dark:text-gray-400 text-sm font-bold mr-2">快捷键：</span>
  
  <button class="kbd-key px-4 py-2 rounded-lg font-mono font-bold text-lg cursor-pointer select-none">CTRL</button>
  <span class="text-gray-400">+</span>
  <button class="kbd-key px-4 py-2 rounded-lg font-mono font-bold text-lg cursor-pointer select-none">ALT</button>
  <span class="text-gray-400">+</span>
  <button class="kbd-key px-4 py-2 rounded-lg font-mono font-bold text-lg cursor-pointer select-none">DEL</button>
</div>
```

---

## 代码文件名条


<div class="not-prose mt-6 -mb-2 bg-slate-800 rounded-t-lg border-b border-slate-700 flex justify-between items-center px-4 py-2 text-xs text-slate-300 font-mono">
  <div class="flex items-center gap-2">
    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>
    <span>src/components/GameEngine.cpp</span>
  </div>
  <span class="text-slate-500">C++</span>
</div>

```html
<div class="not-prose mt-6 -mb-2 bg-slate-800 rounded-t-lg border-b border-slate-700 flex justify-between items-center px-4 py-2 text-xs text-slate-300 font-mono">
  <div class="flex items-center gap-2">
    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg>
    <span>src/components/GameEngine.cpp</span>
  </div>
  <span class="text-slate-500">C++</span>
</div>
```

---

## 数据面板


<div class="not-prose my-12 relative group">
<div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div class="relative p-6 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-xl border border-cyan-500/30 shadow-[inset_0_0_20px_rgba(6,182,212,0.2)] overflow-hidden">
<div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
<div class="flex justify-between items-center mb-6 border-b border-cyan-500/20 pb-2">
<h3 class="text-cyan-400 font-mono text-lg tracking-wider flex items-center"><span class="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>SYSTEM STATUS_</h3>
<span class="text-xs text-cyan-300/50 font-mono">UID: 9527-TK</span></div>
<div class="grid grid-cols-2 gap-6 relative z-10">
<div class="flex flex-col"><span class="text-cyan-300/60 text-xs font-mono mb-1">CPU LOAD</span><div class="flex items-end"><span class="text-3xl font-bold text-white font-mono mr-2">32%</span><div class="h-6 w-24 bg-cyan-900/50 rounded-sm overflow-hidden flex items-end gap-[2px] p-[2px]"><div class="h-[30%] w-1 bg-cyan-400"></div><div class="h-[50%] w-1 bg-cyan-400"></div><div class="h-[80%] w-1 bg-cyan-400 animate-pulse"></div><div class="h-[40%] w-1 bg-cyan-400"></div><div class="h-[60%] w-1 bg-cyan-400"></div></div></div></div>
<div class="flex flex-col"><span class="text-cyan-300/60 text-xs font-mono mb-1">MEMORY</span><span class="text-3xl font-bold text-white font-mono">12.4 <span class="text-lg text-cyan-400">GB</span></span></div>
<div class="col-span-2"><span class="text-cyan-300/60 text-xs font-mono mb-1">NETWORK UPLINK</span><div class="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden relative"><div class="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-[75%] shadow-[0_0_10px_#22d3ee]"><div class="absolute right-0 top-0 h-full w-4 bg-white/80 blur-sm"></div></div></div><div class="flex justify-between text-xs font-mono text-cyan-300/50 mt-1"><span>Stable</span><span>750 Mbps</span></div></div></div>
<div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50"></div><div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50"></div>
</div>
</div>


```html
<div class="not-prose my-12 relative group">
<div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div class="relative p-6 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-xl border border-cyan-500/30 shadow-[inset_0_0_20px_rgba(6,182,212,0.2)] overflow-hidden">
<div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
<div class="flex justify-between items-center mb-6 border-b border-cyan-500/20 pb-2">
<h3 class="text-cyan-400 font-mono text-lg tracking-wider flex items-center"><span class="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>SYSTEM STATUS_</h3>
<span class="text-xs text-cyan-300/50 font-mono">UID: 9527-TK</span></div>
<div class="grid grid-cols-2 gap-6 relative z-10">
<div class="flex flex-col"><span class="text-cyan-300/60 text-xs font-mono mb-1">CPU LOAD</span><div class="flex items-end"><span class="text-3xl font-bold text-white font-mono mr-2">32%</span><div class="h-6 w-24 bg-cyan-900/50 rounded-sm overflow-hidden flex items-end gap-[2px] p-[2px]"><div class="h-[30%] w-1 bg-cyan-400"></div><div class="h-[50%] w-1 bg-cyan-400"></div><div class="h-[80%] w-1 bg-cyan-400 animate-pulse"></div><div class="h-[40%] w-1 bg-cyan-400"></div><div class="h-[60%] w-1 bg-cyan-400"></div></div></div></div>
<div class="flex flex-col"><span class="text-cyan-300/60 text-xs font-mono mb-1">MEMORY</span><span class="text-3xl font-bold text-white font-mono">12.4 <span class="text-lg text-cyan-400">GB</span></span></div>
<div class="col-span-2"><span class="text-cyan-300/60 text-xs font-mono mb-1">NETWORK UPLINK</span><div class="w-full h-2 bg-cyan-900/50 rounded-full overflow-hidden relative"><div class="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 w-[75%] shadow-[0_0_10px_#22d3ee]"><div class="absolute right-0 top-0 h-full w-4 bg-white/80 blur-sm"></div></div></div><div class="flex justify-between text-xs font-mono text-cyan-300/50 mt-1"><span>Stable</span><span>750 Mbps</span></div></div></div>
<div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50"></div><div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50"></div>
</div>
</div>
```

---

## 动态警报横幅 
<div class="not-prose my-8 rounded-lg overflow-hidden relative border-2 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
  <style>
    @keyframes scroll-stripes {
      0% { background-position: 0 0; }
      100% { background-position: 50px 0; }
    }
    .hazard-stripes {
      /* 使用 repeating-linear-gradient 创建斜条纹 */
      background-image: repeating-linear-gradient(
        -45deg,
        #eab308, /* 黄色 */
        #eab308 20px,
        #000000 20px, /* 黑色 */
        #000000 40px
      );
      background-size: 200% 200%;
      animation: scroll-stripes 1s linear infinite;
    }
  </style>

  <div class="hazard-stripes absolute inset-0 opacity-20 z-0"></div>
  
  <div class="relative z-10 bg-[#1a1a1a]/90 p-4 flex items-center gap-4 backdrop-blur-sm">
    <div class="h-12 w-12 flex-shrink-0 bg-yellow-500 text-black rounded flex items-center justify-center font-bold text-2xl shadow-lg">
      ⚠️
    </div>
    <div>
      <h4 class="text-yellow-500 font-bold text-lg uppercase tracking-wider mb-1">Warning: Breaking Changes</h4>
      <p class="text-yellow-100/80 text-sm">
        即将到来的 V2.0 版本将重构核心 API。请务必查看迁移指南，否则你的项目可能会崩溃。
      </p>
    </div>
  </div>
</div>

```html
<div class="not-prose my-8 rounded-lg overflow-hidden relative border-2 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
  <style>
    @keyframes scroll-stripes {
      0% { background-position: 0 0; }
      100% { background-position: 50px 0; }
    }
    .hazard-stripes {
      /* 使用 repeating-linear-gradient 创建斜条纹 */
      background-image: repeating-linear-gradient(
        -45deg,
        #eab308, /* 黄色 */
        #eab308 20px,
        #000000 20px, /* 黑色 */
        #000000 40px
      );
      background-size: 200% 200%;
      animation: scroll-stripes 1s linear infinite;
    }
  </style>

  <div class="hazard-stripes absolute inset-0 opacity-20 z-0"></div>
  
  <div class="relative z-10 bg-[#1a1a1a]/90 p-4 flex items-center gap-4 backdrop-blur-sm">
    <div class="h-12 w-12 flex-shrink-0 bg-yellow-500 text-black rounded flex items-center justify-center font-bold text-2xl shadow-lg">
      ⚠️
    </div>
    <div>
      <h4 class="text-yellow-500 font-bold text-lg uppercase tracking-wider mb-1">Warning: Breaking Changes</h4>
      <p class="text-yellow-100/80 text-sm">
        即将到来的 V2.0 版本将重构核心 API。请务必查看迁移指南，否则你的项目可能会崩溃。
      </p>
    </div>
  </div>
</div>
```

---

## 解密效果

<div class="not-prose my-8 inline-block group cursor-pointer">
<style>.secret-blur{filter:blur(6px);letter-spacing:0.2em;opacity:0.6;transition:all 0.5s cubic-bezier(0.4,0,0.2,1);user-select:none;background:#1e293b;color:transparent;text-shadow:0 0 10px rgba(255,255,255,0.5);}.group:hover .secret-blur{filter:blur(0px);letter-spacing:normal;opacity:1;background:transparent;color:#4ade80;text-shadow:none;}.group:hover .secret-container{animation:text-flash 0.5s ease-out;}@keyframes text-flash{0%{text-shadow:0 0 30px #4ade80,0 0 10px white;color:white;}100%{text-shadow:none;color:#4ade80;}}</style>
<div class="secret-container relative px-4 py-2 bg-slate-800 border border-slate-700 rounded overflow-hidden">
<div class="absolute inset-0 flex items-center justify-center text-slate-500/30 group-hover:hidden font-mono">[LOCKED DATA]</div>
<p class="secret-blur font-mono font-bold text-lg relative z-10">> 宝箱密码：卷死了喵</p>
</div>
</div>

```html
<div class="not-prose my-8 inline-block group cursor-pointer">
<style>.secret-blur{filter:blur(6px);letter-spacing:0.2em;opacity:0.6;transition:all 0.5s cubic-bezier(0.4,0,0.2,1);user-select:none;background:#1e293b;color:transparent;text-shadow:0 0 10px rgba(255,255,255,0.5);}.group:hover .secret-blur{filter:blur(0px);letter-spacing:normal;opacity:1;background:transparent;color:#4ade80;text-shadow:none;}.group:hover .secret-container{animation:text-flash 0.5s ease-out;}@keyframes text-flash{0%{text-shadow:0 0 30px #4ade80,0 0 10px white;color:white;}100%{text-shadow:none;color:#4ade80;}}</style>
<div class="secret-container relative px-4 py-2 bg-slate-800 border border-slate-700 rounded overflow-hidden">
<div class="absolute inset-0 flex items-center justify-center text-slate-500/30 group-hover:hidden font-mono">[LOCKED DATA]</div>
<p class="secret-blur font-mono font-bold text-lg relative z-10">> 宝箱密码：xxxx</p>
</div>
</div>
```

---

## 数学绘图

这里的具体代码我就不贴了，仅做展示。


**3D绘图曲面**

<div class="not-prose my-8 w-full h-[500px] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg bg-white dark:bg-[#0d1117] overflow-hidden relative group">
  <div id="plot-3d-surface-v2" class="w-full h-full"></div>
  
  <div id="loader-3d-v2" class="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-[#0d1117]/90 z-20 transition-opacity duration-500">
    <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    <span class="text-sm font-mono text-gray-500 dark:text-gray-400 blink-text">Initializing Physics Engine...</span>
  </div>

  <script>
  (function(){
    // 1. 定义绘图逻辑
    function runPlot() {
      const containerId = 'plot-3d-surface-v2';
      const loaderId = 'loader-3d-v2';
      
      // 生成数据: z = sin(R) / R
      let size = 80, x = new Array(size), y = new Array(size), z = new Array(size), i, j;
      for(i = 0; i < size; i++) {
        x[i] = y[i] = -2 * Math.PI + 4 * Math.PI * i / size;
        z[i] = new Array(size);
      }
      for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
          let r2 = x[i] * x[i] + y[j] * y[j];
          let r = Math.sqrt(r2);
          z[i][j] = Math.sin(r) / (r || 0.1); // 防止除以0
        }
      }

      var data = [{
        z: z, x: x, y: y,
        type: 'surface',
        colorscale: 'Viridis',
        contours: {
          z: { show: true, usecolormap: true, highlightcolor: "#42f462", project: { z: true } }
        }
      }];

      var layout = {
        title: { text: 'Quantum Wave Function', font: { color: '#888', size: 12 } },
        autosize: true,
        margin: { l: 0, r: 0, b: 0, t: 30 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        scene: {
          xaxis: {gridcolor: '#333', showbackground: false},
          yaxis: {gridcolor: '#333', showbackground: false},
          zaxis: {gridcolor: '#333', showbackground: false},
          camera: { eye: {x: 1.5, y: 1.5, z: 1.5} }
        }
      };
      
      var config = { displayModeBar: false, responsive: true };

      Plotly.newPlot(containerId, data, layout, config).then(function(){
        // 绘图成功，淡出 Loader
        const loader = document.getElementById(loaderId);
        if(loader) {
          loader.style.opacity = '0';
          setTimeout(() => loader.remove(), 500);
        }
      });
    }

    // 2. 智能加载器：检查 Plotly 是否存在，不存在则加载
    if (typeof Plotly !== 'undefined') {
      runPlot(); // 库已存在，直接运行
    } else {
      // 库不存在，动态加载脚本
      var script = document.createElement('script');
      script.src = 'https://cdn.plot.ly/plotly-2.27.0.min.js';
      script.onload = runPlot; // 加载完后运行
      document.head.appendChild(script);
    }
    
    // 3. 窗口调整时重绘
    window.addEventListener('resize', function() {
      if (typeof Plotly !== 'undefined') {
        Plotly.Plots.resize('plot-3d-surface-v2');
      }
    });
  })();
  </script>
</div>

**动态图表**

<div class="not-prose my-8 w-full h-[400px] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg bg-white dark:bg-[#0d1117] overflow-hidden relative">
  <div id="echarts-fix-demo" class="w-full h-full"></div>
  
  <script>
  (function(){
    function initChart() {
      var chartDom = document.getElementById('echarts-fix-demo');
      // 确保容器存在且没被初始化过
      if(!chartDom) return;
      
      // 自动检测暗色模式
      var isDark = document.documentElement.classList.contains('dark');
      var myChart = echarts.init(chartDom, isDark ? 'dark' : null, { renderer: 'svg', backgroundColor: 'transparent' });
      
      var option = {
        backgroundColor: 'transparent',
        tooltip: { trigger: 'axis' },
        grid: { top: '15%', bottom: '10%', left: '10%', right: '5%' },
        xAxis: { 
          type: 'category', 
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: { lineStyle: { color: '#888' } }
        },
        yAxis: { 
          type: 'value', 
          splitLine: { lineStyle: { color: isDark ? '#333' : '#eee' } } 
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          symbolSize: 10,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(59, 130, 246, 0.5)' },
              { offset: 1, color: 'rgba(59, 130, 246, 0.01)' }
            ])
          },
          itemStyle: { color: '#3b82f6' }
        }],
        animationDuration: 2000,
        animationEasing: 'cubicOut'
      };
      myChart.setOption(option);
      window.addEventListener('resize', function() { myChart.resize(); });
    }

    // 智能加载 ECharts
    if (typeof echarts !== 'undefined') {
      initChart();
    } else {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js';
      script.onload = initChart;
      document.head.appendChild(script);
    }
  })();
  </script>
</div>

**热力图**

<div class="not-prose my-8 w-full h-[500px] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-[#0d1117] overflow-hidden relative">
<div id="plot-heatmap" class="w-full h-full"></div>
<script>
(function(){
  function runHeatmap() {
    var xValues = ['Temp', 'pH', 'DO', 'BOD', 'COD', 'TN', 'TP', 'Flow', 'Turb', 'Cond'];
    var yValues = xValues.slice();
    var zValues = [];
    for (var i = 0; i < 10; i++) {
      var row = [];
      for (var j = 0; j < 10; j++) {
        if (i === j) row.push(1);
        else if (i > j) row.push(zValues[j][i]);
        else row.push((Math.random() * 2 - 1).toFixed(2));
      }
      zValues.push(row);
    }
    var data = [{
      z: zValues, x: xValues, y: yValues, type: 'heatmap', colorscale: 'RdBu', zmin: -1, zmax: 1
    }];
    var layout = {
      title: { text: 'Figure 1: Pearson Correlation Matrix', font: { family: 'Arial', size: 16 } },
      margin: { l: 50, r: 50, b: 50, t: 50 },
      paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
      xaxis: { ticks: '', side: 'bottom' }, yaxis: { ticks: '', ticks_suffix: ' ' },
      annotations: []
    };
    for ( var i = 0; i < yValues.length; i++ ) {
      for ( var j = 0; j < xValues.length; j++ ) {
        var currentValue = zValues[i][j];
        var textColor = Math.abs(currentValue) > 0.5 ? 'white' : 'black';
        layout.annotations.push({
          xref: 'x1', yref: 'y1', x: xValues[j], y: yValues[i], text: zValues[i][j],
          font: { family: 'Arial', size: 9, color: textColor }, showarrow: false
        });
      }
    }
    Plotly.newPlot('plot-heatmap', data, layout, {responsive: true, displayModeBar: false});
  }
  if (typeof Plotly !== 'undefined') { runHeatmap(); } 
  else {
    var s = document.createElement('script'); s.src = 'https://cdn.plot.ly/plotly-2.27.0.min.js';
    s.onload = runHeatmap; document.head.appendChild(s);
  }
})();
</script>
</div>

**网络拓扑图**

<div class="not-prose my-8 w-full h-[500px] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-[#101010] overflow-hidden relative">
<div id="echarts-network" class="w-full h-full"></div>
<script>
(function(){
  function initNetwork() {
    var dom = document.getElementById('echarts-network');
    if(!dom) return;
    var myChart = echarts.init(dom, 'dark', { renderer: 'canvas', backgroundColor: '#101010' });
    var nodes = [], links = [], categories = ['Core', 'Dependency', 'External', 'Hidden'].map(n => ({name: n}));
    nodes.push({ id: 0, name: 'Main', symbolSize: 40, category: 0, x: null, y: null, draggable: true });
    for (var i = 1; i < 30; i++) {
      nodes.push({ id: i, name: 'Node_' + i, symbolSize: Math.random() * 15 + 5, category: i % 4, draggable: true });
      links.push({ source: 0, target: i });
      if(i > 5 && Math.random() > 0.7) links.push({ source: i, target: Math.floor(Math.random() * i) });
    }
    var option = {
      title: { text: 'System Topology', top: 'bottom', left: 'right' },
      tooltip: {}, legend: [{ data: categories.map(a => a.name) }],
      series: [{
        type: 'graph', layout: 'force', data: nodes, links: links, categories: categories,
        roam: true, label: { show: true, position: 'right' },
        force: { repulsion: 200 }
      }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function(){ myChart.resize(); });
  }
  if (typeof echarts !== 'undefined') { initNetwork(); } 
  else {
    var s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js';
    s.onload = initNetwork; document.head.appendChild(s);
  }
})();
</script>
</div>

**桑基图**

<div class="not-prose my-8 w-full h-[400px] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-[#0d1117] overflow-hidden relative">
<div id="echarts-sankey" class="w-full h-full"></div>
<script>
(function(){
  function initSankey() {
    var dom = document.getElementById('echarts-sankey');
    if(!dom) return;
    var isDark = document.documentElement.classList.contains('dark');
    var myChart = echarts.init(dom, isDark ? 'dark' : null, { renderer: 'svg', backgroundColor: 'transparent' });
    var option = {
      title: { text: 'Energy Flow Model', left: 'center', top: 10 },
      tooltip: { trigger: 'item' },
      series: [{
        type: 'sankey', layout: 'none', emphasis: { focus: 'adjacency' },
        data: [{name: 'Total'}, {name: 'Loss'}, {name: 'Used'}, {name: 'Ind'}, {name: 'Res'}, {name: 'Tra'}],
        links: [
          {source: 'Total', target: 'Loss', value: 30}, {source: 'Total', target: 'Used', value: 70},
          {source: 'Used', target: 'Ind', value: 35}, {source: 'Used', target: 'Res', value: 20},
          {source: 'Used', target: 'Tra', value: 15}
        ]
      }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function(){ myChart.resize(); });
  }
  if (typeof echarts !== 'undefined') { initSankey(); } 
  else {
    var s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js';
    s.onload = initSankey; document.head.appendChild(s);
  }
})();
</script>
</div>

**预测置信区间图**

<div class="not-prose my-8 w-full h-[450px] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-[#0d1117] overflow-hidden relative">
<div id="echarts-confidence" class="w-full h-full"></div>
<script>
(function(){
  function initConfidence() {
    var dom = document.getElementById('echarts-confidence');
    if(!dom) return;
    var isDark = document.documentElement.classList.contains('dark');
    var myChart = echarts.init(dom, isDark ? 'dark' : null, { renderer: 'svg', backgroundColor: 'transparent' });
    var data = [], lower = [], upper = [];
    for (var i = 0; i < 200; i++) {
      var x = -Math.PI + i * 0.1, y = Math.sin(x), noise = Math.random() * 0.4;
      data.push([x.toFixed(2), (y+noise).toFixed(2)]);
      lower.push([x.toFixed(2), (y+noise-0.3).toFixed(2)]);
      upper.push([x.toFixed(2), (y+noise+0.3).toFixed(2)]);
    }
    var option = {
      title: { text: '95% Confidence Interval', left: 'center' },
      tooltip: { trigger: 'axis' }, grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { type: 'category', boundaryGap: false, data: data.map(d=>d[0]) }, yAxis: { type: 'value' },
      series: [
        { name: 'L', type: 'line', data: lower.map(d=>d[1]), lineStyle: { opacity: 0 }, stack: 'band', symbol: 'none' },
        { name: 'U', type: 'line', data: upper.map(d=>d[1]), lineStyle: { opacity: 0 }, areaStyle: { color: '#ccc', opacity: 0.4 }, stack: 'band', symbol: 'none' },
        { name: 'Pred', type: 'line', data: data.map(d=>d[1]), itemStyle: { color: '#3398DB' }, showSymbol: false }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function(){ myChart.resize(); });
  }
  if (typeof echarts !== 'undefined') { initConfidence(); } 
  else {
    var s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js';
    s.onload = initConfidence; document.head.appendChild(s);
  }
})();
</script>
</div>

**雷达图**

<div class="not-prose my-8 w-full h-[500px] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-[#0d1117] overflow-hidden relative">
<div id="echarts-radar-fixed" class="w-full h-full"></div>
<script>
(function(){
function initRadar() {
var dom=document.getElementById('echarts-radar-fixed');
if(!dom)return;
var isDark=document.documentElement.classList.contains('dark');
var myChart=echarts.init(dom,isDark?'dark':null,{renderer:'svg',backgroundColor:'transparent'});
var option={
title:{text:'Model Evaluation',left:'center',top:20},
legend:{bottom:10,data:['Model A','Model B']},
radar:{
indicator:[
{name:'Accuracy',max:100},{name:'Stability',max:100},{name:'Speed',max:100},
{name:'Cost',max:100},{name:'Robustness',max:100}
],
radius:'60%',center:['50%','50%']
},
series:[{
type:'radar',
data:[
{value:[95,90,85,92,88],name:'Model A',areaStyle:{color:'rgba(59,130,246,0.5)'},itemStyle:{color:'#3b82f6'}},
{value:[70,75,60,80,70],name:'Model B',areaStyle:{color:'rgba(16,185,129,0.3)'},itemStyle:{color:'#10b981'}}
]
}]
};
myChart.setOption(option);
window.addEventListener('resize',function(){myChart.resize();});
}
if(typeof echarts!=='undefined'){initRadar();}
else{
var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js';
s.onload=initRadar;document.head.appendChild(s);
}
})();
</script>
</div>

---

## 闪卡


<div class="not-prose my-12 flex justify-center perspective-1000">
<div class="holo-card relative w-[300px] h-[420px] rounded-xl bg-[#1c1c1c] transition-all duration-100 ease-out preserve-3d cursor-pointer group shadow-2xl">
  
  <div class="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black z-10 border border-white/20">
    <div class="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
    <div class="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black to-transparent">
      <h3 class="text-2xl font-bold text-white mb-1 text-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Cyberdeck Unit</h3>
      <p class="text-cyan-400 text-sm font-mono">LEGENDARY / HARDWARE</p>
    </div>
  </div>

  <div class="holo-glare absolute inset-0 rounded-xl z-20 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style="transform: translateZ(2px);"></div>
  
  <div class="absolute inset-0 rounded-xl z-30 border-2 border-white/0 group-hover:border-cyan-400/50 transition-colors duration-300 pointer-events-none"></div>

</div>

<script>
(function(){
  // 使用 IIFE 确保变量隔离
  const card = document.currentScript.previousElementSibling;
  const glare = card.querySelector('.holo-glare');
  
  if (!card || !glare) return;

  // 鼠标移动事件
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 计算旋转角度（增加了一点灵敏度）
    const rotateX = ((y - centerY) / centerY) * -18;
    const rotateY = ((x - centerX) / centerX) * 18;
    
    // 应用卡片 3D 旋转
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // 计算流光位置和颜色 (动态彩虹色)
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    glare.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.1), rgba(0,255,255,0.3), rgba(255,0,255,0.3), rgba(255,255,255,0.1)), radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.8) 0%, transparent 60%)`;
  });

  // 鼠标离开重置
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    glare.style.background = 'none';
  });
})();
</script>
<style>
  /* 补充一些必要的 CSS 样式来确保 3D 效果 */
  .preserve-3d { transform-style: preserve-3d; }
  .perspective-1000 { perspective: 1000px; }
</style>
</div>

```html
<div class="not-prose my-12 flex justify-center perspective-1000">
<div class="holo-card relative w-[300px] h-[420px] rounded-xl bg-[#1c1c1c] transition-all duration-100 ease-out preserve-3d cursor-pointer group shadow-2xl">
  
  <div class="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black z-10 border border-white/20">
    <div class="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
    <div class="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black to-transparent">
      <h3 class="text-2xl font-bold text-white mb-1 text-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Cyberdeck Unit</h3>
      <p class="text-cyan-400 text-sm font-mono">LEGENDARY / HARDWARE</p>
    </div>
  </div>

  <div class="holo-glare absolute inset-0 rounded-xl z-20 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style="transform: translateZ(2px);"></div>
  
  <div class="absolute inset-0 rounded-xl z-30 border-2 border-white/0 group-hover:border-cyan-400/50 transition-colors duration-300 pointer-events-none"></div>

</div>

<script>
(function(){
  // 使用 IIFE 确保变量隔离
  const card = document.currentScript.previousElementSibling;
  const glare = card.querySelector('.holo-glare');
  
  if (!card || !glare) return;

  // 鼠标移动事件
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // 计算旋转角度（增加了一点灵敏度）
    const rotateX = ((y - centerY) / centerY) * -18;
    const rotateY = ((x - centerX) / centerX) * 18;
    
    // 应用卡片 3D 旋转
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // 计算流光位置和颜色 (动态彩虹色)
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
    glare.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.1), rgba(0,255,255,0.3), rgba(255,0,255,0.3), rgba(255,255,255,0.1)), radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.8) 0%, transparent 60%)`;
  });

  // 鼠标离开重置
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    glare.style.background = 'none';
  });
})();
</script>
<style>
  /* 补充一些必要的 CSS 样式来确保 3D 效果 */
  .preserve-3d { transform-style: preserve-3d; }
  .perspective-1000 { perspective: 1000px; }
</style>
</div>
```

---

## 实时行情滚动条

<div class="not-prose my-8 w-full overflow-hidden bg-[#0d1117] border-y border-gray-800 relative">
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
<div class="flex animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] items-center whitespace-nowrap py-3" id="crypto-ticker-track">
<span class="text-gray-500 font-mono mx-4">Loading Market Data...</span>
</div>
<style>
@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
.crypto-item { display: inline-flex; align-items: center; margin: 0 1.5rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
.crypto-symbol { color: #8b949e; font-weight: bold; margin-right: 0.5rem; }
.crypto-price { color: #e6edf3; font-weight: bold; margin-right: 0.5rem; }
.crypto-change-up { color: #3fb950; } .crypto-change-down { color: #f85149; }
</style>
<script>
(function(){
var track = document.getElementById('crypto-ticker-track');
if(!track) return;
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
.then(r => r.json())
.then(data => {
var html = '';
data.forEach(coin => {
var isUp = coin.price_change_percentage_24h >= 0;
var changeClass = isUp ? 'crypto-change-up' : 'crypto-change-down';
var sign = isUp ? '+' : '';
html += `<div class="crypto-item">
<img src="${coin.image}" class="w-5 h-5 mr-2 grayscale brightness-125">
<span class="crypto-symbol">${coin.symbol.toUpperCase()}</span>
<span class="crypto-price">$${coin.current_price.toLocaleString()}</span>
<span class="${changeClass}">${sign}${coin.price_change_percentage_24h.toFixed(2)}%</span>
</div>`;
});
track.innerHTML = html + html; // 复制一份用于无缝滚动
}).catch(e => { track.innerHTML = '<span class="text-red-500 mx-4">Failed to load data. API limit may be reached.</span>'; });
})();
</script>
</div>

```html
<div class="not-prose my-8 w-full overflow-hidden bg-[#0d1117] border-y border-gray-800 relative">
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
<div class="flex animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused] items-center whitespace-nowrap py-3" id="crypto-ticker-track">
<span class="text-gray-500 font-mono mx-4">Loading Market Data...</span>
</div>
<style>
@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
.crypto-item { display: inline-flex; align-items: center; margin: 0 1.5rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
.crypto-symbol { color: #8b949e; font-weight: bold; margin-right: 0.5rem; }
.crypto-price { color: #e6edf3; font-weight: bold; margin-right: 0.5rem; }
.crypto-change-up { color: #3fb950; } .crypto-change-down { color: #f85149; }
</style>
<script>
(function(){
var track = document.getElementById('crypto-ticker-track');
if(!track) return;
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
.then(r => r.json())
.then(data => {
var html = '';
data.forEach(coin => {
var isUp = coin.price_change_percentage_24h >= 0;
var changeClass = isUp ? 'crypto-change-up' : 'crypto-change-down';
var sign = isUp ? '+' : '';
html += `<div class="crypto-item">
<img src="${coin.image}" class="w-5 h-5 mr-2 grayscale brightness-125">
<span class="crypto-symbol">${coin.symbol.toUpperCase()}</span>
<span class="crypto-price">$${coin.current_price.toLocaleString()}</span>
<span class="${changeClass}">${sign}${coin.price_change_percentage_24h.toFixed(2)}%</span>
</div>`;
});
track.innerHTML = html + html; // 复制一份用于无缝滚动
}).catch(e => { track.innerHTML = '<span class="text-red-500 mx-4">Failed to load data. API limit may be reached.</span>'; });
})();
</script>
</div>
```

-----

## 仿钱包连接

<div class="not-prose my-12 flex justify-center">
<div class="relative group cursor-pointer">
<div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
<button id="web3-connect-btn" class="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 text-gray-100 transition-all hover:bg-gray-900">
<span class="flex items-center space-x-3 pr-4">
<svg class="h-6 w-6 text-pink-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
<span id="btn-text" class="font-bold font-mono tracking-wider text-lg">CONNECT WALLET</span>
</span>
<span class="pl-4 text-pink-400 transition-colors group-hover:text-gray-100 font-mono text-sm" id="btn-status">Web3 Ready</span>
</button>
</div>
<script>
(function(){
var btn = document.getElementById('web3-connect-btn');
var textSpan = document.getElementById('btn-text');
var statusSpan = document.getElementById('btn-status');
var isConnected = false;
btn.addEventListener('click', function() {
if (!isConnected) {
textSpan.innerHTML = '0x1F9...8A2B';
statusSpan.innerHTML = '<span class="text-green-500">● Connected</span>';
btn.classList.add('border-green-500/50');
isConnected = true;
} else {
textSpan.innerHTML = 'CONNECT WALLET';
statusSpan.innerHTML = 'Web3 Ready';
btn.classList.remove('border-green-500/50');
isConnected = false;
}
});
})();
</script>
<style>
@keyframes tilt { 0%, 50%, 100% { transform: rotate(0deg); } 25% { transform: rotate(0.5deg); } 75% { transform: rotate(-0.5deg); } }
.animate-tilt { animation: tilt 5s infinite linear; }
</style>
</div>

```html
<div class="not-prose my-12 flex justify-center">
<div class="relative group cursor-pointer">
<div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
<button id="web3-connect-btn" class="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 text-gray-100 transition-all hover:bg-gray-900">
<span class="flex items-center space-x-3 pr-4">
<svg class="h-6 w-6 text-pink-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
<span id="btn-text" class="font-bold font-mono tracking-wider text-lg">CONNECT WALLET</span>
</span>
<span class="pl-4 text-pink-400 transition-colors group-hover:text-gray-100 font-mono text-sm" id="btn-status">Web3 Ready</span>
</button>
</div>
<script>
(function(){
var btn = document.getElementById('web3-connect-btn');
var textSpan = document.getElementById('btn-text');
var statusSpan = document.getElementById('btn-status');
var isConnected = false;
btn.addEventListener('click', function() {
if (!isConnected) {
textSpan.innerHTML = '0x1F9...8A2B';
statusSpan.innerHTML = '<span class="text-green-500">● Connected</span>';
btn.classList.add('border-green-500/50');
isConnected = true;
} else {
textSpan.innerHTML = 'CONNECT WALLET';
statusSpan.innerHTML = 'Web3 Ready';
btn.classList.remove('border-green-500/50');
isConnected = false;
}
});
})();
</script>
<style>
@keyframes tilt { 0%, 50%, 100% { transform: rotate(0deg); } 25% { transform: rotate(0.5deg); } 75% { transform: rotate(-0.5deg); } }
.animate-tilt { animation: tilt 5s infinite linear; }
</style>
</div>
```

---
:::note
我已经沉浸在自己的艺术里了，后面就是玩，不贴源代码了。
:::

<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl relative">
<div class="px-4 py-3 border-b border-gray-800 flex justify-between items-center bg-[#161b22]">
<div class="flex items-center gap-2"><span class="text-yellow-500 font-bold">ETH/USDT</span><span class="text-xs text-green-500 px-2 py-0.5 bg-green-500/10 rounded-full animate-pulse">● BINANCE REALTIME</span></div>
<div class="text-gray-500 font-mono text-sm" id="live-price-header">--</div>
</div>
<div id="tv-chart-real" style="width: 100%; height: 450px;"></div>
</div>
<script src="https://unpkg.com/lightweight-charts@4.1.3/dist/lightweight-charts.standalone.production.js"></script>
<script>
(function(){
// 等待库加载
const checkLib = setInterval(() => {
if (typeof LightweightCharts !== 'undefined') {
clearInterval(checkLib);
initRealChart();
}
}, 100);
function initRealChart() {
const container = document.getElementById('tv-chart-real');
const priceHeader = document.getElementById('live-price-header');
if (!container) return;
const chart = LightweightCharts.createChart(container, {
layout: { background: { type: 'solid', color: '#0d1117' }, textColor: '#d1d5db' },
grid: { vertLines: { color: 'rgba(42, 46, 57, 0.5)' }, horzLines: { color: 'rgba(42, 46, 57, 0.5)' } },
width: container.clientWidth, height: 450,
timeScale: { timeVisible: true, secondsVisible: false, borderColor: '#374151' },
rightPriceScale: { borderColor: '#374151', scaleMargins: { top: 0.1, bottom: 0.1 } }
});
const series = chart.addCandlestickSeries({ upColor: '#10b981', downColor: '#ef4444', borderVisible: false, wickUpColor: '#10b981', wickDownColor: '#ef4444' });
// 1. 获取历史数据 (150根 1分钟K线)
fetch('https://api.binance.com/api/v3/klines?symbol=ETHUSDT&interval=1m&limit=150')
.then(res => res.json())
.then(data => {
const klines = data.map(d => ({
time: d[0] / 1000,
open: parseFloat(d[1]),
high: parseFloat(d[2]),
low: parseFloat(d[3]),
close: parseFloat(d[4])
}));
series.setData(klines);
chart.timeScale().fitContent(); // 适配视野
// 2. 建立 WebSocket 实时更新
const ws = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@kline_1m');
ws.onmessage = (event) => {
const msg = JSON.parse(event.data);
const k = msg.k;
const currentBar = {
time: k.t / 1000,
open: parseFloat(k.o),
high: parseFloat(k.h),
low: parseFloat(k.l),
close: parseFloat(k.c)
};
series.update(currentBar);
priceHeader.innerText = '$' + currentBar.close.toFixed(2);
priceHeader.style.color = currentBar.close >= currentBar.open ? '#10b981' : '#ef4444';
};
});
new ResizeObserver(entries => { if(entries[0]) chart.applyOptions({ width: entries[0].contentRect.width }); }).observe(container);
}
})();
</script>









<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl">
<div class="px-4 py-3 border-b border-gray-800 bg-[#161b22] flex justify-between items-center">
<div class="flex items-center gap-2"><span class="text-yellow-500 font-bold">BTC LIVE TRADES</span><span class="text-xs text-green-500 px-2 py-0.5 bg-green-500/10 rounded-full animate-pulse">● CONNECTED</span></div>
<div class="text-sm text-gray-400 font-mono">Binance WS</div>
</div>
<div class="px-4 py-2 bg-[#1a1f2e] grid grid-cols-3 gap-2 text-xs text-gray-400 font-mono"><span>Price(USDT)</span><span class="text-right">Amount(BTC)</span><span class="text-right">Time</span></div>
<div id="trade-feed-container" class="relative overflow-hidden bg-[#0d1117]" style="height: 300px;">
</div>
<script>
(function(){
const container = document.getElementById('trade-feed-container');
const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@aggTrade');
const maxTrades = 15;
ws.onmessage = (event) => {
const d = JSON.parse(event.data);
const price = parseFloat(d.p).toFixed(2);
const amount = parseFloat(d.q).toFixed(5);
const time = new Date(d.T).toLocaleTimeString();
const isBuy = !d.m; // m=true 为做市商卖出（即主动买入为false? Binance定义有点反直觉，m=true意味着买单是Maker，所以是主动卖单吃掉买单，显示红色）
// 修正：m=true -> 主动卖 (红), m=false -> 主动买 (绿)
const colorClass = d.m ? 'text-red-500' : 'text-green-500';
const row = document.createElement('div');
row.className = 'px-4 py-1.5 border-b border-gray-800/30 grid grid-cols-3 gap-2 text-xs font-mono animate-fade-in';
row.innerHTML = `<span class="${colorClass} font-bold">${price}</span><span class="text-right text-gray-300">${amount}</span><span class="text-right text-gray-500">${time}</span>`;
container.prepend(row);
if(container.children.length > maxTrades) container.lastElementChild.remove();
};
})();
</script>
<style>
@keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in { animation: fadeIn 0.2s ease-out; }
</style>
</div>



<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl relative select-none">
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
<div class="px-4 py-3 border-b border-gray-800 bg-[#161b22] flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="text-yellow-500 font-bold tracking-wider">MARKET SENTIMENT</span>
<span id="risk-badge" class="text-[10px] px-2 py-0.5 rounded uppercase font-semibold animate-pulse border bg-gray-800 border-gray-600 text-gray-400">LOADING...</span>
</div>
<span class="text-gray-500 text-xs font-mono">FEAR & GREED API</span>
</div>
<div class="p-8 relative z-10">
<div class="flex justify-between items-end mb-3">
<span class="text-gray-400 text-sm">Current Index</span>
<span id="vol-text" class="text-2xl font-bold tracking-wider drop-shadow-md transition-colors duration-300 text-gray-500">...</span>
</div>
<div class="relative h-4 w-full rounded-full bg-[#1c2128] border border-gray-800/50">
<div class="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 opacity-80"></div>
<div class="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 blur-sm opacity-40"></div>
<div id="vol-pointer" class="absolute top-1/2 -translate-y-1/2 w-1.5 h-7 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-20 rounded-full transition-all duration-1000 ease-out opacity-0" style="left: 0%;"></div>
</div>
<div class="flex justify-between mt-3 text-[10px] text-gray-500 font-mono uppercase tracking-wider font-bold">
<span>Fear (0)</span>
<span>Neutral (50)</span>
<span>Greed (100)</span>
</div>
</div>
<div class="grid grid-cols-3 gap-0 border-t border-gray-800 bg-[#161b22]/50 relative z-10 divide-x divide-gray-800">
<div class="p-4 text-center">
<div class="text-gray-500 text-[10px] uppercase mb-1">Next Update</div>
<div id="time-countdown" class="text-gray-200 font-mono font-bold text-sm">--:--:--</div>
</div>
<div class="p-4 text-center">
<div class="text-gray-500 text-[10px] uppercase mb-1">Index Value</div>
<div id="fear-val" class="text-yellow-500 font-mono font-bold text-lg">--</div>
</div>
<div class="p-4 text-center">
<div class="text-gray-500 text-[10px] uppercase mb-1">Sentiment</div>
<div id="sentiment-text" class="text-gray-200 font-mono font-bold text-sm">--</div>
</div>
</div>
<script>
(function(){
var pointer = document.getElementById('vol-pointer');
var indexText = document.getElementById('vol-text');
var valDisplay = document.getElementById('fear-val');
var sentText = document.getElementById('sentiment-text');
var badge = document.getElementById('risk-badge');
var countdown = document.getElementById('time-countdown');
async function fetchRealData() {
try {
var response = await fetch('https://api.alternative.me/fng/');
var result = await response.json();
var data = result.data[0];
var value = parseInt(data.value);
var classification = data.value_classification;
var secondsUntilUpdate = parseInt(data.time_until_update);
updateUI(value, classification);
startCountdown(secondsUntilUpdate);
} catch (error) {
if(indexText) indexText.innerText = "ERR";
console.error(error);
}
}
function updateUI(value, label) {
if(!pointer) return;
pointer.style.opacity = '1';
pointer.style.left = value + '%';
indexText.innerText = label.toUpperCase();
valDisplay.innerText = value;
sentText.innerText = label;
var colorClass = 'text-gray-200';
var badgeClass = 'bg-gray-800 border-gray-600 text-gray-400';
if (value < 25) {
colorClass = 'text-red-500';
badgeClass = 'bg-red-900/20 border-red-500/30 text-red-400';
} else if (value < 45) {
colorClass = 'text-orange-500';
badgeClass = 'bg-orange-900/20 border-orange-500/30 text-orange-400';
} else if (value < 55) {
colorClass = 'text-yellow-500';
badgeClass = 'bg-yellow-900/20 border-yellow-500/30 text-yellow-400';
} else {
colorClass = 'text-green-500';
badgeClass = 'bg-green-900/20 border-green-500/30 text-green-400';
}
indexText.className = 'text-2xl font-bold tracking-wider drop-shadow-md transition-colors duration-300 ' + colorClass;
badge.className = 'text-[10px] px-2 py-0.5 rounded uppercase font-semibold border ' + badgeClass;
badge.innerText = label;
}
function startCountdown(seconds) {
var timeLeft = seconds;
var interval = setInterval(function() {
timeLeft--;
if (timeLeft < 0) {
clearInterval(interval);
fetchRealData();
return;
}
var h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
var m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
var s = (timeLeft % 60).toString().padStart(2, '0');
if(countdown) countdown.innerText = h + ':' + m + ':' + s;
}, 1000);
}
fetchRealData();
})();
</script>
</div>









<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl relative select-none">
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
<div class="px-4 py-3 border-b border-gray-800 bg-[#161b22] flex items-center justify-between">
<div class="flex items-center gap-2"><span class="text-yellow-500 font-bold tracking-wider">MARKET OVERVIEW</span><span id="live-indicator" class="text-[10px] text-cyan-400 px-2 py-0.5 bg-cyan-900/30 border border-cyan-500/30 rounded-full animate-pulse flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>LIVE DATA</span></div>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 relative z-10">
<div class="bg-[#141414] border border-orange-500/20 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 group">
<div class="flex justify-between mb-2"><span class="text-gray-500 text-xs">Bitcoin</span><span class="text-orange-500 font-bold">BTC</span></div>
<div id="price-BTC" class="text-xl font-bold text-gray-100">Loading...</div>
<div id="change-BTC" class="text-xs font-mono mb-2 text-gray-500">--%</div>
<div id="spark-BTC" class="h-10 w-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="bg-[#141414] border border-blue-500/20 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 group">
<div class="flex justify-between mb-2"><span class="text-gray-500 text-xs">Ethereum</span><span class="text-blue-500 font-bold">ETH</span></div>
<div id="price-ETH" class="text-xl font-bold text-gray-100">Loading...</div>
<div id="change-ETH" class="text-xs font-mono mb-2 text-gray-500">--%</div>
<div id="spark-ETH" class="h-10 w-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="bg-[#141414] border border-yellow-500/20 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 group">
<div class="flex justify-between mb-2"><span class="text-gray-500 text-xs">BNB</span><span class="text-yellow-500 font-bold">BNB</span></div>
<div id="price-BNB" class="text-xl font-bold text-gray-100">Loading...</div>
<div id="change-BNB" class="text-xs font-mono mb-2 text-gray-500">--%</div>
<div id="spark-BNB" class="h-10 w-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="bg-[#141414] border border-purple-500/20 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 group">
<div class="flex justify-between mb-2"><span class="text-gray-500 text-xs">Solana</span><span class="text-purple-500 font-bold">SOL</span></div>
<div id="price-SOL" class="text-xl font-bold text-gray-100">Loading...</div>
<div id="change-SOL" class="text-xs font-mono mb-2 text-gray-500">--%</div>
<div id="spark-SOL" class="h-10 w-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
<div class="grid grid-cols-3 gap-4 px-6 pb-6 pt-0 text-center relative z-10">
<div class="bg-[#1c2128] rounded p-3 border border-white/5"><div class="text-gray-500 text-[10px] uppercase">Market Cap</div><div id="global-cap" class="text-white font-mono font-bold text-sm">Loading...</div></div>
<div class="bg-[#1c2128] rounded p-3 border border-white/5"><div class="text-gray-500 text-[10px] uppercase">24h Vol</div><div id="global-vol" class="text-white font-mono font-bold text-sm">Loading...</div></div>
<div class="bg-[#1c2128] rounded p-3 border border-white/5"><div class="text-gray-500 text-[10px] uppercase">Dominance</div><div id="btc-dom" class="text-white font-mono font-bold text-sm">Loading...</div></div>
</div>
<script>
(function(){
var CONFIG = {
'BTC': { color: '#f97316' },
'ETH': { color: '#3b82f6' },
'BNB': { color: '#eab308' },
'SOL': { color: '#a855f7' }
};
function formatMoney(num){
return '$' + parseFloat(num).toLocaleString('en-US', {maximumFractionDigits: 2});
}
function formatCompact(num) {
if(num > 1e12) return '$' + (num/1e12).toFixed(2) + 'T';
if(num > 1e9) return '$' + (num/1e9).toFixed(2) + 'B';
return '$' + num.toLocaleString();
}
function createSparkline(symbol, color, isUp) {
var container = document.getElementById('spark-'+symbol);
if(!container) return;
var points = [];
var width = 100; var y = 15;
for(var i=0; i<=width; i+=5) {
y += (Math.random() - 0.5) * 10;
y = Math.max(2, Math.min(28, y));
points.push(i + ',' + y);
}
if(isUp && y > 10) points[points.length-1] = width + ',5';
if(!isUp && y < 20) points[points.length-1] = width + ',25';
var svg = `<svg viewBox="0 0 100 30" preserveAspectRatio="none" class="w-full h-full overflow-visible"><path d="M0,30 L${points.join(' L')} L100,30 Z" fill="${color}" fill-opacity="0.1" stroke="none" /><polyline points="${points.join(' ')}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" /></svg>`;
container.innerHTML = svg;
}
async function fetchCoinLore() {
try {
var tickersRes = await fetch('https://api.coinlore.net/api/tickers/?start=0&limit=20');
var globalRes = await fetch('https://api.coinlore.net/api/global/');
var tickersData = await tickersRes.json();
var globalData = await globalRes.json();
tickersData.data.forEach(function(coin) {
if(CONFIG[coin.symbol]) {
var priceEl = document.getElementById('price-'+coin.symbol);
var changeEl = document.getElementById('change-'+coin.symbol);
if(priceEl) priceEl.innerText = formatMoney(coin.price_usd);
if(changeEl) {
var change = parseFloat(coin.percent_change_24h);
var isUp = change >= 0;
changeEl.innerText = (isUp ? '+' : '') + change + '%';
changeEl.className = 'text-xs font-mono mb-2 ' + (isUp ? 'text-green-500' : 'text-red-500');
createSparkline(coin.symbol, CONFIG[coin.symbol].color, isUp);
}
}
});
if(globalData && globalData.length > 0) {
var g = globalData[0];
document.getElementById('global-cap').innerText = formatCompact(g.total_mcap);
document.getElementById('global-vol').innerText = formatCompact(g.total_volume);
document.getElementById('btc-dom').innerText = g.btc_d + '%';
}
} catch (e) {
console.error("API Error:", e);
var ind = document.getElementById('live-indicator');
if(ind) ind.innerText = 'OFFLINE';
}
}
fetchCoinLore();
setInterval(fetchCoinLore, 10000);
})();
</script>
</div>









<div class="not-prose my-10 w-full h-auto">
<style>
.crypto-flip-container{background-color:transparent;perspective:1000px;height:300px}.crypto-flip-inner{position:relative;width:100%;height:100%;text-align:left;transition:transform .8s;transform-style:preserve-3d}.crypto-flip-container:hover .crypto-flip-inner{transform:rotateY(180deg)}.crypto-flip-front,.crypto-flip-back{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:1rem;overflow:hidden;box-shadow:0 10px 30px -5px rgba(0,0,0,.5)}.crypto-flip-front{background:#111;color:#fff}.crypto-flip-back{background:#0f0f10;color:#fff;transform:rotateY(180deg);border:1px solid rgba(255,255,255,.1)}
</style>
<div class="text-center mb-8"><h3 class="text-2xl font-bold text-yellow-500 mb-2">LIVE MARKET ASSETS</h3><p class="text-gray-400 text-xs uppercase tracking-widest animate-pulse">Data from Binance API</p></div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="crypto-cards-container">
</div>
<script>
(function(){
const coins = [
{id:'BTCUSDT', name:'Bitcoin', symbol:'BTC', color:'orange', icon:'₿', desc:'The King'},
{id:'ETHUSDT', name:'Ethereum', symbol:'ETH', color:'blue', icon:'◆', desc:'Smart Contracts'},
{id:'SOLUSDT', name:'Solana', symbol:'SOL', color:'purple', icon:'◎', desc:'High Speed'}
];
const container = document.getElementById('crypto-cards-container');
// 初始化卡片结构
coins.forEach(c => {
container.innerHTML += `
<div class="crypto-flip-container cursor-pointer group" id="card-${c.id}">
<div class="crypto-flip-inner">
<div class="crypto-flip-front border border-${c.color}-500/30">
<div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#1a1a1a]"></div>
<div class="relative h-full p-6 flex flex-col justify-between z-10">
<div class="text-right text-6xl font-black text-white/5 select-none">${c.symbol}</div>
<div><div class="w-12 h-12 rounded-full bg-gradient-to-br from-${c.color}-400 to-${c.color}-600 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-[0_0_20px_${c.color}]">${c.icon}</div><h4 class="text-2xl font-bold text-white">${c.name}</h4><p class="text-${c.color}-400 font-mono text-sm">${c.desc}</p></div>
<div class="w-full bg-gray-800/50 h-1 rounded-full overflow-hidden backdrop-blur"><div class="bg-${c.color}-500 h-full w-[60%] shadow-[0_0_10px_${c.color}]"></div></div>
</div>
</div>
<div class="crypto-flip-back p-6 flex flex-col justify-center">
<div class="text-xs text-gray-500 uppercase mb-1 font-mono">Current Price</div>
<div class="text-3xl font-bold text-white mb-6 tracking-tight font-mono" id="price-${c.id}">Loading...</div>
<div class="space-y-4">
<div class="flex justify-between items-center border-b border-gray-800 pb-2"><span class="text-gray-400 text-sm">24h Change</span><span class="font-mono font-bold flex items-center gap-1" id="change-${c.id}">--</span></div>
<div class="flex justify-between items-center border-b border-gray-800 pb-2"><span class="text-gray-400 text-sm">24h High</span><span class="text-gray-200 font-mono" id="high-${c.id}">--</span></div>
<div class="flex justify-between items-center"><span class="text-gray-400 text-sm">24h Low</span><span class="text-gray-200 font-mono" id="low-${c.id}">--</span></div>
</div>
</div>
</div>
</div>`;
});
// 建立 WebSocket 连接
const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker/ethusdt@ticker/solusdt@ticker');
ws.onmessage = (event) => {
const data = JSON.parse(event.data);
const symbol = data.s;
const priceEl = document.getElementById(`price-${symbol}`);
const changeEl = document.getElementById(`change-${symbol}`);
const highEl = document.getElementById(`high-${symbol}`);
const lowEl = document.getElementById(`low-${symbol}`);
if(priceEl) {
const price = parseFloat(data.c);
const prevPrice = parseFloat(priceEl.dataset.prev || price);
priceEl.innerText = '$' + price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
priceEl.style.color = price > prevPrice ? '#10b981' : (price < prevPrice ? '#ef4444' : 'white');
priceEl.dataset.prev = price;
setTimeout(()=> priceEl.style.color = 'white', 300);
}
if(changeEl) {
const change = parseFloat(data.P);
changeEl.innerText = (change >= 0 ? '▲ ' : '▼ ') + change.toFixed(2) + '%';
changeEl.className = `font-mono font-bold flex items-center gap-1 ${change >= 0 ? 'text-green-400' : 'text-red-400'}`;
}
if(highEl) highEl.innerText = '$' + parseFloat(data.h).toLocaleString();
if(lowEl) lowEl.innerText = '$' + parseFloat(data.l).toLocaleString();
};
})();
</script>
</div>