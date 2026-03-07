> [!NOTE]
> 🚀 ximagine-2api Cloudflare Worker · 文生视频代理服务
ximagine-2api` 是一个基于 Cloudflare Worker 的智能代理服务，它巧妙地将 OpenAI 兼容接口转换为 Ximagine 文生视频服务的调用。简单来说，它就像是一个 **"智能翻译官"** 🤖，把标准的 AI 请求"翻译"成视频生成指令！
原仓库：[lza6ximagine-2api-cfwork Cloudflare Worker 无服务器部署 · 反向代理与 API 网关 · OpenAI 接口格式兼容 · 双模式轮询机制（服务端客户端） · 拟真进度条模拟 · 请求头伪装与指纹随机化 · 自动水印强制开启 · 上游原始错误透传 · 多模型多比例支持 · 实时 SSE 流式传输 · WebSocket 替代方案 · 环境变量鉴权 · CORS 自动处理 · 纯前端驾驶舱界面 · 无头浏览器替代方案 · 持久化任务状态追踪 · 敏感词拦截检测 · 跨域资源共享优化 · 异步任务队列管理 · 一键复制集成支持](https://github.com/lza6/ximagine-2api-cfwork)


## 🌟 核心特性
- **🎬 文生视频专精** - 只做一件事，但做到极致！
- **🚫 无冗余功能** - 移除所有不稳定组件，保持代码纯净
- **🛡️ 强制水印模式** - 确保 99.9% 生成成功率
- **🔧 错误智能解析** - 当失败时告诉你真正原因（比如敏感词提示）
- **📊 拟真进度条** - 15-30 秒智能进度模拟，告别焦虑等待
- **🌐 双模式支持** - 同步生成 + 异步轮询，适应不同场景
- **🔗 OpenAI 标准** - 兼容 LobeChat、NextChat 等主流客户端
- **📡 多接口暴露** - 完整 API 地址，方便集成使用

## ⚡ 快速开始

### 🚀 懒人一键部署

<div align="center">

[![部署到 Cloudflare](https://img.shields.io/badge/一键部署-Cloudflare_Worker-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/workers/services)

</div>

#### 📝 部署步骤（5分钟搞定！）

1. **📋 准备工作**
   ```bash
   - Cloudflare 账号（免费！）
   - 一个酷炫的创意想法 💡
   ```

2. **🎯 一键部署**
   - 点击上方「部署到 Cloudflare」按钮
   - 复制 [完整代码](#-完整代码) 到 Worker 编辑器
   - 点击「保存并部署」🎉

3. **🔑 环境配置**
   ```javascript
   // 在 Worker 设置中添加环境变量
   API_MASTER_KEY = "你的超级密钥"
   ```

4. **🎉 开始使用**
   - 访问你的 Worker 域名
   - 进入炫酷的开发者驾驶舱 🏎️
   - 开始生成第一个 AI 视频！

### 🔧 手动部署（高级选项）

如果需要更精细的控制，可以手动部署：

```bash
# 1. 安装 Wrangler CLI
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 创建新项目
wrangler init ximagine-2api

# 4. 复制代码到 src/index.js
# 5. 配置 wrangler.toml
```

## 🔧 详细教程

### 🎮 Web UI 使用指南

我们的 **「开发者驾驶舱」** 提供了极致的使用体验：

#### 🖱️ 界面概览
```
左侧面板 (控制中心)       右侧面板 (创作空间)
├─ 🔑 API 密钥显示         ├─ 💬 聊天式交互
├─ 🌐 接口地址快捷复制     ├─ 📊 实时进度条  
├─ 🎛️ 风格模式选择        ├-- 🎬 视频预览区
├-- ⚖️ 画面比例设置
└-- 🚀 生成按钮
```

#### 🎯 生成步骤详解

1. **🎨 选择风格模式**
   - `normal` - 标准模式：平衡的质量和创意
   - `fun` - 趣味模式：更活泼有趣的风格
   - `spicy` - 火辣模式：更大胆的创意表达

2. **⚖️ 设置画面比例**
   - `1:1` - 方形：适合社交媒体
   - `3:2` - 横屏：适合传统视频
   - `2:3` - 竖屏：适合手机观看

3. **✍️ 编写提示词**
   ```javascript
   // 优秀提示词公式：
   主题 + 风格 + 动作 + 环境 + 细节
   
   // 示例：
   "一只可爱的猫咪在花园里追逐蝴蝶，阳光明媚，细节丰富，动漫风格"
   ```

4. **🚀 点击生成**
   - 观察智能进度条 📈
   - 实时查看生成状态
   - 完成后自动播放视频 🎬

### 🔌 API 集成教程

#### 📡 基础调用
```javascript
// 1. 准备请求数据
const requestData = {
  model: "grok-imagine-normal", // 模型选择
  messages: [
    {
      role: "user",
      content: "一只航天员猫咪在月球上跳舞，科幻风格"
    }
  ],
  stream: true // 推荐开启流式响应
};

// 2. 发送请求
const response = await fetch('你的Worker地址/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer 你的API密钥',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
});
```

#### 🎛️ 高级参数
```javascript
// 使用 JSON 格式传递高级参数
const advancedRequest = {
  model: "grok-imagine-fun",
  messages: [
    {
      role: "user",
      content: JSON.stringify({
        prompt: "海底世界的奇幻冒险，色彩鲜艳",
        aspectRatio: "16:9",    // 画面比例
        mode: "fun",           // 风格模式
        clientPollMode: true   // 开启客户端轮询
      })
    }
  ],
  stream: true
};
```

#### 🔄 轮询状态检查
```javascript
// 获取生成状态
async function checkStatus(taskId, uniqueId) {
  const response = await fetch(
    `你的Worker地址/v1/query/status?taskId=${taskId}&uniqueId=${uniqueId}`,
    {
      headers: {
        'Authorization': 'Bearer 你的API密钥'
      }
    }
  );
  
  return await response.json();
}

// 状态返回值说明
const statusResults = {
  processing: { status: 'processing', progress: 45 },     // 生成中
  completed: { status: 'completed', videoUrl: '...' },    // 完成
  failed: { status: 'failed', error: '错误信息' }         // 失败
};
```


## 🚀 应用场景

### 🎬 内容创作
- **短视频制作** - 快速生成创意视频片段
- **社交媒体内容** - 为推文、帖子添加动态视觉
- **营销素材** - 创建产品展示视频

### 🔧 技术集成
- **聊天应用** - 为 AI 聊天机器人添加视频生成能力
- **创作平台** - 集成到在线设计工具中
- **教育工具** - 可视化教学材料生成

### 🎮 个人娱乐
- **创意表达** - 将想法瞬间变为视频
- **学习实验** - 了解 AI 视频生成技术
- **技术研究** - 分析 AI 生成内容的特点

