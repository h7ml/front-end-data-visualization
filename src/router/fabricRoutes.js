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
        }
      ]
    }
  ]
}