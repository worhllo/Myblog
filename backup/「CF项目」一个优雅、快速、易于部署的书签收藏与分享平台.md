 > [!NOTE]
> 拾光集 - 精品网址导航站
  一个优雅、快速、易于部署的书签（网址）收藏与分享平台，完全基于 Cloudflare 全家桶构建。
源仓库：[wangwangitnav 一个优雅的书签收藏与分享平台，基于Cloudflare Workers构建](https://github.com/wangwangit/nav)
---

## ✨ 核心特性

- 📱 **响应式设计**：完美适配桌面、平板和手机等各种设备。
- 🎨 **主题美观**：界面简洁优雅，支持自定义主色调。
- 🔍 **快速搜索**：内置站内模糊搜索，迅速定位所需网站。
- 📂 **分类清晰**：通过分类组织书签，浏览直观高效。
- 🔒 **安全后台**：基于 KV 的管理员认证，提供完整的书签增删改查后台。
- 📝 **用户提交（可配置）**：支持访客提交书签，经管理员审核后显示，可在环境变量中关闭入口。
- ⚡ **性能卓越**：利用 Cloudflare 边缘缓存，实现秒级加载，并极大节省 D1 数据库读取成本。
- 📤 **数据管理**：支持书签数据的导入与导出，格式兼容，方便迁移。


## 🚀 快速部署

> **准备工作**: 你需要一个 Cloudflare 账号。

### 步骤 1: 创建 D1 数据库

1.  在 Cloudflare 控制台，进入 `Workers & Pages` -> `D1`。
2.  点击 `创建数据库`，数据库名称输入 `book`，然后创建。

    ![创建D1数据库](https://github.com/user-attachments/assets/f49d61ea-a87b-42ed-a460-98e53fb340e0)

3.  进入数据库的`控制台`，执行下方的 SQL 语句来快速创建所需的表结构。(注意移除中文注释)

    ![执行SQL](https://github.com/user-attachments/assets/be10c3a0-a862-467a-8114-d5c5c8e48d2a)

```sql
-- 创建已发布网站表
CREATE TABLE sites (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
url TEXT NOT NULL,
logo TEXT,
"desc" TEXT,
catelog TEXT NOT NULL,
status TEXT,
sort_order INTEGER NOT NULL DEFAULT 9999,
create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
update_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 创建待审核网站表
CREATE TABLE pending_sites (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
url TEXT NOT NULL,
logo TEXT,
"desc" TEXT,
catelog TEXT NOT NULL,
status TEXT,
create_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 创建分类排序表
CREATE TABLE category_orders (
catelog TEXT PRIMARY KEY,
sort_order INTEGER NOT NULL DEFAULT 9999
);
```
> **提示**: 使用 SQL 是最快捷的方式。如果你想手动建表，请确保字段名、类型与上述 SQL 一致。

### 步骤 2: 创建 KV 存储

1.  在 Cloudflare 控制台，进入 `Workers & Pages` -> `KV`。
2.  点击 `创建命名空间`，名称输入 `NAV_AUTH`。

    ![创建KV](https://github.com/user-attachments/assets/ed274f2d-2bf0-4f26-aa86-90e22286e94b)

3.  创建后，为此 KV 添加两个条目，用于设置后台登录的 **用户名** 和 **密码**。
    -   **admin_username**: 你的管理员用户名（例如 `admin`）
    -   **admin_password**: 你的管理员密码

    ![设置KV键值对](https://github.com/user-attachments/assets/2fd5742f-5709-4ad9-b4fa-865cbca0bb8e)

### 步骤 3: 创建并部署 Worker

1.  回到 `Workers & Pages`，点击 `创建应用程序` -> `创建 Worker`。
2.  为你的 Worker 指定一个名称（例如 `my-nav`），然后点击 `部署`。

    ![创建Worker](https://github.com/user-attachments/assets/02c3d4c4-6746-45fe-a428-516023fed880)

3.  部署后，点击 `编辑代码`。将仓库中最新版本的脚本（推荐 `work_v2.js`，部署时可重命名为 `work.js`）完整复制并粘贴到编辑器中，替换掉原有内容。
4.  点击 `部署` 保存代码。

    ![编辑并部署代码](https://github.com/user-attachments/assets/f2f4fe86-aab1-4805-9ba3-bac8b889875d)

### 步骤 4: 绑定服务

1.  进入你刚刚创建的 Worker 的 `设置` -> `变量`。
2.  在 **D1 数据库绑定** 中，点击 `添加绑定`：
    -   变量名称: `NAV_DB`
    -   D1 数据库: 选择你创建的 `book`
3.  在 **KV 命名空间绑定** 中，点击 `添加绑定`：
    -   变量名称: `NAV_AUTH`
    -   KV 命名空间: 选择你创建的 `NAV_AUTH`

    ![绑定服务](https://github.com/user-attachments/assets/269f4678-4e8a-4dbd-a8d7-f186466f4380)

### 步骤 5: 开始使用

1.  访问你的 Worker 域名（例如 `my-nav.your-subdomain.workers.dev`）。首次访问会提示没有数据。
2.  访问 `你的域名/admin` 进入后台，使用你在 **步骤 2** 中设置的用户名和密码登录。
3.  在后台添加第一个书签后，首页即可正常显示。

    ![后台登录](https://github.com/user-attachments/assets/284e3560-284f-4313-a7c6-d651d2e25c00)

## ⬆️ 版本升级

### 从 v1 升级到 v2

1. 在 Cloudflare Workers 控制台，将脚本替换为仓库中的 `work_v2.js`（部署时可重命名为 `work.js`），覆盖旧版本代码。
2. 检查 D1 数据库是否存在分类排序表，若尚未创建请执行：

    ```sql
    CREATE TABLE IF NOT EXISTS category_orders (
      catelog TEXT PRIMARY KEY,
      sort_order INTEGER NOT NULL DEFAULT 9999
    );
    ```

3. 如需关闭访客投稿，在 Worker 的环境变量中新增：

    ```
    ENABLE_PUBLIC_SUBMISSION=false
    ```

4. 重新部署后访问 `/admin` 并使用 KV 中存储的账号密码重新登录；V2 采用会话 Cookie，旧的 `?name=xxx&password=xxx` 链接将不再生效。

> 小贴士：升级前可先在后台导出一次配置数据，便于回滚。

### 从 v1 之前版本升级到 v1

如果你是 **从 v1 之前的版本** 升级到最新版，你需要为 `sites` 表添加 `sort_order` 字段以支持自定义排序功能。

请进入你的 `book` 数据库控制台，执行以下 SQL 语句：

```sql
ALTER TABLE sites ADD COLUMN sort_order INTEGER DEFAULT 9999;
```

![执行ALTER语句](https://github.com/user-attachments/assets/4b12b1ef-042e-407d-9efb-7fecf9efb02c)

执行成功后，用最新的 `work_v1.js` 代码重新部署 Worker 即可；若随后还要升级到 V2，请继续按照上一节步骤操作。

## 🛠️ 自定义与开发

本项目所有逻辑均封装在单文件 Worker 脚本中（推荐使用 `work_v2.js`，部署时可重命名为 `work.js`），结构清晰，便于二次开发。

### 修改主题样式

你可以直接在脚本顶部的 `tailwind.config` 对象中修改主题颜色。

```js
// work_v2.js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          // 修改为你希望的主色调
          500: '#416d9d',
        },
        // ...其他颜色配置
      },
    }
  }
}
```

### 访客提交开关

默认情况下，前台会展示“添加新书签”入口，并允许访客通过 `/api/config/submit` 提交待审核的书签。如果你希望关闭此功能，可在 Worker 环境变量中新增：

```
ENABLE_PUBLIC_SUBMISSION=false
```

重新部署后，前台按钮会自动隐藏，相关接口也会返回 403，确保无需改动代码即可彻底关闭访客投稿。

### 排序规则

- **书签排序**：后台的“排序”数值越小，书签在列表中的位置越靠前。
- **分类排序**：系统优先读取 `category_orders` 表中的排序值；若未设置，则退回到分类内书签的最小排序值，再按名称排序。您可以在后台“分类排序”标签页直接编辑排序值，或手动更新 `category_orders` 表。

### 管理后台安全

后台登录凭据依然存放在 `NAV_AUTH` KV 中的 `admin_username` 与 `admin_password` 两个键内。登录 `/admin` 时需要在页面表单中输入账号与密码，系统会返回一个 12 小时有效的 HttpOnly 会话 Cookie，无需、也不再支持在 URL 查询参数中传递凭据。点击后台右上角的“退出登录”按钮即可立即销毁会话。

### 项目结构

-   `work_v2.js`: 当前推荐的 Worker 主脚本，集成 V2 版本全部能力，实际部署时可重命名为 `work.js`。
-   `work_v1.js`: 旧版脚本，保留用于兼容存量环境或作为比对参考。
-   `worker.js`: 初代实现，包含最基础的功能，后续不再维护。
-   主要逻辑模块:
    -   `api`: 处理所有数据交互的 API 请求。
    -   `admin`: 负责后台管理界面的渲染和逻辑。
    -   `handleRequest`: 负责前台页面的渲染和路由。



