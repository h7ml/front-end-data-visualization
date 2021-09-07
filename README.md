# 前端可视化笔记

## 项目介绍
**[点击预览 「前端可视化笔记」](http://k21vin.gitee.io/front-end-data-visualization)**

<br>

本项目是前端可视化笔记。

<br>

项目使用 `vite^2.5.1` 搭建。

项目中用到 `vue^3.2` 、`vue-router`、`vuex` 做基础建设，使用了 `element plus` 做基础ui布局。

可视化方面的笔记，用到哪个框架就会安装对应的依赖包。

依赖包方面可以查看 `package.json` 文件。

<br><br>

## 运行
```
npm install

npm run dev
```

<br><br>

## 关于运行报错

### 1、初次运行时报错
*已修复，但不保证某些电脑运行时还会出现该错误 [2021-09-07]*

<br>

> 错误代码：-4058

手动执行 `node node_modules/esbuild/install.js`
然后再使用启动命令 `npm run dev`

<br>

### 2、缺少 echarts/theme/vintage2.js

因为笔记中记录了 “如何自定义 `ECharts` 主题”，所以在 `npm install` 后，需要把 `src/assets/echarts/theme` 目录下的 `vintage2.js` 文件拷贝到 `node_modules/echarts/theme` 目录下。
