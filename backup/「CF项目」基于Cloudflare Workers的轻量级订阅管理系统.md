> [!NOTE]
> SubsTracker - 订阅管理与提醒系统
基于Cloudflare Workers的轻量级订阅管理系统，帮助您轻松跟踪各类订阅服务的到期时间，并通过 Telegram、Webhook 等多渠道发送及时提醒。

## ✨ 功能特色

- **订阅管理**：添加、编辑、删除各类订阅服务
- **智能提醒**：自定义提前提醒天数，自动续订计算
- **农历显示**：支持农历日期显示，可控制开关
- **状态管理**：订阅启用/停用，过期状态自动识别
- **财务追踪**：记录订阅费用，完整的支付历史和统计分析
- **手动续订**：灵活的续订管理，支持自定义金额、周期和备注
- **仪表盘**：可视化展示月度/年度支出，支出趋势和分类统计
- **多渠道通知**：Telegram、NotifyX、Webhook、企业微信机器人、邮件通知、Bark、自定义 Webhook


## 🚀 一键部署

### 点击按钮，一键部署到 CloudFlare Workers,

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/wangwangit/SubsTracker)


> 适用于新部署的,以前部署过的直接替换js中的内容即可!

## 📋 三步开始使用

### 1️⃣ 一键部署
Fork仓库,然后点击自己仓库里的部署按钮，等待部署完成,**注意,KV名称修改为 `SUBSCRIPTIONS_KV`**
![image.png](https://img.wangwangit.com/file/1751942578108_image.png)

### 2️⃣ 首次登录
- 访问部署后的域名
- 默认用户名：`admin`
- 默认密码：`password`

### 3️⃣ 开始使用
1. **修改默认密码**（进入系统配置）
2. **配置通知渠道**（选择一个或多个）
3. **添加订阅**，设置提醒
4. **享受智能提醒**！

## 🔧 通知渠道配置

### Telegram
- **Bot Token**: 从 [@BotFather](https://t.me/BotFather) 获取
- **Chat ID**: 从 [@userinfobot](https://t.me/userinfobot) 获取

### NotifyX
- **API Key**: 从 [NotifyX官网](https://www.notifyx.cn/) 获取

### 企业微信机器人
- **推送 URL**: 参考[官方文档](https://developer.work.weixin.qq.com/document/path/91770)获取

### Webhook 通知
- **推送 URL**: 根据所使用的 Webhook 服务或自建接口填写，例如 `https://your-service.com/hooks/notify`
- 支持自定义请求方法、请求头与消息模板
- **模板占位符**：`{{title}}`、`{{content}}`、`{{tags}}`（多行形式）、`{{tagsLine}}`、`{{timestamp}}`、`{{formattedMessage}}`

### Bark（iOS 推送）
- **服务器地址**：默认 `https://api.day.app`，也可使用自建服务器
- **设备 Key**：在 Bark App 内复制
- **历史记录**：勾选“保存推送”后可保留推送历史

### 邮件通知 (Resend)
- **API Key**: 从 [Resend 官方教程](https://developers.cloudflare.com/workers/tutorials/send-emails-with-resend/) 获取
- **发件人邮箱**: 必须是已在 Resend 验证的域名邮箱
- **收件人邮箱**: 接收通知的邮箱地址
- 支持 HTML 格式的美观邮件模板

### 🔔 通知时间与时区说明
- Cloudflare Workers 的 Cron 表达式使用 **UTC 时区**，例如 `0 8 * * *` 表示 UTC 08:00 触发
- 若希望在北京时间（UTC+8）早上 8 点提醒，可将 Cron 设置为 `0 0 * * *`
- 若需要小时级提醒，可将 Cron 调整为 `0 * * * *`（每小时执行一次），并在系统配置中指定允许的通知小时
- 系统配置中的 “系统时区” 用于计算订阅剩余时间和格式化展示，建议与提醒需求保持一致

### 🔐 第三方 API 安全调用
- 通过 `POST /api/notify/{token}` 可触发系统通知，请在后台配置“第三方 API 访问令牌”
- 令牌也可通过 `Authorization: Bearer <token>` 或 `?token=<token>` 传入
- 未配置或令牌不匹配时接口会直接拒绝请求，建议定期更换随机令牌


> 💡 **提示**: 系统默认每天早上8点自动检查即将到期的订阅


## 🚀 手动部署指南

### 前提条件

- Cloudflare账户
- Telegram Bot (用于发送通知)
- 可以直接将代码丢给AI,帮助查漏补缺

### 部署步骤

1.登陆cloudflare,创建worker,粘贴本项目中的js代码,点击部署

![image](https://github.com/user-attachments/assets/ff4ac794-01e1-4916-b226-1f4f604dcbd3)


2.创建KV键值 **SUBSCRIPTIONS_KV**

![image](https://github.com/user-attachments/assets/c9ebaf3e-6015-4400-bb0a-1a55fd5e14d2)


3.给worker绑定上键值对,以及设置定时执行时间!

![image](https://github.com/user-attachments/assets/25b663b3-8e8e-4386-a499-9b6bf12ead76)


4.打开worker提供的域名地址,输入默认账号密码: admin  password (或者admin admin123),可以在代码中查看默认账号密码!

![image](https://github.com/user-attachments/assets/5dac1ce0-43a3-4642-925c-d9cf21076454)


5.前往系统配置,修改账号密码,以及配置tg通知的信息

![image](https://github.com/user-attachments/assets/f6db2089-28a1-439d-9de0-412ee4b2807f)


6.配置完成可以点击测试通知,查看是否能够正常通知,然后就可以正常添加订阅使用了!

![image](https://github.com/user-attachments/assets/af530379-332c-4482-9e6e-229a9e24775e)




