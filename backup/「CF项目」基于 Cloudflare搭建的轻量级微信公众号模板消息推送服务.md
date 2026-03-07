> [!NOTE]
> WXPush - 微信消息推送服务 (Cloudflare Workers)
这是一个基于 [Cloudflare Workers](https://workers.cloudflare.com/) 搭建的、轻量级的微信公众号模板消息推送服务。它提供了一个简单的 API 接口，让您可以轻松地通过 HTTP 请求将消息推送到指定的微信用户。
源仓库：[frankiejunwxpush 一个极简且免费的微信消息推送服务](https://github.com/frankiejun/wxpush)

## ✨ 特性

✅ 完全免费  
✅ 每天 10 万次额度，个人用不完  
✅ 真正的微信原生弹窗 + 声音提醒  
✅ 支持多用户  
✅ 跳转稳定  
✅ 可无限换皮肤 (使用项目[wxpushSkin](https://github.com/frankiejun/wxpushSkin))  
✅ 支持docker部署

## 🎬 视频教学

我们制作了一个详细的视频教程，手把手教您如何完成所有部署步骤。如果您偏爱视频指导，请点击下方链接观看：

[<img src="https://look.pics.cloudns.ch/img/极简微信消息推送服务-封面.jpg" alt="点击观看视频教程" width="480">](https://youtu.be/sE1Kcol_XRs?si=G-UbUGlMhyysv-US)

*点击上方图片或链接，即可跳转到 YouTube 观看视频教程。*


## 🚀 部署指南

我们提供多种简单的部署方式，您可以根据自己的需求选择其中一种。

### 方法一：直接粘贴代码到 Cloudflare (最简单)

这种方法无需任何本地开发环境，只需复制粘贴即可完成部署。

1.  **登录 Cloudflare 仪表板**
    *   打开浏览器，访问 [https://dash.cloudflare.com/](https://dash.cloudflare.com/) 并登录。

2.  **创建 Worker 服务**
    *   在左侧菜单中，选择 **Workers 和 Pages**。
    *   点击 **创建应用程序**，然后选择 **创建 Worker**。
    *   为您的 Worker 指定一个全局唯一的名称 (例如 `my-wxpush-service`)，然后点击 **部署**。

3.  **粘贴代码**
    *   部署完成后，点击 **编辑代码** 进入在线代码编辑器。
    *   删除编辑器中所有的默认代码。
    *   将项目 `src/index.js` 文件中的全部内容复制并粘贴到编辑器中。

4.  **保存并部署**
    *   点击编辑器右上角的 **保存并部署** 按钮。

5.  **配置环境变量 (重要)**
    *   返回 Worker 的主管理页面，进入 **设置** > **变量**。
    *   在 **环境变量** 部分，点击 **添加变量**，依次添加以下配置。这些是服务运行所必需的敏感信息。
        *   `API_TOKEN`: 用于接口调用的访问令牌，请设置一个足够复杂的随机字符串。
        *   `WX_APPID`: 您的微信公众号 AppID。
        *   `WX_SECRET`: 您的微信公众号 AppSecret。
        *   `WX_USERID`: 默认接收消息用户的 OpenID，多个用户请用 `|` 符号分隔 (例如 `openid1|openid2`)。
        *   `WX_TEMPLATE_ID`: 您要使用的微信模板消息 ID。
        *   `WX_BASE_URL`: (可选) 点击模板消息后跳转的基础 URL。
    *   **注意**：添加变量时，请确保勾选 **加密** 选项，以保护您的凭证安全。

### 方法二：Docker 直接部署（需要有docker环境）

**拉取镜像**

```bash
docker pull ghcr.io/frankiejun/wxpush:latest
```

**运行容器**

```bash
docker run -d --name wxpush \
  -p 3939:3939 \
  -e API_TOKEN="your_token" \
  -e WX_APPID="your_appid" \
  -e WX_SECRET="your_secret" \
  -e WX_USERID="openid1|openid2" \
  -e WX_TEMPLATE_ID="your_template_id" \
  -e WX_BASE_URL="https://example.com" \
  -e PORT="3939" \
  ghcr.io/frankiejun/wxpush:latest
```

**docker-compose**

创建 `docker-compose.yml`，直接使用镜像运行：

```yaml
services:
  wxpush:
    image: ghcr.io/frankiejun/wxpush:latest
    ports:
      - "3939:3939"
    environment:
      API_TOKEN: "your_token"
      WX_APPID: "your_appid"
      WX_SECRET: "your_secret"
      WX_USERID: "openid1|openid2"
      WX_TEMPLATE_ID: "your_template_id"
      WX_BASE_URL: "https://example.com"
      PORT: "3939"
    restart: unless-stopped
```

### 方法三：通过关联 GitHub 仓库自动部署

如果您希望通过 Git 进行版本控制和持续集成，推荐使用此方法。

1.  **Fork 或克隆项目**
    *   首先，将本项目 Fork 到您自己的 GitHub 账户，或者克隆后推送到您自己的新仓库。

2.  **连接到 GitHub**
    *   登录 Cloudflare 仪表板，进入 **Workers 和 Pages**。
    *   点击 **创建应用程序**，切换到 **Pages** 选项卡，然后点击 **连接到 Git**。

3.  **选择仓库**
    *   选择您刚刚创建的 GitHub 仓库。

4.  **配置构建和部署**
    *   **项目名称**：为您项目指定一个名称。
    *   **生产分支**：选择您希望部署的分支 (通常是 `main` 或 `master`)。
    *   **框架预设**：选择 `None`。
    *   **构建设置**：将所有构建相关的字段 (如构建命令、输出目录) 留空。
    *   **根目录**：保持默认的 `/` 即可。

5.  **添加环境变量**
    *   在配置页面的 **环境变量** 部分，添加与 **方法一** 中相同的 `API_TOKEN`, `WX_APPID`, `WX_SECRET` 等变量。
    *   同样，请务必为每个变量勾选 **加密** 选项。

6.  **保存并部署**
    *   点击 **保存并部署**。Cloudflare 会自动从您的仓库拉取代码并完成部署。
    *   此后，每当您向指定的生产分支推送新的代码提交时，Cloudflare 都会自动为您重新部署。

部署成功后，您的服务访问地址会显示在 Worker 或 Pages 的主页面上。

## ⚙️ API 使用方法

服务部署成功后，您可以通过构造 URL 发起 `GET` 请求来推送消息。

### 请求地址

```
https://<您的Worker地址>/wxsend
```

### 请求参数

| 参数名      | 类型   | 是否必填 | 描述                                           |
|-------------|--------|----------|------------------------------------------------|
| `token`     | String | 是       | 您在 `API_TOKEN` 中设置的访问令牌。            |
| `title`     | String | 是       | 消息的标题。                                   |
| `content`   | String | 是       | 消息的具体内容。                               |
| `appid`     | String | 否       | 临时覆盖默认的微信 AppID。                     |
| `secret`    | String | 否       | 临时覆盖默认的微信 AppSecret。                 |
| `userid`    | String | 否       | 临时覆盖默认的接收用户 OpenID。                  |
| `template_id`| String | 否       | 临时覆盖默认的模板消息 ID。                    |
| `base_url`  | String | 否       | 临时覆盖默认的跳转 URL。                       |

### 使用示例

**基础推送**

向默认配置的所有用户推送一条消息：

```
https://<您的Worker地址>/wxsend?title=服务器通知&content=服务已于北京时间%2022:00%20重启&token=your_secret_token
```

**临时覆盖用户**

向一个临时指定的用户推送消息：

```
https://<您的Worker地址>/wxsend?title=私人提醒&content=记得带钥匙&token=your_secret_token&userid=temporary_openid_here
```

### Webhook / POST 请求

除了 `GET` 请求，服务也支持 `POST` 方法，更适合用于自动化的 Webhook 集成。

**请求地址**

```
https://<您的Worker地址>/wxsend
```

**请求方法**

```
POST
```

**请求头 (Headers)**

```json
{
  "Authorization": "你的token",
  "Content-Type": "application/json"
}
```

**请求体 (Body)**

请求体需要是一个 JSON 对象，包含与 `GET` 请求相同的参数。

```json
{
  "title": "Webhook 通知",
  "content": "这是一个通过 POST 请求发送的 Webhook 消息。"
}
```

**使用示例 (cURL)**

```bash
curl -X POST \
  https://<您的Worker地址>/wxsend \
  -H 'Authorization': '你的token' \
  -H 'Content-Type': 'application/json' \
  -d '{
    "title": "来自 cURL 的消息",
    "content": "自动化任务已完成。"
  }'
```

### 成功响应

如果消息成功发送给至少一个用户，服务会返回 `HTTP 200` 状态码和 JSON：

```json
{
  "msg": "Successfully sent messages to 1 user(s). First response: ok"
}
```

### 失败响应

如果发生错误（如 token 错误、缺少参数、微信接口调用失败等），服务会返回相应的 `HTTP 4xx` 或 `5xx` 状态码和 JSON：

```json
{
  "msg": "Invalid token"
}
```
