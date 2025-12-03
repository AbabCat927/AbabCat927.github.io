---
title: dify的本地部署
published: 2025-12-01 11:38:22
pinned: false
updated: 2025-12-01 22:00:59
description: 在mac本地部署dify的尝试
image: ""
tags:
  - 教程
  - AI
password: ""
encrypted: false
category: 人工智能
licenseName: MIT
sourceLink: ""
draft: false
---
**前提：** 确保你已经安装并启动了 Docker Desktop

```bash
# 1. 回到你的用户根目录
cd ~

# 2. 创建一个专门放项目的文件夹
mkdir -p MyProjects
cd MyProjects

# 3. 重新克隆 Dify 代码
git clone https://github.com/langgenius/dify.git

# 4. 进入 docker 目录
cd dify/docker

# 5. 复制配置文件
cp .env.example .env

# 6. 启动 Dify
docker compose up -d
```

:::note
因为网络原因，在启动的时候有可能会下载中断，无需在意，直接重新输入 docker compose up -d 就可以继续下载了，一直不行的话就考虑换源吧。
:::

**如何启动：** 打开浏览器，访问 `http://localhost`，然后注册管理员账户并使用就可以了。

**如何停止：** 重新打开终端，进入那个目录 (`cd ~/MyProjects/dify/docker`)，输入 `docker compose down` 即可。

---

考虑到一直开着的话，内存和电池负担会比较重，并且停止对流程还不算简单，可以考虑简化指令输入。

可以在 `.zshrc` (终端配置文件) 里加两个**快捷别名**，把繁琐的命令简化成一个词：

1.  打开配置文件：

```bash    
nano ~/.zshrc
```

2.  在文件末尾加上这两行（假设你的路径是 `~/MyProjects/dify/docker`）：

```bash
alias dify-up="cd ~/MyProjects/dify/docker && docker compose up -d"
alias dify-stop="cd ~/MyProjects/dify/docker && docker compose stop"
```

3.  保存退出 (`Ctrl+O`, `Enter`, `Ctrl+X`)，然后让它生效：

```bash
source ~/.zshrc
```

**简化操作流：**

  * **启动**：打开终端输入 `dify-up`，去浏览器用。
  * **关闭**：打开终端输入 `dify-stop`。

**如果你觉得这依然很麻烦的话，那就直接在 docker Desktop 里面一键启停吧。**