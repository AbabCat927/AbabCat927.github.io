#!/bin/bash

# 文件系统安全清理脚本
# 作者: Kilo Code
# 日期: $(date)
# 警告: 执行前请确保已备份重要文件

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查是否在正确的目录
check_directory() {
    log_info "检查当前目录..."
    if [ ! -f "package.json" ]; then
        log_error "未找到package.json文件，请确保在项目根目录执行此脚本"
        exit 1
    fi
    log_success "目录检查通过"
}

# 检查Git状态
check_git_status() {
    log_info "检查Git状态..."
    if [ -d ".git" ]; then
        if [ -n "$(git status --porcelain)" ]; then
            log_warning "检测到未提交的更改，建议先提交代码"
            read -p "是否继续执行清理？(y/N): " -n 1 -r
            echo
            if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                log_info "清理操作已取消"
                exit 0
            fi
        else
            log_success "Git状态检查通过"
        fi
    else
        log_warning "未检测到Git仓库"
    fi
}

# 保护posts目录
protect_posts() {
    log_info "保护posts目录..."
    POSTS_DIR="src/content/posts"
    if [ -d "$POSTS_DIR" ]; then
        POSTS_SIZE=$(du -sh "$POSTS_DIR" | cut -f1)
        POSTS_COUNT=$(find "$POSTS_DIR" -type f | wc -l)
        log_success "posts目录已保护 (大小: $POSTS_SIZE, 文件数: $POSTS_COUNT)"
    else
        log_warning "未找到posts目录"
    fi
}

# 显示当前空间使用情况
show_space_usage() {
    log_info "当前空间使用情况:"
    echo "================================"
    du -sh . 2>/dev/null
    echo "================================"
    echo "主要目录大小:"
    du -sh node_modules .pnpm-store dist src public 2>/dev/null | sort -hr
    echo "================================"
}

# 第一阶段清理
phase1_cleanup() {
    log_info "开始第一阶段清理 (安全清理)..."
    
    # 清理dist目录
    if [ -d "dist" ]; then
        DIST_SIZE=$(du -sh dist | cut -f1)
        log_info "清理dist目录 (大小: $DIST_SIZE)..."
        rm -rf dist/
        log_success "dist目录已清理"
    fi
    
    # 清理空文件夹
    log_info "清理空文件夹..."
    find . -type d -empty -delete 2>/dev/null || true
    log_success "空文件夹已清理"
    
    # 清理临时日志文件
    log_info "清理临时日志文件..."
    find . -name "*.log" -not -path "./node_modules/*" -delete 2>/dev/null || true
    log_success "临时日志文件已清理"
    
    log_success "第一阶段清理完成"
}

# 第二阶段清理 (可选)
phase2_cleanup() {
    log_warning "第二阶段清理将删除依赖包，需要重新安装"
    read -p "是否继续第二阶段清理？(y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_info "跳过第二阶段清理"
        return
    fi
    
    log_info "开始第二阶段清理..."
    
    # 清理pnpm-store
    if [ -d ".pnpm-store" ]; then
        PNPMS_SIZE=$(du -sh .pnpm-store | cut -f1)
        log_info "清理.pnpm-store目录 (大小: $PNPMS_SIZE)..."
        rm -rf .pnpm-store/
        log_success ".pnpm-store目录已清理"
    fi
    
    # 清理node_modules
    if [ -d "node_modules" ]; then
        NODE_SIZE=$(du -sh node_modules | cut -f1)
        log_info "清理node_modules目录 (大小: $NODE_SIZE)..."
        rm -rf node_modules/
        log_success "node_modules目录已清理"
        
        log_info "重新安装依赖..."
        if command -v pnpm &> /dev/null; then
            pnpm install
        elif command -v npm &> /dev/null; then
            npm install
        else
            log_error "未找到包管理器，请手动安装依赖"
            return
        fi
        log_success "依赖重新安装完成"
    fi
    
    log_success "第二阶段清理完成"
}

# 第三阶段清理 (可选)
phase3_cleanup() {
    log_warning "第三阶段清理将删除临时数据库文件"
    read -p "是否继续第三阶段清理？(y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_info "跳过第三阶段清理"
        return
    fi
    
    log_info "开始第三阶段清理..."
    
    # 清理向量数据库文件
    if [ -f "src/content/.smtcmp_vector_db.tar.gz" ]; then
        DB_SIZE=$(ls -lh src/content/.smtcmp_vector_db.tar.gz | awk '{print $5}')
        log_info "清理向量数据库文件 (大小: $DB_SIZE)..."
        rm src/content/.smtcmp_vector_db.tar.gz
        log_success "向量数据库文件已清理"
    fi
    
    # Git优化
    if [ -d ".git" ]; then
        log_info "执行Git仓库优化..."
        git gc --aggressive --prune=now
        log_success "Git仓库优化完成"
    fi
    
    log_success "第三阶段清理完成"
}

# 显示清理后的空间使用情况
show_final_space() {
    log_info "清理后空间使用情况:"
    echo "================================"
    du -sh . 2>/dev/null
    echo "================================"
    echo "主要目录大小:"
    du -sh node_modules .pnpm-store dist src public 2>/dev/null | sort -hr
    echo "================================"
}

# 主函数
main() {
    echo "=========================================="
    echo "文件系统安全清理脚本"
    echo "警告: 此脚本将删除文件，请确保已备份重要数据"
    echo "=========================================="
    echo ""
    
    check_directory
    check_git_status
    protect_posts
    show_space_usage
    
    echo ""
    log_info "清理计划:"
    echo "第一阶段: 安全清理 (构建产物、空文件夹、临时文件)"
    echo "第二阶段: 依赖包清理 (可选，需要重新安装)"
    echo "第三阶段: 深度清理 (可选，删除缓存文件)"
    echo ""
    
    read -p "是否开始执行清理？(y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_info "清理操作已取消"
        exit 0
    fi
    
    phase1_cleanup
    phase2_cleanup
    phase3_cleanup
    
    show_final_space
    
    log_success "清理操作完成！"
    log_info "建议重新启动开发服务器以验证功能正常"
}

# 执行主函数
main "$@"