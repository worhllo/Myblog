> [!NOTE]
> 一个基于 GitHub Actions 的零成本 Telegram 机器人，每日定时推送《排球少年！！》高清壁纸与正能量语录。
源仓库：[wwxseodaily-hinata-bot](https://github.com/wwxseo/daily-hinata-bot)

## 📖 项目简介

这是一个完全自动化、**零成本**运行的 Telegram 机器人。它利用 **GitHub Actions** 的定时任务功能，每天自动从 **Wallhaven** 获取一张《排球少年！！》的高清壁纸，并从 **一言 (Hitokoto)** 获取一句随机的动漫/哲学语录，推送到你的 Telegram 频道或群组。

**无需购买服务器，无需维护，Fork 即用！**

### ✨ 功能亮点

- **📅 每日定时推送**：默认每天北京时间早上 8:00 推送（时间可自定义）。
- **🖼️ 高清壁纸源**：接入 Wallhaven API，获取高质量二次元壁纸（支持随机筛选）。
- **💬 每日语录**：随机附带一句动漫或文学金句，每天都有新感觉。
- **🚀 Serverless**：完全依赖 GitHub Actions 运行，无需 VPS。
- **🛡️ 稳定可靠**：使用官方 API 接口，无需处理复杂的反爬虫验证。

---

## 📸 效果预览

<!-- 建议把你刚才那张成功的手机截图放在这里，非常直观 -->
![Screenshot_2025-12-21-00-21-50-77_948cd9899890cbd5c2798760b2b95377](https://github.com/user-attachments/assets/7cd983e7-c06a-4634-9cb1-277572c89418)

---

## 🚀 快速部署 (如何拥有自己的机器人)

你不需要懂代码，只需要按照以下步骤操作即可。

### 1. Fork 本仓库
点击页面右上角的 **Fork** 按钮，将本项目复制到你自己的 GitHub 账号下。

### 2. 准备 Telegram 机器人
1. 在 Telegram 中搜索 `@BotFather`。
2. 发送 `/newbot` 创建新机器人，获取 **Token**。
3. 创建一个频道 (Channel) 或群组，将机器人拉入并设为**管理员**。
4. 获取你的 **Chat ID** (可以使用 `@getidsbot` 获取)。

### 3. 配置 GitHub Secrets
为了安全起见，不要将 Token 直接写在代码里。请在你的 GitHub 仓库中配置环境变量：

1. 进入仓库的 **Settings** -> **Secrets and variables** -> **Actions**。
2. 点击 **New repository secret**，添加以下两个变量：

| Name | Value (填入你的值) | 说明 |
| :--- | :--- | :--- |
| `BOT_TOKEN` | `123456:ABC-Def...` | 从 BotFather 获取的 Token |
| `CHAT_ID` | `-100xxxxxxx` | 你的频道或群组 ID (频道ID通常以 -100 开头) |

### 4. 启用定时任务
1. 点击仓库上方的 **Actions** 标签。
2. 你可能会看到一个警告："Workflows aren't being run on this forked repository"，点击绿色的 **I understand my workflows, go ahead and enable them**。
3. 在左侧选择 **Daily Hinata Push**，手动点击 **Run workflow** 测试一次。
4. 测试成功后，机器人将在每天固定时间自动运行。

---

## ⚙️ 自定义配置

### 修改推送时间
打开 `.github/workflows/daily.yml` 文件，修改 `cron` 表达式：

```yaml
on:
  schedule:
    # 每天 UTC 时间 0:00 (北京时间 8:00)
    - cron: '0 0 * * *'
如果你想改成北京时间早上 9 点，将第一个 0 改为 1 即可。
```
### 修改图片搜索关键词
打开 `main.py` 文件，找到 `url` 变量：
```# q=haikyuu 表示搜索排球少年，你可以改成 q=hinata shoyo (只看日向翔阳)
url = "https://wallhaven.cc/api/v1/search?q=haikyuu&categories=010&purity=100&sorting=random"
```
## 🛠️ 技术栈
Python 3
GitHub Actions (CI/CD)
Requests (HTTP Library)
Telegram Bot API
Wallhaven API (Image Source)
Hitokoto API (Quote Source)
## 🤝 致谢
感谢以下服务提供的免费 API：

- [Wallhaven](https://wallhaven.cc) - 最好的二次元壁纸站
- [Hitokoto 一言](https://hitokoto.cn) - 感动人心的文字
- 
## 📄 License
本项目采用 MIT License 开源协议。
---

