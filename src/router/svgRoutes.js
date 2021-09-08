// SVG
export default {
  path: '/svg',
  name: 'SVG',
  component: () => import('@/views/SVG/index.vue'),
  meta: {
    navState: true,
    navName: 'SVG',
    icon: 'el-icon-s-management'
  }
}