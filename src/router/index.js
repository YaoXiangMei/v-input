import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main'
import introduce from './introduce'
import install from './install'
import positive from './positive'
import positiveInteger from './positiveInteger'
import negative from './negative'
import negativeInteger from './negativeInteger'
import anyNumber from './anyNumber'
import number from './number'
import en from './en'
import zh from './zh'
import group from './group'
Vue.use(VueRouter)

const routes = [
    {
      path: '',
      component: Main,
      children: [{
        path: '/',
        redirect: '/install'
      }, ...introduce, ...install, ...positive,
      ...positiveInteger, ...negative, ...negativeInteger,
      ...anyNumber, ...number, ...en, ...zh, ...group]
    }
  ],

  router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
  })

export default router
