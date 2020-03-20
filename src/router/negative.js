export default [{
  path: '/negative',
  name: 'negative',
  component: () => import(/* webpackChunkName: "negative" */ '@/views/negative/Negative.vue')
}]
