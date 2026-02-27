## 方法一、嵌入HTML代码

### 1.1 使用 **img标签**

```language
<img src="./xxx.png" width = "300" height = "200" alt="图片名称" align=center />
```

### 1.2 如果需要居中的话只要在外面包围**div标签**即可

```text
<div align="center"> ... </div>
```

## 方法二、直接在图片后面加上对应的**CSS样式**即可

```language
![test image size](url){:class="img-responsive"}
![test image size](url){:height="50%" width="50%"}
![test image size](url){:height="100px" width="400px"}
```

## 方法三、一劳永逸通用思路

在文章头部添加：


```language
<style>
img{
    width: 60%;
    padding-left: 20%;
}
</style>
```

这个对文章所有图片都有效，如果图片尺寸标准差异过大，建议还是用单独的<img>标签来定义。

