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

  // 圆
  let circle = new fabric.Circle({
    left: 100,
    top: 100,
    radius: 50,
    fill: 'red'
  })

  let gradient = new fabric.Gradient({
    type: 'linear',
    gradientUnits: 'pixels',
    coords: { x1: 0, y1: 0, x2: circle.width, y2: 0 },
    colorStops:[
      { offset: 0, color: 'red' },
      { offset: 0.2, color: 'orange' },
      { offset: 0.4, color: 'yellow' },
      { offset: 0.6, color: 'green' },
      { offset: 0.8, color: 'blue' },
      { offset: 1, color: 'purple' },
    ]
  })
  circle.set('fill', gradient);
  canvas.add(circle)
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Gradient/Gradient.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>