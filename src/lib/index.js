
import tools from './tools'
import strategies from './strategies'
import { version } from '../../package.json'
const directives = {
  'input-check': {
    bind (el, binding) {
      el = tools.canBind(el)
      if (!el) throw new Error('指令需要绑定在可输入的元素上')
      if (typeof binding.value !== 'object' && typeof binding.value !== 'undefined') throw new Error('配置只能为对象')
      if (!binding.arg) return

      binding.value = binding.value || {}
      el.__binding = binding
      const [strategie = 'positive'] = binding.arg.split(':')
      let isZhInput = false // 是否中文输入法
      el.addEventListener('compositionstart', () => {
        isZhInput = true
      })
      el.addEventListener('compositionend', () => {
        strategies[strategie].call(this, el, el.__binding)
        isZhInput = false
      })
      el.addEventListener('input', () => {
        isZhInput || strategies[strategie].call(this, el, el.__binding)
      }, false)
    },
    update (el, binding) {
      el = tools.canBind(el)
      binding.value = binding.value || {}
      el.__binding = binding
    }
  }
}

export default {
  install (Vue) {
    Object.keys(directives).forEach((name) => {
      Vue.directive(name, directives[name])
    })
  },
  version
}
