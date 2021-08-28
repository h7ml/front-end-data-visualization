<template>
  <div id="dataReportDev">
    <TopView />
    <SalseView />
    <BottomView />
  </div>
</template>

<script setup>
import TopView from './components/TopView/TopView.vue'
import SalseView from './components/SalseView/SalseView.vue'
import BottomView from './components/BottomView/BottomView.vue'
</script>

<style lang="scss" scoped>
#dataReportDev {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.06);
}
</style>