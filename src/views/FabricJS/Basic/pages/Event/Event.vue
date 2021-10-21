<template>
  <div>
    <canvas width="600" height="600" id="canvas" style="border: 1px solid #ccc;"></canvas>
    <div>打开控制台，然后用鼠标点击画布试试</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

function init() {
  let canvas = new fabric.Canvas('canvas')

  canvas.on('mouse:down', options => {
    console.log('x轴坐标:', options.e.clientX)
    console.log('y轴坐标:', options.e.clientY)
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Event/Event.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>