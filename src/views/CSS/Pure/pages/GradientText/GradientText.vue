<template>
  <div>
    <div class="gradient__text">渐变标题</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.gradient__text {
  font: {
    size: 30px;
    weight: 600;
  };
  background-image: linear-gradient(180deg, #3ff9ff 0%, #409eff 72%, #78BEFF 100%);
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -o-background-clip: test;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>