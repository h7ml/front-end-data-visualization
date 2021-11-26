<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L17.vue</h4>
  </div>
</template>

<style lang="scss" scoped>
.loading,
.loading > div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #000;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 32px;
  height: 32px;
}

.loading > div {
  position: absolute;
  top: 50%;
  left: 50%;
  background: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  -webkit-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
  -moz-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
  -o-animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
  animation: ball-clip-rotate-multiple-rotate 1s ease-in-out infinite;
}

.loading > div:first-child {
  position: absolute;
  width: 32px;
  height: 32px;
  border-right-color: transparent;
  border-left-color: transparent;
}

.loading > div:last-child {
  width: 16px;
  height: 16px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  -webkit-animation-duration: 0.5s;
  -moz-animation-duration: 0.5s;
  -o-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-direction: reverse;
  -moz-animation-direction: reverse;
  -o-animation-direction: reverse;
  animation-direction: reverse;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div {
  border-width: 1px;
}

.loading.la-sm > div:first-child {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div:last-child {
  width: 8px;
  height: 8px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div {
  border-width: 4px;
}

.loading.la-2x > div:first-child {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div:last-child {
  width: 32px;
  height: 32px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div {
  border-width: 6px;
}

.loading.la-3x > div:first-child {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div:last-child {
  width: 48px;
  height: 48px;
}

@keyframes ball-clip-rotate-multiple-rotate {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    -webkit-transform: translate(-50%, -50%) rotate(180deg);
    transform: translate(-50%, -50%) rotate(180deg);
  }

  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
