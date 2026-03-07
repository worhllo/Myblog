> [!NOTE]
> 🎮 Epic Games Free Notifier | Epic 喜加一通知机器人
这是一个基于 GitHub Actions 的全自动化脚本，**每天自动检测** Epic Games Store 的免费游戏，并通过 Telegram Bot 发送精美的图文通知。
你不需要服务器，不需要懂代码，只要拥有一个 GitHub 账号，就能免费部署属于你自己的通知机器人！
源仓库：[wwxseoepic- 🎮 Epic 喜加一自动通知机器人  每天自动检测 Epic 免费游戏并推送到 Telegram (零成本GitHub Actions)  Epic Games Free Games Notifier via Telegram Bot](https://github.com/wwxseo/epic-)

## ✨ 核心功能

*   **☁️ 零成本 (Serverless)**：直接利用 GitHub Actions 免费运行，不需要购买云服务器。
*   **⏰ 全天候监测**：每天北京时间 10:00 自动检查。完美支持**每周四的常规免费**以及**圣诞节/春节期间的每日免费活动**。
*   **🧠 智能防打扰**：内置去重逻辑。脚本会自动计算游戏上架时间，**只推送 24 小时内新上架的游戏**。如果是旧游戏，机器人会保持安静，不会重复骚扰。
*   **📸 精美排版**：消息包含游戏**封面大图**、**中文/英文标题**、**简介**、**截止时间**以及**直达领取链接**。
*   **🛡️ 永久运行**：内置 Keepalive 防暂停机制，防止 GitHub 因为仓库长期无活跃提交而暂停定时任务。

## 🚀 新手部署教程 (只需 3 步)

### 第一步：准备 Telegram 机器人
*(如果你已经有机器人和 Chat ID，请跳过此步)*

1.  **获取 Bot Token**:
    *   在 Telegram 搜索 `@BotFather`。
    *   发送指令 `/newbot`。
    *   按照提示给机器人起个名字。
    *   你将获得一串 Token（例如：`123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`），**复制并保存好**。
2.  **获取 Chat ID**:
    *   在 Telegram 搜索 `@userinfobot`。
    *   点击 `Start`，它会回复一串数字（例如：`123456789`），这就是你的 Chat ID，**复制并保存好**。

### 第二步：Fork 本仓库
1.  点击页面右上角的 **Fork** 按钮。
2.  点击 **Create fork**，将这个项目复制到你自己的 GitHub 账号下。

### 第三步：配置密钥 (Secrets)
1.  进入你 Fork 后的仓库页面。
2.  点击上方的 **Settings** (设置) ⚙️。
3.  在左侧栏找到 **Secrets and variables** -> 点击 **Actions**。
4.  点击绿色的 **New repository secret** 按钮，依次添加以下两个变量：

| Name (变量名) | Secret (值) | 说明 |
| :--- | :--- | :--- |
| `TG_BOT_TOKEN` | `你的机器人Token` | 刚才找 BotFather 申请的那串字符 |
| `TG_CHAT_ID` | `你的数字ID` | 刚才找 userinfobot 获取的那串数字 |

### 第四步：开启权限 (重要！)
为了防止 GitHub 60天后自动停止任务，我们需要开启写权限：
1.  点击仓库上方的 **Settings**。
2.  左侧点击 **Actions** -> **General**。
3.  向下滚动到 **Workflow permissions** 区域。
4.  勾选 **Read and write permissions**。
5.  点击 **Save** 保存。

### 第五步：启动！
1.  点击仓库上方的 **Actions** 标签。
2.  你会看到左侧有一个警告或提示，点击绿色的 **I understand my workflows, go ahead and enable them** 按钮。
3.  点击左侧的 **Epic Free Game Notifier**。
4.  点击右侧的 **Run workflow** -> **Run workflow** 按钮进行首次测试。

---

## ❓ 常见问题 (FAQ)

**Q: 我手动运行了，为什么没收到消息？**
A: 这是正常的！脚本有**去重机制**。如果当前 Epic 的免费游戏是几天前上架的（比如《霍格沃茨之遗》已经送了3天了），脚本会自动跳过，避免重复发消息。
**只有当 Epic 上架了新游戏（上架时间 < 28小时），你才会收到推送。**

**Q: 什么时候会自动运行？**
A: 每天北京时间 **上午 10:00** (UTC 02:00)。

**Q: 我能改运行时间吗？**
A: 可以。修改 `.github/workflows/main.yml` 文件中的 `- cron: '0 2 * * *'` 即可（注意是 UTC 时间）。

-