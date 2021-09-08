// Canvas
export default {
  path: '/canvas',
  name: 'Canvas',
  component: () => import('@/views/Canvas/index.vue'),
  meta: {
    navState: true,
    navName: 'Canvas',
    icon: 'el-icon-s-management'
  }
}