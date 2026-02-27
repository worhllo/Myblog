# Markdown语法介绍

## 一、标题

### 三号

#### 四号

##### 五号标题

###### 六号标题【最低】

## 二、分割线

    *号分割线

***

    -分割线

***

## 三、粗体斜体

*斜体*

**粗体**

~~删除线~~

## 四、超链接和图片

[超链接,方法1](https://www.baidu.com)

[超链接,方法2](https://www.baidu.com)

![图片显示的文字](https://img2.artron.net/artist/A0261635/brt026163505145.jpg)

## 五、无序列表

*   a
    *   b
    *   b
        *   C
            *   V
*   B

## 六、有序列表

1.  a
2.  b
    1.  c
    2.  c

## 七、文字引用

    使用 > 表示，可以有多个 > 表示层级更深

> 第一层
>
> > 第二层
> > 这样跳不下去
> >
> > > 还可更深

> 这样就跳出去了

## 八、行内代码

其实上边已经用过很多次，即使用 \` 表示

`这是行内代码
中间可以换行`

## 九、代码块

````python
​```代码段```
import os
````

## 十、表格

| 商品name | price | num |
| :----- | ----: | --- |
| 靠左     |    靠右 | 3   |
| 3      |     4 | 2   |

## 十一、流程图

> 解释一下这个例子：
>
> > *   `mermaid`是Mermaid语言的标记。
> >
> > *   `graph TD;`指定了图的类型和方向，这里是从上到下（Top Down）的有向图（Directed Graph）。
> >
> > *   `A-->B;`和`A-->C;`表示两个箭头从A出发分别指向B和C。
> >
> > *   `B-->D;`和`C-->D;`表示两个箭头从B和C出发分别指向D。
> >
> > > mermaid
> > > graph TD
> > > A(工业用地效率)-->B1(土地利用强度)
> > > A-->B2(土地经济效益)
> > > B1-->C1(容积率)
> > > B1-->C2(建筑系数)
> > > B1-->C3(亩均固定资本投入)
> > > B2-->D1(亩均工业产值)
> > > B2-->D2(亩均税收)

# 高级语法

## 数学公式

`$\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}$`

`$H(D_2) = -\left(\frac{2}{4}\log_2 \frac{2}{4} + \frac{2}{4}\log_2 \frac{2}{4}\right) = 1$`

```math
  \begin{pmatrix}
  1 & a_1 & a_1^2 & \cdots & a_1^n \\
  1 & a_2 & a_2^2 & \cdots & a_2^n \\
  \vdots & \vdots & \vdots & \ddots & \vdots \\
  1 & a_m & a_m^2 & \cdots & a_m^n \\
  \end{pmatrix}
```

## 目录

    @[toc] 或 [toc]

## HTML原生语句

<span style="display:block; text-align:right; color:orangered;">橙色居右</span> <span style="display:block; text-align:center; color:orangered;">橙色居中</span>

<font face="黑体">我是黑体字</font> <font face="微软雅黑">我是微软雅黑</font> <font face="STCAIYUN">我是华文彩云</font> <font color="#0099ff" size="7" face="黑体">color=#0099ff size=72 face="黑体"</font> <font color="#00ffff" size="72">color=#00ffff</font> <font color="gray" size="72">color=gray</font>

> 颜色的英文单词：
>
> red（赤）
> orange（橙）
> yellow（黄）
> green（绿）
> cyan（青）
> blue（蓝）
> purple（紫）
> 字体的英文单词：
>
> rm（罗马字体）
> it （意大利字体）
> bf（黑体）
> sl （斜体）
> sf （等线体）
> sc （小体大写字母）
> tt （打字机字体）
> mit （数学斜体）

## 转义

在 Markdown 编辑器里面使用了很多特殊符号来表示特定的意义，该特殊符号将不再显示，这个时候就需要转义字符——反斜杠，如下：

\*\*转义特殊符号正常显示\*\*

**无转义特殊符号无法正常显示**