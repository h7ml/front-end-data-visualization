<template>
  <div class="zebra__shadow__text">
    Zebra
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.commit('setComponentPath', 'src/views/CSS/Pure/pages/ZebraShadowText/ZebraShadowText.vue')
</script>

<style lang="scss" scoped>
.zebra__shadow__text {
  background-image: linear-gradient(135deg, #fff 0%, #fff 25%, #000 25%, #000 50%, #fff 50%, #fff 75%, #000 75%, #000 100%);
  background-size: 6px 6px;
  background-repeat: repeat;
  text-shadow: 6px -6px #000, 4px -4px #fff;
  font-weight: bold;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 100px;
}
</style>