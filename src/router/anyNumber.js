export default [{
  path: '/anyNumber',
  name: 'anyNumber',
  component: () => import(/* webpackChunkName: "anyNumber" */ '@/views/anyNumber/AnyNumber.vue')
}]
