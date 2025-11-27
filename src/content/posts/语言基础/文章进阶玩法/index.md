---
title: 进阶写作与Tailwind CSS实践
published: 2025-11-27
pinned: false
updated: 2025-11-27
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
        <div class="flex items-center gap-2">
            <span class="text-yellow-500 font-bold">ETH/USDT</span>
            <span class="text-xs text-green-500 px-2 py-0.5 bg-green-500/10 rounded-full animate-pulse">● LIVE</span>
        </div>
        <div class="text-gray-500 font-mono text-sm">Perpetual</div>
    </div>
    <div id="tv-chart-final" style="width: 100%; height: 450px;"></div>
</div>

<script src="https://unpkg.com/lightweight-charts@4.1.3/dist/lightweight-charts.standalone.production.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // 等待一下确保库加载完成
        setTimeout(function() {
            const container = document.getElementById('tv-chart-final');
            
            if (!container) {
                console.error('容器未找到');
                return;
            }
            
            if (typeof LightweightCharts === 'undefined') {
                console.error('LightweightCharts 库未加载');
                return;
            }
            
            const chart = LightweightCharts.createChart(container, {
                layout: { 
                    background: { type: 'solid', color: '#0d1117' }, 
                    textColor: '#d1d5db' 
                },
                grid: { 
                    vertLines: { color: 'rgba(42, 46, 57, 0.5)' }, 
                    horzLines: { color: 'rgba(42, 46, 57, 0.5)' } 
                },
                width: container.clientWidth, 
                height: 450,
                timeScale: { 
                    timeVisible: true, 
                    secondsVisible: false, 
                    borderColor: '#374151' 
                },
                rightPriceScale: { borderColor: '#374151' }
            });
            
            const candlestickSeries = chart.addCandlestickSeries({
                upColor: '#10b981',
                downColor: '#ef4444',
                borderVisible: false,
                wickUpColor: '#10b981',
                wickDownColor: '#ef4444'
            });
            
            // 生成数据
            const data = [];
            let timestamp = Math.floor(Date.now() / 1000) - 150 * 60;
            let price = 2000;
            
            for (let i = 0; i < 150; i++) {
                timestamp += 60;
                const close = price + (Math.random() - 0.5) * 10;
                const high = Math.max(price, close) + Math.random() * 5;
                const low = Math.min(price, close) - Math.random() * 5;
                
                data.push({
                    time: timestamp,
                    open: price,
                    high: high,
                    low: low,
                    close: close
                });
                
                price = close;
            }
            
            candlestickSeries.setData(data);
            chart.timeScale().fitContent();
            
            console.log('图表初始化成功！');
            
            // 响应式
            window.addEventListener('resize', function() {
                chart.applyOptions({ width: container.clientWidth });
            });
            
        }, 500);
    });
</script>









<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl">
    <div class="px-4 py-3 border-b border-gray-800 bg-[#161b22]">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="text-yellow-500 font-bold">ORDER BOOK</span>
                <span class="text-xs text-blue-500 px-2 py-0.5 bg-blue-500/10 rounded-full">DEPTH</span>
            </div>
            <span class="text-gray-400 text-sm">BTC/USDT</span>
        </div>
    </div>
    <div class="grid grid-cols-2 gap-0">
        <!-- 买单列表 -->
        <div class="border-r border-gray-800">
            <div class="px-4 py-2 bg-[#1a1f2e] grid grid-cols-3 gap-2 text-xs text-gray-400 font-mono">
                <span>Price(USDT)</span>
                <span class="text-right">Amount(BTC)</span>
                <span class="text-right">Total</span>
            </div>
            <div id="buy-orders" class="relative" style="height: 300px; overflow: hidden;"></div>
        </div>
        <!-- 卖单列表 -->
        <div>
            <div class="px-4 py-2 bg-[#1a1f2e] grid grid-cols-3 gap-2 text-xs text-gray-400 font-mono">
                <span>Price(USDT)</span>
                <span class="text-right">Amount(BTC)</span>
                <span class="text-right">Total</span>
            </div>
            <div id="sell-orders" class="relative" style="height: 300px; overflow: hidden;"></div>
        </div>
    </div>
    <div class="px-4 py-3 border-t border-gray-800 bg-[#161b22] flex justify-between items-center">
        <div>
            <span class="text-xs text-gray-400">Spread: </span>
            <span id="spread" class="text-yellow-500 font-mono font-bold">--</span>
        </div>
        <div class="text-xs text-gray-400">
            <span id="update-time">--</span>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const buyOrdersContainer = document.getElementById('buy-orders');
        const sellOrdersContainer = document.getElementById('sell-orders');
        const spreadElement = document.getElementById('spread');
        const updateTimeElement = document.getElementById('update-time');
        
        let basePrice = 43250;
        
        function generateOrders(isBuy, count) {
            const orders = [];
            let price = basePrice;
            let totalAmount = 0;
            
            for (let i = 0; i < count; i++) {
                price += isBuy ? -Math.random() * 50 : Math.random() * 50;
                const amount = Math.random() * 2 + 0.1;
                totalAmount += amount;
                
                orders.push({
                    price: price.toFixed(2),
                    amount: amount.toFixed(4),
                    total: totalAmount.toFixed(4)
                });
            }
            
            return isBuy ? orders : orders.reverse();
        }
        
        function renderOrders(container, orders, isBuy) {
            const maxTotal = Math.max(...orders.map(o => parseFloat(o.total)));
            
            container.innerHTML = orders.map(order => {
                const percentage = (parseFloat(order.total) / maxTotal) * 100;
                const bgColor = isBuy ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)';
                const textColor = isBuy ? 'text-green-500' : 'text-red-500';
                
                return `
                    <div class="relative px-4 py-1.5 hover:bg-gray-800/50 transition-colors cursor-pointer group">
                        <div class="absolute inset-0 ${isBuy ? 'right-0' : 'left-0'}" 
                             style="width: ${percentage}%; background: ${bgColor};"></div>
                        <div class="relative grid grid-cols-3 gap-2 text-xs font-mono">
                            <span class="${textColor} font-semibold">${order.price}</span>
                            <span class="text-right text-gray-300">${order.amount}</span>
                            <span class="text-right text-gray-400">${order.total}</span>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        function updateOrderBook() {
            basePrice += (Math.random() - 0.5) * 10;
            
            const buyOrders = generateOrders(true, 12);
            const sellOrders = generateOrders(false, 12);
            
            renderOrders(buyOrdersContainer, buyOrders, true);
            renderOrders(sellOrdersContainer, sellOrders, false);
            
            const spread = (parseFloat(sellOrders[0].price) - parseFloat(buyOrders[0].price)).toFixed(2);
            spreadElement.textContent = `$${spread}`;
            
            const now = new Date();
            updateTimeElement.textContent = now.toLocaleTimeString();
        }
        
        updateOrderBook();
        setInterval(updateOrderBook, 2000);
    });
</script>

<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl">
    <div class="px-4 py-3 border-b border-gray-800 bg-[#161b22]">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="text-yellow-500 font-bold">CRYPTO HEATMAP</span>
                <span class="text-xs text-purple-500 px-2 py-0.5 bg-purple-500/10 rounded-full animate-pulse">● 24H</span>
            </div>
            <div class="flex gap-2 text-xs">
                <button class="px-3 py-1 bg-green-500/20 text-green-500 rounded hover:bg-green-500/30 transition-colors">Winners</button>
                <button class="px-3 py-1 bg-red-500/20 text-red-500 rounded hover:bg-red-500/30 transition-colors">Losers</button>
            </div>
        </div>
    </div>
    <div id="heatmap" class="p-4" style="height: 400px;"></div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const heatmapContainer = document.getElementById('heatmap');
        
        const cryptos = [
            { symbol: 'BTC', name: 'Bitcoin', change: 0 },
            { symbol: 'ETH', name: 'Ethereum', change: 0 },
            { symbol: 'BNB', name: 'BNB', change: 0 },
            { symbol: 'SOL', name: 'Solana', change: 0 },
            { symbol: 'XRP', name: 'Ripple', change: 0 },
            { symbol: 'ADA', name: 'Cardano', change: 0 },
            { symbol: 'DOGE', name: 'Dogecoin', change: 0 },
            { symbol: 'AVAX', name: 'Avalanche', change: 0 },
            { symbol: 'DOT', name: 'Polkadot', change: 0 },
            { symbol: 'MATIC', name: 'Polygon', change: 0 },
            { symbol: 'LINK', name: 'Chainlink', change: 0 },
            { symbol: 'UNI', name: 'Uniswap', change: 0 }
        ];
        
        function getColor(change) {
            const intensity = Math.min(Math.abs(change) / 10, 1);
            if (change > 0) {
                return `rgba(16, 185, 129, ${intensity * 0.8})`;
            } else {
                return `rgba(239, 68, 68, ${intensity * 0.8})`;
            }
        }
        
        function renderHeatmap() {
            heatmapContainer.innerHTML = `
                <div class="grid grid-cols-4 gap-3 h-full">
                    ${cryptos.map(crypto => `
                        <div class="relative rounded-lg p-4 flex flex-col justify-between transition-all duration-500 hover:scale-105 cursor-pointer group"
                             style="background: ${getColor(crypto.change)}; backdrop-filter: blur(10px);">
                            <div>
                                <div class="text-white font-bold text-lg">${crypto.symbol}</div>
                                <div class="text-gray-300 text-xs">${crypto.name}</div>
                            </div>
                            <div class="mt-auto">
                                <div class="text-2xl font-bold ${crypto.change >= 0 ? 'text-green-400' : 'text-red-400'}">
                                    ${crypto.change >= 0 ? '+' : ''}${crypto.change.toFixed(2)}%
                                </div>
                            </div>
                            <div class="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-lg transition-all"></div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        function updateHeatmap() {
            cryptos.forEach(crypto => {
                crypto.change += (Math.random() - 0.5) * 2;
                crypto.change = Math.max(-15, Math.min(15, crypto.change));
            });
            renderHeatmap();
        }
        
        renderHeatmap();
        setInterval(updateHeatmap, 3000);
    });
</script>

<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl">
    <div class="px-4 py-3 border-b border-gray-800 bg-[#161b22]">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="text-yellow-500 font-bold">LIVE TRADES</span>
                <span class="text-xs text-green-500 px-2 py-0.5 bg-green-500/10 rounded-full animate-pulse">● STREAMING</span>
            </div>
            <div class="text-sm text-gray-400 font-mono">BTC/USDT</div>
        </div>
    </div>
    <div class="px-4 py-2 bg-[#1a1f2e] grid grid-cols-4 gap-2 text-xs text-gray-400 font-mono">
        <span>Price(USDT)</span>
        <span class="text-right">Amount(BTC)</span>
        <span class="text-right">Time</span>
        <span class="text-right">Type</span>
    </div>
    <div id="trade-feed" class="relative overflow-hidden" style="height: 350px;">
        <div id="trades-container" class="absolute inset-0"></div>
    </div>
    <div class="px-4 py-3 border-t border-gray-800 bg-[#161b22] flex justify-between items-center">
        <div class="text-xs text-gray-400">
            <span>Total Trades: </span>
            <span id="trade-count" class="text-white font-mono">0</span>
        </div>
        <div class="text-xs text-gray-400">
            <span>Volume: </span>
            <span id="volume" class="text-yellow-500 font-mono">0.0000 BTC</span>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const tradesContainer = document.getElementById('trades-container');
        const tradeCountElement = document.getElementById('trade-count');
        const volumeElement = document.getElementById('volume');
        
        let trades = [];
        let tradeCount = 0;
        let totalVolume = 0;
        let basePrice = 43250;
        
        function generateTrade() {
            const isBuy = Math.random() > 0.5;
            basePrice += (Math.random() - 0.5) * 50;
            const amount = (Math.random() * 0.5 + 0.01).toFixed(4);
            const now = new Date();
            
            return {
                id: Date.now() + Math.random(),
                price: basePrice.toFixed(2),
                amount: amount,
                time: now.toLocaleTimeString(),
                type: isBuy ? 'BUY' : 'SELL',
                isBuy: isBuy
            };
        }
        
        function renderTrades() {
            tradesContainer.innerHTML = trades.map((trade, index) => `
                <div class="px-4 py-2 hover:bg-gray-800/50 transition-all cursor-pointer border-b border-gray-800/30 animate-slideIn"
                     style="animation-delay: ${index * 0.05}s;">
                    <div class="grid grid-cols-4 gap-2 text-xs font-mono">
                        <span class="${trade.isBuy ? 'text-green-500' : 'text-red-500'} font-semibold">
                            ${trade.price}
                        </span>
                        <span class="text-right text-gray-300">${trade.amount}</span>
                        <span class="text-right text-gray-400">${trade.time}</span>
                        <span class="text-right ${trade.isBuy ? 'text-green-500' : 'text-red-500'} text-[10px] font-bold">
                            ${trade.type}
                        </span>
                    </div>
                </div>
            `).join('');
        }
        
        function addTrade() {
            const trade = generateTrade();
            trades.unshift(trade);
            
            if (trades.length > 15) {
                trades.pop();
            }
            
            tradeCount++;
            totalVolume += parseFloat(trade.amount);
            
            renderTrades();
            tradeCountElement.textContent = tradeCount.toLocaleString();
            volumeElement.textContent = `${totalVolume.toFixed(4)} BTC`;
        }
        
        addTrade();
        setInterval(addTrade, 800);
    });
</script>

<style>
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .animate-slideIn {
        animation: slideIn 0.3s ease-out forwards;
    }
</style>



<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl relative select-none">
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

<div class="px-4 py-3 border-b border-gray-800 bg-[#161b22] flex items-center justify-between">
<div class="flex items-center gap-2"><span class="text-yellow-500 font-bold tracking-wider">MARKET OVERVIEW</span><span class="text-[10px] text-cyan-400 px-2 py-0.5 bg-cyan-900/30 border border-cyan-500/30 rounded-full animate-pulse">● LIVE DATA</span></div>
</div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 relative z-10">
<div class="bg-[#141414] border border-orange-500/20 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 group">
<div class="flex justify-between mb-2"><span class="text-gray-500 text-xs">Bitcoin</span><span class="text-orange-500 font-bold">BTC</span></div>
<div id="btc-price" class="text-xl font-bold text-gray-100">$43,250</div>
<div id="btc-change" class="text-xs text-green-500 font-mono mb-2">+2.45%</div>
<div id="btc-spark" class="h-10 w-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="bg-[#141414] border border-blue-500/20 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 group">
<div class="flex justify-between mb-2"><span class="text-gray-500 text-xs">Ethereum</span><span class="text-blue-500 font-bold">ETH</span></div>
<div id="eth-price" class="text-xl font-bold text-gray-100">$2,280</div>
<div id="eth-change" class="text-xs text-green-500 font-mono mb-2">+1.82%</div>
<div id="eth-spark" class="h-10 w-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="bg-[#141414] border border-yellow-500/20 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 group">
<div class="flex justify-between mb-2"><span class="text-gray-500 text-xs">BNB</span><span class="text-yellow-500 font-bold">BNB</span></div>
<div id="bnb-price" class="text-xl font-bold text-gray-100">$315</div>
<div id="bnb-change" class="text-xs text-red-500 font-mono mb-2">-0.53%</div>
<div id="bnb-spark" class="h-10 w-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
</div>
<div class="bg-[#141414] border border-purple-500/20 rounded-lg p-4 hover:-translate-y-1 transition-transform duration-300 group">
<div class="flex justify-between mb-2"><span class="text-gray-500 text-xs">Solana</span><span class="text-purple-500 font-bold">SOL</span></div>
<div id="sol-price" class="text-xl font-bold text-gray-100">$98</div>
<div id="sol-change" class="text-xs text-green-500 font-mono mb-2">+5.21%</div>
<div id="sol-spark" class="h-10 w-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>

<div class="grid grid-cols-3 gap-4 px-6 pb-6 pt-0 text-center relative z-10">
<div class="bg-[#1c2128] rounded p-3 border border-white/5"><div class="text-gray-500 text-[10px] uppercase">Market Cap</div><div class="text-white font-mono font-bold">$1.68T</div></div>
<div class="bg-[#1c2128] rounded p-3 border border-white/5"><div class="text-gray-500 text-[10px] uppercase">24h Vol</div><div class="text-white font-mono font-bold">$87.5B</div></div>
<div class="bg-[#1c2128] rounded p-3 border border-white/5"><div class="text-gray-500 text-[10px] uppercase">Dominance</div><div class="text-white font-mono font-bold">51.2%</div></div>
</div>

<script>
(function(){
// 核心修复：使用 SVG ViewBox 机制，不再依赖 JS 计算容器宽度
function createSparkline(id, color, isUp) {
var container = document.getElementById(id);
if(!container) return;
var points = [];
var width = 100; var height = 30;
var y = 15;
for(var i=0; i<=width; i+=5) {
y += (Math.random() - 0.5) * 10;
y = Math.max(2, Math.min(28, y)); // 限制范围
points.push(i + ',' + y);
}
// 确保最后一点的趋势符合涨跌
if(isUp && y > 10) points[points.length-1] = width + ',5';
if(!isUp && y < 20) points[points.length-1] = width + ',25';

var svgHTML = `
<svg viewBox="0 0 100 30" preserveAspectRatio="none" class="w-full h-full overflow-visible">
<defs>
<linearGradient id="grad-${id}" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" style="stop-color:${color};stop-opacity:0.3" />
<stop offset="100%" style="stop-color:${color};stop-opacity:0" />
</linearGradient>
</defs>
<path d="M0,30 L${points.join(' L')} L100,30 Z" fill="url(#grad-${id})" stroke="none" />
<polyline points="${points.join(' ')}" fill="none" stroke="${color}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
container.innerHTML = svgHTML;
}

// 初始化图表
createSparkline('btc-spark', '#f97316', true);
createSparkline('eth-spark', '#3b82f6', true);
createSparkline('bnb-spark', '#eab308', false);
createSparkline('sol-spark', '#a855f7', true);

// 模拟数值跳动
setInterval(function(){
['btc','eth','bnb','sol'].forEach(c => {
var el = document.getElementById(c+'-price');
if(el) {
var current = parseFloat(el.innerText.replace(/[$,]/g,''));
var change = (Math.random()-0.5) * (current*0.005);
el.innerText = '$' + (current+change).toLocaleString('en-US', {maximumFractionDigits: 0});
el.classList.add('text-white');
setTimeout(()=>el.classList.remove('text-white'), 200);
}
});
}, 2000);
})();
</script>
</div>



<div class="not-prose my-10 border border-gray-800 bg-[#0d1117] rounded-xl overflow-hidden shadow-2xl relative">
<div class="px-4 py-3 border-b border-gray-800 bg-[#161b22] flex justify-between items-center">
<div class="flex items-center gap-2"><span class="text-yellow-500 font-bold tracking-wider">VOLATILITY METER</span><span class="text-[10px] text-red-500 px-2 py-0.5 bg-red-900/20 border border-red-500/30 rounded-full">HIGH RISK</span></div>
<span class="text-gray-500 text-xs font-mono">24H RANGE</span>
</div>
<div class="p-6">
<div class="mb-8">
<div class="flex justify-between items-end mb-3">
<span class="text-gray-400 text-sm">Current Index</span>
<span id="vol-text" class="text-3xl font-black text-red-500 tracking-tighter" style="text-shadow: 0 0 20px rgba(239,68,68,0.5);">EXTREME</span>
</div>
<div class="relative h-4 bg-gray-800 rounded-full overflow-visible">
<div class="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-600 opacity-80"></div>
<div id="vol-indicator" class="absolute top-1/2 -mt-3 w-1.5 h-6 bg-white shadow-[0_0_10px_white] transition-all duration-1000 ease-out z-10" style="left: 85%;"></div>
</div>
<div class="flex justify-between text-[10px] text-gray-500 mt-2 font-mono uppercase">
<span>Low</span><span>Medium</span><span>High</span><span>Extreme</span>
</div>
</div>
<div class="grid grid-cols-3 gap-4 border-t border-gray-800 pt-6">
<div class="text-center"><div class="text-gray-500 text-[10px] mb-1">Std Dev</div><div class="text-gray-200 font-mono font-bold text-lg">4.2%</div></div>
<div class="text-center border-l border-gray-800"><div class="text-gray-500 text-[10px] mb-1">Fear/Greed</div><div id="fear-val" class="text-yellow-500 font-mono font-bold text-lg">24</div></div>
<div class="text-center border-l border-gray-800"><div class="text-gray-500 text-[10px] mb-1">Volume</div><div class="text-gray-200 font-mono font-bold text-lg">High</div></div>
</div>
</div>
<script>
(function(){
var ind = document.getElementById('vol-indicator');
var txt = document.getElementById('vol-text');
var fear = document.getElementById('fear-val');
setInterval(function(){
var rand = 70 + Math.random() * 25; // 保持在高位波动
ind.style.left = rand + '%';
if(rand > 85) { txt.innerText = 'EXTREME'; txt.className = 'text-3xl font-black text-red-600 tracking-tighter'; }
else if(rand > 60) { txt.innerText = 'HIGH'; txt.className = 'text-3xl font-black text-orange-500 tracking-tighter'; }
else { txt.innerText = 'NORMAL'; txt.className = 'text-3xl font-black text-green-500 tracking-tighter'; }
fear.innerText = Math.floor(20 + Math.random() * 10); // 恐慌指数
}, 2000);
})();
</script>
</div>





<div class="not-prose my-10 w-full h-auto">
<style>
/* 强制注入必要的 3D CSS，不依赖 Tailwind */
.crypto-flip-container { background-color: transparent; perspective: 1000px; height: 300px; }
.crypto-flip-inner { position: relative; width: 100%; height: 100%; text-align: left; transition: transform 0.8s; transform-style: preserve-3d; }
.crypto-flip-container:hover .crypto-flip-inner { transform: rotateY(180deg); }
.crypto-flip-front, .crypto-flip-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 1rem; overflow: hidden; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5); }
.crypto-flip-front { background: #111; color: white; }
.crypto-flip-back { background: #0f0f10; color: white; transform: rotateY(180deg); border: 1px solid rgba(255,255,255,0.1); }
</style>

<div class="text-center mb-8">
<h3 class="text-2xl font-bold text-yellow-500 mb-2">MARKET ASSETS</h3>
<p class="text-gray-400 text-xs uppercase tracking-widest animate-pulse">Hover cards to reveal details</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

<div class="crypto-flip-container cursor-pointer">
<div class="crypto-flip-inner">
<div class="crypto-flip-front border border-orange-500/30">
<div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#2a1a0f]"></div>
<div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500 to-transparent"></div>
<div class="relative h-full p-6 flex flex-col justify-between z-10">
<div class="text-right text-6xl font-black text-white/5 select-none">BTC</div>
<div>
<div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-[0_0_20px_orange]">₿</div>
<h4 class="text-2xl font-bold text-white">Bitcoin</h4>
<p class="text-orange-400 font-mono text-sm">The King</p>
</div>
<div class="w-full bg-gray-800/50 h-1 rounded-full overflow-hidden backdrop-blur"><div class="bg-orange-500 h-full w-[75%] shadow-[0_0_10px_orange]"></div></div>
</div>
</div>
<div class="crypto-flip-back p-6 flex flex-col justify-center">
<div class="text-xs text-gray-500 uppercase mb-1 font-mono">Current Price</div>
<div class="text-4xl font-bold text-white mb-6 tracking-tight">$43,250</div>
<div class="space-y-4">
<div class="flex justify-between items-center border-b border-gray-800 pb-2">
<span class="text-gray-400 text-sm">24h Change</span>
<span class="text-green-400 font-mono font-bold flex items-center gap-1">▲ 2.45%</span>
</div>
<div class="flex justify-between items-center border-b border-gray-800 pb-2">
<span class="text-gray-400 text-sm">Market Cap</span>
<span class="text-gray-200 font-mono">$845 B</span>
</div>
<div class="flex justify-between items-center">
<span class="text-gray-400 text-sm">Volume</span>
<span class="text-gray-200 font-mono">$28 B</span>
</div>
</div>
</div>
</div>
</div>

<div class="crypto-flip-container cursor-pointer">
<div class="crypto-flip-inner">
<div class="crypto-flip-front border border-blue-500/30">
<div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#0f1520]"></div>
<div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>
<div class="relative h-full p-6 flex flex-col justify-between z-10">
<div class="text-right text-6xl font-black text-white/5 select-none">ETH</div>
<div>
<div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-[0_0_20px_blue]">◆</div>
<h4 class="text-2xl font-bold text-white">Ethereum</h4>
<p class="text-blue-400 font-mono text-sm">Smart Contracts</p>
</div>
<div class="w-full bg-gray-800/50 h-1 rounded-full overflow-hidden backdrop-blur"><div class="bg-blue-500 h-full w-[45%] shadow-[0_0_10px_blue]"></div></div>
</div>
</div>
<div class="crypto-flip-back p-6 flex flex-col justify-center">
<div class="text-xs text-gray-500 uppercase mb-1 font-mono">Current Price</div>
<div class="text-4xl font-bold text-white mb-6 tracking-tight">$2,280</div>
<div class="space-y-4">
<div class="flex justify-between items-center border-b border-gray-800 pb-2">
<span class="text-gray-400 text-sm">24h Change</span>
<span class="text-green-400 font-mono font-bold flex items-center gap-1">▲ 1.82%</span>
</div>
<div class="flex justify-between items-center border-b border-gray-800 pb-2">
<span class="text-gray-400 text-sm">Market Cap</span>
<span class="text-gray-200 font-mono">$274 B</span>
</div>
<div class="flex justify-between items-center">
<span class="text-gray-400 text-sm">Volume</span>
<span class="text-gray-200 font-mono">$15 B</span>
</div>
</div>
</div>
</div>
</div>

<div class="crypto-flip-container cursor-pointer">
<div class="crypto-flip-inner">
<div class="crypto-flip-front border border-purple-500/30">
<div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#150f20]"></div>
<div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500 to-transparent"></div>
<div class="relative h-full p-6 flex flex-col justify-between z-10">
<div class="text-right text-6xl font-black text-white/5 select-none">SOL</div>
<div>
<div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-[0_0_20px_purple]">◎</div>
<h4 class="text-2xl font-bold text-white">Solana</h4>
<p class="text-purple-400 font-mono text-sm">High Speed</p>
</div>
<div class="w-full bg-gray-800/50 h-1 rounded-full overflow-hidden backdrop-blur"><div class="bg-purple-500 h-full w-[85%] shadow-[0_0_10px_purple]"></div></div>
</div>
</div>
<div class="crypto-flip-back p-6 flex flex-col justify-center">
<div class="text-xs text-gray-500 uppercase mb-1 font-mono">Current Price</div>
<div class="text-4xl font-bold text-white mb-6 tracking-tight">$98.50</div>
<div class="space-y-4">
<div class="flex justify-between items-center border-b border-gray-800 pb-2">
<span class="text-gray-400 text-sm">24h Change</span>
<span class="text-green-400 font-mono font-bold flex items-center gap-1">▲ 5.21%</span>
</div>
<div class="flex justify-between items-center border-b border-gray-800 pb-2">
<span class="text-gray-400 text-sm">Market Cap</span>
<span class="text-gray-200 font-mono">$42 B</span>
</div>
<div class="flex justify-between items-center">
<span class="text-gray-400 text-sm">Volume</span>
<span class="text-gray-200 font-mono">$3.8 B</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>