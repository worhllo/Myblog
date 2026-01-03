document.addEventListener('DOMContentLoaded', function () {
  const currentUrl = window.location.href;

  // 🏠 主页主题判断
  if (
    currentUrl.includes('https://note.142588.xyz') ||
    currentUrl.endsWith('/') ||
    currentUrl.includes('/index.html') ||
    currentUrl.includes('/page')
  ) {
    console.log('应用主页主题');

    const style = document.createElement('style');
    style.innerHTML = `
      .blogTitle {
        display: unset;
      }

      #header {
        height: 100px;
      }

      #header h1 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .avatar {
        width: 200px;
        height: 200px;
      }

      #header h1 a {
        margin-top: 30px;
        font-family: fantasy;
        margin-left: unset;
      }

      html {
        background: url('https://note.142588.xyz/background.webp') no-repeat center center fixed;
        background-size: cover;
      }

      body {
        min-width: 200px;
        max-width: 885px;
        margin: 30px auto;
        font-size: 16px;
        font-family: sans-serif;
        line-height: 1.25;
        background: rgba(237, 239, 233, 0.84);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        overflow: auto;
      }

      .SideNav {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        min-width: unset;
      }

      .SideNav-item:hover {
        background-color: #c3e4e3;
        border-radius: 10px;
        transform: scale(1.04);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }

      .SideNav-item {
        transition: 0.1s;
      }

      .pagination a:hover,
      .pagination a:focus,
      .pagination span:hover,
      .pagination span:focus,
      .pagination em:hover,
      .pagination em:focus {
        border-color: rebeccapurple;
      }
    `;
    document.head.appendChild(style);

  } else if (
    currentUrl.includes('/post/') ||
    currentUrl.includes('/link.html') ||
    currentUrl.includes('/about.html')
  ) {
    // 📄 文章页主题
    console.log('应用文章页主题');

    const style = document.createElement('style');
    style.innerHTML = `
      html {
        background: url('https://note.142588.xyz/background.webp') no-repeat center center fixed;
        background-size: cover;
      }

      body {
        min-width: 200px;
        max-width: 885px;
        margin: 30px auto;
        font-size: 16px;
        font-family: sans-serif;
        line-height: 1.25;
        background: rgba(237, 239, 233, 0.84);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        overflow: auto;
      }

      .markdown-body img {
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.78);
      }

      .markdown-alert {
        border-radius: 8px;
      }

      .markdown-body .highlight pre,
      .markdown-body pre {
        color: rgb(0, 0, 0);
        background-color: rgba(243, 244, 243, 0.967);
        box-shadow: 0 10px 30px 0 rgba(222, 217, 217, 0.4);
        padding-top: 20px;
        border-radius: 8px;
      }

      .markdown-body code,
      .markdown-body tt {
        background-color: #c9daf8;
      }

      .markdown-body h1 {
        display: inline-block;
        font-size: 1.3rem;
        font-weight: bold;
        background: rgb(239, 112, 96);
        color: #ffffff;
        padding: 3px 10px 1px;
        border-radius: 8px;
        margin-right: 2px;
        margin-top: 1.8rem;
      }
    `;
    document.head.appendChild(style);

  } else if (currentUrl.includes('/tag')) {
    // 🔍 搜索页主题
    console.log('应用搜索页主题');

    const style = document.createElement('style');
    style.innerHTML = `
      html {
        background: url('https://note.142588.xyz/background.webp') no-repeat center center fixed;
        background-size: cover;
      }

      body {
        min-width: 200px;
        max-width: 885px;
        margin: 30px auto;
        font-size: 16px;
        font-family: sans-serif;
        line-height: 1.25;
        background: rgba(237, 239, 233, 0.84);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        overflow: auto;
      }

      .SideNav {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
        min-width: unset;
      }

      .SideNav-item:hover {
        background-color: #c3e4e3;
        border-radius: 10px;
        transform: scale(1.02);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }

      .SideNav-item {
        transition: 0.1s;
      }

      .subnav-search-input {
        border-radius: 2em;
        float: unset !important;
      }

      .subnav-search-icon {
        top: 9px;
      }

      button.btn.float-left {
        display: none;
      }

      .subnav-search {
        width: unset;
        height: 36px;
      }
    `;
    document.head.appendChild(style);

    // 🔎 搜索框触发 enter
    const input = document.querySelector('.form-control.subnav-search-input.float-left');
    const button = document.querySelector('.btn.float-left');
    if (input && button) {
      input.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
          button.click();
        }
      });
    }
  }
});
