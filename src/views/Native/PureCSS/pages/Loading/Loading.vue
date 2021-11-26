<template>
  <div class="loading__x">
    <div class="explain">
      <p>组件位置：在 src/views/CSS/Pure/pages/Loading/components 里面找对应的文件名吧~</p>
      <p>收集了几十年的Loading动画，我懒得分类了，看到喜欢的就复制吧~</p>
    </div>
    <div class="main">
      <L1 />
      <L2 />
      <L3 />
      <L4 />
      <L5 />
      <L6 />
      <L7 />
      <L8 />
      <L9 />
      <L10 />
      <L11 />
      <L12 />
      <L13 />
      <L14 />
    </div>
  </div>
</template>

<!-- 下面的代码都是组件引入和布局相关，和Loading无关的 -->

<script setup>
import { useStore } from 'vuex'
import L1 from './components/L1.vue'
import L2 from './components/L2.vue'
import L3 from './components/L3.vue'
import L4 from './components/L4.vue'
import L5 from './components/L5.vue'
import L6 from './components/L6.vue'
import L7 from './components/L7.vue'
import L8 from './components/L8.vue'
import L9 from './components/L9.vue'
import L10 from './components/L10.vue'
import L11 from './components/L11.vue'
import L12 from './components/L12.vue'
import L13 from './components/L13.vue'
import L14 from './components/L14.vue'

const store = useStore()
store.commit('setComponentPath', 'src/views/CSS/Pure/pages/Loading/Loading.vue')
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}

// 布局用的，这段和loading无关
::v-deep .com__box {
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    margin-top: -15px;
  }

  h4.explain {
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 14px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>