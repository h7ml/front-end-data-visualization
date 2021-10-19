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

  // 矩形
  let rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'orange',
    width: 100,
    height: 100
  })
  canvas.add(rect)

  // 圆形
  let circle = new fabric.Circle({
    radius: 50,
    fill: 'green',
    left: 200,
    top: 200
  })

  // 三角形
  let triangle = new fabric.Triangle({
    width: 80, // 底边宽度
    height: 100, // 底边到定点的距离
    fill: 'blue',
    left: 300,
    top: 300
  })

  canvas.add(circle, triangle) // 一次添加2个图形
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/BasicGraph/BasicGraph.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>