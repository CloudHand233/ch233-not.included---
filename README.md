# ch233-smile-3.0
---
📅 2017/9/07

* 修改了部分文件目录结构，稍后记得更新目录说明
* 开始制作 guide 部分
---
📅 2017/8/28

内滚动框架可能还是避不开，毕竟软件类型布局还是占到了 UI 界面的一大部分。
参考文章：[浅议内滚动布局 - 前端技术 - 腾讯ISUX](https://isux.tencent.com/inner-scroll-layout.html)
---
📅 2017/8/25

ch233 第三版，代号 smile 。By 斯德哥尔摩^精分喵
---
## Pagination 分页
基本结构
```html
<ul class="pagination align-right">
	<li>
		<a href="#">
			<i class="material-icons">first_page</i>
		</a>
	</li>
	<li>
		<a href="#">
			<i class="material-icons">chevron_left</i>
		</a>
	</li>
	<li class="current"><a>1</a></li>
	<li><a href="#">2</a></li>
	<li><a href="#">3</a></li>
	<li><a href="#">...</a></li>
	<li><a href="#">10</a></li>
	<li>
		<a href="#">
			<i class="material-icons">chevron_right</i>
		</a>
	</li>
	<li>
		<a href="#">
			<i class="material-icons">last_page</i>
		</a>
	</li>
</ul>
```

* 分页可用于任何容器中，包括表格的单元格中
* **依赖于 Materail Icons 组件**
---
## Table 表格
一个表格的结构：
```html
<div class="table">
	<table>
		<tr>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
		</tr>
		<tr>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
		</tr>
		<tr>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
			<td class="td-tt">111</td>
		</tr>
	</table>
</div>
```
---
## Tab 标签切换
```html
<div class="tabs">
	<ul class="tabs-tt">
		<li>Tab A</li>
		<li>Tab B</li>
		<li>Tab C</li>
	</ul>
	<div class="tabs-cont">
		<div class="tab-cont">A 111</div>
		<div class="tab-cont">B 222</div>
		<div class="tab-cont">C 333</div>
		</div>
</div>
```
---
## Switch 开关
Switch 开关从 checkbox 衍生而来，实际是 checkbox，外表是开关样式而已
```html
<div class="switch">
	<label for="switch1">
		<input type="checkbox" id="switch1">
		<span>我只是个开关</span>
	</label>
</div>
```

* 可使用 form-inline ，以及成组方式
* 依赖 ch233.js
* 可以为结构中的 span 添加 z 轴阴影增加效果
---
## Checkbox 多选
### 原生的 checkbox 样式
Checkbox 也同样强烈建议一开始就使用成组的结构（成组结构还能改善多个元素纵向排布时的上下间距过大问题）：
```html
<div class="form-gp">
	<div class="checkbox">
		<label for="checkbox1">
			<input type="checkbox" id="checkbox1" name="">
			<span>我选择我是 frog</span>
		</label>
	</div>
	<div class="checkbox">
		<label for="checkbox2">
			<input type="checkbox" id="checkbox2" name="">
			<span>我选择你也是 frog</span>
		</label>
	</div>
</div>
```

这是一个使用原生组件的 radio 样式，兼容 IE8 及以下，组的使用和其他 form 元素相同

### 美化的 Checkbox 样式
```html
<div class="form-gp">
	<div class="checkbox-icon">
		<label for="checkbox3">
			<input type="checkbox" id="checkbox3" name="">
			<i class="material-icons">check_box_outline_blank</i>
			<span>我选择我是 frog</span>
		</label>
	</div>
	<div class="checkbox-icon">
		<label for="checkbox4">
			<input type="checkbox" id="checkbox4" name="">
			<i class="material-icons">check_box_outline_blank</i>
			<span>我选择你也是 frog</span>
		</label>
	</div>
</div>
```

* 依赖 Materail ICONS 图标库
* 依赖 ch233.js
* 需要修改 icon 的颜色和大小，只需要针对结构内的 `<i>` 修改 `font-size` 和 `color` 即可
---
##  Radio 单选
### 原生的 Radio 样式
Radio 通常是以成组形式出现，所以强烈建议一开始就使用成组的结构（成组结构还能改善多个元素纵向排布时的上下间距过大问题）：
```html
<div class="form-gp">
	<div class="radio form-inline">
		<label for="radio1">
			<input type="radio" id="radio1" name="radioGroup1">
			<span>我是 frog</span>
		</label>
	</div>
	<div class="radio form-inline">
		<label for="radio2">
			<input type="radio" id="radio2" name="radioGroup1">
			<span>你才是 frog</span>
		</label>
	</div>
</div>
```

这是一个使用原生组件的 radio 样式，兼容 IE8 及以下，组的使用和其他 form 元素相同

### 美化的 Radio 样式
```html
<div class="form-gp">
	<div class="radio-icon form-inline">
		<label for="radio3">
			<input type="radio" id="radio3" name="radioGroup2">
			<i class="material-icons">panorama_fish_eye</i>
			<span>我是 frog</span>
		</label>
	</div>
	<div class="radio-icon form-inline">
		<label for="radio4">
			<input type="radio" id="radio4" name="radioGroup2">
			<i class="material-icons">panorama_fish_eye</i>
			<span>你才是 frog</span>
		</label>
	</div>
</div>
```

* 依赖 Materail ICONS 图标库
* 依赖 ch233.js
* 需要修改 icon 的颜色和大小，只需要针对结构内的 `<i>` 修改 `font-size` 和 `color` 即可
---
## Textarea 多行文本输入框
基本结构：
```html
<div class="textarea character-25">
	<textarea name="" id=""></textarea>
</div>
```

* textarea 没有带 icon 的样式
* 支持使用 `character-*` 方式调整宽度，以及全宽；
* 同样可以使用 `form-inline` 以及成组的形式
---
## select 选择器
### select 选择器的基本结构
```html
<div class="selector">
	<select name="" id="">
		<option value="">AAAAAAAAA</option>
		<option value="">BBBBB</option>
		<option value="">CCCCCCCC</option>
		<option value="">DDDDDDDDDDDDDDD</option>
		<option value="">EEEEEEEEEE</option>
	</select>
</div>
```

### 带 icon 的选择器
```html
<div class="selector-icon character-10 form-inline">
	<i class="material-icons">message</i>
	<select name="" id="">
		<option value="">11111</option>
		<option value="">2222</option>
		<option value="">333333333</option>
		<option value="">44444444</option>
		<option value="">555555555</option>
	</select>
</div>
```

其他使用方法同 input 一样
---
## input 输入框
### input 的基本结构
```html
<div class="input-text character-22">
	<input type="text">
</div>
```

 * `input-text` 是申明一个输入框，默认 `display:block;` ；
* `character-*` 制定按钮宽度，不制定，则输入框为全宽度，全宽情况下不能使用  `form-inline`；
* `form-inline` 会改变按钮为 inline-blcok ，可以横排；

### 一个带 icon 的输入框
```html
<div class="input-text input-icon character-22">
	<i class="material-icons">email</i>
	<input type="text">
</div>
```

**注意：示例中的 icon 依赖于 Materail ICONS**

### 成组的输入框
```html
<div class="form-gp-inline">
	<div class="input-icon character-22 form-inline">
		<i class="material-icons">email</i>
		<input type="text">
	</div>
	<div class="input-icon character-22 form-inline">
		<i class="material-icons">face</i>
		<input type="text">
	</div>
</div>
```

* 为按钮组添加 `form-gp-inline` 可以让组成为 `inline-block`，与其他 `inline-block` 元素横排；
* `form-gp-inlinee` 按钮组上还可添加对齐方式：`align-left` `align-center` `align-right` **（依赖 basic_style.scss theme）**；
* 组内的输入框类型可以是带 icon 的，也可是不带 icon 的混编，组内元素排列方向取决于其元素自身是否是 `form-inline` 类型

---
## Buttons 按钮
### 按钮的基本结构：
```html
<div class="btn character-5">
	<a href="#">BUTTON</a>
</div>
```

* `btn` 是申明一个按钮，默认 `display:block;` ；
* `character-*` 制定按钮宽度，不制定，则按钮为全宽度；
* `form-inline` 会改变按钮为 inline-blcok ，可以横排**（依赖 input.scss 组件）**；
* 按钮色 btn-primary 是主色调（500色度）；
* 按钮色 btn-secondary 是次色调（500色度）；
* 按钮色 btn-less 是点缀色调（A700色度）；
* 添加 `elevation-*` 产生 z 轴阴影；

其他按钮色：
* 500度标准色：**btn-颜色名**，如 `btn-red`
* A700度高对比色：**btn-颜色名A700**，如 `btn-redA700`
* 100度低饱和色：**btn-red100**，如 `btn-red100`

### 成组的按钮
```html
<!-- block 的组 -->
<div class="form-gp">
	<div class="btn character-5">
		<a href="#">BUTTON</a>
	</div>
	<div class="btn character-5">
		<a href="#">BUTTON</a>
	</div>
</div>
<!-- inline-block 的组 -->
<div class="form-gp-inline">
	<div class="btn character-5">
		<a href="#">BUTTON</a>
	</div>
	<div class="btn character-5">
		<a href="#">BUTTON</a>
	</div>
	<div class="btn btn-inline btn-primary character-5">
		<a href="#">BUTTON</a>
	</div>
</div>
```

* 为按钮组添加 `form-gp-inline` 可以让组成为 `inline-block`，与其他 `inline-block` 元素横排**（依赖 input.scss 组件）**；
* `form-gp-inlinee` 按钮组上还可添加对齐方式：`align-left` `align-center` `align-right` **（依赖 basic_style.scss theme）**；
---
## Grid 栅格
我一直在犹豫要不要做兼容 IE8 及以下的栅格布局。最后思虑良久决定：GB IE8 及以下。
栅格+兼容+断点，无疑会变成一套难以维护的布局，又背离了初衷，IE8 及以下，老老实实去写 theme，该怎么写怎么写，不做兼容。

首先确认父级布局是 `content-block` 还是 `content-fluid`，默认情况下，`content-block` 是块状布局，有固定宽度，栅格系统将在不同视口宽度情况下按照断点对父级进行宽度重设；如果是 `content-fluid`，则表明父级是响应式布局，默认情况下父级拥有100%的宽度，栅格系统将在响应式的情况下跟随视口变化而变化。

**请注意，content-block 本身不带断点判断，只有在内部使用了 grid 的时候才带有 @media  断点的判断。如果 content-block 自身还有父级的限制，就请使用 content-fluid 即可**

**栅格为 16 格，每个 col* 为16/***

栅格基本结构如下：
```html
<div class="grid">
	<div class="grid-row">
		<div class="col col-lg-2 col-md-4 col-sm-8">1</div>
		<div class="col col-lg-2 col-md-4 col-sm-8">1</div>
		<div class="col col-lg-2 col-md-4">1</div>
		<div class="col col-lg-2 col-md-4">1</div>
		<div class="col col-lg-2">1</div>
		<div class="col col-lg-2">1</div>
		<div class="col col-lg-2">1</div>
	</div>
</div>
```

类名 col 是无断点设置，宽度等于 col-1，带断点的 col 类名格式如下：

**col-断点符号-栏占宽**

可以在一个栏上同时使用多个断点设置，以让栏在不同断点下有不同布局，由于断点的设置，原本一栏中同一轴上多余的空间会::由剩余栏等宽补齐::。

**no-gutter：无沟槽设置：**

要去除行的沟槽，为 `grid-row` 添加 `row-no-gutter` 类名；要删除栅格中单元格的空隙，为 `grid-row` 添加 `col-no-gutter` 类名；要同时删除所有空隙，为 `grid-row` 添加 `no-gutter` 类名
---
## Frame Set 管理系统布局
基础布局如下：
```html
<div class="frame-page">
    <div class="frame-header">This is Header</div>
    <div class="frame-side">Side Bar</div>
    <div class="frame-container">Here are Container</div>
    <div class="frame-footer"><!-- normally no use --></div>
</div>
```

> 其中page扮演传统页面<body>的角色。这是一个预留设计，防止为了满足某些功能或交互体验需要，一个页面同时出现多个类似结构页面的情况。
---
## Gradients 渐变 mixin
> 该部分参考了 bootstrap 的渐变 mixin
> 
考虑到 css 渐变的可用性问题，这部分并没有放到 mixins 里面，而是独立了一个文件出来，写 theme 的时候也可以考虑针对渐变单独写一个文件。渐变的 mixins 如下：

```scss
@include gradient-x(颜色1, 颜色2, 开始点, 结束点);//2个色，从左到右
@include gradient-x-three-colors(颜色1, 中间色, 中间色位置, 颜色3);//3个色，从左到右
@include gradient-y(颜色1, 颜色2, 开始点, 结束点);//2个色，从上到下
@include gradient-y-three-colors(颜色1, 中间色, 中间色位置, 颜色3);//3个色，从上到下
@include gradient-directional(颜色1, 颜色2, 半径值);//2个色，经向渐变
@include gradient-radial(颜色1-内, 颜色2-外);//2个色，经向渐变
@include gradient-striped(颜色1, 角度值);//1个色，经向渐变，alpha 创建
```
---
## @media 断点设置：
```scss
$breakpoints: (
  // Small devices (landscape phones, 576px and up)
  'sm': (min-width: 576px, max-width: 767px),
  // Medium devices (tablets, 768px and up)
  'md': (min-width: 768px, max-width: 991px),
  // Large devices (desktops, 992px and up)
  'lg': (min-width: 992px, max-width: 1199px),
  // Extra large devices (large desktops, 1200px and up)
  'xl': (min-width: 1200px),
);
```

sass 中如何使用：
```scss
.className {
  @include media-respond($breakpoints) {
    ...
  }
}
```
---
## html 的基础模板
```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans-CN">
<head>
    <meta charset="UTF-8">
    <title>ch233-smile</title>
    <!-- main style sheet *necessary -->
    <link rel="stylesheet" href="css/ch233.mini.css">
</head>
<body>

<!-- 基本结构，page 是最外层结构，一个页面上可以有多个 page *必须 -->
<div class="page">

    <!-- header 部分，包含导航和 logo -->
    <div class="header header-ufo">
        <div class="header-nav">
            <!--<div class="nav-logo"><img src="img/logo_650x270_white_shadow.png"></div>-->
            <ul class="nav-list nav-list-right">
                <li class="active"><a href="#">首页</a></li>
                <li><a href="#">快速起步</a></li>
                <li><a href="#">全局 CSS 样式</a></li>
                <li><a href="#">JavaScript 脚本</a></li>
                <li><a href="#">GitHub</a></li>
            </ul>
        </div>
    </div>

    <!-- cover 部分，滚动图或静态图 -->
    <div class="cover">
		cover img
    </div>

    <!-- container 是主体内容区域 -->
    <div class="container">
        <div class="content-block">container</div>
    </div>

    <!-- footer 是底部，链接 or 版权区域 -->
    <div class="footer">
        <div class="content-block">footer</div>
    </div>

</div>

<!--Elements UED ch233.js-->
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/ch233.min.js"></script>

</body>
</html>
```

`<div class="content-block">` 是用来控制页面宽度的（需要后期加入@media 断点控制）
---
## .scss 文件中的约定
> css 的加载通过 output 下的 ch233.mini.scss 控制，简而言之，ch233.mini.scss 只控制加载哪些样式表，而不直接写入样式

**sass 文件夹下的 components、core 和 theme 如何区分？**
* components 是组件，即 components 下的文件都是通过 ch233.mini.scss 调用来获得支持，可按需调用；
* core 是核心，即 core 下的文件并不是给 ch233.mini.scss 来调用的，而是在使用 scss 的过程中调用的；
* theme 是对当前项目或者当前皮肤写的样式集合，也是由 ch233.mini.scss 调用来使用；

**.scss 文件中注释的写法：**
* 注释的写法
```css
/*!
  * Author: 云手
  * GitHub: https://github.com/CloudHand233/ch233-smile---
  * LastUpdate: 2017.Aug.25th
	* Version: 3.0.0
*/
```
* 静默注释`//`用于阐述各个部件和版块的使用、说明、释义
* `@import` 导入文件的注释：
```
/* import components
========================================================================== */
@import "../components/format";
```
---
## ICON
使用 Google 的 Materail ICONS。须确保将以下字体文件拷贝到 dist/fonts 下：

* fonts/MaterialIcons-Regular.ttf
* fonts/MaterialIcons-Regular.woff
* fonts/MaterialIcons-Regular.woff2

需在 ch233.mini.scss 中加载 scss/components/_material-icons.scss
`@import "../components/material-icons";`

完整的 ICON Library 列表：[Material icons - Material Design](https://material.io/icons/)
---
## package.json
> 简化了之前的 package.json 版本，如无必要勿增实体

```sh
{
  "name": "ch233-smile",
  "version": "3.0.0",
  "description": "うつせみ ch233-smile",
  "main": "index.js",
  "scripts": {
    "scss": "node-sass --output-style compressed --source-map true -o dist/css src/sass/output",
    "uglify": "uglifyjs src/js/output/* -m -c -o dist/js/ch233.min.js",
    "build:all": "npm run scss && npm run uglify",
    "watch:scss": "onchange \"src/sass/*/*.scss\" -- npm run scss",
    "watch:js": "onchange \"src/js/*.js\" -- npm run uglify",
    "serve": "browser-sync start --startPath \"dist/default.html\" --port 2333 --server --files=\"dist/css/*.css, dist/js/*.js, dist/*/*.html, dist/*.html\"",
    "ch233": "parallelshell \"npm run watch:scss\" \"npm run watch:js\" \"npm run serve\"",
    "release-zip": "cd dist/ && zip -r9 ch233-$npm_package_version-dist.zip * && mv *.zip ../releases-zip"
  },
  "author": "うつせみ",
  "license": "ISC",
  "devDependencies": {
    "browser-sync": "^2.18.12",
    "node-sass": "^4.5.3",
    "onchange": "^3.2.1",
    "parallelshell": "^3.0.1",
    "uglify-js": "^3.0.14"
  }
}
```

**谨记每次发行 (release) 前先更新 package.json 的版本号**
scss: 编译 scss 文件
uglify: 混淆编译 js 文件
build:all: 执行以上两项
watch:scss: 监控 sass 目录，自动编译
watch:js: 监控 js 目录，自动编译
server: 使用 web sever 服务在浏览器中打开页面
ch233: 生产用，使用 web sever 服务在浏览器中打开页面，并监控 scss 和 js 文件，自动编译，自动刷新浏览器
release-zip: 发行 dist 版本，版本命名中带有 package.json 的版本号
---
## File Structure
考虑这个问题的时候，我希望改进之前的几个问题：

* Css 样式是否可以按组件形式或按兼容分离，在使用时按需加载，而不是如 Bootstrap 一样全部合并，我希望更加灵活和轻巧；
* Js 部分是否也可以如 Css 一样，按功能分离，按需加载；
* 如何把生产环境和部署环境分开；

全局环境依赖
* 首先得有 node.js 环境 (current: v6.11.2)
* node.js 环境一般都集成了 npm (current: 3.10.10)

如下：**Last update（ 2017/8/25 ）**

```sh
|—— dist （部署文件）
	|—— css （页面引用 css 样式表）
	|—— js （页面引用 js 脚本）
	|—— plugins （非 ch233 原生的插件，如 jQuery 脚本等）
	|—— img （页面引用的图片）
	|—— fonts （页面引用 webFonts 字体以及 webFonts 图标）
	|—— *.html （各种界面 html）
|—— src （生产文件）
	|—— sass （sass 集合）
		|—— core （ch233 sass 核心模块）
			|—— _mixins.scss （mixin 的集合）
			|—— _colors.scss （配色表）
			|—— _extend.scss （备用样式集合）
			|—— _layout.scss （布局）
		|—— components （组件集合，按需加载）
			|—— _format.scss （初始化格式化样式表，默认 html 的 font-size: 20px）
			|—— _material-icons.scss （material icons 样式表）
			|—— _table.scss
			|—— _grid.scss
			|—— _button.scss
			|—— _form.scss
			|—— _alert.scss
		|—— theme （自定义样式集合）
			|—— _*.scss （有关项目的样式文件）
		|—— output （最终输出样式表的源）
			|—— ch233.mini.scss （核心输出调用集合）
	|—— js （js 脚本集合）
		|—— ch233.js （整合文件）
		|—— _*.js （组件文件）
	|—— fonts （webFonts 字体以及 webFonts 图标库）
|—— releases-zip（发行包存放文件夹）
	|—— ch233-`$npm_package_version`-dist.zip （含有版本号的 zip 文件）
|—— node_modules （node.js 环境 Library root）
|—— _guide— （ch233 的指引文档）
|—— _doc— （关于项目的文档存放文件夹）
|—— _psd— （关于项目的设计原稿存放文件夹）
|—— _ued— （关于项目的原型设计存放文件夹）
|—— README.md （项目版本以及说明文档）
|—— .gitignore （git 忽略文件）
|—— package.json （node.js 环境配置文件）
```