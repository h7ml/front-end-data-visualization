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
        },
        {
          path: 'tapeEdge',
          name: 'TapeEdge',
          component: () => import('@/views/CSS/Pure/pages/TapeEdge/TapeEdge.vue'),
          meta: {
            navState: true,
            navName: '缝边边框'
          }
        },
        {
          path: 'multilayerBorder',
          name: 'MultilayerBorder',
          component: () => import('@/views/CSS/Pure/pages/MultilayerBorder/MultilayerBorder.vue'),
          meta: {
            navState: true,
            navName: '多重边框'
          }
        },
        {
          path: 'filletedCorner',
          name: 'FilletedCorner',
          component: () => import('@/views/CSS/Pure/pages/FilletedCorner/FilletedCorner.vue'),
          meta: {
            navState: true,
            navName: '内圆角'
          }
        },
        {
          path: 'parallelogram',
          name: 'Parallelogram',
          component: () => import('@/views/CSS/Pure/pages/Parallelogram/Parallelogram.vue'),
          meta: {
            navState: true,
            navName: '平行四边形'
          }
        }
      ]
    }
  ]
}