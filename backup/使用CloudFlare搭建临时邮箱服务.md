## 1.项目地址

[https://github.com/dreamhunter2333/cloudflare\_temp\_email](https://github.com/dreamhunter2333/cloudflare_temp_email)

体验地址：[https://email.sanyue.site](https://email.sanyue.site/)

​![image\-20231205173443202](https://alist.sanyue.site/d/imgbed/202312051734505.png)​

image\-20231205173443202

## 2.环境

一台Ubuntu22.04服务器

安装nvm以安装指定的node版本：

shell``` shell
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm ls-remote```安装node：

shell``` shell
nvm install 18.16.0
nvm use 18.16.0```安装wrangler

shell``` shell
npm install -g wrangler```## 3.搭建CloudFlare D1数据库

克隆仓库到本地

text``` text
cd ~
git clone https://github.com/dreamhunter2333/cloudflare_temp_email.git
cd cloudflare_temp_email```创建D1数据库

text``` text
wrangler d1 create sanyue_email # 随便取个名字来替换sanyue_email```之后会弹出验证你的cf账户链接

text``` text
Opening a link in your default browser: ....```我们点击链接，同意授权

注意授权成功后会跳转到localhost，我们需要把localhost修改为服务器的ip（​打不开的话记得放行对应端口​）

之后创建数据表：

shell``` shell
wrangler d1 execute sanyue_email --file=db/schema.sql   # 按照上面的名字来替换sanyue_email```## 4.后端CloudFlare Worker搭建

执行：

shell``` shell
cd worker
npm install
cp wrangler.toml.template wrangler.toml```修改配置文件：

shell``` shell
vim wrangler.toml```具体设置内容：

none``` none
[vars]
PREFIX = "tmp"
DOMAIN = "yourDomain.com" #修改为你自己的域名
JWT_SECRET = "anything" #随便写一个

[[d1_databases]]
binding = "DB"
database_name = "sanyue_email" #数据库名称，和之前一样
database_id = "去控制台看自己的数据库id"```部署Worker：

none``` none
wrangler deploy```## 5.前端页面部署

首先为刚才的后端Worker加上自定义域名。

然后去你需要部署服务的域名控制台，选择​电子邮件​，跳过设置。下面几步非常关键：

- 首先去电子邮件设置页，设置好域名的MX记录等
- 然后去电子邮件的路由规则页面，设置catch\-all为打开，转发到后端的Worker
- 如果catch\-all一直处于加载状态，到旁边的目标地址中加上你当前登录账号的邮箱！！！

上面都步骤完成后，到ssh终端的frontend文件夹：

shell``` shell
cd frontend```安装依赖：

shell``` shell
npm install pnpm -g
pnpm install```配置环境变量：

shell``` shell
cp .env.example .env.local
vim .env.local```将VITE\_API\_BASE​修改为自己刚才设置的Worker的自定义域名：

none``` none
VITE_API_BASE=https://xxxx.xxx
VITE_CF_WEB_ANALY_TOKEN=```保存退出，开始构建：

shell``` shell
pnpm build --emptyOutDir
# 根据提示创建 pages```接下来，原神启动！

shell``` shell
pnpm run deploy```最后你也可以为自己地前端页面加上喜欢的自定义域名，全部完成之后你就拥有无数个邮箱啦~

---

文章链接: [https://sanyue.site/posts/c69e273a.html](https://sanyue.site/posts/c69e273a.html)

版权声明: 本博客所有文章除特別声明外，均采用[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh)许可协议。转载请注明来源[叁月柒](https://sanyue.site/about)!
