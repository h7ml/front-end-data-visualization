<template>
  <div id="chart" class="chart" ref="chartDom"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

// echart元素
const chartDom = ref(null)

// 数据和配置项
const option = {
  title: {
    text: 'SVG渲染'
  },
  xAxis: { // x轴
    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: { // y轴

  },
  series: { // 图表类型
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }
}

// 渲染函数
function chartInit() {
  // 指定ECharts容器元素
  // const chart = echarts.init(chartDom.value) // 默认主题
  const chart = echarts.init(chartDom.value, '', {renderer: 'svg'}) // 深色主题
  // 设置图表
  chart.setOption(option)
}

onMounted(() => {
  chartInit()
})

</script>

<style lang="scss" scoped>
.chart {
  width: 800px;
  height: 400px;
}
</style>