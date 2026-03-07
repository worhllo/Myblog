> [!NOTE]
> 一个简约的博客/笔记网站模板
本仓库从[nolebase](https://github.com/nolebase/nolebase/) 精简而来，用于初始化仓库
原仓库：[KL-Hashboke](https://github.com/KL-Hash/boke)

## 基于 Vercel + GitHub 的博客部署教程（从 Fork 到上线全流程）


### 第一步：Fork GitHub 仓库（40秒）

1. 打开 GitHub 仓库：[https://github.com/WD09KL/boke](https://github.com/WD09KL/boke)
2. 点击右上角 Fork 按钮（未登录会提示注册）
3. 选择自己的账号完成复刻
现在你拥有了完全相同的博客代码库！

## 第二步：Vercel 部署（1分钟）

1. 访问 [vercel.com](https://vercel.com) 点击「开始部署」
2. 选择「使用 GitHub 继续」授权登录
3. 在导入页面找到刚 fork 的 boke 项目
关键设置：在「构建和输出设置」中将输出目录改为 
```
.vitepress/dist
```
最后点击「部署」按钮！

### 实时部署过程（30秒）

看！Vercel 正在自动：
✓ 安装依赖
✓ 执行构建
✓ 生成临时域名
当看到「Production Deployment Complete」就成功了！

### 效果验证（20秒）

现在用任意设备打开分配的 xxx.vercel.app 域名，你的个人博客已经：
✓ 支持响应式布局
✓ 自动SSL加密
✓ 全球CDN加速

### 进阶提示（20秒）

小技巧：
• 在 Vercel 项目设置可绑定自定义域名
• 每次Git提交都会触发自动重新部署
• 想修改内容？直接编辑仓库里的Markdown文件




