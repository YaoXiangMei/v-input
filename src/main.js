import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import lib from './lib'
import '@/styles/common.scss'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/monokai-sublime.css'
Vue.use(VueHighlightJS).use(lib)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
