# 设置构建指令
command="docs:build"
# 设置构建生成地址
dest="docs/.vuepress/dist"
# 设置域名
domain="study-guide.djweb.site"
# 设置远程仓库
origin="https://github.com/Try-To-Create/study-guide.git"
# 获取当前日期
date=$(date +%Y/%m/%d)
# 提交描述信息
m="update docs"
# 部署描述信息
deploy_m="deploy $date"

# 获取参数
while getopts "m:" opt
do
    case $opt in
        m)
            m="$OPTARG"
            ;;
    esac
done

# 判断是否有git仓库存在
if [ ! -d .git ]
then
    # 初始化新的git仓库
    git init
fi

# 构建文档
npm run "$command"

# 添加修改到暂存区
git add .
# 提交更新
git commit -m "$m"
# 更新到远程仓库main分支
git push "$origin" main

# 进入构建生成地址
cd "$dest"

# 如果域名不为空则生成CNAME文件
if [ "$domain" != "" ]
then
    echo "$domain" > CNAME
fi

# 初始化新的 git 仓库
git init
# 添加修改到暂存区
git add .
# 提交部署
git commit -m "$deploy_m"
# 强制更新到远程仓库gh-pages分支
git push -f "$origin" main:gh-pages
