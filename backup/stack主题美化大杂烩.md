## 前言
> **Hugo Stack** 是一款专为博主设计的卡片风格的 Hugo 主题。它提供了一套丰富的特性集合，包括自动生成目录、本地搜索、代码高亮、图片放大等功能。该主题遵循 MIT 许可证发布，且其标志性的简洁与易用性让它成为众多个人博客的优选方案。详细信息可以通过访问 [GitHub](https://github.com/CaiJimmy/hugo-theme-stack) 来贡献代码或深入了解项目。
>
> 原生的stack主题虽然已经挺好看的了，但是仍然还美化的空间；还有进步的可能性；还有不断完善的潜力，因此，集多篇大佬优质的博客于一篇文章中，这篇博客就此诞生！

## 文件添加随机海报

{{< details title="点击展开代码，推荐在模板中设置，修改 archetypes/default.md（如果没有则新建一个即可）" >}}

```
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
image: https://picsum.photos/800/600.webp?random={{ substr (md5 (.Date)) 4 8 }}
---

```


{{< /details >}}

## 添加彩虹背景

{{< details title="在layouts/partials/footer/custom.html 中增加以下内容" >}} 

```
<script
    src="https://cdn.jsdelivr.net/gh/zhixuan2333/gh-blog@v0.1.0/js/ribbon.min.js"
    integrity="sha384-UEK8ZiP3VgFNP8KnKMKDmd4pAUAOJ59Y2Jo3ED2Z5qKQf6HLHovMxq7Beb9CLPUe"
    crossorigin="anonymous"
    size="300"
    alpha="0.6"
    zindex="-1"
    defer
></script>

```

 {{< /details >}}

## 滚动条美化

{{< details title="在assets/scss/custom.scss 添加以下内容" >}} 

```
//将滚动条修改为圆角样式
//菜单滚动条美化
.menu::-webkit-scrollbar {
  display: none;
}

// 全局滚动条美化
html {
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
}


```

{{< /details >}}

## 选中文本样式美化

{{< details title="在assets/scss/custom.scss 添加以下内容" >}}

```
::selection {
    color: #ffff;
    background: #557697;
}

```

 {{< /details >}}

## 搜索菜单动画

{{< details title="在assets/scss/custom.scss 添加以下内容" >}}

```
.search-form.widget {
  transition: transform 0.6s ease;
}

.search-form.widget:hover {
  transform: scale(1.1, 1.1);
}

```

 {{< /details >}}

## 归档动画

{{< details title="在assets/scss/custom.scss 添加以下内容" >}}

```
.widget.archives .widget-archive--list {
  transition: transform .3s ease;
}

.widget.archives .widget-archive--list:hover {
  transform: scale(1.05, 1.05);
}

```

 {{< /details >}}

## 标签动画

{{< details title="在assets/scss/custom.scss 添加以下内容 " >}}

```
.tagCloud .tagCloud-tags a {
  border-radius: 10px;
  font-size: 1.4rem;
  transition: transform .3s ease;
}

.tagCloud .tagCloud-tags a:hover {
  transform: scale(1.1, 1.1);
}

```

 {{< /details >}}

## 归档页面双栏

{{< details title="在assets/scss/custom.scss 添加以下内容" >}}

```
@media (min-width: 1024px) {
  .article-list--compact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: none;
    box-shadow: none;
    gap: 1rem;

    article {
      background: var(--card-background);
      border: none;
      box-shadow: var(--shadow-l2);
      margin-bottom: 8px;
      border-radius: 16px;
    }
  }
}

```

 {{< /details >}}

## 在文章中插入嵌入式音乐

{{< details title="第一步，在layouts\shortcodes\netese.html中添加以下内容" >}}

```
 <iframe 
     frameborder="no" border="0" 
     marginwidth="0" marginheight="0" 
     width=330 height=86 
     src="//music.163.com/outchain/player?type=2&id=1304708603&auto=1&height=66"></iframe>
```

 {{< /details >}}

{{< details title="第二步，在markdown文章中添加以下代码（#号删掉），后面的数字即网易云ID，点击[网易云](https://music.163.com/#/song?id=1304708603)，选择喜欢的歌曲，复制导航栏的ID即可" >}}

```
 {#{< netese 1304708603 >}#}
```

 {{< /details >}}

## 添加返回顶部按钮（方法1）

{{< details title="在 layouts/partials/footer/custom.html 内添加代码" >}}

```
<!--返回顶部按钮 -->
<a href="#" id="back-to-top" title="返回顶部"></a>

<!--返回顶部CSS -->
<style>
  #back-to-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 55px;
    width: 55px;
    height: 55px;
    border-radius: 7px;
    background-color: rgba(64, 158, 255, 0.5);
    box-shadow: var(--shadow-l2);
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }

  #back-to-top:before {
    content: ' ';
    display: inline-block;
    position: relative;
    top: 0;
    transform: rotate(135deg);
    height: 10px;
    width: 10px;
    border-width: 0 0 2px 2px;
    border-color: var(--back-to-top-color);
    border-style: solid;
  }

  #back-to-top:hover:before {
    border-color: #2674e0;
  }

  /* 在屏幕宽度小于 768 像素时，钮位置调整 */
  @media screen and (max-width: 768px) {
    #back-to-top {
      bottom: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      font-size: 10px;
    }
  }

  /* 在屏幕宽度大于等于 1024 像素时，按钮位置调整 */
  @media screen and (min-width: 1024px) {
    #back-to-top {
      bottom: 20px;
      right: 40px;
    }
  }

  /* 在屏幕宽度大于等于 1280 像素时，按钮位置调整 */
  @media screen and (min-width: 1280px) {
    #back-to-top {
      bottom: 20px;
      right: 55px;
    }
  }

  /* 目录显示时，隐藏按钮 */
  @media screen and (min-width: 1536px) {
    #back-to-top {
      visibility: hidden;
    }
  }
</style>

<!--返回顶部JS -->
<script>
  function backToTop() {
    document.documentElement.scrollIntoView({
      behavior: 'smooth',
    })
  }

  window.onload = function () {
    let scrollTop =
      this.document.documentElement.scrollTop || this.document.body.scrollTop
    let totopBtn = this.document.getElementById('back-to-top')
    if (scrollTop > 0) {
      totopBtn.style.display = 'inline'
    } else {
      totopBtn.style.display = 'none'
    }
  }

  window.onscroll = function () {
    let scrollTop =
      this.document.documentElement.scrollTop || this.document.body.scrollTop
    let totopBtn = this.document.getElementById('back-to-top')
    if (scrollTop < 200) {
      totopBtn.style.display = 'none'
    } else {
      totopBtn.style.display = 'inline'
      totopBtn.addEventListener('click', backToTop, false)
    }
  }
</script>

```

 {{< /details >}}

## 添加返回顶部按钮（方法2）

{{< details title="点击展开" >}}

1. 在`layouts/partials/backtop.html`中添加代码

   ```
   <style>
       /* add BackTop */
       #backtop {
           color: #c2c0c0;
           position: fixed;
           right: 25px;
           bottom: 25px;
           width: 35px;
           height: 35px;
           z-index: 999998;
   
           /* cursor: pointer; */
       }
   </style>
   <div id="backtop">
       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-up" class="svg-inline--fa fa-chevron-circle-up fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
           <path fill="currentColor" d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z">
           </path>
       </svg>
       
   </div>
   <script>
       var timer = null;
       backtop.onclick = function () {
           cancelAnimationFrame(timer);
           //获取当前毫秒数
           var startTime = +new Date();
           //获取当前页面的滚动高度
           var b = document.body.scrollTop || document.documentElement.scrollTop;
           var d = 500;
           var c = b;
           timer = requestAnimationFrame(function func() {
               var t = d - Math.max(0, startTime - (+new Date()) + d);
               document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
               timer = requestAnimationFrame(func);
               if (t == d) {
                   cancelAnimationFrame(timer);
               }
           });
       }
   
   </script>
   ```

   

2. 然后在 `layouts/_default/baseof.html `里面添加如下代码

   ```
   {{ partial "backtop.html" . }}
   ```

 {{< /details >}}

## 外部链接后面会显示图标

{{< details title="在layouts/_default/_markup/render-link.html里`{{ .Text | safeHTML }}`之后增加如下代码，主目录里面没有该文件或者文件中是空的话，可以直接把`ender-link.html`从`theme`中复制过来" >}}

```
 {{ if strings.HasPrefix .Destination "http" }}
<span style="white-space: nowrap;"><svg width=".7em"
    height=".7em" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
    <path d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z" fill="currentColor" />
    <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"
        fill="currentColor">
</svg></span>
{{ end }}

```

 {{< /details >}}

## 引入动态背景

{{< details title="点击展开" >}}

1. 首先前往[particles.js配置页面](http://vincentgarreau.com/particles.js/)配置参数，参数按自己喜好即可，唯一注意要修改的参数是 `detect_on`，要改成 `window`

2. 其次下载2个文件，即配置文件，以及 `particles.js`所需要的js文件（如图）

   ![sfdsfv.png](https://imgbed.worhllo.us.kg/file/1731650692665_sfdsfv.png)

3. 接着把下载好的文件，解压并将以下两个文件放到`assets/background`文件夹下

   ![qreewr.png](https://imgbed.worhllo.us.kg/file/1731650799570_qreewr.png)

4. 最后在`layouts/partials/footer/custom.html`中，引入以下代码

   ```
   <div id="particles-js"></div>
   
   <script src={{ (resources.Get "background/particles.min.js").Permalink }}></script>
   <script>
     particlesJS.load('particles-js', {{ (resources.Get "background/particlesjs-config.json").Permalink }}, function() {
       console.log('particles.js loaded - callback');
     });
   </script>
   
   <style>
     #particles-js {
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       z-index: -1;
     }
   </style>
   
   ```

   

 {{< /details >}}

## 显示文章更新时间

{{< details title="点击展开" >}}

-  在配置文件 `hugo.yaml` 中加入以下配置，这样文章的更新时间就会出现在文章底部

```
# 更新时间：优先读取git时间 -> git时间不存在，就读取本地文件修改时间
frontmatter:
  lastmod:
    - :git
    - :fileModTime

# 允许获取Git信息		
enableGitInfo: true

```

- 若想在文章开头就显示更新时间，则修改`layouts/partials/article/components/detail.html`，删掉原代码，复制粘贴以下代码

  ```
  <div class="article-details">
      {{ if .Params.categories }}
      <header class="article-category">
          {{ range (.GetTerms "categories") }}
              <a href="{{ .RelPermalink }}" {{ with .Params.style }}style="background-color: {{ .background }}; color: {{ .color }};"{{ end }}>
                  {{ .LinkTitle }}
              </a>
          {{ end }}
      </header>
      {{ end }}
  
      <div class="article-title-wrapper">
          <h2 class="article-title">
              <a href="{{ .RelPermalink }}">
                  {{- .Title -}}
              </a>
          </h2>
      
          {{ with .Params.description }}
          <h3 class="article-subtitle">
              {{ . }}
          </h3>
          {{ end }}
      </div>
  
      {{ $showReadingTime := .Params.readingTime | default (.Site.Params.article.readingTime) }}
      {{ $showDate := not .Date.IsZero }}
      {{ $showFooter := or $showDate $showReadingTime }}
      {{ if $showFooter }}
      <footer class="article-time">
  	    <!-- 更新时间 -->
          {{- if ne .Lastmod .Date -}}
              <div class="article-lastmod">
                  {{ partial "helper/icon" "clock" }}
                  <time>
                      {{ .Lastmod.Format ( or .Site.Params.dateFormat.lastUpdated "Jan 02, 2006 15:04 MST" ) }}
                  </time>
              </div>
          {{- end -}}
  		
          {{ if $showDate }}
              <div>
                  {{ partial "helper/icon" "date" }}
                  <time class="article-time--published">
                      {{- .Date | time.Format (or .Site.Params.dateFormat.published "Jan 02, 2006") -}}
                  </time>
              </div>
          {{ end }}
  
          {{ if $showReadingTime }}
              <div>
                  {{ partial "helper/icon" "clock" }}
                  <time class="article-time--reading">
                      {{ T "article.readingTime" .ReadingTime }}
                  </time>
              </div>
          {{ end }}
      </footer>
      {{ end }}
  	
  	
  
      {{ if .IsTranslated }}
          <footer class="article-translations">
              {{ partial "helper/icon" "language" }}
              <div>
                  {{ range .Translations }}
                      <a href="{{ .Permalink }}" class="link">{{ .Language.LanguageName }}</a>
                  {{ end }}
              </div>
          </footer>
      {{ end }}
  </div>
  
  ```
 {{< /details >}}

##  首页欢迎横幅

{{< details title="点击展开" >}}

1. "打开`layouts/index.html`，在`<section class=article-list>`前添加以下代码"

   ```
   <!-- 首页欢迎字幅 -->
   <div class="welcome">
     <p style="font-size: 2rem; text-align: center; font-weight: bold">
       <span class="shake">👋</span>
       <span class="jump-text1" > Welcome</span>
       <span class="jump-text2"> To </span>
       <span class="jump-text3" style="color:#e99312">Xa</span><span class="jump-text4" style="color:#e99312">l</span><span class="jump-text5" style="color:#e99312">a</span><span class="jump-text6" style="color:#e99312">o</span><span class="jump-text7" style="color:#e99312">k</span><span class="jump-text8" style="color:#e99312">'s</span>
       <span class="jump-text9" style="color:#e99312">Blog</span>
     </p>
   </div>
   <!-- 首页欢迎字幅 -->
   
   ```

2. 在 `assets/scss/custom.scss` 中加入以下代码

```
//首页欢迎板块样式
.welcome {
  color: var(--card-text-color-main);
  background: var(--card-background);
  box-shadow: var(--shadow-l2);
  border-radius: 30px;
  display: inline-block;
}

// 👋emoji实现摆动效果
.shake {
  display: inline-block;
  animation: shake 1s;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: shake;
  animation-timeline: auto;
  animation-range-start: normal;
  animation-range-end: normal;
  animation-delay: 2s;
  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(45deg) scale(1.2);
    }
    50% {
      transform: rotate(0) scale(1.2);
    }
    75% {
      transform: rotate(45deg) scale(1.2);
    }
    100% {
      transform: rotate(0);
    }
  }
}
// 实现字符跳动动画
.jump-text1 {
  display: inline-block;
  animation: jump 0.5s 1;
}

.jump-text2 {
  display: inline-block;
  animation: jump 0.5s 1;
  animation-delay: 0.1s;
}

.jump-text3 {
  display: inline-block;
  animation: jump 0.5s 1;
  animation-delay: 0.2s;
}

.jump-text4 {
  display: inline-block;
  animation: jump 0.5s 1;
  animation-delay: 0.3s;
}

.jump-text5 {
  display: inline-block;
  animation: jump 0.5s 1;
  animation-delay: 0.4s;
}

.jump-text6 {
  display: inline-block;
  animation: jump 0.5s 1;
  animation-delay: 0.5s;
}

.jump-text7 {
  display: inline-block;
  animation: jump 0.5s 1;
  animation-delay: 0.6s;
}

.jump-text8 {
  display: inline-block;
  animation: jump 0.5s 1;
  animation-delay: 0.7s;
}

.jump-text9 {
  display: inline-block;
  animation: jump 0.5s 1;
  animation-delay: 0.9s;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

```

 {{< /details >}}

##  修改总体布局

{{< details title="对照原代码，在 `/assets/scss/grid.scss` 中修改 `left-sidebar` 和 `right-sidebar` 的描述" >}}

```
    .left-sidebar {
        order: -3;
        // max-width: var(--left-sidebar-max-width);
        max-width: 10%;
    }

    .right-sidebar {
        order: -1;
        // max-width: var(--right-sidebar-max-width);
        max-width: 20%;

        /// Display right sidebar when min-width: lg
        @include respond(lg) {
            display: flex;
        }
    }
    // 把正文的占比改到了 70%, 原来的只有 50% 左右
```

 {{< /details >}}

##  头像旋转

{{< details title="在 `/assets/scss/custom.scss` 中加入以下代码" >}}

```
// 头像旋转动画
.sidebar header .site-avatar .site-logo {
  transition: transform 1.65s ease-in-out; // 旋转时间
}

.sidebar header .site-avatar .site-logo:hover {
  transform: rotate(360deg); // 旋转角度为360度
}

```

 {{< /details >}}

## 多图排版

{{< details title="增添到 `assets/scss/partials/layout/article.scss`，文章里输入 md 图片语法换行但不空行即可" >}}

```
.article-content p:has(> img:nth-child(2)){column-count:2;column-gap:8px;margin:6px 0;}
.article-content p:has(> img:nth-child(3)){column-count:3;}
.article-content p:has(> img:nth-child(4)){column-count:4;}
.article-content p:has(> img:nth-child(5)){column-count:5;}
.article-content p:has(> img:nth-child(6)){column-count:4;}
.article-content p:has(> img:nth-child(2)) img{display:flex;}
.article-content p:has(> img:nth-child(6)) img{margin-bottom:8px;}

```

 {{< /details >}}

## “博客已运行x天x小时x分钟”字样

{{< details title="展开代码" >}}

1. 在`layouts/partials/footer/custom.html`里添加以下JS代码，其中`s1`是网站创建日期。代码参考自[这里 ](https://rwtx.cc/04/2260/uncategorized/)，我加上了小时和分钟的计算。

   ```
   <!-- Add blog running time -->
   <script>
       let s1 = '2023-3-18'; //website start date
       s1 = new Date(s1.replace(/-/g, "/"));
       let s2 = new Date();
       let timeDifference = s2.getTime() - s1.getTime();
   
       let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
       let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
   
       let result = days + "天" + hours + "小时" + minutes + "分钟";
       document.getElementById('runningdays').innerHTML = result;
   </script>
   
   ```

   

2. 再在`layouts/partials/footer/footer.html`里添加以下代码：

   ```
   <!-- Add blog running time -->
   <section class="running-time">
   本博客已稳定运行
   <span id="runningdays" class="running-days"></span>
   </section>
   
   ```

3. 在`assets/scss/partials/footer.scss`里添加风格样式，这里我单独把计时的部分加粗，并改了颜色。

   ```
   .running-time {
       color: var(--card-text-color-secondary);
       font-weight: normal;
   
       .running-days {
           font-weight:bold;
           color: var(--emphasize-text-color);
       }   
   }
   
   ```

 {{< /details >}}

## 总字数统计：“发表了x篇文章，共计x字”

{{< details title="点击展开代码" >}}

1. 在`layouts/partials/footer/footer.html`里增加以下代码，其中文章篇数统计参考了[这篇 ](https://immmmm.com/hugo-total-count/)，字数统计的展示方式参考了[小球飞鱼的博客 ](https://mantyke.icu/posts/2022/stack-theme-furnish03/)。

   ```
   <!-- Add total page and word count time -->
   <section class="totalcount">
       {{$scratch := newScratch}}
       {{ range (where .Site.Pages "Kind" "page" )}}
           {{$scratch.Add "total" .WordCount}}
       {{ end }}
       发表了{{ len (where .Site.RegularPages "Section" "post") }}篇文章 · 
       总计{{ div ($scratch.Get "total") 1000.0 | lang.FormatNumber 2 }}k字
   </section>
   
   ```

2. 在`assets/scss/partials/footer.scss`里修改风格：

   ```
   .totalcount {
       color: var(--card-text-color-secondary);
       font-weight: normal;
       margin-bottom: 5px;
       }
   
   ```

 {{< /details >}}

##  旅行者 1 号离地球距离

{{< details title="点击展开代码" >}}

1.  在`layouts/partials/footer/footer.html`里增加以下代码

   ```
   <!-- 旅行者 1 号离地球距离 -->
   <section class="voyager">
   <span id="voyager">载入旅行者一号离地球距离信息...</span>
   </section>
   ```

2. 在`layouts/partials/footer/custom.html`里添加以下JS代码

   ```
   <script language="javascript"> 
       var now = new Date();
       function createtime(){
           // 当前时间
           now.setTime(now.getTime()+250);
           var grt= new Date("20xx/xx/xx 00:00:00"); //网站诞生时间
           days = (now - grt ) / 1000 / 60 / 60 / 24;
           dnum = Math.floor(days);
           hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
           hnum = Math.floor(hours);
           if(String(hnum).length ==1 ){hnum = "0" + hnum;}
           minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
           mnum = Math.floor(minutes);
           if(String(mnum).length ==1 ){mnum = "0" + mnum;}
           seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
           snum = Math.round(seconds);
           if(String(snum).length ==1 ){snum = "0" + snum;}
   
           document.getElementById("timeDate").innerHTML = "本站已稳定运行"+dnum+" 天 ";
           document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒"
       }
       setInterval("createtime()",250); 
   </script> 
   
   ```

 {{< /details >}}

## 修改背景色

{{< details title="点击展开代码，在`assets\scss\variables.scss`中对颜色代码进行修改，附[ 颜色查询网站](https://www.coloraa.com/f5f5f5)" >}}

```
--body-background: #f5f5f5;
```

 {{< /details >}}

## 新增一个`随笔`页面并实现加密功能

{{< details title="点击展开代码" >}}

1. 在`content/page/`目录下新建一个`musings`文件夹，然后在里面新建`index.md`文件，内容如下：

   ```
   ---
   title: "随笔"
   date: 2023-09-08
   layout: "musings"
   slug: "musings"
   menu:
       main:
           weight: 4
           params: 
               icon: note
   ---
   
   ```

2. 在`layouts/_default`目录下新建一个`musings.html`文件，以实现查找并显示`tag`为`musings`的文章，内容如下：

   ```
   {{ define "body-class" }}template-archives{{ end }}
   
   {{ define "main" }}
   <h1 class="big-title" style="color: white;">随笔</h1>
   
   
   {{ $pages := where .Site.RegularPages "Type" "in" .Site.Params.mainSections }}
   {{ $notHidden := where .Site.RegularPages "Params.hidden" "!=" true }}
   {{ $filtered := ($pages | intersect $notHidden) }}
   
   {{ range $filtered.GroupByDate "2006" }}
   {{ $id := lower (replace .Key " " "-") }}
   <div class="archives-group" id="{{ $id }}">
       <h2 class="archives-date section-title"><a href="{{ $.RelPermalink }}#{{ $id }}">{{ .Key }}</a></h2>
       <div class="article-list--compact">
           {{ range .Pages }}
           {{ if in .Params.tags "musings" }}
           <article>
               <a href="{{ .RelPermalink }}">
                   <div class="article-details">
                       <h2 class="article-title">
                           {{- .Title -}}
                       </h2>
                       <footer class="article-time">
                           <time datetime='{{ .Date.Format "2006-01-02T15:04:05Z07:00" }}'>
                               {{- .Date.Format (or .Site.Params.dateFormat.published "Jan 02, 2006") -}}
                           </time>
                       </footer>
                   </div>
   
                   {{- $image := partialCached "helper/image" (dict "Context" . "Type" "articleList") .RelPermalink
                   "articleList" -}}
                   {{ if $image.exists }}
                   <div class="article-image">
                       {{ if $image.resource }}
                       {{- $Permalink := $image.resource.RelPermalink -}}
                       {{- $Width := $image.resource.Width -}}
                       {{- $Height := $image.resource.Height -}}
   
                       {{- if (default true .Page.Site.Params.imageProcessing.cover.enabled) -}}
                       {{- $thumbnail := $image.resource.Fill "120x120" -}}
                       {{- $Permalink = $thumbnail.RelPermalink -}}
                       {{- $Width = $thumbnail.Width -}}
                       {{- $Height = $thumbnail.Height -}}
                       {{- end -}}
   
                       <img src="{{ $Permalink }}" width="{{ $Width }}" height="{{ $Height }}" alt="{{ .Title }}"
                           loading="lazy">
                       {{ else }}
                       <img src="{{ $image.permalink }}" loading="lazy" alt="Featured image of post {{ .Title }}" />
                       {{ end }}
                   </div>
                   {{ end }}
               </a>
           </article>
           {{ end }}
           {{ end }}
       </div>
   </div>
   {{ end }}
   
   {{ partialCached "footer/footer" . }}
   {{ end }}
   
   ```

3. 在`layouts\partials\article\article.html`中添加以下代码，可能在原`.html`中会有部分已经存在的代码，记得删去

   ```
   {{ if isset .Params "password" }}
   <div id="password-protected-content"
       style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; background-color: #f9f9f9; text-align: center;">
       <p style="font-size: 16px; margin-bottom: 10px;">{{ with .Params.passwordPoint }}{{ . }}{{ else
           }}这是密码保护的内容，请输入密码访问：{{ end }}</p>
       <input type="password" id="password-input" style="padding: 5px; margin-bottom: 10px; width: 200px;">
       <button onclick="verifyPassword()"
           style="padding: 5px 10px; background-color: #007bff; color: #fff; border: none; border-radius: 3px; cursor: pointer;">提交</button>
   </div>
   <div id="article-content" style="display: none;">
       <article class="{{ if .Params.image }}has-image {{ end }}main-article">
           {{ partial "article/components/header" . }}
           <!-- 以下部分仅在密码验证通过后显示 -->
           <div id="content">
               {{ partial "article/components/content" . }}
           </div>
           <!-- End of password-protected content -->
           {{ partial "article/components/footer" . }}
           {{ if or .Params.math .Site.Params.article.math }}
           {{ partialCached "article/components/math.html" . }}
           {{ end }}
       </article>
   </div>
   {{ else }}
   <div id="article-content">
       <article class="{{ if .Params.image }}has-image {{ end }}main-article">
           {{ partial "article/components/header" . }}
           {{ partial "article/components/content" . }}
           {{ partial "article/components/footer" . }}
           {{ if or .Params.math .Site.Params.article.math }}
           {{ partialCached "article/components/math.html" . }}
           {{ end }}
       </article>
   </div>
   {{ end }}
   
   <script>
       function verifyPassword() {
           var inputPassword = document.getElementById('password-input').value;
           var correctPassword = '{{ with .Params.password }}{{ . }}{{ else }}{{ "" }}{{ end }}'; // 获取文章 Front Matter 中定义的密码
           if (inputPassword === correctPassword) {
               document.getElementById('password-protected-content').style.display = 'none'; // 隐藏密码输入框
               document.getElementById('article-content').style.display = 'block'; // 显示文章内容
           } else {
               alert('密码错误，请重新输入！');
           }
       }
   </script>
   
   ```

4. 要写`随笔`并要设置密码时，在.md文件的开头添加如下字段即可，将`您的安全密码`设置为想设置的实际密码，另一个不用动

   ```
   ---
   password: "您的安全密码"
   passwordPoint: "请正确输入密码！"
   ---
   
   ```

 {{< /details >}}

## 缩小归档页的分类卡片尺寸
{{< details title="点击展开，对照原代码，加以修改" >}}

```
    .article-list--tile {
        display: flex;
        padding-bottom: 0px; // Narrow the spacing

        article {
            width: 150px; // Make category cards smaller
            height: 90px;
            margin-right: 5px; // Make cards spacing narrower
            flex-shrink: 0;

```

 {{< /details >}}
 
## 将友链设置为三栏
{{< details title="在 assets/scss/custom.scss 里加上以下代码" >}}

```
@media (min-width: 1024px) {
	.article-list--extra-compact.links {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		background: none;
		box-shadow: none;
		gap: 1rem;

		article {
			background: var(--card-background);
			border: none;
			box-shadow: var(--shadow-l2);
			margin-bottom: 8px;
			border-radius: var(--card-border-radius);
			&:nth-child(odd) {
				margin-right: 8px;
			}
		}
	}
}

```

 {{< /details >}}
## 固定块的高度
{{< details title="过长的内容影响观感，所以把 block 的高度限制在 20em，并隐藏滚动条，在 `/assets/scss/partials/layout/article.scss `中进行如下修改" >}}

```
    .highlight {
        background-color: var(--pre-background-color);
        position: relative;
        &:hover {
            .copyCodeButton {
                opacity: 1;
            }
        }
        // keep Codeblocks LTR
        [dir="rtl"] & {
            direction: ltr;
        }
        pre {
            margin: initial;
            padding: 0;
            margin: 0;
            width: auto;
            max-height: 20em;
            scrollbar-width: none; 
            &::-webkit-scrollbar {
            display: none; 
        }
    }
 }

```

 {{< /details >}}
 
## 代码块基础样式修改
{{< details title="在 `/assets/scss/custom.scss` 中加入以下代码" >}}

```
    // 代码块基础样式修改
.highlight {
  max-width: 102% !important;
  background-color: var(--pre-background-color);
  padding: var(--card-padding);
  position: relative;
  border-radius: 20px;
  margin-left: -7px !important;
  margin-right: -12px;
  box-shadow: var(--shadow-l1) !important;

  &:hover {
    .copyCodeButton {
      opacity: 1;
    }
  }

  // keep Codeblocks LTR
  [dir="rtl"] & {
    direction: ltr;
  }

  pre {
    margin: initial;
    padding: 0;
    margin: 0;
    width: auto;
  }
}

```

 {{< /details >}}  
 
## 移动端目录按钮
{{< details title="替换 `layouts/partials/widget/toc.html`" >}}

```
{{ if (.Context.Scratch.Get "TOCEnabled") }}
<!-- 如果 .Context.Scratch 中包含名为 "TOCEnabled" 的值，则执行以下代码 -->
<button id="toggle-toc">Toc</button>
<!-- 创建一个按钮，用于展开和收起目录 -->
<section class="widget archives" id="toc-container">
    <!-- 创建一个带有 "archives" 类的区块，并添加一个唯一的 ID 用于操作 -->
    <h2 class="widget-title section-title">{{ T "article.tableOfContents" }}</h2>
    <!-- 创建一个带有 "widget-title" 和 "section-title" 类的标题区块，并显示 "article.tableOfContents" 的本地化内容 -->

    <div class="widget--toc">
        <!-- 创建一个带有 "widget--toc" 类的目录区块 -->
        {{ .Context.TableOfContents }}
        <!-- 显示文章的目录内容 -->
    </div>
</section>
{{ end }}

<style>
    #mulu {
        z-index: 9999;
    }
    
    #toc-container {
        display: none;
        /* 初始时隐藏目录 */
        position: fixed;
        /* 使用固定定位，使其固定在视口中 */
        bottom: 21%;
        /* 距离视口顶部的距离，可以根据需要进行调整 */
        right: 60px;
        /* 距离视口右侧的距离，可以根据需要进行调整 */
        background-color: var(--card-background);
        /* 可选：设置背景颜色 */
        padding: 10px;
        /* 可选：添加一些内边距 */
        border: 1px solid #96979a50;
        border-radius: var(--card-border-radius);
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        /* 可选：添加边框样式 */
        z-index: 9998 !important;
        /* 可选：设置 z-index 以确保它显示在其他元素之上 */
        max-height: 80vh;
        /* 设置最大高度为视口高度的 80% */
        overflow-y: auto;
        /* 添加垂直滚动条，以便在内容溢出时滚动 */
        width: auto;
        /* 让容器的宽度自适应内容 */
        max-width: 290px;
    }
    
    #toggle-toc {
        position: fixed;
        bottom: 22%;
        right: 20px;
        padding: 10px 10px;
        z-index: 9998 !important;
        border: 0px solid #96979a50;
        border-radius: 7px;
        box-shadow: var(--shadow-l1);
        background-color: #00640010;
        color: #34495e;
        /* 确保按钮在其他元素之上 */
        /* 其他样式保持不变 */
        display: block;
        /* 显示按钮 */
        margin-bottom: 10px;
        cursor: pointer;
        font-size: 1.2rem;
        /* 可选：改变鼠标光标以指示按钮是可点击的 */
    }
    
    .widget--toc #TableOfContents {
        overflow-x: auto;
        max-height: 66vh;
        width: auto;
    }
    
    @media screen and (max-width: 768px) {
        #toggle-toc {
            bottom: 100px;
        }
    }
</style>

<script>
    // 获取按钮和目录的元素
    var toggleButton = document.getElementById('toggle-toc');
    var tocContainer = document.getElementById('toc-container');
    var scrollThreshold = 200; // 设置滚动显示的阈值

    // 监听页面滚动事件
    window.addEventListener('scroll', function() {
        // 获取当前滚动位置
        var scrollY = window.scrollY || window.pageYOffset;

        // 检查滚动位置是否超过阈值
        if (scrollY >= scrollThreshold) {
            // 显示按钮
            toggleButton.style.display = 'block';
        } else {
            // 隐藏按钮
            toggleButton.style.display = 'none';
        }
    });

    // 添加点击事件处理程序
    toggleButton.addEventListener('click', function() {
        // 切换目录的显示状态
        if (tocContainer.style.display === 'none' || tocContainer.style.display === '') {
            tocContainer.style.display = 'block';
        } else {
            tocContainer.style.display = 'none';
        }
    });
    // 当鼠标悬浮在按钮上时显示目录
    toggleButton.addEventListener('mouseover', function() {
        tocContainer.style.display = 'block';
    });


    // 添加点击页面空白处的事件处理程序
    document.addEventListener('click', function(event) {
        // 检查点击事件是否发生在目录容器之外，并且不是按钮本身
        if (!tocContainer.contains(event.target) && event.target !== toggleButton) {
            // 点击发生在目录容器之外，隐藏目录容器
            tocContainer.style.display = 'none';
        }
    });
</script>

```

 {{< /details >}}
