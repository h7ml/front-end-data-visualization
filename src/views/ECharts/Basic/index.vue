<template>
  <el-card :bdoy-style="{ width: '100%', height: '100%' }">
    <template #header>
      {{title}} - {{currentPath}}
    </template>
    <template #default>
      <router-view />
    </template>
  </el-card>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()

const title = computed(() => route.meta.navName)

const currentPath = computed( () => store.getters.getCurrentPath )
</script>

<style lang="scss" scoped>

</style>