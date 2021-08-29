import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/css',
    name: 'CSS',
    component: () => import('@/views/CSS/index.vue'),
    meta: {
      navState: true,
      navName: 'CSS',
      icon: 'el-icon-s-management'
    },
    children: [
      {
        path: 'css-demo',
        name: 'CSSDemo',
        component: () => import('@/views/CSS/Demo/index.vue'),
        meta: {
          navState: true,
          navName: 'Demo',
          icon: 'el-icon-s-shop'
        },
        children: [
          {
            path: 'gradientText',
            name: 'GradientText',
            component: () => import('@/views/CSS/Demo/pages/GradientText/GradientText.vue'),
            meta: {
              navState: true,
              navName: '渐变文字'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/svg',
    name: 'SVG',
    component: () => import('@/views/SVG/index.vue'),
    meta: {
      navState: true,
      navName: 'SVG',
      icon: 'el-icon-s-management'
    }
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('@/views/Canvas/index.vue'),
    meta: {
      navState: true,
      navName: 'Canvas',
      icon: 'el-icon-s-management'
    }
  },
  {
    path: '/eCharts',
    name: 'ECharts',
    component: () => import('@/views/ECharts/index.vue'),
    meta: {
      navState: true,
      navName: 'ECharts',
      icon: 'el-icon-s-data'
    },
    children: [
      {
        path: 'echarts-demo',
        name: 'EChartsDemo',
        component: () => import('@/views/ECharts/Demo/index.vue'),
        meta: {
          navState: true,
          navName: 'Demo',
          icon: 'el-icon-s-shop'
        },
        children: [
          {
            path: 'ECharts-Stated',
            name: 'EChartsStated',
            component: () => import('@/views/ECharts/Demo/pages/Stated/Stated.vue'),
            meta: {
              navState: true,
              navName: '起步'
            }
          },
          {
            path: 'ECharts-ThemeBuilderJS',
            name: 'EChartsThemeBuilderJS',
            component: () => import('@/views/ECharts/Demo/pages/ThemeBuilder/ThemeBuilderJS.vue'),
            meta: {
              navState: true,
              navName: '自定义主题 JS版'
            }
          },
          {
            path: 'ECharts-ThemeBuilderJSON',
            name: 'EChartsThemeBuilderJSON',
            component: () => import('@/views/ECharts/Demo/pages/ThemeBuilder/ThemeBuilderJSON.vue'),
            meta: {
              navState: true,
              navName: '自定义主题 JSON版'
            }
          },
          {
            path: 'ECharts-RendererSVG',
            name: 'EChartsRendererSVG',
            component: () => import('@/views/ECharts/Demo/pages/RendererSVG/RendererSVG.vue'),
            meta: {
              navState: true,
              navName: 'SVG渲染'
            }
          },
          {
            path: 'ECharts-Dataset',
            name: 'EChartsDataset',
            component: () => import('@/views/ECharts/Demo/pages/Dataset/Dataset.vue'),
            meta: {
              navState: true,
              navName: 'Dataset'
            }
          },
          {
            path: 'ECharts-Plugins',
            name: 'EChartsPlugins',
            component: () => import('@/views/ECharts/Demo/pages/Plugins/Plugins.vue'),
            meta: {
              navState: true,
              navName: '插件'
            }
          },
          {
            path: 'ECharts-Absolute',
            name: 'EChartsAbsolute',
            component: () => import('@/views/ECharts/Demo/pages/Absolute/Absolute.vue'),
            meta: {
              navState: true,
              navName: '定位'
            }
          },
          {
            path: 'ECharts-Scatter',
            name: 'EChartsScatter',
            component: () => import('@/views/ECharts/Demo/pages/Axis/Scatter.vue'),
            meta: {
              navState: true,
              navName: '坐标系 - 散点图'
            }
          },
          {
            path: 'ECharts-Double',
            name: 'EChartsDouble',
            component: () => import('@/views/ECharts/Demo/pages/Axis/Double.vue'),
            meta: {
              navState: true,
              navName: '坐标系 - 双坐标系'
            }
          },
          {
            path: 'ECharts-More',
            name: 'EChartsMore',
            component: () => import('@/views/ECharts/Demo/pages/Axis/More.vue'),
            meta: {
              navState: true,
              navName: '坐标系 - 多坐标系'
            }
          },
          {
            path: 'ECharts-BarYCategory',
            name: 'EChartsBarYCategory',
            component: () => import('@/views/ECharts/Demo/pages/BarYCategory/BarYCategory.vue'),
            meta: {
              navState: true,
              navName: '条形图'
            }
          },
          {
            path: 'ECharts-AreaFill',
            name: 'EChartsAreaFill',
            component: () => import('@/views/ECharts/Demo/pages/AreaFill/Fill.vue'),
            meta: {
              navState: true,
              navName: '面积填充'
            }
          },
          {
            path: 'ECharts-AreaFillGradient',
            name: 'EChartsAreaFillGradient',
            component: () => import('@/views/ECharts/Demo/pages/AreaFill/Gradient.vue'),
            meta: {
              navState: true,
              navName: '渐变填充'
            }
          },
          {
            path: 'ECharts-TypeCustom',
            name: 'EChartsTypeCustom',
            component: () => import('@/views/ECharts/Demo/pages/TypeCustom/Icon.vue'),
            meta: {
              navState: true,
              navName: '自定义 - 图标'
            }
          }
        ]
      },
      {
        path: 'datavReportDev',
        name: 'DatavReportDev',
        component: () => import('@/views/ECharts/DatavReportDev/index.vue'),
        meta: {
          navState: true,
          navName: '数据报表',
          icon: 'el-icon-s-grid'
        }
      }
    ]
  },
  {
    path: '/baiduMap',
    name: 'BaiduMap',
    component: () => import('@/views/BaiduMap/index.vue'),
    meta: {
      navState: true,
      navName: '百度地图',
      icon: 'el-icon-s-management'
    },
    children: [
      {
        path: 'baiduMap-demo',
        name: 'BaiduMapDemo',
        component: () => import('@/views/BaiduMap/Demo/index.vue'),
        meta: {
          navState: true,
          navName: 'Demo',
          icon: 'el-icon-s-shop'
        },
        children: [
          {
            path: 'stated',
            name: 'Stated',
            component: () => import('@/views/BaiduMap/Demo/pages/Stated/Stated.vue'),
            meta: {
              navState: true,
              navName: '起步'
            }
          }
        ]
      }
    ]
  },
  { // 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 重定向匹配404页面
router.resolve({
  name: 'NotFound',
  params: { pathMatch: ['not', 'found'] },
}).href

export default router
