> [!NOTE]
>  CoverView
该项目基于原始的 [CoverView](https://github.com/rutikwankhade/CoverView)。
现在为你的博客创建封面图片变得非常简单。

## ⚡ 特性

- 🚀 超快速且易于使用
- 🌈 7 种不同主题，多种字体
- 🌠 100+ 开发图标，并提供上传自定义图标选项
- ✨ 15+ 种不同背景图案
- 💾 基于博客平台或常用尺寸的封面大小
  - [Hashnode](https://hashnode.com/)
  - [Dev.to](https://dev.to/)
  - [Hugo FixIt](https://github.com/hugo-fixit/FixIt)
  - [稀土掘金](https://juejin.cn/)

## 👩‍💻 开发

本项目主要使用以下技术栈：

- [React 19](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)

1. 下载项目并安装依赖：

    ```shell
    git clone https://github.com/Lruihao/CoverView.git
    cd CoverView/
    pnpm i
    ```

2. 从 [Unsplash API](https://unsplash.com/developers) 获取访问密钥。
3. 在 `.env.local` 文件中添加 `REACT_APP_UNSPLASH_ACCESS_KEY` 环境变量。

    ```shell
    # https://unsplash.com/ Access Key
    REACT_APP_UNSPLASH_ACCESS_KEY="your_access_key_here"
    ```

4. 运行以下命令开始项目：

    ```shell
    pnpm dev
    ```
