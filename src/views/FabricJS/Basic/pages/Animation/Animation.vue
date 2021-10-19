<template>
  <div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

function init() {
  let canvas = new fabric.Canvas('canvas')
  let rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    fill: 'red'
  })

  // rect.set('angle', 45)

  // 动画，旋转角度
  // angle: 动画，接受3个属性（要进行变化的属性，值，对象[动画的缓冲效果等]）
  // 绝对值
  // rect.animate('angle', 360, {
  //   onChange:canvas.renderAll.bind(canvas) // 每次刷新的时候都会执行
  // })

  // 相对值写法
  // rect.animate('angle', '+=360', {
  //   onChange:canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
  //   duration: 2000, // 执行时间
  //   easing: fabric.util.ease.easeOutBounce, // 缓冲效果
  // })

  // 左移动动画
  rect.animate('left', '400', {
    onChange:canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
    duration: 2000, // 执行时间
    easing: fabric.util.ease.easeInCubic, // 缓冲效果
  })

  canvas.add(rect)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Animation/Animation.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>