<template>
  <div>
    <canvas id="canvas" width="600" height="600" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { fabric } from 'fabric'

const store = useStore()

function init() {

}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/FabricJS/Basic/pages/Text/Text.vue')
  init()
})
</script>

<style lang="scss" scoped>

</style>