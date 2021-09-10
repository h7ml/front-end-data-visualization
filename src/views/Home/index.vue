<template>
  <div class="app__home" id="appHome">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import can from './index.js'
onMounted(() => {
  can()
})
</script>

<style lang="scss" scoped>
.app__home {
  width: 100%;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>