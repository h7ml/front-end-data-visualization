import { createRouter, createWebHashHistory } from 'vue-router'
import CSS from '@/views/CSS/index.vue'

const routes = [
  {
    path: '/',
    name: 'CSS',
    component: CSS,
    meta: {
      navState: true,
      navName: 'CSS',
      icon: 'el-icon-medal'
    }
  },
  {
    path: '/svg',
    name: 'SVG',
    component: () => import('../views/SVG/index.vue'),
    meta: {
      navState: true,
      navName: 'SVG',
      icon: 'el-icon-medal'
    }
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import('../views/Canvas/index.vue'),
    meta: {
      navState: true,
      navName: 'Canvas',
      icon: 'el-icon-medal'
    }
  },
  // {
  //   path: '/demo',
  //   name: 'Demo',
  //   component: () => import('../views/Demo/Demo.vue'),
  //   meta: {
  //     navState: true,
  //     navName: 'demo',
  //     icon: 'el-icon-notebook-1'
  //   },
  //   children: [
  //     {
  //       path: 'stated',
  //       name: 'Stated',
  //       component: () => import('../views/Demo/pages/Stated/Stated.vue'),
  //       meta: {
  //         navState: true,
  //         navName: '起步'
  //       }
  //     },
  //     {
  //       path: 'nodeAndEdge',
  //       name: 'NodeAndEdge',
  //       component: () => import('../views/Demo/pages/NodeAndEdge/NodeAndEdge.vue'),
  //       meta: {
  //         navState: true,
  //         navName: '节点和边'
  //       }
  //     },
  //     {
  //       path: 'basicShape',
  //       name: 'BasicShape',
  //       component: () => import('../views/Demo/pages/BasicShape/BasicShape.vue'),
  //       meta: {
  //         navState: true,
  //         navName: '基础图形'
  //       }
  //     },
  //     {
  //       path: 'classStyle',
  //       name: 'ClassStyle',
  //       component: () => import('../views/Demo/pages/ClassStyle/ClassStyle.vue'),
  //       meta: {
  //         navState: true,
  //         navName: 'class设置样式'
  //       }
  //     },
  //     {
  //       path: 'defaultNodesCircle',
  //       name: 'DefaultNodesCircle',
  //       component: () => import('../views/Demo/pages/DefaultNodesCircle/DefaultNodesCircle.vue'),
  //       meta: {
  //         navState: true,
  //         navName: '内置图形：圆'
  //       }
  //     },
  //     {
  //       path: 'test',
  //       name: 'Test',
  //       component: () => import('../views/Demo/pages/Test/Test.vue'),
  //       meta: {
  //         navState: true,
  //         navName: '测试'
  //       }
  //     }
  //   ]
  // },
  { // 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 重定向匹配404页面
router.resolve({
  name: 'NotFound',
  params: { pathMatch: ['not', 'found'] },
}).href

export default router
