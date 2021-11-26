<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading"></div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L1.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  width: 25px;
  height: 25px;
  border: 2px solid #000;
  border-top-color: transparent;
  border-radius: 100%;

  -webkit-animation: circle infinite 0.75s linear;
  -moz-animation: circle infinite 0.75s linear;
  -o-animation: circle infinite 0.75s linear;
  animation: circle infinite 0.75s linear;
}

// 转转转动画
@keyframes circle {
  0% {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
