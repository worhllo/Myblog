> [!NOTE]
> 利用Cloudflare Worker+Github搭建一个纯静态，刷不死的短链吧！


## 项目原理

就是创建短链的逻辑，就是Worker代理访问Github，改一下js，添加一条新的短链规则，然后推送，这会自动触发Cloudflare Worker的重新构建，稍等片刻后，访问新的 pathname 就可以得到正确的重定向了。同时支持了有效期，原理也非常简单，前端创建短链的时候给后端传一个什么时候过期的字段，后端再写入文件，最后借助 Github Action 的定时巡查清除过期短链

## 在哪搞个短链[#](https://2x.nz/posts/static-redirect-group/#%E5%9C%A8%E5%93%AA%E6%90%9E%E4%B8%AA%E7%9F%AD%E9%93%BE)

我的 2x.nz 是在 [https://porkbun.com](https://porkbun.com/) 买的，一年一百左右。其他后缀也不错，如 `.im` `.mk`

## 正式搭建你的短链服务[#](https://2x.nz/posts/static-redirect-group/#%E6%AD%A3%E5%BC%8F%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%E7%9F%AD%E9%93%BE%E6%9C%8D%E5%8A%A1)

首先，Fork仓库

[

afoim

/

Static\_Redirect\_Group

静态重定向组

18

17

GPL-3.0



](https://github.com/afoim/Static_Redirect_Group)

接下来，先更改一些硬编码的东西，由于Cloudflare Worker对于静态资产不能使用环境变量，所以有些东西是硬编码的，请在所有HTML文件中尝试搜索 `afoim` 进行更改，改成你的（你也可以多加一层，写一个配置，然后通过构建来注入内容，随你）

然后，请编辑js文件夹里面的短链，改为你想要的

再接着，创建一个Github Token，只需要有 `repo` 权限即可

继续，绑定机密环境变量，使用 `wrangler secret put XXX`

|     变量名      |          值          |                    说明                     |
|--------------|---------------------|-------------------------------------------|
| `GITHUB_TOKEN` |     `ghp_xxxx...`     |                刚才申请的 Token                |
| `GITHUB_OWNER` |     `你的GitHub用户名`     |                 例如 `afoim`                  |
| `GITHUB_REPO`  | `Static_Redirect_Group` |                   你的仓库名                   |
| `BASE_DOMAIN`  |       `你的短链域名`        | 例如 `u.2x.nz` 或 Worker 的默认域名 `xxx.workers.dev` |

此时，访问 `/_url` 即可创建你的短链

## 防护[#](https://2x.nz/posts/static-redirect-group/#%E9%98%B2%E6%8A%A4)

建议保护创建短链的短链，防刷（或Cloudflare Turnstile、速率限制… 随你）

在Cloudflare创建一个WAF规则

当传入请求匹配时…

```lua
1(http.host eq "你的域名" and (2  http.request.uri.path eq "/_url"3  or http.request.uri.path wildcard "/api/*"4))
```

然后采取措施…

**交互式质询**
