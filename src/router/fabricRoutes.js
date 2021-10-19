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
        }
      ]
    }
  ]
}