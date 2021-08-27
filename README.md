# 前端可视化笔记

## 预览
[点击预览 「前端可视化笔记」](http://k21vin.gitee.io/front-end-data-visualization)

## 运行
```
npm install

npm run dev
```

## 关于运行报错

### 初次运行时报错

> 错误代码：-4058

手动执行 `node node_modules/esbuild/install.js`
然后再使用启动命令 `npm run dev`

### 缺少 echarts/theme/vintage2.js

因为笔记中记录了 “如何自定义 `ECharts` 主题”，所以在 `npm install` 后，需要把 `src/assets/echarts/theme` 目录下的 `vintage2.js` 文件拷贝到 `node_modules/echarts/theme` 目录下。
