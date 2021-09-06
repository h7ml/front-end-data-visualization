<template>
  <div class="liquid__x">
    <div class="chart" ref="chartDom1"></div>
    <div class="chart" ref="chartDom2"></div>
    <div class="chart" ref="chartDom3"></div>
    <div class="chart" ref="chartDom4"></div>
    <div class="chart" ref="chartDom5"></div>
    <div class="chart" ref="chartDom6"></div>
    <div class="chart" ref="chartDom7"></div>
    <div class="chart" ref="chartDom8"></div>
    <div class="chart" ref="chartDom9"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import * as echarts from 'echarts'
import 'echarts-liquidfill' // 引入水球图插件

// 水球图需要使用 echarts-liquidfill 插件，安装命令：npm i echarts-liquidfill -S
// 使用 echarts-liquidfill 前，必须安装 echarts！！！！！！！！
// 水球图文档：https://github.com/ecomfe/echarts-liquidfill#api

const store = useStore()

// echart元素
const chartDom1 = ref(null)
const chartDom2 = ref(null)
const chartDom3 = ref(null)
const chartDom4 = ref(null)
const chartDom5 = ref(null)
const chartDom6 = ref(null)
const chartDom7 = ref(null)
const chartDom8 = ref(null)
const chartDom9 = ref(null)


// 渲染第一个水球
function chartInit1() {
  const chart1 = echarts.init(chartDom1.value)
  chart1.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6]
    }]
  })
}

// 渲染第二个水球
function chartInit2() {
  // 指定ECharts容器元素
  const chart2 = echarts.init(chartDom2.value)
  // 设置图表
  chart2.setOption({
    series: [{
      type: 'liquidFill', // 类型为水球图
      // 数据必须从大到小排列，不然会出现遮挡情况；也可以只传一个参数
      data: [0.68, 0.5, 0.4, 0.3, {
        // 单独设置
        value: 0.2,
        itemStyle: {
          color: '#3f72af',
          opacity: 0.6
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        }
      }
      ],
      color: ['#ffde7d', '#f6416c', '#f8f3d4', '#00b8a9'], // 数据颜色，每个颜色对应一个数据
      itemStyle: {
        opacity: 0.4, // 每个数据展示出来的不透明度
      },
      emphasis: {
        itemStyle: {
          opacity: 0.8 // 选中时的不透明度
        }
      }
    }]
  })
}

// 渲染第三个水球图（静态）
function chartInit3() {
  const chart3 = echarts.init(chartDom3.value)
  chart3.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.68, 0.5, 0.4, 0.3],
      waveAnimation: false,
      animationDuration: 0,
      animationDurationUpdate: 0
    }]
  })
}

// 渲染第四个水球图（波浪为直线）
function chartInit4() {
  const chart4 = echarts.init(chartDom4.value)
  chart4.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.68, 0.5, 0.4, 0.3],
      waveAnimation: false,
      animationDuration: 0,
      animationDurationUpdate: 0,
      amplitude: 0, // 振幅为0，就是没有波浪；振幅越大波浪越陡峭
    }]
  })
}

// 渲染第五个水球图（不同方向的波浪）
function chartInit5() {
  const chart5 = echarts.init(chartDom5.value)
  chart5.setOption({
    series: [{
      type: 'liquidFill',
      data: [{
        value: 0.68,
        direction: 'left'
      }, {
        value: 0.34,
        direction: 'right'
      }]
    }]
  })
}

// 渲染第六个水球图（修改边框颜色和背景色）
function chartInit6() {
  const chart6 = echarts.init(chartDom6.value)
  chart6.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.68, 0.5, 0.4, 0.3],
      backgroundStyle: {
        borderWidth: 10,
        borderColor: 'red',
        color: 'yellow'
      }
    }]
  })
}

// 渲染第七个水球图（修改外边框样式与形状）
function chartInit7() {
  const chart7 = echarts.init(chartDom7.value)
  chart7.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      shape: 'diamond', // 菱形，支持：'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      outline: {
        show: true,
        borderDistance: 30, // 外边框与里面的缝隙
        itemStyle: {
          borderWidth: 4, // 边框粗细
          borderColor: 'hotpink', // 边框颜色
          shadowBlur: 'none', // 隐藏边框阴影
        }
      }
    }]
  })
}

// 渲染第八个水球图（隐藏外边框）
function chartInit8() {
  const chart8 = echarts.init(chartDom8.value)
  chart8.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      outline: {
        show: false
      }
    }]
  })
}

// 渲染第九个水球图（全屏）
function chartInit9() {
  const chart9 = echarts.init(chartDom9.value)
  chart9.setOption({
    series: [{
      type: 'liquidFill',
      data: [0.6, 0.5, 0.4, 0.3],
      shape: 'container',
      radius: '60%',
      outline: {
        show: false // 隐藏外边框
      },
    }]
  })
}

onMounted(() => {
  store.commit('setComponentPath', 'src/views/ECharts/Basic/pages/LiquidFill/LiquidFill.vue')
  chartInit1()
  chartInit2()
  chartInit3()
  chartInit4()
  chartInit5()
  chartInit6()
  chartInit7()
  chartInit8()
  chartInit9()
})
</script>

<style lang="scss" scoped>
.liquid__x {
  display: flex;
  flex-wrap: wrap;
}
.chart {
  width: 360px;
  height: 360px;
}
</style>