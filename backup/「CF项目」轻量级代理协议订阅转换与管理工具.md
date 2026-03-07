

  <h1><b>Sublink Worker</b></h1>
  <h5><i>一个工具，管理所有订阅</i></h5>

  <p><b>轻量级代理协议订阅转换与管理工具，可部署于 Cloudflare Workers、Vercel、Node.js 或 Docker 环境</b></p>

  <a href="https://trendshift.io/repositories/12291" target="_blank">
    <img src="https://trendshift.io/api/badge/repositories/12291" alt="7Sageer%2Fsublink-worker | Trendshift" width="250" height="55"/>
  </a>

  <br>

<p style="display: flex; align-items: center; gap: 10px;">
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/7Sageer/sublink-worker">
    <img src="https://deploy.workers.cloudflare.com/button" alt="部署到 Cloudflare Workers" style="height: 32px;"/>
  </a>
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/7Sageer/sublink-worker&env=KV_REST_API_URL,KV_REST_API_TOKEN&envDescription=Vercel%20KV%20数据存储所需凭证&envLink=https://vercel.com/docs/storage/vercel-kv">
    <img src="https://vercel.com/button" alt="部署到 Vercel" style="height: 32px;"/>
  </a>
</p>


## 原仓库来源
本项目托管于 [7Sageer/sublink-worker](https://github.com/7Sageer/sublink-worker)，感谢所有贡献者的努力与支持。

## 🚀 快速开始

### 一键部署
- 点击上方任意一个「部署」按钮
- 完成！更多详情请查看 [文档](https://sublink.works/guide/quick-start/)

### 其他运行环境
- **Node.js**: `npm run build:node && node dist/node-server.cjs`
- **Vercel**: `vercel deploy`（需在项目设置中配置 KV 存储）
- **Docker**: `docker pull ghcr.io/7sageer/sublink-worker:latest`
- **Docker Compose**: `docker compose up -d`（包含 Redis 依赖）

## ✨ 核心功能

### 支持协议
影梭（ShadowSocks）• VMess • VLESS • Hysteria2 • 特洛伊（Trojan）• TUIC

### 客户端支持
Sing-Box • Clash • Xray/V2Ray • Surge

### 输入支持
- Base64 编码订阅链接
- HTTP/HTTPS 订阅链接
- 完整配置文件（Sing-Box JSON、Clash YAML、Surge INI）

### 核心能力
- 多来源订阅导入
- 生成固定/随机短链接（基于 KV 存储）
- 明暗主题切换
- 灵活 API 支持脚本自动化
- 多语言支持（中文、英文、波斯语、俄语）
- 网页管理界面（含预设规则集与可自定义策略组）




