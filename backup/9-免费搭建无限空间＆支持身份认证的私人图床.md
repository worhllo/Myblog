# 一、初步介绍
> 本项目是 [Telegraph-Image](https://github.com/cf-pages/Telegraph-Image) 的重制版，
>
>  - 项目图片存储在 telegraph 的服务器上，支持图片审查 API，可自动屏蔽不良图片；
> - 项目由 cloudflare 提供全球 cdn 服务，基于 cloudflare pages 执行，可自定义域名；
> - 项目支持身份认证和多种上传方式（拖拽，选择文件，粘贴等），图片突破 5mb 的上传限制；
> - 项目的自定义程度极高，可自定义页面，网站名称与 logo，过渡动画流畅丝滑 
> - [作者博客（点击跳转）](https://sanyue.site/)   
> - [前端仓库（点击跳转）](https://github.com/MarSeventh/Sanyue-ImgHub)
> - [项目仓库（点击跳转）](https://sanyue.site/)

# 二、界面一览
![111.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731411605668_111.jpg)

# 三、正式实操

## 3.1 环境部署

部署此项目首先要求你拥有一个 [GitHub 账号（点击跳转）](https://github.com/)，一个 [cloudflare 账号（点击跳转）](https://www.cloudflare.com/)，一个属于自己的域名以及一个 Telegram 账号

## 3.2 Telegram 配置
### 3.2.1 获取 TG_BOT_TOKEN

登陆telegram ，在搜索框中搜索 `@BotFather.bat `（**注意甄别，千万别点错了**）

![dsads.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731412120575_dsads.jpg)



打开对话界面，点击 `开始`然后按图示进行配置，得到TOKEN后复制保存备用

![gsdfgsd.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731412230292_gsdfgsd.jpg)

### 3.2.2 获取 TG_CHAT_ID（频道 ID）

在 telegram 中 打开左侧的二级菜单，打开`新建频道`（**Manage Channel**），频道名字任意，后面内容可以直接跳过。  

![wqrewf.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731415243207_wqrewf.jpg)

完成创建后找到`管理频道`，在菜单中找到 `管理员`（**Administrators**），菜单中点击 `添加管理员`，将刚才创建的机器人（**你命名的那个机器人**）也设为管理员（**注意搜索时要 @刚才设置的用户名 别填加错了**），权限默认即可。  

<img src="https://cloudflare-imgbed-9xb.pages.dev/file/1731415292316_dgdfgdh.jpg" alt="dgdfgdh.jpg"  />

![erqwetwet.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731415328251_erqwetwet.jpg)

完成后首页搜索 `@VersaToolsBot`，回复` /start `然后在你刚才创建的频道里随便发一条消息，并将消息转发到 `@VersaToolsBot`，接着就会得到我们需要的ID，复制保存备用。

![dsagfh.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731415511836_dsagfh.jpg)

## 3.3 cloudflare 配置

首先打开该[项目仓库（点击跳转）](https://github.com/MarSeventh/CloudFlare-ImgBed)，点击 `Fork`，跳转页面后不需要任何改动，直接点击 `Create fork”`即可

![wtreger.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731415155858_wtreger.jpg)

![qetry.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731415129812_qetry.jpg)

成功创建 fork 后来到 登录cloudflare 账号，打开仪表盘，点击侧边栏中的 `Workers`和 `Pages`，点击上方的 `创建`，选到 `Pages`一栏，点击 `连接到 Git`

![wyrty.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731415087443_wyrty.jpg)

![czvfdg.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731415027560_czvfdg.jpg)

![tytryrt.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414983642_tytryrt.jpg)


在打开的第一个页面点击 `连接到 GitHub`，随后会跳转到 GitHub 进行授权，选到 `All repositories`

完成授权后会回到cloudflare，找到选择存储库的界面，选择刚才 fork 的仓库后点击 `开始设置`，跳转页面后直接划到下面点击 `保存并部署即可`，出现下图即部署完成，点击 `继续处理项目`

![retret.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414943151_retret.jpg)

![ryretre.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414903794_ryretre.jpg)

### 3.3.1．设置认证码与后台管理的账号密码

点击 `自定义域`， 添加一个你自己的域名，点击左侧栏中的 `KV`，点击 `创建命名空间`，
名称为 `img_url`点击 `添加`

![tutut.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414870199_tutut.jpg)

![fgfdh.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414826662_fgfdh.jpg)

![hjhf.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414779533_hjhf.jpg)

![ghgf.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414733617_ghgf.jpg)

完成添加后回到 `page` 的界面，点击 `设置` 后点击 `变量与机密`，找到 `绑定` 一栏，点击 `添加` ，在弹出的页面中找到 `KV 命名空间`，`变量名称`填写 `img_url`，`KV 命名空间 `选择刚才创建的 KV `img_url`完成后点击保存

![bvnbc.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414655315_bvnbc.jpg)

![sfgfdg.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414600432_sfgfdg.jpg)

![kjhkg.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414533935_kjhkg.jpg)




在绑定的上面找到 `变量与机密`一栏，点击右侧的 `添加`，添加 `环境变量`，常用环境变量如下表，按需要添加

| 变量名称                     | **作用**                                                     | **是否推荐** |
| ---------------------------- | ------------------------------------------------------------ | :----------: |
| ***TG_CHAT_ID***             | telegram 频道 ID                                             |   **必须**   |
| **TG_BOT_TOKEN**           | telegram 机器人 token                                        |   **必须**   |
| ***BASIC_USER***            | 后台管理的账户名                                             |     推荐     |
| ***BASIC_PASS***             | 后台管理的密码                                               |     推荐     |
| ***AUTH_CODE***              | 前台的认证码                                                 |   强烈推荐   |
| ***ModerateContentApiKey*** | 前台的认证码                                                 |              |
| ***ALLOWED_DOMAINS***       | 防盗链 访问域名限制 多个允许的域名用英文 `,` 分割，如：`域名.com,域名2.top` |              |
| ***AllowRandom***           | 随机图 api 的前置，后面会讲到                                |              |

完成后点击`保存`， 然后`重新部署`（**所有关于环境变量和 kv 绑定的修改都要重新部署一遍**），选到 `部署`一栏， 在 `所有部署`下面找到你最新的部署（**就是最上面的那一个**），鼠标点击在右侧三个点，在弹出的菜单中选择 `重新部署`，等待部署完成后即可使用

![ghgfh.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414454839_ghgfh.jpg)

### 3.3.2．开启内容审查

图床中上传的图片或视频默认是不经过审查的，上传后就可以被访问了。作为一个上传无需登录的图床，没有审核还是很危险的。如果被人恶意上传了不法内容，作为域名持有人，躺枪荣获"银手镯"就不妙了。Telegraph支持使用“moderatecontent”来进行自动内容审查，下面进行简单的配置就可以开启这项功能，**强烈建议开启**！

#### **3.3.2.1 获取API Key**

打开"moderatecontent.com"网站，点击`SIGN UP`，输入你的邮箱，点击`SUBMIT`，界面上就直接为你生成`API Key`，复制并保存下来：  
![](https://imgs.huluohu.com/blog/20230920/16951880404114.jpg)

#### **3.3.2.2 设置环境变量**

与上文中`设置管理后台登录验证`的步骤一样，到项目的`设置`——>`环境界面中`，添加一个环境变量，名称为：`ModerateContentApiKey`，值就是上面获得的API Key。  
![](https://imgs.huluohu.com/blog/20230920/16951888062807.jpg)

#### **3.3.2.3 重新部署**

同样的，做完以上的操作并不会立即生效，需要重新部署下系统才可以。

> 特别说明：开启图片审查后，因为审查需要时间，首次的图片加载将会变得缓慢，审查完成后的图片加载由于存在缓存，就不会受到影响了。


### 3.4 随机图ａｐｉ

![hdfhg.jpg](https://cloudflare-imgbed-9xb.pages.dev/file/1731414325208_hdfhg.jpg)

### 3.5 绑定自定义域名

Cloudflare自动分配的域名不好记（当然，如果你能忍受就可以不自定义），我们可以设置成我们自己的域名，方便使用，设置也很简单。

#### **3.5.1 进入Pages项目**

同样先进入项目页面，切换到`自定义域`页面：  
![](https://imgs.huluohu.com/blog/20230920/16951843076833.jpg)

#### **3.5.2 添加自定义域**

点击`设置自定义域`，输入你自己想用的二级域名，并点击`继续`按钮：  
![](https://imgs.huluohu.com/blog/20230920/16951872580948.jpg)

#### **3.5.3 激活自定义域**

可以看到Cloudflare将自动在域名DNS中添加一个`CNAME`解析记录，将自定义域名指向默认分配的域名。直接点击`激活域`按钮，然后等待验证即可：  
![](https://imgs.huluohu.com/blog/20230920/16951873592310.jpg)

验证中：  
![](https://imgs.huluohu.com/blog/20230920/16951874850704.jpg)

验证完成：  
![](https://imgs.huluohu.com/blog/20230920/16951875100284.jpg)

#### **3.5.4 使用自定义域**

自定义域验证完成后，而且自动帮你配置好了SSL证书，非常贴心了。此时就可以使用新的域名访问你的图床系统了。例如

```plain
https://imghub.yourdomain.com/
```


## 四、注意事项

### 4.1 更新图床系统

如果`Telegraph-Image`项目更新了，如何才能更新自己部署的图床呢？

很简单，如果项目更新后，需要添加新的KV命名空间或环境变量，则先在Cloudflare的项目中配置好。然后到你自己的Github中，在`Telegraph-Image`项目页面上点击`Sync fork`——>`Update branch`即可。  
![](https://imgs.huluohu.com/blog/20230920/16951892158699.jpg)

更新完成后，稍等一会，等Cloudflare Pages那边检测到你的仓库更新了之后就会自动部署最新的代码了。以上就是关于如何利用Cloudflare Workers的和Pages搭建无成本图床的全部过程了，内容稍微有点长，但都不复杂，基本上属于一劳永逸的事。

### 4.2 使用额度

-   每天最多**100,000**次免费读取操作，图片每加载一次都会占用该额度。建议在Cloudflare上开启域名缓存设置，这样仅当缓存未命中时才会占用该额度。如果额度用完了，则黑白名单等功能可能会失效。
    
-   每天最多**1,000**次免费删除操作，每有一条图片记录都会占用该额度，超过了将无法删除图片记录。
    
-   每天最多**1,000**次免费列出操作，每打开或刷新一次后台`/admin`都会占用该额度，超过了将无法进行后台图片管理。
    

如果你搭建的图床仅供自己使用，以上限制其实可以忽略。绝大多数情况下，免费额度都基本够用，并且可以稍微超出一点，不是一超出就立马停用了，而且每项额度都是单独计算。某项操作超出免费额度后只会停用该项操作，不影响其他的功能。例如免费写入额度用完了，读取功能不受影响，图片能够正常加载，只是不能在图片管理后台看到新的图片了。

### 4.3 特殊注意事项

-   上传的单个文件最大支持**5MB**，有大文件需求的可以直接拜拜了。
-   开启图片审查后，不良图片会被自动屏蔽，不支持加载。
-   加入白名单中的内容可绕过图片审查结果，无论是否通过都能正常加载。而加入黑名单的图片将无法正常加载。
-   每次修改部署项目的KV、环境变量等，记得要**重新部署**，否则不会生效。


## 五、转载说明

[保姆级教程：使用Cloudflare+Telegraph搭建零成本图床系统 - 胡萝虎的博客 (huluohu.com)](https://www.huluohu.com/posts/456/)

