
> [!TIP]
>  RSS-Feed-Push-Bot
源仓库：[worhlloRSS-Feed-Push-Bot 一个轻量的 RSS 订阅推送脚本：定时拉取 RSS 源，将最新内容推送到 Telegram 或 Webhook，并通过本地历史记录避免重复发送。](https://github.com/worhllo/RSS-Feed-Push-Bot)
---

### 🛠️ 前置准备
在开始前，请确保你已完成：
1.  安装 **Python 环境**（推荐 3.8+ 版本），并确保 `pip` 工具可用。
2.  拥有一个 **Telegram 账号**，用于创建机器人和接收消息。
3.  （可选但推荐）为项目创建一个虚拟环境，避免依赖冲突。

---

### 1. 安装依赖：`pip install -r requirements.txt`
这个命令会自动安装项目所需的所有 Python 第三方库。
- **操作步骤**：
  1.  打开终端（macOS/Linux 用「终端」，Windows 用「命令提示符」或「PowerShell」）。
  2.  用 `cd` 命令进入项目文件夹（例如：`cd /Users/xxx/Documents/rss-bot`）。
  3.  执行安装命令：
      ```bash
      # 如果你的系统默认是 Python3，可能需要用 pip3
      pip install -r requirements.txt
      # 或
      pip3 install -r requirements.txt
      ```
- **常见问题**：
  - 如果提示 `pip` 找不到，先确认 Python 是否正确添加到系统环境变量。
  - 如果安装失败，尝试升级 `pip`：`pip install --upgrade pip`。
  - 如果提示`缺少依赖 feedparser，请先执行：pip install -r requirements.txt`，尝试执行`pip install feedparser`
---
### 2. GitHub 仓库密钥配置（最关键，否则脚本无权限运行）
- 打开你的 GitHub 仓库 → 点击顶部「Settings」（设置）
- 左侧菜单栏找到「Secrets and variables」→ 选择「Actions」
- 点击右上角「New repository secret」（新建仓库密钥）
- 分别添加 2 个密钥（可以2个都填，也可以任填一个）：
名称：TELEGRAM_BOT_TOKEN → 值：你的 Telegram 机器人 Token（从 @BotFather 获取）
名称：WEBHOOK → 值：你的机器人 Webhook 地址（需 HTTPS，本地调试用 ngrok，服务器用域名）
✅ 注意：密钥名称必须和配置文件中的一致（大小写敏感），否则脚本会提示「环境变量缺失」。
---
### 3. 配置 RSS 地址：编辑 `rss.config` 文件
这个文件用来存放你想要订阅的 RSS 源地址，脚本会定期抓取这些源的更新。
- **操作步骤**：
  1.  用任意文本编辑器（如 VS Code、记事本、TextEdit）打开项目里的 `rss.config` 文件。
  2.  按照「每行一个 RSS 地址」的格式填写，示例：
      ```
      # 可以用 # 写注释，不会被脚本读取
      https://news.google.com/rss
      https://www.zhihu.com/rss
      https://blog.csdn.net/xxx/rss/list
      https://feeds.appinn.com/appinns/
      https://feed.iplaysoft.com
      https://www.landiannews.com/feed
      ```
  3.  保存并关闭文件。
- **注意事项**：
  - 确保每个 RSS 地址是有效的，否则脚本可能无法正常抓取内容。
  - 不要在地址前后加多余的空格或符号。

---

### 4. 配置消息通道：设置 Telegram Bot Token 和 Webhook
这一步是让脚本和你的 Telegram 机器人绑定，实现消息推送和交互。
#### 🔹 先获取 Telegram Bot Token
1.  打开 Telegram，搜索 `@BotFather` 并发送 `/newbot`。
2.  按照提示给机器人起名、设置用户名，完成后 BotFather 会给你一个类似 `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11` 的 **Token**，保存好这个值。

#### 🔹 再准备 Webhook 地址
Webhook 是 Telegram 用来给你的脚本推送用户指令（如 `/start`）的回调地址，需要满足：
- 必须是 **HTTPS 地址**（Telegram 不支持 HTTP）。
- 如果是本地调试，可以用 `ngrok` 工具把本地端口暴露成公网 HTTPS 地址（例如：`ngrok http 8080` 会生成一个类似 `https://xxxx-xx-xx-xx-xx.ngrok.io` 的地址）。
- 如果是服务器部署，直接用你的服务器域名 + 端口（如 `https://your-domain.com:8443/webhook`）。

#### 🔹 设置环境变量
环境变量用来安全地存储敏感信息（Token 和 Webhook 地址），避免硬编码在脚本里。
- **macOS/Linux**（终端执行）：
  ```bash
  export TELEGRAM_BOT_TOKEN="你的机器人Token"
  export WEBHOOK="你的Webhook地址"
  ```
  ⚠️ 这种设置是「临时生效」的，关闭终端后会失效。如果要永久生效，需要把这两行加到你的 Shell 配置文件（如 `~/.bashrc` 或 `~/.zshrc`）里。

- **Windows**（命令提示符/PowerShell 执行）：
  ```cmd
  # 命令提示符
  set TELEGRAM_BOT_TOKEN=你的机器人Token
  set WEBHOOK=你的Webhook地址

  # PowerShell
  $env:TELEGRAM_BOT_TOKEN="你的机器人Token"
  $env:WEBHOOK="你的Webhook地址"
  ```
  ⚠️ Windows 里这种设置也是「临时生效」的，关闭窗口后会失效。如果要永久生效，需要在「系统属性 → 高级 → 环境变量」里添加。

---

### 5. 运行脚本：`python rss_bot.py`
一切配置完成后，启动脚本开始工作。
- **操作步骤**：
  1.  确保终端还在项目文件夹里（如果之前关闭了，重新用 `cd` 进入）。
  2.  执行启动命令：
      ```bash
      # 同样，Python3 可能需要用 python3
      python rss_bot.py
      # 或
      python3 rss_bot.py
      ```
- **运行后效果**：
  - 脚本会开始定期检查 `rss.config` 里的 RSS 源，发现新内容就通过 Telegram Bot 推送给你。
  - 如果配置了 Webhook，用户给机器人发指令（如 `/help`）时，Telegram 会把请求转发到你的 Webhook 地址，脚本可以响应这些指令。

---

### 🚨 常见问题排查
- **脚本启动报错「找不到模块」**：回到第一步，确认 `requirements.txt` 里的依赖都安装成功了。
- **Telegram 收不到推送**：检查 Bot Token 是否正确，网络是否能访问 Telegram 服务器，RSS 源是否有新内容。
- **Webhook 配置失败**：确保 Webhook 地址是 HTTPS，并且可以被公网访问（用浏览器访问你的 Webhook 地址，看是否能正常响应）。

---
