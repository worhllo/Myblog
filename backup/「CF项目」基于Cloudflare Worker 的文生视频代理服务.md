> [!NOTE]
> 🧠 MindVideo-2API (Cloudflare Worker Edition)
本项目通过 Cloudflare Worker 这一边缘计算神器，将复杂的上游接口转化为标准的 OpenAI 格式 API 和一个优雅的 WebUI 驾驶舱。
原仓库：[lza6mindvideo-2api-CFwork Cloudflare Workers 边缘部署、纯 Fetch 轻量级请求 (无 Headless)、OpenAI 接口标准兼容、i-sign 签名算法逆向、多 Token 负载均衡、SSE 流式响应模拟、内置 WebUI 驾驶舱、CORS 跨域支持](https://github.com/lza6/mindvideo-2api-CFwork)
---

## ✨ 核心特性 (v3.2.0)

*   **☁️ Serverless 架构**: 依托 Cloudflare Worker，无需购买服务器，每日 10 万次免费请求，零成本部署。
*   **🔄 OpenAI 接口兼容**: 提供 `/v1/chat/completions` 接口，完美适配 NextChat、One API 等第三方客户端。
*   **🖥️ 开发者驾驶舱 (WebUI)**: 内置精美的单文件 HTML 界面，支持**实时进度条**、双图上传 (图生图)、视频预览。
*   **🚀 极速响应**: 采用流式传输 (SSE) 和异步轮询机制，解决 HTTP 超时问题。
*   **🛡️ 安全与签名**: 内置 `i-sign` 签名算法 (MD5 + Nonce + Timestamp)，自动处理鉴权。
*   **🎨 多模型支持**:
    *   `sora-2-free`: 文生视频 (Sora-2 Video)
    *   `gemini-3-image`: 文生图 (Gemini-3 Pro)
    *   `gemini-3-i2i`: 图生图 (Gemini-3 I2I)

---

## 🛠️ 快速开始 (小白教程)

我们深知配置环境的痛苦，因此为您准备了最简单的部署方案。

### 方案 A: 懒人一键部署 (推荐)

1.  🆕 注册并登录 [Cloudflare](https://dash.cloudflare.com/)
2.  📝 在左侧菜单选择 **Workers & Pages** → **Create Application** → **Create Worker**
3.  🔧 命名为 `mindvideo-api`，点击 **Deploy**
4.  ✏️ 点击 **Edit code**，进入在线编辑器
5.  📋 **复制** 本仓库 `worker.js` 中的所有代码
6.  📝 **粘贴** 到编辑器中（覆盖原有代码）
7.  ⚙️ **修改配置**: 在代码顶部的 `CONFIG` 区域，填入您的 `AUTH_TOKENS` (MindVideo 的 Token，获取方法见下文)
8.  🚀 点击右上角 **Deploy**
9.  🎉 **完成！** 访问你的 Worker 域名即可看到 WebUI

### 方案 B: 本地开发部署 (开发者)

```bash
# 1. 克隆仓库
git clone https://github.com/lza6/mindvideo-2api-CFwork.git
cd mindvideo-2api-CFwork

# 2. 安装依赖 (需安装 Wrangler)
npm install -g wrangler

# 3. 登录 Cloudflare
wrangler login

# 4. 部署
wrangler deploy
```

### 🔑 如何获取 Token？

1.  🌐 访问 [MindVideo 官网](https://www.mindvideo.ai/) 并登录
2.  🔧 按 `F12` 打开开发者工具，点击 **Network (网络)** 标签
3.  📡 发起一次生成请求，找到 `creations` 或 `refresh` 接口
4.  📋 在 **Request Headers (请求头)** 中找到 `Authorization` 字段
5.  🔑 复制 `Bearer ` 后面的那串字符，填入代码中的 `AUTH_TOKENS` 数组中

---



