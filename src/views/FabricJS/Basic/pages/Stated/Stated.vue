<template>
  <div class="box">
    <div class="canvas_x">
      <div>可交互</div>
      <canvas width="400" height="400" id="canvas1"></canvas>
    </div>
    <div class="canvas_x">
      <div>不可交互</div>
      <canvas width="400" height="400" id="canvas2"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

function init1() {
  let canvas = new fabric.Canvas('canvas1') // 通过元素id绑定

  // 矩形
  let rect = new fabric.Rect({
    top: 100, // 矩形离顶部距离
    left: 100, // 矩形离左侧距离
    fill: 'red', // 填充色
    width: 30, // 矩形宽度
    height: 30 // 矩形高度
  })

  canvas.add(rect) // 将图案添加到canvas里
}

function init2() {
  let canvas = new fabric.StaticCanvas('canvas2') // 通过元素id绑定

  // 矩形
  let rect = new fabric.Rect({
    top: 100, // 矩形离顶部距离
    left: 100, // 矩形离左侧距离
    fill: 'red', // 填充色
    width: 30, // 矩形宽度
    height: 30 // 矩形高度
  })

  canvas.add(rect) // 将图案添加到canvas里
}

onMounted(() => {
  init1()
  init2()
})
</script>

<style lang="scss" scoped>
.box {
  display: flex;
}
.canvas_x {
  margin: 10px;

  canvas {
    border: 1px solid #ccc;
  }
}
</style>