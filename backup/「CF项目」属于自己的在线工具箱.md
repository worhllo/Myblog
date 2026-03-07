> [!NOTE]
> 只需简单几步，即可快速搭建属于自己的在线工具箱。
仓库fork于：[Tools-Web](https://github.com/naroat/tools-web)，感谢naroat做出的贡献！
源仓库：[2424004764tools-web 一站式在线工具箱：覆盖开发运维、文本处理、图片处理、数据图表、趣味互动、选择随机、教育学术与 AI 工具；提供 JSONCSVTSV 互转、随机密码UUID、时间戳与进制转换、单位换算、URL 编解码参数解析、正则测试、Markdown、文本对比去重、哈希校验、文件大小转换、HTTP 状态码、JWT 解析、Cron 表达式、HTML 实体、二维码生成与识别、在线图片编辑分割转 Base64、文本转图片、色板取色器、柱状折线饼散点图、摩斯电码，以及贪吃蛇2048俄罗斯方块扫雷打地鼠数字华容道数独等小游戏，另含 IP 查询、网站信息获取、AI 起名变量名文生图翻译与在线请求调试等实用功能。](https://github.com/2424004764/tools-web)

> ## Excerpt
> 安装最新版的tool-web并部署到Cloudflare上

---
## 安装最新版的tool-web并部署到Cloudflare上

### 1、先fork我的仓库

仓库地址：https://github.com/2424004764/tools-web![bdb832f767d7a75aafdafca16524b90d.png](%E5%AE%89%E8%A3%85%E6%9C%80%E6%96%B0%E7%89%88%E7%9A%84tool-web%E5%B9%B6%E9%83%A8%E7%BD%B2%E5%88%B0Cloudflare%E4%B8%8A/640.webp)

### 2、代码clone到本地

![a510265e532276ea51e1ce7a4974ec29.png](%E5%AE%89%E8%A3%85%E6%9C%80%E6%96%B0%E7%89%88%E7%9A%84tool-web%E5%B9%B6%E9%83%A8%E7%BD%B2%E5%88%B0Cloudflare%E4%B8%8A/640.1.webp)

### 3、修改本地代码

打开node\_modules.pnpm\\qrcode-vue3@1.7.1\\node\_modules\\qrcode-vue3\\src\\core\\QRCodeStyling.ts，修改42行： 原来的：![c15c51b04312e98929a35c8fe12c5ea6.png](%E5%AE%89%E8%A3%85%E6%9C%80%E6%96%B0%E7%89%88%E7%9A%84tool-web%E5%B9%B6%E9%83%A8%E7%BD%B2%E5%88%B0Cloudflare%E4%B8%8A/640.2.webp)改为：

```kotlin
this._qr = <QRCode>qr(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel);
```

### 4、安装一下依赖

```
cp .env.example .env.productionpnpm install
```

### 4、本地代码编译打包一下，确认没有问题

命令：

```swift
pnpm build:pro && xcopy /E /I /H /Y .\functions\* .\dist\functions\ && xcopy /Y .\wrangler.toml .\dist\ && xcopy /Y .\robots.txt .\dist\ && xcopy /Y .\sitemap.xml .\dist\
```

### 5、本地代码run起来

命令：

```
pnpm dev
```

### 6、在cf上部署

#### 6、1 创建应用程序

等待构建：

构建成功：

此时点开链接就可以访问了。

这个域名仅供部署教程，之后我会删除掉这个pages。

我们点击继续处理项目：

添加一个包含路径：路径为：

```
dist/*
```

点击保存。

### 7、修改网站内容并推送到Cloudflare上重新构建并生效

比如修改一下网站左上角的标题，改为：好用的工具箱

打开.env.production：

修改后，重新编译打包：

```swift
pnpm build:pro && xcopy /E /I /H /Y .\functions\* .\dist\functions\ && xcopy /Y .\wrangler.toml .\dist\ && xcopy /Y .\robots.txt .\dist\ && xcopy /Y .\sitemap.xml .\dist\
```

打包完成后，提交代码：

```sql
git add . && git commit -m "修改页面标题" && git push origin master
```

推送后，Cloudflare会重新构建：

等待构建完成就生效了：

OK！生效了，该其他的或者加减功能也是一样的方法部署~
