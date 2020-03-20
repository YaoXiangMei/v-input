export default [{
  path: '/install',
  name: 'install',
  component: () => import(/* webpackChunkName: "install" */ '@/views/install/Install.vue')
}]
