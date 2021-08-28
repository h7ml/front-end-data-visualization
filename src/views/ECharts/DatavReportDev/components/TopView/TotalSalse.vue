<!-- 累计销售额 -->
<template>
  <div>
    <CommonCard
      title="累计销售额"
      value="￥ 32,039,165"
    >
      <template #default>
        <div class="compare"></div>
      </template>
      <template #footer>
        <span>昨日销售额</span>
        <span class="money">￥ 30,000,000</span>
      </template>
    </CommonCard>
  </div>
</template>

<script setup>
import CommonCard from './commonCardMixin.js'
</script>

<style lang="scss" scoped>
.compare {
  height: 100%;
  background: yellow;
}
span {
  font-size: 12px;
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>