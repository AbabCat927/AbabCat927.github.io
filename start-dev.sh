#!/bin/bash
# -----------------------------------------------------------------
#  Astro 本地预览服务器启动脚本 (start-dev.sh) - v4 (使用 pnpm)
#  功能: 强制切换到脚本所在目录，并使用 pnpm 来启动 Astro 开发服务器。
#        这是最可靠的方式，因为它利用了 pnpm 对项目环境的管理能力。
# -----------------------------------------------------------------

# 获取脚本所在的目录 (通常是 /workspace 或挂载的卷)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

echo ""
echo "========================================================"
echo "  正在启动 Astro 本地预览服务器 (使用 pnpm)..."
echo "  目标工作目录: $SCRIPT_DIR" # 指明脚本将切换到的工作目录
echo "========================================================"
echo ""

# --- 强制切换到脚本所在的目录 ---
# 确保后续命令在正确的项目根目录下执行。
cd "$SCRIPT_DIR" || exit 1

echo "  当前工作目录已成功切换至: $(pwd)" # 显示确认信息
echo ""

# 【核心命令 - pnpm 版】
# 使用 pnpm 来执行在 package.json 中定义的 'astro' 命令。
# pnpm 会自动处理 node 和 astro 脚本的路径问题。
# 我们假设你的 package.json 中有类似 "dev": "astro dev" 的脚本，
# 或者 pnpm 能够直接运行 "astro" 命令。
# 如果直接运行 "pnpm astro" 不行，你可能需要用 "pnpm run dev" (取决于你的 package.json)。
# 我们在这里直接调用 astro 命令，pnpm 会在 node_modules/.bin 中查找它。
pnpm astro dev --host 0.0.0.0 --open

# 如果上一个命令失败 (比如 pnpm 找不到 astro 命令或 Astro 内部出错)，脚本会在这里因错误退出。
# 如果成功，Astro 开发服务器会持续运行，直到你手动停止 (Ctrl+C)。

exit 0 # 脚本正常结束 (虽然服务器运行时不会执行到这里)

