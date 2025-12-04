#!/bin/bash

echo "=========================================="
echo "文件系统垃圾文件分析报告"
echo "生成时间: $(date)"
echo "=========================================="
echo ""

echo "1. 目录大小分析:"
echo "================"
du -sh * 2>/dev/null | sort -hr | head -20
echo ""

echo "2. 临时文件和缓存文件:"
echo "===================="
echo "node_modules目录大小: $(du -sh node_modules 2>/dev/null | cut -f1)"
echo ".pnpm-store目录大小: $(du -sh .pnpm-store 2>/dev/null | cut -f1)"
echo "dist目录大小: $(du -sh dist 2>/dev/null | cut -f1)"
echo ""

echo "3. 临时文件列表:"
echo "=============="
find . -type f \( -name "*.tmp" -o -name "*.temp" -o -name "*.log" -o -name "*.cache" -o -name "*~" -o -name "*.swp" -o -name "*.bak" -o -name "*.old" \) -exec ls -lh {} \; 2>/dev/null
echo ""

echo "4. 空文件夹列表:"
echo "=============="
find . -type d -empty 2>/dev/null
echo ""

echo "5. 大文件列表 (>10MB):"
echo "===================="
find . -type f -size +10M -exec ls -lh {} \; 2>/dev/null | sort -k5 -hr
echo ""

echo "6. 重复文件检查:"
echo "=============="
echo "检查图片文件重复..."
find . -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" -o -name "*.gif" \) -not -path "./dist/*" -exec md5sum {} \; | sort | uniq -d -w32 | cut -d' ' -f3-
echo ""

echo "7. /posts目录保护状态:"
echo "===================="
echo "posts目录大小: $(du -sh src/content/posts 2>/dev/null | cut -f1)"
echo "posts目录文件数量: $(find src/content/posts -type f | wc -l)"
echo ""

echo "8. 可能的下载残留文件:"
echo "===================="
find . -name "*.part" -o -name "*.crdownload" -o -name "*.download" -exec ls -lh {} \; 2>/dev/null
echo ""

echo "9. 系统缓存和临时数据库文件:"
echo "========================"
if [ -f "src/content/.smtcmp_vector_db.tar.gz" ]; then
    echo "向量数据库文件: $(ls -lh src/content/.smtcmp_vector_db.tar.gz | awk '{print $5}')"
fi
echo ""

echo "10. 未使用的配置文件检查:"
echo "======================"
echo "检查可能的冗余配置文件..."
find . -name "*.json" -o -name "*.yml" -o -name "*.yaml" -o -name "*.toml" | grep -v node_modules | grep -v .pnpm-store | head -10
echo ""

echo "=========================================="
echo "分析完成"
echo "=========================================="