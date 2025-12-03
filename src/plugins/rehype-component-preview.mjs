import { h } from 'hastscript';
import fs from 'node:fs';
import path from 'node:path';

export function PreviewComponent(node, file) {
  const name = node.properties.name;
  
  if (!name) {
    console.warn('⚠️ Preview 组件缺少 name 属性');
    return h('div', { class: 'preview-error' }, [
      h('p', '错误：Preview 组件需要 name 属性')
    ]);
  }

  const height = node.properties.height || 'auto';
  
  // 查找组件文件
  const demosDir = path.join(process.cwd(), 'src/demos');
  let componentPath = null;
  let componentCode = '';
  let fileExt = '';

  try {
    // 尝试查找 .astro 或 .svelte 文件
    const astroPath = path.join(demosDir, `${name}.astro`);
    const sveltePath = path.join(demosDir, `${name}.svelte`);

    if (fs.existsSync(astroPath)) {
      componentPath = astroPath;
      componentCode = fs.readFileSync(astroPath, 'utf-8');
      fileExt = 'astro';
    } else if (fs.existsSync(sveltePath)) {
      componentPath = sveltePath;
      componentCode = fs.readFileSync(sveltePath, 'utf-8');
      fileExt = 'svelte';
    } else {
      throw new Error(`找不到组件: ${name}`);
    }
  } catch (error) {
    console.error(`❌ ${error.message}`);
    return h('div', { class: 'preview-error' }, [
      h('p', `错误：找不到组件 ${name}，请在 src/demos/ 目录创建 ${name}.astro`)
    ]);
  }

  // 生成唯一 ID
  const previewId = `preview-${name}-${Math.random().toString(36).substr(2, 9)}`;
  const relativePath = `src/demos/${name}.${fileExt}`;

  // 构建 HTML 结构
  return h('div', { class: 'preview-wrapper' }, [
    // 预览容器
    h('div', { 
      class: 'preview-container',
      'data-component': name,
      'data-preview-id': previewId,
      style: `min-height: ${height};`
    }, [
      h('div', { class: 'preview-loading' }, '加载中...')
    ]),
    
    // 代码折叠区
    h('details', { class: 'code-details' }, [
      h('summary', { class: 'code-summary' }, [
        h('span', { class: 'code-path' }, `📄 ${relativePath}`),
        h('span', { class: 'code-toggle' }, '▼')
      ]),
      h('div', { class: 'code-wrapper' }, [
        h('pre', [
          h('code', { class: `language-${fileExt}` }, componentCode.trim())
        ])
      ])
    ])
  ]);
}
