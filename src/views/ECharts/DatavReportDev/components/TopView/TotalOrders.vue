<!-- 累计订单量 -->
<template>
  <div>
    <CommonCard
      title="累计订单量"
      value="2,157,420"
    >
      <template #default>
        <div id="total-orders-chart"></div>
      </template>
      <template #footer>
        <span>昨日订单量</span>
        <span class="emphasis">2,000,000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script setup>
import { CommonCard } from './commonCardMixin.js'
</script>

<style lang="scss" scoped>

</style>