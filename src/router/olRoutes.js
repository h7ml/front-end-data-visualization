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
      path: 'ol-basic',
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
        },
        {
          path: 'ol-zoom',
          name: 'olZoom',
          component: () => import('@/views/OpenLayers/Basic/pages/Zoom/Zoom.vue'),
          meta: {
            navState: true,
            navName: '缩放 zoom'
          }
        },
        {
          path: 'ol-tabIndex',
          name: 'olTabIndex',
          component: () => import('@/views/OpenLayers/Basic/pages/TabIndex/TabIndex.vue'),
          meta: {
            navState: true,
            navName: '点击激活地图 tabIndex'
          }
        },
        {
          path: 'ol-changeTarget',
          name: 'olChangeTarget',
          component: () => import('@/views/OpenLayers/Basic/pages/ChangeTarget/ChangeTarget.vue'),
          meta: {
            navState: true,
            navName: '切换地图容器'
          }
        }
      ]
    }
  ]
}