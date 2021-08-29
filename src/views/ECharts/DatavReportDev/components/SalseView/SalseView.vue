<template>
  <div class="salse__view">
    <el-card shadow="hover">
      <template #header>
        <div class="menu__wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales__view__menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu__right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <el-date-picker
              class="salse__view__date__picker"
              size="small"
              v-model="date"
              type="daterange"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :shortcuts="shortcuts"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template #default>
        <div>chart</div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const activeIndex = ref('1')

function onMenuSelect(index) {
  activeIndex.value = index
}

const radioSelect = ref('今日')

const date = ref(null)

const shortcuts = reactive([
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
])

</script>

<style lang="scss" scoped>
.menu__wrapper {
  position: relative;
  display: flex;
}

.sales__view__menu {
  width: 100%;
  padding-left: 20px;

  .el-menu-item {
    height: 50px;
    line-height: 50px;
    margin: 0 20px;
  }
}

.menu__right {
  position: absolute;
  right: 0;
  top: 0;
  right: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  :deep(.salse__view__date__picker) {
    margin-left: 20px;
  }
}

:deep(.el-card__header) {
  border-bottom: none;
  padding: 0;
}
</style>