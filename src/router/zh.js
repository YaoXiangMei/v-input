export default [{
  path: '/zh',
  name: 'zh',
  component: () => import(/* webpackChunkName: "zh" */ '@/views/zh/Zh.vue')
}]
