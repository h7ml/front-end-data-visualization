// SVG
export default {
  path: '/svg',
  name: 'SVG',
  component: () => import('@/views/SVG/index.vue'),
  meta: {
    navState: true,
    navName: 'SVG',
    icon: 'el-icon-s-management'
  },
  children: [
    {
      path: 'SVG-basic',
      name: 'SVGBasic',
      component: () => import('@/views/SVG/Basic/index.vue'),
      meta: {
        navState: true,
        navName: '基础',
        icon: 'el-icon-s-shop'
      },
      children: [
        {
          path: 'SVG-viewportAndViewBox',
          name: 'SVGStated',
          component: () => import('@/views/SVG/Basic/pages/ViewportAndViewBox/ViewportAndViewBox.vue'),
          meta: {
            navState: true,
            navName: 'Viewport 和 ViewBox'
          }
        }
      ]
    }
  ]
}