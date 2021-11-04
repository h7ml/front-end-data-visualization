# 前端可视化笔记

## 个人博客

我的博客：[学习委员](https://juejin.cn/user/2673620576140030/posts)

[如果您方便的话，请帮我的文章点点赞吧，求您了（破音 :sob:  :sob:  :sob:  :sob:  :sob:  :sob: ](https://juejin.cn/user/2673620576140030/posts)

[我会不断更新文章，讲解本项目的各个 demo。](https://juejin.cn/user/2673620576140030/posts)

<br><br>

## 项目介绍
 **[:computer: 点击预览 「前端可视化笔记」 :rocket:  :rocket:  :rocket: ](http://k21vin.gitee.io/front-end-data-visualization)**

![](./preview.gif)

<br>

本项目是前端可视化笔记。

<br>

项目使用 `vite^2.5.4` 搭建。

项目中用到 `vue^3.2` 、`vue-router`、`vuex` 做基础建设，使用了 `element plus` 做基础ui布局。

本项目是可视化方面的笔记，包含了：
- `css特效`
- `svg`
- `canvas`
- `ECharts`
- `百度地图`
- `OpenLayers`
- `ThreeJS`
- `FabricJS`

<br><br>

## 运行
```
# 初始化项目，下载依赖包
npm install

# 启动开发环境（默认端口3000，可以调试）
npm run dev

# 启动生产环境（运行dist，默认端口5000，难以调试）
npm run serve
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

因为笔记中记录了 **“如何自定义 `ECharts` 主题”**，所以在 `npm install` 后，需要把 `src/assets/echarts/theme` 目录下的 `vintage2.js` 文件拷贝到 `node_modules/echarts/theme` 目录下。

<br><br>

## 推荐仓库
[:rocket: ol在vue2中运行，仓库地址  :rocket:  :rocket:  :rocket:  :rocket: ](https://gitee.com/k21vin/vue-openlayers)