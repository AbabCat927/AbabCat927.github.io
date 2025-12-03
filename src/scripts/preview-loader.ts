// 动态加载组件的客户端脚本
async function loadPreviews() {
  const previewContainers = document.querySelectorAll('[data-component]');
  
  for (const container of previewContainers) {
    const componentName = container.getAttribute('data-component');
    if (!componentName) continue;

    try {
      // 动态导入组件
      const modules = import.meta.glob('/src/demos/**/*.{astro,svelte}');
      
      for (const path in modules) {
        const fileName = path.split('/').pop()?.replace(/\.(astro|svelte)$/, '');
        
        if (fileName === componentName) {
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
            // Astro 组件（需要服务端渲染，客户端只显示占位）
            container.innerHTML = '<div class="astro-placeholder">此组件需要服务端渲染</div>';
          }
          
          break;
        }
      }
    } catch (error) {
      console.error(`加载组件失败: ${componentName}`, error);
      container.innerHTML = '<div class="preview-error">组件加载失败</div>';
    }
  }
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPreviews);
} else {
  loadPreviews();
}

// Swup 页面切换后重新加载
document.addEventListener('swup:contentReplaced', loadPreviews);
