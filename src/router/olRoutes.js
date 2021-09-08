// OpenLayers
export default {
  path: '/openlayers',
  name: 'OpenLayers',
  component: () => import('@/views/OpenLayers/index.vue'),
  meta: {
    navState: true,
    navName: 'OpenLayers',
    icon: 'el-icon-map-location'
  },
  children: [
    {
      path: 'openlayers-basic',
      name: 'OpenLayersBasic',
      component: () => import('@/views/OpenLayers/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'ol-stated',
          name: 'olStated',
          component: () => import('@/views/OpenLayers/Basic/pages/Stated/Stated.vue'),
          meta: {
            navState: true,
            navName: '起步'
          }
        },
        {
          path: 'ol-popup',
          name: 'olPopup',
          component: () => import('@/views/OpenLayers/Basic/pages/Popup/Popup.vue'),
          meta: {
            navState: true,
            navName: '弹窗 popup'
          }
        }
      ]
    }
  ]
}