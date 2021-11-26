<template>
  <div class="loading__x">
    <div class="explain">
      <p>组件位置：在 src/views/CSS/Pure/pages/Loading/components 里面找对应的文件名吧~</p>
      <p>我懒得分类了，看到喜欢的就复制吧~</p>
    </div>
    <div class="main">
      <L1></L1>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import L1 from './components/L1.vue'

const store = useStore()
store.commit('setComponentPath', 'src/views/CSS/Pure/pages/Loading/Loading.vue')
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}

// 布局用的，这段和loading无关
.com__box {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;

  ::v-deep h4.explain {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 14px;
  }
}
</style>