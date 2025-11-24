// ==================================================================
// 文件路径: src/utils/global-initializer.ts
// 功能描述: 这是我们网站的全局客户端脚本“总指挥”。
//           它负责在页面加载和 Swup 切换时，统一初始化所有需要交互的功能，
//           例如 Umami 访问量统计。这种方式可以完美避开 Swup 的脚本执行冲突。
// ==================================================================

// 从我们之前创建的 umami-client 模块中，导入两个核心的初始化函数。
import { initializePageViews, initializeTotalStats } from "./umami-client";

/**
 * 一个“指挥官”函数，它会调用所有需要运行的初始化任务。
 * 这样做的好处是，我们只需要在不同的时机（页面加载、Swup切换）调用这一个函数即可。
 */
function runAllInitializers() {
	// 调用函数，初始化【总访问量】的显示。
	initializeTotalStats();
	// 调用函数，初始化【文章访问量】的显示。
	initializePageViews();
}

// --- 脚本执行的两个关键时机 ---

// 1. 当页面首次完整加载时，运行一次“指挥官”函数。
//    'DOMContentLoaded' 是一个标准的浏览器事件，表示页面的 HTML 已经完全加载和解析。
document.addEventListener("DOMContentLoaded", runAllInitializers);

// 2. 每当 Swup 完成页面内容的平滑过渡和替换后，再次运行“指挥官”函数。
//    'swup:content:replace' 是 Swup 库提供的自定义事件，是与它集成的关键。
document.addEventListener("swup:content:replace", runAllInitializers);


// ... 你原有的代码保持不变

// ========== Preview 组件加载器 ==========
async function loadPreviews() {
  const previewContainers = document.querySelectorAll('[data-component]');
  
  if (previewContainers.length === 0) return;
  
  console.log(`🎨 发现 ${previewContainers.length} 个 Preview 组件`);
  
  for (const container of previewContainers) {
    const componentName = container.getAttribute('data-component');
    if (!componentName) continue;

    try {
      // 动态导入组件
      const modules = import.meta.glob('/src/demos/**/*.{astro,svelte}');
      
      for (const path in modules) {
        const fileName = path.split('/').pop()?.replace(/\.(astro|svelte)$/, '');
        
        if (fileName === componentName) {
          console.log(`✅ 加载组件: ${componentName}`);
          const module = await modules[path]();
          
          // 清空加载提示
          container.innerHTML = '';
          
          // 根据文件类型渲染
          if (path.endsWith('.svelte')) {
            // Svelte 组件
            const Component = (module as any).default;
            new Component({
              target: container as HTMLElement,
            });
          } else {
            // Astro 组件（客户端静态展示）
            container.innerHTML = `
              <div class="astro-component-loaded">
                <p style="color: #666; font-size: 14px;">
                  ⚠️ Astro 组件 "${componentName}" 需要服务端渲染
                </p>
              </div>
            `;
          }
          
          break;
        }
      }
    } catch (error) {
      console.error(`❌ 加载组件失败: ${componentName}`, error);
      container.innerHTML = `
        <div class="preview-error" style="padding: 1rem; background: #fee; color: #c00; border-radius: 0.5rem;">
          组件加载失败: ${componentName}
        </div>
      `;
    }
  }
}

// 初始加载
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPreviews);
} else {
  loadPreviews();
}

// Swup 页面切换后重新加载
document.addEventListener('swup:contentReplaced', () => {
  console.log('🔄 Swup 页面切换，重新加载 Preview 组件');
  loadPreviews();
});
