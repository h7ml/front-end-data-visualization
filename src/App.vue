<template>
  <el-container class="app__x">
    <el-aside width="auto" class="app__nav">
      <RootNav />
    </el-aside>
    <el-container class="app__container">
      <el-header class="app__header">
        <RootHeader />
      </el-header>
      <el-main class="app__main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
console.log(import.meta.env)
</script>

<style lang="scss">
html,
body,
#app,
.app__x {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.app__container {
  height: 100%;
  overflow-y: hidden;
}

.app__header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.app__main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>