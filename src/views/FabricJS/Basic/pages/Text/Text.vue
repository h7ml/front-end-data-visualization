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

  let text = new fabric.Text('Hello World!', {
    left: 100,
    top: 100,
    fontFamily: 'Comic Sans', // 字体
    fontSize: 20, // 字号
    fill: 'red', // 填充色
  })

  canvas.add(text)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Text/Text.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>