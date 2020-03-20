export default [{
  path: '/en',
  name: 'en',
  component: () => import(/* webpackChunkName: "en" */ '@/views/en/En.vue')
}]
