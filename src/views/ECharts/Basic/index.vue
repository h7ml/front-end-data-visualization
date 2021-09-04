<template>
  <el-card :bdoy-style="{ width: '100%', height: '100%' }">
    <template #header>
      {{title}}
    </template>
    <template #default>
      <router-view />
    </template>
  </el-card>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route.meta.navName)
</script>

<style lang="scss" scoped>

</style>