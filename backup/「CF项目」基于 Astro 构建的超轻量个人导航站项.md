
> [!TIP]
> 基于 Astro 构建的超轻量个人导航站项目，支持纯静态部署，无需数据库 / 后端，仅编辑数据文件即可更新页面。主打新手友好 & 极速上线，适配Vercel、Cloudflare Pages 等平台 - zywe03/astro-xwnav

---
-   Astro-xwnav:不仅仅是简单的链接集合，更是智能化的导航平台，让您只需专注内容管理而非技术细节,**只需编辑一个数据文件，所有功能都会自动更新，极大简化维护工作**,是低配甚至无服务器,个人用户或新手搭建导航站的首选

[![8cef691facf27b5705f692962052a15b.png](zywe03astro-xwnav%20%F0%9F%9A%80%E5%9F%BA%E4%BA%8E%20Astro%20%E6%9E%84%E5%BB%BA%E7%9A%84%E8%B6%85%E8%BD%BB%E9%87%8F%E4%B8%AA%E4%BA%BA%E5%AF%BC%E8%88%AA%E7%AB%99%E9%A1%B9%E7%9B%AE%EF%BC%8C%E6%94%AF%E6%8C%81%E7%BA%AF%E9%9D%99%E6%80%81%E9%83%A8%E7%BD%B2%EF%BC%8C%E6%97%A0%E9%9C%80%E6%95%B0%E6%8D%AE%E5%BA%93%20%20%E5%90%8E%E7%AB%AF%EF%BC%8C%E4%BB%85%E7%BC%96%E8%BE%91%E6%95%B0%E6%8D%AE%E6%96%87%E4%BB%B6%E5%8D%B3%E5%8F%AF%E6%9B%B4%E6%96%B0%E9%A1%B5%E9%9D%A2%E3%80%82%E4%B8%BB%E6%89%93%E6%96%B0%E6%89%8B%E5%8F%8B%E5%A5%BD%20&%20%E6%9E%81%E9%80%9F%E4%B8%8A%E7%BA%BF%EF%BC%8C%E9%80%82%E9%85%8DVercel%E3%80%81Cloudflare%20Pages%20%E7%AD%89%E5%B9%B3%E5%8F%B0/68747470733a2f2f692e6d696a692e6269642f323032352f30362f32312f38636566363931666163663237623537303566363932393632303532613135622e706e67.png)](https://camo.githubusercontent.com/1100462786f795d0bb3e94bd7af857a7fc8b56ee4870d6cdcf2278d3372e1979/68747470733a2f2f692e6d696a692e6269642f323032352f30362f32312f38636566363931666163663237623537303566363932393632303532613135622e706e67)

-   🚀 **Astro快速加载**：优化清晰，超轻量，性能卓越
-   🚫 **无需后端、无需数据库**：纯静态，无任何运行依赖
-   🕶️ **隐藏链接地址**：悬停在卡片，不显示链接地址
-   🏷 **简洁直观的界面**：分类清晰，操作便捷
-   🔍 **智能搜索功能**：curl+k快捷唤出,快速查找您需要的网站
-   👆 **手势交互支持**：40%屏幕区域左滑打开侧边栏，支持触摸和鼠标拖拽
-   📎 **双分类导航栏**：主页横向导航+侧边导航
-   📃 **卡片式网站展示**：直观美观，一目了然
-   🔄 **自动化工作流**：减少手动操作，提高效率
-   🌓 **暗色模式**：智能切换暗色/亮色模式
-   ⏱️ **快速返回顶部**：一键回到顶部的便捷按钮
-   📸 **图片懒加载**：提升加载速度和用户体验
-   🔊 **流畅的动画过渡**：提升用户界面交互体验
-   💻 **智能顶部栏**：上滑展出，下滑收缩不挡视野
-   🙌 **人性化设计**：搜索框，侧边栏可点空白处退出
-   🌤️ **实时天气显示**：集成API实时获取当地天气
-   📊 **侧边栏统计功能**：显示网站总数和分类统计信息
-   🎨 **404页面**：精美的像素风格404错误页面
-   📱 **响应式布局**：适配所有设备屏幕
-   🔑 **智能提示**：左滑箭头提示，引导用户发现隐藏功能
-   💾 **Island岛屿架构**：
    -   **按需加载**：动态组件独立渲染，提升加载速度
    -   **静态首屏**：首屏纯静态生成，并行加载交互组件
    -   **延迟水合**：交互元素延迟水合，减少首屏阻塞
    -   **查询优先**：搜索和导航操作优先渲染
    -   **浏览器缓存**：利用存储机制优化重复访问

-   🤖 自动化功能，让您只需专注于内容管理而非技术细节,只需修改一个数据文件`src/data/navLinks.js`，所有功能都会自动更新，极大简化了维护工作

-   **🖼️ 自动图标获取**：添加新网站和新分类时无需手动下载图标，脚本自动获取并优化图标引用图标一条龙
-   **📑 自动分类导航**：侧边栏分类导航会根据数据文件自动更新，无需手动修改HTML
-   **🔎 自动搜索索引**：搜索功能会自动检测新增网站和分类，无需额外配置
-   **🃏 自动卡片生成**：网站卡片布局会自动适应新增内容，保持一致的视觉效果
-   **🎨 自动主题切换**：根据用户系统配置自动切换暗色/亮色主题
-   **🧹 自动清理图标**：图标管理脚本会自动清理未使用的图标文件，保持项目整洁
-   **📱 自动响应式适配**：无需编写额外代码，完美适配各种设备屏幕
-   **📊 自动统计计算**：侧边栏自动统计网站总数和各分类网站数量
-   **🗺️ 自动生成站点地图**：每次构建项目自动生成robots.txt和sitemap.xml
-   **📝 自动SEO元数据**：每次构建项目自动生成和管理SEO相关的元标签等等代码


-   `git clone https://github.com/zywe03/astro-xwnav.git`(或者下载压缩包源码解压)

-   安装 **Node.js 18.0+** (推荐LTS版本)[官网](https://nodejs.org/zh-cn)
-   Windows用户：直接从官网下载安装包

-   **启用 pnpm**（轻量、高效）
    
    ```shell
    corepack enable
    corepack prepare pnpm@latest --activate
    ```
    

```perl
# 安装依赖
pnpm i
# 浏览器实时看效果
pnpm dev
# 自动下载图标
npx tsx .\icon-system\0icon.ts
# 打包构建生成/dist目录
pnpm build
```

[![zywe vercel](zywe03astro-xwnav%20%F0%9F%9A%80%E5%9F%BA%E4%BA%8E%20Astro%20%E6%9E%84%E5%BB%BA%E7%9A%84%E8%B6%85%E8%BD%BB%E9%87%8F%E4%B8%AA%E4%BA%BA%E5%AF%BC%E8%88%AA%E7%AB%99%E9%A1%B9%E7%9B%AE%EF%BC%8C%E6%94%AF%E6%8C%81%E7%BA%AF%E9%9D%99%E6%80%81%E9%83%A8%E7%BD%B2%EF%BC%8C%E6%97%A0%E9%9C%80%E6%95%B0%E6%8D%AE%E5%BA%93%20%20%E5%90%8E%E7%AB%AF%EF%BC%8C%E4%BB%85%E7%BC%96%E8%BE%91%E6%95%B0%E6%8D%AE%E6%96%87%E4%BB%B6%E5%8D%B3%E5%8F%AF%E6%9B%B4%E6%96%B0%E9%A1%B5%E9%9D%A2%E3%80%82%E4%B8%BB%E6%89%93%E6%96%B0%E6%89%8B%E5%8F%8B%E5%A5%BD%20&%20%E6%9E%81%E9%80%9F%E4%B8%8A%E7%BA%BF%EF%BC%8C%E9%80%82%E9%85%8DVercel%E3%80%81Cloudflare%20Pages%20%E7%AD%89%E5%B9%B3%E5%8F%B0/68747470733a2f2f76657263656c2e636f6d2f627574746f6e.svg)](https://vercel.com/new/clone?repository-url=https://github.com/zywe03/astro-xwnav-theme)

[![zywe Cloudflare pages](zywe03astro-xwnav%20%F0%9F%9A%80%E5%9F%BA%E4%BA%8E%20Astro%20%E6%9E%84%E5%BB%BA%E7%9A%84%E8%B6%85%E8%BD%BB%E9%87%8F%E4%B8%AA%E4%BA%BA%E5%AF%BC%E8%88%AA%E7%AB%99%E9%A1%B9%E7%9B%AE%EF%BC%8C%E6%94%AF%E6%8C%81%E7%BA%AF%E9%9D%99%E6%80%81%E9%83%A8%E7%BD%B2%EF%BC%8C%E6%97%A0%E9%9C%80%E6%95%B0%E6%8D%AE%E5%BA%93%20%20%E5%90%8E%E7%AB%AF%EF%BC%8C%E4%BB%85%E7%BC%96%E8%BE%91%E6%95%B0%E6%8D%AE%E6%96%87%E4%BB%B6%E5%8D%B3%E5%8F%AF%E6%9B%B4%E6%96%B0%E9%A1%B5%E9%9D%A2%E3%80%82%E4%B8%BB%E6%89%93%E6%96%B0%E6%89%8B%E5%8F%8B%E5%A5%BD%20&%20%E6%9E%81%E9%80%9F%E4%B8%8A%E7%BA%BF%EF%BC%8C%E9%80%82%E9%85%8DVercel%E3%80%81Cloudflare%20Pages%20%E7%AD%89%E5%B9%B3%E5%8F%B0/68747470733a2f2f6465706c6f792e776f726b6572732e636c6f7564666c6172652e636f6d2f627574746f6e.svg)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create/deploy-to-workers&repository=https://github.com/zywe03/astro-xwnav-theme)

**列出想要生成的网站所属分类,名称或网站**,短和长描述让AI生成，节省工作量

AI提示词:

```css
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub', 
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      },

描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
```

插入数据文件`navLinks.js`后 执行`npx tsx .\icon-system\0icon.ts`自动下载图标,即可完成大量导航网站的导入工作

1.  ➡️使用Cloudflare Pages或Vercel作为服务器

vscode更新数据文件，执行图标下载脚本，同步更新到仓库即可

2.  ➡️使用vps作为服务器

2.1:使用`rsync`，配置一键脚本上传

2.2:更新文件，执行脚本，构建，设置好nginx，压缩dist目录，上传后解压，每次更新删除服务器的dist，再传新的压缩包

Astro-xwnav 会不定期发布 新功能,修复BUG,维护功能

-   添加一次上游`git remote add upstream https://github.com/zywe03/astro-xwnav.git`
-   之后执行`git pull upstream main`即可更新(⚠️ 注意写好`.gitignore文件`避免覆盖数据)

```csharp
dh_web/
├── icon-system/       # 图标管理系统
├── public/            # 静态资源目录
│   ├── icons/         # 导航网站和分类图标目录
│   └── images/        # 网站图标
├── src/               # 源代码目录
│   ├── components/    # 组件目录
│   │   ├── Card.astro     # 网站卡片组件
│   │   ├── Footer.astro   # 页脚组件
│   │   ├── Header.astro   # 页眉组件
│   │   ├── LogoName.astro  # Logo和网站名称组件
│   │   └── Sidebar.astro   # 侧边栏组件
│   ├── Island/        # React岛屿组件目录
│   │   ├── ThemeIsland.jsx # 主题切换岛屿
│   │   ├── WeatherIsland.jsx # 天气显示岛屿
│   │   ├── quicklyup.jsx   # 快速回到顶部岛屿
│   │   └── searchlsland.jsx # 搜索功能岛屿
│   ├── data/          # 数据目录
│   │   └── navLinks.js    # 导航网站核心数据
│   ├── layouts/       # 布局目录
│   │   └── MainLayout.astro # 主布局
│   └── pages/         # 页面目录
│       ├── index.astro   # 首页
│       ├── 404.astro     # 404错误页面
│       └── robots.txt.ts # 生成robots.txt文件
├── astro.config.mjs   # Astro配置文件
└── package.json       # 项目依赖配置
```

-   **src/data/navLinks.js**: 存储所有网站数据和分类信息，是最常修改的文件，包含网站信息和分类定义

-   **public/icons/**: 存储所有网站图标
-   **public/icons/category/**: 存储分类图标
-   **public/icons/downloaded\_sites/**: 临时下载目录（自动清理）
-   **public/icons/downloaded\_categories/**: 临时下载目录（自动清理）

修改 `src/data/navLinks.js` 文件即可管理所有网站和分类

-   ✅建议统一用一种格式**JavaScript风格格式+单引号**,避免脚本错误识别

在 `categories` 数组中添加新分类：

⚠️ 注意：不要手动添加icon字段，不要icon""字段留空,会导致无法自动下载添加icon字段,**手动自定义图标除外**

最好直接不写icon省心,简单

```js
export const categories = [
  {
    id: new,  //分类ID
    name: '新分类名称',icon: '/icons/category/new-category.svg'
    // 分类图标也支持自动生成,基于模糊搜索分类名字和ID,找到合适的图标
  }
];
```

在 `sites` 数组中添加新网站：

```js
export const sites = [
      {
      id: 'github',                           // 网站ID
      title: 'GitHub',                       // 网站名称
      description: '全球最大代码托管平台。', // 长描述
      shortDesc: '代码托管平台。',      // 短描述
      url: 'https://github.com/',     // 网站链接（包含完整协议（`http://`或`https://`））
      category: 'opensource',        // 所属分类 ID（必须对应分类中的id）
        // 注意：不需要添加icon字段，脚本会自动处理
      },
    ];
```

-   ➡️一句话就是调顺序即可排序
-   **分类排序**: 调整 `categories` 数组中分类的顺序即可改变分类的显示顺序
-   **网站排序**: 调整 `sites` 数组中网站的顺序即可改变网站的显示顺序

___

✅ `navLinks.js`使用“JavaScript风格格式+单引号”，不要添加"icon字段"

由于是静态网站，建议全部图标在构建时下载图标引用

1.  首先在 `src/data/navLinks.js` 中添加好新网站或分类
2.  一键执行：

```shell
# 终端复制粘贴回车
npx tsx .\icon-system\0icon.ts
```

位于页脚组件中，修改 `src/components/Footer.astro` 文件：

-   点开文件一目了然

修改`src\components\LogoName.astro`

-   独立出来方便修改,点开文件一目了然

-   `default.svg`导航网站三级回退机制保底图标
-   `logo.png`网站社交媒体分享图片
-   `logo.svg`网站主图标

1.  准备您的图标文件(修改图片,但使用固定命名)
2.  替换图标文件放入 `public\images` 目录即可

只需要向搜索引擎提交 `https://xxx.com/sitemap-index.xml` 这一个文件

___

[![Star History Chart](zywe03astro-xwnav%20%F0%9F%9A%80%E5%9F%BA%E4%BA%8E%20Astro%20%E6%9E%84%E5%BB%BA%E7%9A%84%E8%B6%85%E8%BD%BB%E9%87%8F%E4%B8%AA%E4%BA%BA%E5%AF%BC%E8%88%AA%E7%AB%99%E9%A1%B9%E7%9B%AE%EF%BC%8C%E6%94%AF%E6%8C%81%E7%BA%AF%E9%9D%99%E6%80%81%E9%83%A8%E7%BD%B2%EF%BC%8C%E6%97%A0%E9%9C%80%E6%95%B0%E6%8D%AE%E5%BA%93%20%20%E5%90%8E%E7%AB%AF%EF%BC%8C%E4%BB%85%E7%BC%96%E8%BE%91%E6%95%B0%E6%8D%AE%E6%96%87%E4%BB%B6%E5%8D%B3%E5%8F%AF%E6%9B%B4%E6%96%B0%E9%A1%B5%E9%9D%A2%E3%80%82%E4%B8%BB%E6%89%93%E6%96%B0%E6%89%8B%E5%8F%8B%E5%A5%BD%20&%20%E6%9E%81%E9%80%9F%E4%B8%8A%E7%BA%BF%EF%BC%8C%E9%80%82%E9%85%8DVercel%E3%80%81Cloudflare%20Pages%20%E7%AD%89%E5%B9%B3%E5%8F%B0/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d7a79776530332f617374726f2d78776e617626747970653d44617465.svg)](https://www.star-history.com/#zywe03/astro-xwnav&Date)

```
感谢项目使用的全部API
Feather,Simple,Iconify,DuckDuckGo,Unavatar,myip.la,openweathermap.org,Clearbit,Logo
```

