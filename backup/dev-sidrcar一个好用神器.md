## dev-sidecar
开发者边车，命名取自service-mesh的service-sidecar，意为为开发者打辅助的边车工具（以下简称ds）
通过本地代理的方式将https请求代理到一些国内的加速通道上



## 重要提醒

> [!IMPORTANT]
> 注意：由于electron无法监听windows的关机事件，开着ds情况下直接重启电脑，会导致无法上网，你可以手动启动ds即可恢复网络，你也可以将ds设置为开机自启。


> [!IMPORTANT]
> 注意：本应用启动会自动修改系统代理，所以会与其他代理软件有冲突，一起使用时请谨慎使用。与Watt Toolkit（原Steam++）共用时，请以hosts模式启动Watt Toolkit。与TUN网卡模式运行的游戏加速器可以共用。本应用主要目的在于直连访问github，如果你已经有飞机了，那建议还是不要用这个自行车（ds）了

## 一、 特性

### 1.1、 dns优选（解决\*\*\*污染问题）

- 根据网络状况智能解析最佳域名ip地址，获取最佳网络速度
- 解决一些网站和库无法访问或访问速度慢的问题
- 建议遇到打开比较慢的国外网站，可以优先尝试将该域名添加到dns设置中（注意：被\*\*\*封杀的无效）

### 1.2、 请求拦截

- 拦截打不开的网站，代理到加速镜像站点上去。
- 可配置多个镜像站作为备份
- 具备测速机制，当访问失败或超时之后，自动切换到备用站点，使得目标服务高可用

### 1.3、 github加速

- github 直连加速 (通过修改sni实现，感谢 [fastGithub](https://github.com/dotnetcore/FastGithub) 提供的思路)
- release、source、zip下载加速
- clone 加速
- 头像加速
- 解决readme中图片引用无法加载的问题
- gist.github.com 加速
- 解决git push 偶尔失败需要输入账号密码的问题（fatal: TaskCanceledException encountered / fatal: HttpRequestException encountered）
- raw/blame加速

> 以上部分功能通过 `X.I.U` 的油猴脚本实现， 以下是仓库和脚本下载链接，大家可以去支持一下。
>
> - [https://github.com/XIU2/UserScript](https://github.com/XIU2/UserScript)
> 
> - [https://greasyfork.org/scripts/412245](https://greasyfork.org/scripts/412245)
>
> 由于此脚本在ds中是打包在本地的，更新会不及时，你可以直接通过浏览器安装油猴插件使用此脚本，从而获得最新更新（ds本地的可以通过 `加速服务->基本设置->启用脚本` 进行关闭）。

### 1.4、 Stack Overflow 加速

- 将ajax.google.com代理到加速CDN上
- recaptcha 图片验证码加速

### 1.5、 npm加速

- 支持开启npm代理
- 官方与淘宝npm registry一键切换
- 某些npm install的时候，并且使用cnpm也无法安装时，可以尝试开启npm代理再试

**_安全警告_**：

- 请勿使用来源不明的服务/远程配置地址，有隐私和账号泄露风险
- 本应用及服务/默认远程配置端承诺不收集任何信息。介意者请使用安全模式。

## 二、快速开始

支持windows、Mac、Linux(Ubuntu)

### 2.1、DevSidecar桌面应用

#### 1）下载安装包

- release下载
  [Github Release](https://github.com/docmirror/dev-sidecar/releases)

> Windows: 请选择DevSidecar-x.x.x-windows-universal.exe 
> 
> Mac: 请选择DevSidecar-x.x.x-macos-universal.dmg 
> 
> Debian系及其他支持deb安装包的Linux: 请选择DevSidecar-x.x.x-linux-[架构].deb 
> 
> 其他Linux: 请选择DevSidecar-x.x.x-linux-[架构].AppImage (未做测试，不保证能用)

> linux安装说明请参考 [linux安装文档](./doc/linux.md)

> 注意：由于没有买应用证书，所以应用在下载安装时会有“未知发行者”等安全提示，选择保留即可。

#### 2）安装后打开

界面应大致如下图所示：
> 注意：mac版安装需要在“系统偏好设置->安全性与隐私->通用”中解锁并允许应用安装

![](./doc/index.png)

#### 3）安装根证书

第一次打开会提示安装证书，根据提示操作即可

更多有关根证书的说明，请参考 [为什么要安装根证书?](./doc/caroot.md)

> 根证书是本地随机生成的，所以不用担心根证书的安全问题（本应用不收集任何用户信息）
> 
> 你也可以在加速服务设置中自定义根证书（PEM格式的证书与私钥）

> 火狐浏览器需要[手动安装证书](#3火狐浏览器火狐浏览器不走系统的根证书需要在选项中添加根证书)

#### 4）开始加速吧

去试试打开github、huggingface、docker hub吧

### 2.2、开启前 vs 开启后

|          | 开启前                         | 开启后                                           |
| -------- | ------------------------------ | ----------------------------------------------- |
| 头像     | ![](./doc/avatar2.png)         | ![](./doc/avatar1.png)                          |
| clone    | ![](./doc/clone-before.png)    | ![](./doc/clone.png)                            |
| zip 下载 | ![](./doc/download-before.png) | ![](./doc/download.png)秒下的，实在截不到速度的图 |

## 三、模式说明

### 3.1、安全模式

- 此模式：关闭拦截、关闭增强、不使用远程配置、开启dns优选、开启测速
- 最安全，无需安装证书，可以在浏览器地址栏左侧查看域名证书
- 功能也最弱，只有特性1，相当于查询github的国外ip，手动改hosts一个意思。
- github的可访问性不稳定，取决于IP测速，如果有绿色ip存在，就 `有可能` 可以直连访问。
  ![](./doc/speed.png)

### 3.2、默认模式

- 此模式：开启拦截、关闭增强、使用远程配置、开启dns优选、开启测速
- 需要安装证书，通过修改sni直连访问github
- 功能上包含特性1/2/3/4。
### 3.3、增强模式（彩蛋）
- 一个简单的梯子（敏感原因，默认隐藏，更多信息请点击左侧增强功能菜单）
- 提示在软件首页左下角，即去dev-sidecar项目源码里面搜索“//TODO”，最终分会到达packages/core/index.js这个文件中，看到以下提示
> module.exports = require('./src')
// TODO  这是一个解谜游戏 ↓ ↓ ↓ ↓ ↓ ↓ ，如果你破解了它，请不要公开，好好用它来学习和查资料吧（特别注意：为了你的人身安全，请不要用它来查看和发表不当言论，你懂得）。
/**
 \u0061\u0048\u0052\u0030\u0063\u0044\u006f\u0076\u004c\u0032\u0052\u006c\u0064\u0069\u0031\u007a\u0061\u0057\u0052\u006c\u0059\u0032\u0046\u0079\u004c\u006d\u0052\u0076\u0059\u0032\u0031\u0070\u0063\u006e\u004a\u0076\u0063\u0069\u0035\u006a\u0062\u0069\u0039\u0035\u0062\u0033\u0056\u006d\u0061\u0057\u0035\u006b\u0061\u0058\u0051\u0076\u0061\u0057\u0035\u006b\u005a\u0058\u0067\u0075\u0061\u0048\u0052\u0074\u0062\u0041\u003d\u003d
 */
// 这个项目里有一点点解谜提示： https://github.com/fast-crud/fast-crud  （DevSidecar解谜提示
谜题共三层，前两层是两种不同的编码方式，第三层这里就不剧透了，留一点小乐趣。）
- 复制文中的编码，进行[Unicode与中文 编码/解码](https://www.toolhelper.cn/EncodeDecode/UnicodeChinese)，会得到**aHR0cDovL2Rldi1zaWRlY2FyLmRvY21pcnJvci5jbi95b3VmaW5kaXQvaW5kZXguaHRtbA==**
- 再对得到的字符进行[Base64 编码/解码](https://www.toolhelper.cn/EncodeDecode/Base64)，会得到**http://dev-sidecar.docmirror.cn/youfindit/index.html**
- 在搜索框输入得到的链接，下拉点击左下角，会发现有一张透明图片，将该图片保存![下载.png](https://imgbed.142588.xyz/file/1766911290693_下载.png)
- 在图片浏览器打开就会出现二维码，手机扫描后就会得到最终答案
>windows下打开 【C:\Users\Administrator\.dev-sidecar\setting.json5】， 或mac下打开 【~/.dev-sidecar/setting.json5】， 将【overwall: false】修改为【overwall: true】即可开启增强功能


