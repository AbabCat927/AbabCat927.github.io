# 关于这个网站

这个网站使用**Astro**框架和**Mizuki**主题构建。🥰

::github{repo="matsuzaka-yuki/Mizuki"}

---

# 😘 你好，我是AbabCat



  <div class="tags-container">
    <span class="tag">00后</span>
    <span class="tag">学生</span>
    <span class="tag">INFP</span>
    <span class="tag">轻度二次元</span>
  </div>
  <div class="items-container">
    <div class="item-row">
      <span class="item-icon">♂️</span>
      <span class="item-label">性别</span>
      <span class="item-value">男</span>
    </div>
    <div class="item-row">
      <span class="item-icon">🌆</span>
      <span class="item-label">常住地</span>
      <span class="item-value">上海</span>
    </div>
     <div class="item-row">
      <span class="item-icon">🐧</span>
      <span class="item-label">QQ</span>
      <span class="item-value">2172314079</span>
    </div>
    <div class="item-row">
      <span class="item-icon">📮</span>
      <span class="item-label">邮箱</span>
      <span class="item-value">phanhongha01745@gmail.com</span>
    </div>
    <div class="item-row">
      <span class="item-icon">🎮</span>
      <span class="item-label">steam</span>
      <span class="item-value">1119164602</span>
    </div>
    <div class="item-row">
      <span class="item-icon">💬</span>
      <span class="item-label">WeChat</span>
      <span class="item-value">zzzzxc1715</span>
    </div>
  </div>
</div>

<style>
  /* 将方案一中 AboutCard.astro 组件的 <style> 部分复制到这里 */
  .about-card {
    background-color: #fff; /* 假设是白色背景 */
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.10); /* 轻微阴影 */
    margin-bottom: 24px;
    max-width: 800px; /* 控制卡片最大宽度 */
    
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  .card-icon {
    font-size: 2em; /* 图标大小 */
    margin-right: 10px;
  }

  .card-title {
    font-size: 1.8em; /* 标题大小 */
    font-weight: bold;
    color: #333;
    margin: 0;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  .tag {
    background-color: #f9f2f9; /* 非常浅的淡紫色背景 */ 
    color: #943d94;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.9em;
    font-weight: 500;
  }

  .items-container {
    /* 容器样式，可以根据需要调整 */
  }

  .item-row {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee; /* 分隔线 */
  }

  .item-row:last-child {
    border-bottom: none; /* 最后一个不显示下边框 */
  }

  .item-icon {
    font-size: 1.2em;
    margin-right: 15px;
    color: #888; /* 图标颜色 */
    flex-shrink: 0; /* 防止图标被挤压 */
  }

  .item-label {
    font-weight: normal; /* 标签文字不加粗 */
    color: #555;
    flex: 0 0 80px; /* 固定标签宽度，或根据内容调整 */
    margin-right: 10px;
  }

  .item-value {
    color: #333;
    font-weight: 500;
    flex-grow: 1; /* 值占据剩余空间 */
  }
</style>

