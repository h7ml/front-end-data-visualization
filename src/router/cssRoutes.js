// css
export default {
  path: '/css',
  name: 'CSS',
  component: () => import('@/views/CSS/index.vue'),
  meta: {
    navState: true,
    navName: 'CSS',
    icon: 'el-icon-s-open'
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
        },
        {
          path: 'carousel',
          name: 'Carousel',
          component: () => import('@/views/CSS/Pure/pages/Carousel/Carousel.vue'),
          meta: {
            navState: true,
            navName: '走马灯（手动控制）'
          }
        }
      ]
    }
  ]
}