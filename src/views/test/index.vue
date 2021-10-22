<template>
  <div>
    <div class="explain">本页面是作者的日常测试文件，不影响其他demo，也不会在导航栏显示</div>
    <canvas width="600" height="600" style="border: 1px solid #ccc;" id="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'

function init() {
  let canvas = new fabric.Canvas('canvas')
  let rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 20,
    height: 20
  })
  canvas.add(rect)
  rect.set("fill","red");
  rect.set({strokeWidth:5,stroke:"rgba(100,200,200,0.5)"});
  rect.set("angle",60).set("flipY",true);
}

onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>

</style>