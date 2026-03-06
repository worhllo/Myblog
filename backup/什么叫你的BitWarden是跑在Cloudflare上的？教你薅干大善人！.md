## 前言

一直见有网友在纠结密码管理器应该跑在哪。是用官方来的稳定，还是自建来的可控，亦或是各种托管平台上来的廉价（免费）？那如果我说有一个既稳定、又免费的自建方案呢?

把Rust编译成WASM放浏览器里跑，想必各位已经非常熟悉了，其实同样是基于V8的Worker里也是可以跑的。哎你说巧不巧，服务端有个现成的用Rust写的[vaultwarden](https://www.nodeseek.com/jump?to=https%3A%2F%2Fgithub.com%2Fdani-garcia%2Fvaultwarden)可以抄，bitwarden的绝大多数功能都是可以整成无状态的，Cloudflare还正好提供了D1数据库，这还能不薅它？  
~虽说Cloudflare最近崩过几次，但CF都崩了，还有几个网站登录得上呢 …~

当然这么牛的思路肯定不是我能想出来的，也不是我找到的（看了二叉树树的视频才知道有这么个神必项目），但这并不妨碍我化身为API对齐的牛马，目前是打算长期维护基础功能的。

[原项目](https://www.nodeseek.com/jump?to=https%3A%2F%2Fgithub.com%2Fdeep-gaurav%2Fwarden-worker)的端点实现缺的有点多，已经不兼容新版客户端了，批量导入也有点问题，而且好像作者也没有要更新的意思，我这里就放上我二开的版本了。

**项目地址**: [https://github.com/qaz741wsd856/warden-worker](https://www.nodeseek.com/jump?to=https%3A%2F%2Fgithub.com%2Fqaz741wsd856%2Fwarden-worker)

**友情提醒**: 本项目只是Bitwarden的最小兼容服务端，目前只实现基础功能，~暂不考虑网页前端~。找到了现成的VaultWarden的web端，遂偷之。网页版已通过 [Static Assets](https://www.nodeseek.com/jump?to=https%3A%2F%2Fdevelopers.cloudflare.com%2Fworkers%2Fstatic-assets%2F) 的方式集成了 [bw\_web\_builds](https://www.nodeseek.com/jump?to=https%3A%2F%2Fgithub.com%2Fdani-garcia%2Fbw_web_builds) ，静态资源不消耗Worker额度。但网页中大部分功能是用不了的，包括但不限于：

-   share
-   send
-   设备管理
-   组织
-   紧急访问
-   除TOTP外的两步验证

我整这个Web UI主要是为了批量操作、配置TOTP和编辑等效域名的。

## 简易部署教程

该项目的部署方法前半部分基本与二叉树树的教程一致: [你可曾想过，直接将BitWarden部署到Cloudflare Worker？](https://www.nodeseek.com/jump?to=https%3A%2F%2F2x.nz%2Fposts%2Fwarden-worker)  
因此我在此只做简述并强调关键步骤，详细图文流程请参考上面的博客，**记得要fork我的项目**就行，前两步有修改，请注意。

### 前期准备

你需要准备：

-   一个 Cloudflare 账户
-   一个 Github 账户
-   一个没有被阻断的域名

### 第一步：设置 Github 项目

首先fork[我的仓库](https://www.nodeseek.com/jump?to=https%3A%2F%2Fgithub.com%2Fqaz741wsd856%2Fwarden-worker)到你的账户（要是能顺手点个星星就好啦），进入Action页面，启用Action。  
点击 `settings` - `Secrets and variables` - `Actions`，准备添加 `Repository secrets`，接下来我们一共要添加三个secrets。

然后进入 Cloudflare 控制台，[https://dash.cloudflare.com/](https://www.nodeseek.com/jump?to=https%3A%2F%2Fdash.cloudflare.com%2F)  
在浏览器地址栏中复制你的account id

![image](https://s2.loli.net/2025/12/02/u1BkX62AjpLGWDv.png)

回到github页面，点击`New repository secret`，名称写`CLOUDFLARE_ACCOUNT_ID`，值就写刚才复制的id。

接着访问[https://dash.cloudflare.com/profile/api-tokens](https://www.nodeseek.com/jump?to=https%3A%2F%2Fdash.cloudflare.com%2Fprofile%2Fapi-tokens)  
选择编辑Worker的模板，然后给它再**添加D1的编辑权限**，再创建api令牌，回到github页面添加为`CLOUDFLARE_API_TOKEN`。  
![6tQSE8lr95OBvrvEZaOY6JqWbQa6hkx0.webp](https://cdn.nodeimage.com/i/6tQSE8lr95OBvrvEZaOY6JqWbQa6hkx0.webp)

最后去Cloudflare控制台的`存储与数据库` - `D1 sql 数据库`，创建一个数据库，并复制它的id。

![image](https://s2.loli.net/2025/12/02/NqvclKSDH2oi9eA.png)

回到github，添加为`D1_DATABASE_ID`。

#### 附件支持（可选）

本项目的附件功能依赖R2，虽然Cloudflare提供了慷慨的免费额度，但仍可能产生非预期的扣费，参考[Cloudflare R2 pricing](https://www.nodeseek.com/jump?to=https%3A%2F%2Fdevelopers.cloudflare.com%2Fr2%2Fpricing%2F)，因此该功能默认关闭。

如果你想启用R2支持，需要先去Cloudflare控制台创建一个R2储存桶，记下它的名称。

在github仓库中添加一个名为`R2_NAME`的secret，值就填刚才创建的桶名称。

___

至此在github上的配置就完毕了，点击上方的`Actions`选项卡，选到Build工作流点运行即可。

### 第二步：建表

现在Github Actions会自动在数据库为空时建表，无需手动建表。

### 第三步：配置环境变量与自定义域名

当github的Action执行完毕后，你就能在CF的Workers中找到刚才创建的 `warden-worker`了，进入这个Worker的设置页面，在`变量和机密`栏添加以下三个密钥：

|         名称         |                 说明                  |
|--------------------|-------------------------------------|
|  ALLOWED\_EMAILS   |        允许注册的完整邮箱（支持通配符），用,分隔        |
|                    | （例：`your-name@example.com,*@xxx.com`） |
|    JWT\_SECRET     |           随机长字符串（32字节以上）            |
| JWT\_REFRESH\_SECRET |           随机长字符串（32字节以上）            |

**可选环境变量**

-   `IMPORT_BATCH_SIZE`：用于控制导入密码库时，每次批操作的数据条数，默认为30，设为0代表一次批操作导入所有数据（不推荐）；如果你需要导入的库特别大，可以适当调大这个值。
-   `PASSWORD_ITERATIONS`: 服务端PBKDF2迭代次数，默认600000，最小600000.
-   `TRASH_AUTO_DELETE_DAYS`: 配置回收站中的项目多少天后会被清理，默认为30，设为0代表永不清理。
-   `DISABLE_USER_REGISTRATION`: 用于控制是否表明服务器不支持注册，默认为true，设为false可以让客户端显示注册按钮；该选项不影响实际注册功能。
-   `AUTHENTICATOR_DISABLE_TIME_DRIFT`: 控制是否允许TOTP的时间±1偏移，默认为true。
-   `ATTACHMENT_MAX_BYTES`: 单个附件的大小限制，单位字节，默认不限制，填`104857600`则代表100MB。
-   `ATTACHMENT_TOTAL_LIMIT_KB`: 单个用户的总附件大小限制，单位KB，默认不限制，填`1048576`代表1GB。
-   `ATTACHMENT_TTL_SECS`: 附件的上传下载链接的有效时间，默认五分钟。

然后在`域和路由`中添加一个路由，区域选择你的域名，路由写你分给这个Worker的子域名 + `/*`（如`bitwarden.example.com/*`）。

最后别忘记去给这个子域名添加一条dns记录。  
如果你想优选IP，那就不开小黄云，把它CNAME到一个优选过的域名。  
要是不想优选，那就打开小黄云，目标随便填。

> 建议去域名配置页的 `安全性` - `安全规则` 里给 `/identity/*` 和 `/api/accounts/*` 添加速率限制规则。

### 第四步：创建账户并导入数据

这步其实没啥好说的了，如果已有bitwarden库，在电脑上把它导出为JSON即可。

前端默认隐藏了注册按钮，可以参考上一步的环境变量开启然后清空缓存，或者直接访问`https://你的域名/#/register`即可注册。

**注意**: 创建账户时用的密码必须记住，没有任何方式能找回。

___

以下开始为我自己加的可选步骤，建议整一下。

### 第五步：配置数据库同步S3

我这里是整了一个自动导出D1并上传到S3的Action，虽然也能用私有仓库备份，但有点怕判定为滥用，所以还是创一个**私有的**S3吧。

**注意**：

-   千万别像我一样傻fufu的用跟Worker同一个Cloudflare账户的R2来备份，不然你号一被封就全没了；
-   千万别用登录或者获取密钥需要依赖Bitwarden的账户，你得自己记着，不然就套娃了；它的恢复邮箱的密码你也得记着。

如果没什么特殊需求，可以试试 [backblaze](https://www.nodeseek.com/jump?to=https%3A%2F%2Fwww.backblaze.com%2F)，虽然额度非常少但用来备份也够了，胜在完全免费不绑卡。  
此处略过注册账户和创建桶的操作。

> 请确保你之前添加的 `CLOUDFLARE_API_TOKEN` 至少有D1的读取权限。

回到你fork的github仓库，继续添加以下secrets:

|       Secret        | Required |                    Description                    |
|---------------------|----------|---------------------------------------------------|
|   `S3_ACCESS_KEY_ID`    |   yes    |                 S3 access key ID                  |
| `S3_SECRET_ACCESS_KEY`  |   yes    |               S3 secret access key                |
|      `S3_BUCKET`      |   yes    |                        桶名称                        |
|      `S3_REGION`      |   yes    |              S3 区域，有就正常填，不知道就直接填auto              |
|     `S3_ENDPOINT`     |    no    | 用AWS就不用填，其他填`https://your-s3-domain.com`的形式，带协议不带路径 |
| `BACKUP_ENCRYPTION_KEY` |    no    |              额外加密密钥，不填就不加密，填了就一定要记住               |

然后在Action页面中选到`Backup D1 Database to S3`，手动触发一次，等待它运行完成，然后检查你的S3中是否有备份文件。成功后，每天都会自动备份一次，每个备份默认保存30天。

至于恢复操作还是请各位到时去看readme吧，希望这辈子不会用到。

___

#### 额外说明

其实 Cloudflare D1 提供了回滚到30天内的任意时刻的功能：[Cloudflare D1 Time Travel documentation](https://www.nodeseek.com/jump?to=https%3A%2F%2Fdevelopers.cloudflare.com%2Fd1%2Freference%2Ftime-travel%2F)

```perl
# 查看当前bookmark
# DATABASE_NAME换成你在Cloudflare控制台里设置的D1名称
wrangler d1 time-travel info DATABASE_NAME

# 回退到指定时间 (ISO 8601)
wrangler d1 time-travel restore DATABASE_NAME --timestamp=2024-01-15T12:00:00Z
    
# 回退到指定bookmark
wrangler d1 time-travel restore DATABASE_NAME --bookmark=<bookmark_id>
```

通过这个操作，就算库出了问题也能快速回滚，再配上S3备份，是不是感觉这一通操作不那么灵车了？

___

## 其他说明

本项目**不是**Vaultwarden的兼容层，**不保证**安全性跟Vaultwarden持平，如果你对安全性有疑虑，请使用其他更热门、经过验证的Bitwarden服务端；如果你发现本项目存在安全性问题，请在github中提交(github仓库中的`security` - `Report a vulnerability`)，我会尽可能解决。

本项目不提供设备管理功能，但其相关API均提供了空实现，目前用着没啥问题。如果真有客户端登录完还会拉一遍设备列表确认自己在不在里面的话，请联系我。

说一句题外话，其实Cloudflare Worker是有官方运行时的: [workerd](https://www.nodeseek.com/jump?to=https%3A%2F%2Fgithub.com%2Fcloudflare%2Fworkerd)，所以就算CF挂了，也可以临时把数据库备份拉下来本地跑。数据安全、SLA我倒是不担心的，唯一需要担心的大约是我的编程水平（雾）