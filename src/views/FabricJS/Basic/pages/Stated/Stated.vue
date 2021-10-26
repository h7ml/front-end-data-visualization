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
    <div class="canvas_x">
      <div>初始化画布样式</div>
      <canvas id="canvas3"></canvas>
    </div>
    <div class="canvas_x">
      <div>使用背景图</div>
      <canvas width="400" height="400" id="canvas4"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

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

function init3() {
  let canvas = new fabric.Canvas('canvas3', {
    width: 300,
    height: 300,
    backgroundColor: '#eee'
  })

  // 圆形
  let circle = new fabric.Circle({
    radius: 30,
    top: 20,
    left: 20,
    fill: 'pink'
  })
  
  canvas.add(circle)
}

function init4() {
  let canvas = new fabric.Canvas('canvas4')
  canvas.setBackgroundImage(
    "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:400:400:400:400.awebp",
    canvas.renderAll.bind(canvas)
  )
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Stated/Stated.vue')
  init1()
  init2()
  init3()
  init4()
})
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.canvas_x {
  margin: 10px;

  canvas {
    border: 1px solid #ccc;
  }
}
</style>