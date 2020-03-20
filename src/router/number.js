export default [{
  path: '/number',
  name: 'number',
  component: () => import(/* webpackChunkName: "number" */ '@/views/number/Number.vue')
}]
