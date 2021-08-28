<template>
  <el-card :bdoy-style="{ width: '100%', height: '100%' }">
    css demo
    <router-view />
  </el-card>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.meta.navName)
</script>

<style lang="scss" scoped>

</style>