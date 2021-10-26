// FabricJS
export default {
  path: '/fabric',
  name: 'Fabric',
  component: () => import('@/views/FabricJS/index.vue'),
  meta: {
    navState: true,
    navName: 'FabricJS',
    icon: 'el-icon-cherry'
  },
  children: [
    {
      path: 'fabric-basic',
      name: 'FabricBasic',
      component: () => import('@/views/FabricJS/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'fabric-stated',
          name: 'FabricStated',
          component: () => import('@/views/FabricJS/Basic/pages/Stated/Stated.vue'),
          meta: {
            navState: true,
            navName: '起步'
          }
        },
        {
          path: 'fabric-basic-graph',
          name: 'FabricBasicGraph',
          component: () => import('@/views/FabricJS/Basic/pages/BasicGraph/BasicGraph.vue'),
          meta: {
            navState: true,
            navName: '基础图形'
          }
        },
        {
          path: 'fabric-use-image',
          name: 'FabricUseImage',
          component: () => import('@/views/FabricJS/Basic/pages/UseImage/UseImage.vue'),
          meta: {
            navState: true,
            navName: '使用图片'
          }
        },
        {
          path: 'fabric-draw-path',
          name: 'DrawPath',
          component: () => import('@/views/FabricJS/Basic/pages/DrawPath/DrawPath.vue'),
          meta: {
            navState: true,
            navName: '绘制路径'
          }
        },
        {
          path: 'fabric-animation',
          name: 'Animation',
          component: () => import('@/views/FabricJS/Basic/pages/Animation/Animation.vue'),
          meta: {
            navState: true,
            navName: '动画'
          }
        },
        {
          path: 'fabric-filter',
          name: 'Filter',
          component: () => import('@/views/FabricJS/Basic/pages/Filter/Filter.vue'),
          meta: {
            navState: true,
            navName: '滤镜'
          }
        },
        {
          path: 'fabric-gradient',
          name: 'Gradient',
          component: () => import('@/views/FabricJS/Basic/pages/Gradient/Gradient.vue'),
          meta: {
            navState: true,
            navName: '渐变'
          }
        },
        {
          path: 'fabric-color',
          name: 'Color',
          component: () => import('@/views/FabricJS/Basic/pages/Color/Color.vue'),
          meta: {
            navState: true,
            navName: '颜色转换/颜色叠加'
          }
        },
        {
          path: 'fabric-text',
          name: 'Text',
          component: () => import('@/views/FabricJS/Basic/pages/Text/Text.vue'),
          meta: {
            navState: true,
            navName: '文本'
          }
        },
        {
          path: 'fabric-event',
          name: 'Event',
          component: () => import('@/views/FabricJS/Basic/pages/Event/Event.vue'),
          meta: {
            navState: true,
            navName: '事件'
          }
        },
        {
          path: 'fabric-groups',
          name: 'Groups',
          component: () => import('@/views/FabricJS/Basic/pages/Groups/Groups.vue'),
          meta: {
            navState: true,
            navName: '分组'
          }
        },
        {
          path: 'fabric-free-drawing',
          name: 'FreeDrawing',
          component: () => import('@/views/FabricJS/Basic/pages/FreeDrawing/FreeDrawing.vue'),
          meta: {
            navState: true,
            navName: '自由绘画'
          }
        },
        {
          path: 'fabric-locking',
          name: 'Locking',
          component: () => import('@/views/FabricJS/Basic/pages/Locking/Locking.vue'),
          meta: {
            navState: true,
            navName: '锁定'
          }
        },
        {
          path: 'fabric-changing-borders-corners',
          name: 'ChangingBordersCorners',
          component: () => import('@/views/FabricJS/Basic/pages/ChangingBordersCorners/ChangingBordersCorners.vue'),
          meta: {
            navState: true,
            navName: '修改边角状态'
          }
        }
      ]
    }
  ]
}