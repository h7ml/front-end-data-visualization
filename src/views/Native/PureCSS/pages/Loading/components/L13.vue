<template>
  <div class="com__box">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <!-- 说明：组件名 -->
    <h4 class="explain">L12.vue</h4>
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

.loading > div:nth-child(1) {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 60%;
  height: 60%;
  background: #aaa;
  border-radius: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-animation: ball-atom-shrink 4.5s infinite linear;
  -moz-animation: ball-atom-shrink 4.5s infinite linear;
  -o-animation: ball-atom-shrink 4.5s infinite linear;
  animation: ball-atom-shrink 4.5s infinite linear;
}

.loading > div:not(:nth-child(1)) {
  position: absolute;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: none;
  -webkit-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
  -moz-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
  -o-animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
  animation: ball-atom-zindex 1.5s 0s infinite steps(2, end);
}

.loading > div:not(:nth-child(1)):before {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-left: -5px;
  content: "";
  background: currentColor;
  border-radius: 50%;
  opacity: 0.75;
  -webkit-animation: ball-atom-position 1.5s 0s infinite ease,
    ball-atom-size 1.5s 0s infinite ease;
  -moz-animation: ball-atom-position 1.5s 0s infinite ease,
    ball-atom-size 1.5s 0s infinite ease;
  -o-animation: ball-atom-position 1.5s 0s infinite ease,
    ball-atom-size 1.5s 0s infinite ease;
  animation: ball-atom-position 1.5s 0s infinite ease,
    ball-atom-size 1.5s 0s infinite ease;
}

.loading > div:nth-child(2) {
  -webkit-animation-delay: 0.75s;
  -moz-animation-delay: 0.75s;
  -o-animation-delay: 0.75s;
  animation-delay: 0.75s;
}

.loading > div:nth-child(2):before {
  -webkit-animation-delay: 0s, -1.125s;
  -moz-animation-delay: 0s, -1.125s;
  -o-animation-delay: 0s, -1.125s;
  animation-delay: 0s, -1.125s;
}

.loading > div:nth-child(3) {
  -webkit-transform: rotate(120deg);
  -moz-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  -o-transform: rotate(120deg);
  transform: rotate(120deg);
  -webkit-animation-delay: -0.25s;
  -moz-animation-delay: -0.25s;
  -o-animation-delay: -0.25s;
  animation-delay: -0.25s;
}

.loading > div:nth-child(3):before {
  -webkit-animation-delay: -1s, -0.75s;
  -moz-animation-delay: -1s, -0.75s;
  -o-animation-delay: -1s, -0.75s;
  animation-delay: -1s, -0.75s;
}

.loading > div:nth-child(4) {
  -webkit-transform: rotate(240deg);
  -moz-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  -o-transform: rotate(240deg);
  transform: rotate(240deg);
  -webkit-animation-delay: 0.25s;
  -moz-animation-delay: 0.25s;
  -o-animation-delay: 0.25s;
  animation-delay: 0.25s;
}

.loading > div:nth-child(4):before {
  -webkit-animation-delay: -0.5s, -0.125s;
  -moz-animation-delay: -0.5s, -0.125s;
  -o-animation-delay: -0.5s, -0.125s;
  animation-delay: -0.5s, -0.125s;
}

.loading.la-sm {
  width: 16px;
  height: 16px;
}

.loading.la-sm > div:not(:nth-child(1)):before {
  width: 4px;
  height: 4px;
  margin-top: -2px;
  margin-left: -2px;
}

.loading.la-2x {
  width: 64px;
  height: 64px;
}

.loading.la-2x > div:not(:nth-child(1)):before {
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
}

.loading.la-3x {
  width: 96px;
  height: 96px;
}

.loading.la-3x > div:not(:nth-child(1)):before {
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
}

@keyframes ball-atom-position {
  50% {
    top: 100%;
    left: 100%;
  }
}
</style>
