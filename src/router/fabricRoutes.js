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
      path: 'three-basic',
      name: 'ThreeBasic',
      component: () => import('@/views/FabricJS/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'three-stated',
          name: 'ThreeStated',
          component: () => import('@/views/FabricJS/Basic/pages/Stated/Stated.vue'),
          meta: {
            navState: true,
            navName: '起步'
          }
        }
      ]
    }
  ]
}