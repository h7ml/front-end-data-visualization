<template>
  <div class="map__x">
    <div id="container" ref="mapDom"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

function initMap() {
  const map = new BMapGL.Map('container') // 这里填入的是容器的 ID
  const point = new BMapGL.Point(116.404, 39.915)
  map.centerAndZoom(point, 18) // 设置中心点和基础缩放级别
  map.enableScrollWheelZoom(true) // 允许拖拽
  map.setHeading(30) // 旋转30度
  map.setTilt(70) // 倾斜45度
}

onMounted(() => {
  initMap()
})
</script>

<style lang="scss" scoped>
// 必须手动为地图容器设置宽高
#container {
  width: 600px;
  height: 600px;
}

// 隐藏右下角“百度地图”logo
:deep(.anchorBL) {
  display: none;
}
</style>