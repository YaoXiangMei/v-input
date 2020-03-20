export default [{
  path: '/introduce',
  name: 'introduce',
  component: () => import(/* webpackChunkName: "introduce" */ '@/views/introduce/Introduce.vue')
}]
