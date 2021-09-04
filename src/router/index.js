import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { // CSS
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
        path: 'css-pure',
        name: 'CSSPure',
        component: () => import('@/views/CSS/Pure/index.vue'),
        meta: {
          navState: true,
          navName: '纯CSS',
          icon: 'el-icon-s-shop'
        },
        children: [
          {
            path: 'gradientText',
            name: 'GradientText',
            component: () => import('@/views/CSS/Pure/pages/GradientText/GradientText.vue'),
            meta: {
              navState: true,
              navName: '渐变文字'
            }
          },
          {
            path: 'materialInput',
            name: 'MaterialInput',
            component: () => import('@/views/CSS/Pure/pages/MaterialInput/MaterialInput.vue'),
            meta: {
              navState: true,
              navName: 'Material风格输入框'
            }
          }
        ]
      }
    ]
  },
  { // SVG
    path: '/svg',
    name: 'SVG',
    component: () => import('@/views/SVG/index.vue'),
    meta: {
      navState: true,
      navName: 'SVG',
      icon: 'el-icon-s-management'
    }
  },
  { // Canvas
    path: '/canvas',
    name: 'Canvas',
    component: () => import('@/views/Canvas/index.vue'),
    meta: {
      navState: true,
      navName: 'Canvas',
      icon: 'el-icon-s-management'
    }
  },
  { // ECharts
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
        path: 'echarts-basic',
        name: 'EChartsBasic',
        component: () => import('@/views/ECharts/Basic/index.vue'),
        meta: {
          navState: true,
          navName: '基础',
          icon: 'el-icon-s-shop'
        },
        children: [
          {
            path: 'ECharts-Stated',
            name: 'EChartsStated',
            component: () => import('@/views/ECharts/Basic/pages/Stated/Stated.vue'),
            meta: {
              navState: true,
              navName: '起步'
            }
          },
          {
            path: 'ECharts-ThemeBuilderJS',
            name: 'EChartsThemeBuilderJS',
            component: () => import('@/views/ECharts/Basic/pages/ThemeBuilder/ThemeBuilderJS.vue'),
            meta: {
              navState: true,
              navName: '自定义主题 JS版'
            }
          },
          {
            path: 'ECharts-ThemeBuilderJSON',
            name: 'EChartsThemeBuilderJSON',
            component: () => import('@/views/ECharts/Basic/pages/ThemeBuilder/ThemeBuilderJSON.vue'),
            meta: {
              navState: true,
              navName: '自定义主题 JSON版'
            }
          },
          {
            path: 'ECharts-RendererSVG',
            name: 'EChartsRendererSVG',
            component: () => import('@/views/ECharts/Basic/pages/RendererSVG/RendererSVG.vue'),
            meta: {
              navState: true,
              navName: 'SVG渲染'
            }
          },
          {
            path: 'ECharts-Dataset',
            name: 'EChartsDataset',
            component: () => import('@/views/ECharts/Basic/pages/Dataset/Dataset.vue'),
            meta: {
              navState: true,
              navName: 'Dataset'
            }
          },
          {
            path: 'ECharts-Plugins',
            name: 'EChartsPlugins',
            component: () => import('@/views/ECharts/Basic/pages/Plugins/Plugins.vue'),
            meta: {
              navState: true,
              navName: '插件'
            }
          },
          {
            path: 'ECharts-Absolute',
            name: 'EChartsAbsolute',
            component: () => import('@/views/ECharts/Basic/pages/Absolute/Absolute.vue'),
            meta: {
              navState: true,
              navName: '定位'
            }
          },
          {
            path: 'ECharts-Scatter',
            name: 'EChartsScatter',
            component: () => import('@/views/ECharts/Basic/pages/Axis/Scatter.vue'),
            meta: {
              navState: true,
              navName: '坐标系 - 散点图'
            }
          },
          {
            path: 'ECharts-Double',
            name: 'EChartsDouble',
            component: () => import('@/views/ECharts/Basic/pages/Axis/Double.vue'),
            meta: {
              navState: true,
              navName: '坐标系 - 双坐标系'
            }
          },
          {
            path: 'ECharts-More',
            name: 'EChartsMore',
            component: () => import('@/views/ECharts/Basic/pages/Axis/More.vue'),
            meta: {
              navState: true,
              navName: '坐标系 - 多坐标系'
            }
          },
          {
            path: 'ECharts-BarYCategory',
            name: 'EChartsBarYCategory',
            component: () => import('@/views/ECharts/Basic/pages/BarYCategory/BarYCategory.vue'),
            meta: {
              navState: true,
              navName: '条形图'
            }
          },
          {
            path: 'ECharts-AreaFill',
            name: 'EChartsAreaFill',
            component: () => import('@/views/ECharts/Basic/pages/AreaFill/Fill.vue'),
            meta: {
              navState: true,
              navName: '面积填充'
            }
          },
          {
            path: 'ECharts-AreaFillGradient',
            name: 'EChartsAreaFillGradient',
            component: () => import('@/views/ECharts/Basic/pages/AreaFill/Gradient.vue'),
            meta: {
              navState: true,
              navName: '渐变填充'
            }
          },
          {
            path: 'ECharts-TypeCustom',
            name: 'EChartsTypeCustom',
            component: () => import('@/views/ECharts/Basic/pages/TypeCustom/Icon.vue'),
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
  { // BMap
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
        path: 'baiduMap-basic',
        name: 'BaiduMapBasic',
        component: () => import('@/views/BaiduMap/Basic/index.vue'),
        meta: {
          navState: true,
          navName: '基础',
          icon: 'el-icon-s-shop'
        },
        children: [
          {
            path: 'stated',
            name: 'Stated',
            component: () => import('@/views/BaiduMap/Basic/pages/Stated/Stated.vue'),
            meta: {
              navState: true,
              navName: '起步'
            }
          },
          {
            path: 'basic3D',
            name: 'Basic3D',
            component: () => import('@/views/BaiduMap/Basic/pages/3DMap/Basic3D.vue'),
            meta: {
              navState: true,
              navName: '基础3D地图'
            }
          },
          {
            path: '3DEarth',
            name: '3DEarth',
            component: () => import('@/views/BaiduMap/Basic/pages/3DMap/3DEarth.vue'),
            meta: {
              navState: true,
              navName: '3D 地球'
            }
          },
          {
            path: 'Control',
            name: 'Control',
            component: () => import('@/views/BaiduMap/Basic/pages/Control/Control.vue'),
            meta: {
              navState: true,
              navName: '控件'
            }
          },
          {
            path: 'CustomTheme',
            name: 'CustomTheme',
            component: () => import('@/views/BaiduMap/Basic/pages/CustomTheme/CustomTheme.vue'),
            meta: {
              navState: true,
              navName: '自定义主题'
            }
          },
          {
            path: 'draw-icon',
            name: 'DrawIcon',
            component: () => import('@/views/BaiduMap/Basic/pages/Layer/DrawIcon.vue'),
            meta: {
              navState: true,
              navName: '绘制图标'
            }
          },
          {
            path: 'draw-line',
            name: 'DrawLine',
            component: () => import('@/views/BaiduMap/Basic/pages/Layer/DrawLine.vue'),
            meta: {
              navState: true,
              navName: '绘制线段'
            }
          },
          {
            path: 'draw-polygon',
            name: 'DrawPolygon',
            component: () => import('@/views/BaiduMap/Basic/pages/Layer/DrawPolygon.vue'),
            meta: {
              navState: true,
              navName: '绘制多边形'
            }
          },
          {
            path: 'draw-label',
            name: 'DrawLabel',
            component: () => import('@/views/BaiduMap/Basic/pages/Layer/DrawLabel.vue'),
            meta: {
              navState: true,
              navName: '绘制文本'
            }
          },
          {
            path: 'draw-info-window',
            name: 'DrawInfoWindow',
            component: () => import('@/views/BaiduMap/Basic/pages/Layer/InfoWindow.vue'),
            meta: {
              navState: true,
              navName: '包含信息的窗口'
            }
          },
          {
            path: 'animation-view',
            name: 'AnimationView',
            component: () => import('@/views/BaiduMap/Basic/pages/Animation/ViewAnimation.vue'),
            meta: {
              navState: true,
              navName: '动画 ViewAnimation'
            }
          },
          {
            path: 'animation-track',
            name: 'TrackAnimation',
            component: () => import('@/views/BaiduMap/Basic/pages/Animation/TrackAnimation.vue'),
            meta: {
              navState: true,
              navName: '轨迹动画 TrackAnimation'
            }
          },
          {
            path: 'scatterDiagram',
            name: 'ScatterDiagram',
            component: () => import('@/views/BaiduMap/Basic/pages/ScatterDiagram/ScatterDiagram.vue'),
            meta: {
              navState: true,
              navName: '散点图'
            }
          },
          {
            path: 'flyLine',
            name: 'FlyLine',
            component: () => import('@/views/BaiduMap/Basic/pages/FlyLine/FlyLine.vue'),
            meta: {
              navState: true,
              navName: '飞线图'
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
