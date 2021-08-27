<template>
  <header class="root__header">
    <i
      :class="[
        'root__header__icon',
        isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
      ]"
      @click="changeMenu"
    ></i>
    <h2 class="root__header__title">前端可视化</h2>
  </header>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'
import RootBus from "./RootBus"

export default {
  name: 'RootHeader',
  setup () {
    
    const isCollapse = ref(RootBus.isCollapse)
    function changeMenu() {
      // console.log(bus.$emit)
      // RootBus.$emit("change-menu-isCollapse");
      RootBus.isCollapse.value = !RootBus.isCollapse.value
    }

    onBeforeUnmount(() => {
      // RootBus.$off("change-menu-isCollapse")
    })

    return {
      isCollapse,
      changeMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.root__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__icon {
    font-size: 26px;
    margin-right: 10px;
    color: #409eff;
  }

  &__title {
    cursor: pointer;
    background-image: linear-gradient(180deg, #3ff9ff 0%, #409eff 72%, #78BEFF 100%);
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -o-background-clip: test;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>