<template>
  <el-row :gutter="20" class="bottom__view">
    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title__wrapper">关键词搜索</div>
        </template>
        <template #default>
          <div class="chart__wrapper">
            <el-row :gutter="20">
              <el-col :span="12">
                <KeyWordChart
                  class="keyword__chart__x"
                  :options="searchUsersNum.options"
                />
              </el-col>
              <el-col :span="12">
                <KeyWordChart
                  class="keyword__chart__x"
                  :options="searchVolume.options"
                />
              </el-col>
            </el-row>
            <div class="table__wrapper">
              <el-table :data="tableData">
                <el-table-column
                  prop="rank"
                  label="排名"
                ></el-table-column>
                <el-table-column
                  prop="keyWrod"
                  label="关键字"
                ></el-table-column>
                <el-table-column
                  prop="count"
                  label="总搜索量"
                ></el-table-column>
                <el-table-column
                  prop="users"
                  label="搜索用户数"
                ></el-table-column>
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="50"
                :page-size="4"
                background
                class="pagination"
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </el-col>
    <el-col :lg="12" :md="24" :sm="24" :xs="24" class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title__wrapper">
            <div class="title">分类销售排行榜</div>
            <div class="radio__wrapper">
              <el-radio-group v-model="salesInfo.radioSelect" size="small">
                <el-radio-button
                  v-for="btnName in salesInfo.radioTypes"
                  :key="btnName"
                  :label="btnName"
                ></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template #default>
          <SalesRankingListChart :data="categoryOptions.data" />
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
import KeyWordChart from './KeyWordChart.vue'
import SalesRankingListChart from './SalesRankingListChart.vue'

// 搜索用户数 报表数据
const searchUsersNum = reactive({
  options: {
    title: {
      text: '搜索用户数',
      textStyle: {
        color: '#888',
        fontSize: 14
      },
      subtext: '93,634',
      subtextStyle: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold'
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false
    },
    yAxis: {
      show: false
    },
    series: [{
      type: 'line',
      data: [128, 328, 168, 625, 154, 325, 168, 457, 669, 467],
      areaStyle: {
        color: 'rgba(95, 187, 255, 0.5)'
      },
      lineStyle: {
        color: 'rgba(95, 187, 255)'
      },
      itemStyle: {
        opacity: 0
      },
      smooth: true
    }],
    grid: {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
})

// 搜索量 报表数据
const searchVolume = reactive({
  options: {
    title: {
      text: '搜索量',
      textStyle: {
        color: '#888',
        fontSize: 14
      },
      subtext: '198,782',
      subtextStyle: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold'
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false
    },
    yAxis: {
      show: false
    },
    series: [{
      type: 'line',
      data: [128, 328, 168, 625, 154, 325, 168, 457, 669, 467],
      areaStyle: {
        color: 'rgba(95, 187, 255, 0.5)'
      },
      lineStyle: {
        color: 'rgba(95, 187, 255)'
      },
      itemStyle: {
        opacity: 0
      },
      smooth: true
    }],
    grid: {
      top: 50,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
})

// 关键词搜索表格
const tableData = ref([
  { id: 1, rank: 1, keyWrod: '北京', count: 100, users: 90, range: '90' },
  { id: 2, rank: 2, keyWrod: '上海', count: 100, users: 90, range: '90' },
  { id: 3, rank: 3, keyWrod: '深圳', count: 100, users: 90, range: '90' },
  { id: 4, rank: 4, keyWrod: '广州', count: 100, users: 90, range: '90' }
])

// 翻页
function onPageChange(page) {
  console.log(page)
}

const salesInfo = reactive({
  radioSelect: '品类',
  radioTypes: ['品类', '商品']
})

// 销售排行榜图表数据
const categoryOptions = reactive({
  data: []
})
</script>

<style lang="scss" scoped>
.bottom__view {
  display: flex;
  margin-top: 20px;

  .view {
    flex: 1;

    :deep(.el-card__header) {
      padding: 0 20px;
    }

    .title__wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      font: {
        size: 14px;
        weight: 500;
      }

      .radio__wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }
    }

    .chart__wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;

      .keyword__chart__x {
        height: 100px;
      }
    }

    .table__wrapper {
      flex: 1;
      margin-top: 20px;

      .pagination {
        margin-top: 16px;
        text-align: center;
      }
    }
  }
}
</style>