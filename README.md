# ch233-smile-3.0
---
📅 2017/8/25

ch233 第三版，起名 smile ，与 233 不言而喻。乐观的看待生活和这个糟糕的世界，亲近设计，亲近客户的观点始终需要贯彻在这个版本中。

创造是开心的，设计也应该是开心的，最开心的，是我们敢于正视自己的不成熟。
---
## html 的基础模板
```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans-CN">
<head>
    <meta charset="UTF-8">
    <title>ch233-smile</title>

    <link rel="stylesheet" href="css/ch233.mini.css">
</head>
<body>

<!--Elements UED ch233.js-->
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/ch233.min.js"></script>

</body>
</html>
```
---
## .scss 文件中的约定
> css 的加载通过 output 下的 ch233.mini.scss 控制，简而言之，ch233.mini.scss 只控制加载哪些样式表，而不直接写入样式

* 注释的写法
```css
/*!
  * Author: うつせみ
  * GitHub: https://github.com/CloudHand233/
  * Version: 3.0.0
  * LastUpdate: 2017.Aug.25th
*/
```
* 静默注释`//`用于阐述各个部件和版块的使用、说明、释义
---
## ICON
使用 Google 的 Materail ICONS。files：
* fonts/MaterialIcons-Regular.ttf
* fonts/MaterialIcons-Regular.woff
* fonts/MaterialIcons-Regular.woff2
* scss/components/_material-icons.scss
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
		|—— components （组件集合）
		|—— output （最终输出脚本的源）
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