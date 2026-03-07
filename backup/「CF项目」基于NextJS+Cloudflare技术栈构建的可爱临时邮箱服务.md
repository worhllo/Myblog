> [!NOTE]
>萌萌哒临时邮箱服务
一个基于NextJS+Cloudflare技术栈构建的可爱临时邮箱服务🎉
源仓库：[beilunyangmoemail A cute temporary email service built with NextJS + Cloudflare technology stack 🎉  一个基于 NextJS + Cloudflare 技术栈构建的可爱临时邮箱服务🎉](https://github.com/beilunyang/moemail)

## 特性

- 🔒 **隐私保护**：保护您的真实邮箱地址，远离垃圾邮件和不必要的订阅
- ⚡ **实时收件**：自动轮询，即时接收邮件通知
- ⏱️ **灵活有效期**：支持 1 小时、24 小时、3 天或永久有效
- 🎨 **主题切换**：支持亮色和暗色模式
- 📱 **响应式设计**：完美适配桌面和移动设备
- 🔄 **自动清理**：自动清理过期的邮箱和邮件
- 📱 **PWA 支持**：支持 PWA 安装
- 💸 **免费自部署**：基于 Cloudflare 构建, 可实现免费自部署，无需任何费用
- 🎉 **可爱的 UI**：简洁可爱萌萌哒 UI 界面
- 📤 **发件功能**：支持使用临时邮箱发送邮件，基于 Resend 服务
- 🔔 **Webhook 通知**：支持通过 webhook 接收新邮件通知
- 🛡️ **权限系统**：支持基于角色的权限控制系统
- 🔑 **OpenAPI**：支持通过 API Key 访问 OpenAPI
- 🌍 **多语言支持**：支持中文和英文界面，可自由切换

## 技术栈

- **框架**: [Next.js](https://nextjs.org/) (App Router)
- **平台**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **数据库**: [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite)
- **认证**: [NextAuth](https://authjs.dev/getting-started/installation?framework=Next.js) 配合 GitHub 登录
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI 组件**: 基于 [Radix UI](https://www.radix-ui.com/) 的自定义组件
- **邮件处理**: [Cloudflare Email Workers](https://developers.cloudflare.com/email-routing/)
- **类型安全**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **国际化**: [next-intl](https://next-intl-docs.vercel.app/) 支持多语言



## 准备

在开始部署之前，需要在 Cloudflare 控制台完成以下准备工作：

1.  **创建 D1 数据库**
    
    -   登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
    -   选择 “存储与数据库” -> “D1 SQL 数据库”
    -   创建一个数据库（例如：moemail）
    -   记录下数据库名称和数据库 ID，后续配置需要用到
2.  **创建 KV 命名空间**
    
    -   登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
    -   选择 “存储与数据库” -> “KV”
    -   创建一个 KV 命名空间（例如：moemail）
    -   记录下命名空间 ID，后续配置需要用到
3.  **创建 Pages 项目**
    
    -   登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
    -   选择 “Workers 和 Pages”
    -   点击 “创建” 并选择 “Pages” 标签
    -   选择 “使用直接上传创建”
    -   点击 “上传资产”
    -   输入项目名称
        
        WARNING
        
        注意：项目名称必须为 moemail，否则无法正常部署
        
    -   输入项目名称后，点击 “创建项目” 即可，不需要上传任何文件以及点击“部署站点”，之后我们会通过 本地运行Wrangler 或者通过 Github Actions 自动部署
4.  **为 Pages 项目添加 AUTH 认证相关的 SECRETS**
    
    -   在 Overview 中选择刚刚创建的 Pages 项目
    -   在 Settings 中选择变量和机密
    -   添加 AUTH\_GITHUB\_ID, AUTH\_GITHUB\_SECRET, AUTH\_SECRET

## 本地 Wrangler 部署 [](https://docs.moemail.app/start.html#%E6%9C%AC%E5%9C%B0-wrangler-%E9%83%A8%E7%BD%B2)

1.  创建 `.env` 文件

bash

```bash
cp .env.example .env
```

2.  在 `.env` 文件中设置[环境变量](https://docs.moemail.app/start.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
    
3.  运行部署脚本
    

bash

```bash
pnpm dlx tsx ./scripts/deploy/index.ts
```

## Github Actions 部署 [](https://docs.moemail.app/start.html#github-actions-%E9%83%A8%E7%BD%B2)

本项目可使用 GitHub Actions 实现自动化部署。支持以下触发方式：

1.  **自动触发**：推送新的 tag 时自动触发部署流程
2.  **手动触发**：在 GitHub Actions 页面手动触发部署流程

#### 部署步骤 [](https://docs.moemail.app/start.html#%E9%83%A8%E7%BD%B2%E6%AD%A5%E9%AA%A4)

1.  在 GitHub 仓库设置中添加以下 Secrets：

|        环境变量         |                          说明                           |
|---------------------|-------------------------------------------------------|
| `CLOUDFLARE_API_TOKEN`  |                   Cloudflare API 令牌                   |
| `CLOUDFLARE_ACCOUNT_ID` |                   Cloudflare 账户 ID                    |
|    `AUTH_GITHUB_ID`     |                  GitHub OAuth App ID                  |
|  `AUTH_GITHUB_SECRET`   |                GitHub OAuth App Secret                |
|     `AUTH_SECRET`     |        NextAuth Secret，用来加密 session，请设置一个随机字符串        |
|    `CUSTOM_DOMAIN`    |               网站自定义域名，用于访问 MoeMail（可选）                |
|    `PROJECT_NAME`     |          Cloudflare Pages 项目名（可选，默认 moemail）          |
|    `DATABASE_NAME`    |              D1 数据库名称（可选，默认 moemail-db）               |
|   `KV_NAMESPACE_NAME`   | Cloudflare KV namespace 名称，用于存储网站配置（可选，默认 moemail-kv） |

2.  选择触发方式：
    
    **方式一：推送 tag 触发**
    
    bash
    
    ```bash
    # 创建新的 tag
    git tag v1.0.0
    ```
    
    bash
    
    ```perl
    # 推送 tag 到远程仓库
    git push origin v1.0.0
    ```
    
    **方式二：手动触发**
    
    -   进入仓库的 Actions 页面
    -   选择 "Deploy" workflow
    -   点击 "Run workflow"
3.  部署进度可以在仓库的 Actions 标签页查看
    

#### 注意事项 [](https://docs.moemail.app/start.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

-   确保所有 Secrets 都已正确设置
-   使用 tag 触发时，tag 必须以 `v` 开头（例如：v1.0.0）

## 环境变量 [](https://docs.moemail.app/start.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)

本项目使用以下环境变量：

### 认证相关 [](https://docs.moemail.app/start.html#%E8%AE%A4%E8%AF%81%E7%9B%B8%E5%85%B3)

-   `AUTH_GITHUB_ID`: GitHub OAuth App ID
-   `AUTH_GITHUB_SECRET`: GitHub OAuth App Secret
-   `AUTH_SECRET`: NextAuth Secret，用来加密 session，请设置一个随机字符串

### Cloudflare 配置 [](https://docs.moemail.app/start.html#cloudflare-%E9%85%8D%E7%BD%AE)

-   `CLOUDFLARE_API_TOKEN`: Cloudflare API Token
-   `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID
-   `DATABASE_NAME`: D1 数据库名称
-   `DATABASE_ID`: D1 数据库 ID（可选，如果不填，则会自动通过 Cloudflare API 获取）
-   `KV_NAMESPACE_NAME`: Cloudflare KV namespace 名称，用于存储网站配置
-   `KV_NAMESPACE_ID`: Cloudflare KV namespace ID，用于存储网站配置（可选，如果不填，则会自动通过 Cloudflare API 获取）
-   `CUSTOM_DOMAIN`: 网站自定义域名，如 moemail.app（可选，如果不填，则会使用 Cloudflare Pages 默认域名）
-   `PROJECT_NAME`: Cloudflare Pages 项目名（可选，如果不填，则为 moemail）

## Github OAuth App 配置 [](https://docs.moemail.app/start.html#github-oauth-app-%E9%85%8D%E7%BD%AE)

-   登录 [Github Developer](https://github.com/settings/developers) 创建一个新的 OAuth App
-   生成一个新的 `Client ID` 和 `Client Secret`
-   设置 `Application name` 为 `<your-app-name>`
-   设置 `Homepage URL` 为 `https://<your-domain>`
-   设置 `Authorization callback URL` 为 `https://<your-domain>/api/auth/callback/github`

[![Deploy to Cloudflare Workers](MoeMail/button.svg)](https://deploy.workers.cloudflare.com/?url=https://github.com/beilunyang/moemail)

## Cloudflare 邮件路由配置 [](https://docs.moemail.app/start.html#cloudflare-%E9%82%AE%E4%BB%B6%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE)

为了使邮箱域名生效，还需要在 Cloudflare 控制台配置邮件路由，将收到的邮件转发给 Email Worker 处理。

1.  登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
    
2.  选择您的域名
    
3.  点击左侧菜单的 "电子邮件" -> "电子邮件路由"
    
4.  如果显示 “电子邮件路由当前被禁用，没有在路由电子邮件”，请点击 "启用电子邮件路由" ![启用电子邮件路由](MoeMail/AQADNcQxG_K0SVd-.jpg "启用电子邮件路由")
    
5.  点击后，会提示你添加电子邮件路由 DNS 记录，点击 “添加记录并启用” 即可 ![添加电子邮件路由 DNS 记录](MoeMail/AQADN8QxG_K0SVd-.jpg "添加电子邮件路由 DNS 记录")
    
6.  配置路由规则：
    
    ![配置路由规则](MoeMail/AQADNsQxG_K0SVd-.jpg "配置路由规则")
    
    -   Catch-all 地址: 启用 "Catch-all"
    -   编辑 Catch-all 地址
        -   操作: 选择 "发送到 Worker"
        -   目标位置: 选择刚刚部署的 "email-receiver-worker"
        -   保存

### 注意事项 [](https://docs.moemail.app/start.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9-1)

-   确保域名的 DNS 托管在 Cloudflare
-   Email Worker 必须已经部署成功
-   如果 Catch-All 状态不可用（一直 loading），请点击“路由规则”旁边的“目标地址”，进去绑定一个邮箱

