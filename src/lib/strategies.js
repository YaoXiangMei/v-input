import tools from './tools'
const regs = {
    number: /^(\+|-)?(0.)?\d+(\.\d+)?$/,
    integerNumber: /^(\+|-)?\d+$/
  },
  strategies = {
  /**
   * @description 正数(比0大的数)，只能输入+、.、数字
   * @param { Object } el - dom元素
   * @param { Object } binding - 绑定的值
   */
    positive: (el, binding) => {
      const { value: { DpLen = 2, canWritePlus = false, extra, change } } = binding // 小数点默认长度为2, 默认不能输入加号
      let value = tools.getInputValue(el)
      value = tools.replaceNotNumberType(value)
      value = tools.replaceNotPlusNumberStart(value)
      console.log(canWritePlus)
      if (canWritePlus) {
        value = tools.replaceMultiplePlus(value)
        value = tools.replaceNumberAfterPlus(value)
      } else {
        value = tools.replaceAllPlus(value)
      }
      value = tools.replaceZeroAfterNotDp(value)
      value = tools.replacePlusAfterDp(value)
      value = tools.replaceDpBeforeNotNumber(value)
      value = tools.replaceMultipleDp(value)
      value = tools.replaceAllMinus(value)
      value = tools.retainDpLen(value, DpLen)
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: regs.number.test(value) && parseFloat(value) > 0, extra })
    },
    /**
   * @description 正整数，只能输入+、数字
   * @param { Object } el - dom元素
   * @param { Object } binding - 绑定的值
   */
    positiveInteger: (el, binding) => {
      const { value: { canWritePlus = false, change, extra } } = binding
      let value = tools.getInputValue(el)
      value = tools.replaceNotNumberType(value)
      value = tools.replaceAllDp(value)
      value = tools.replaceAllMinus(value)
      value = tools.replaceZeroStart(value)
      if (canWritePlus) {
        value = tools.replaceNotPlusNumberStart(value)
        value = tools.replaceMultiplePlus(value)
        value = tools.replaceNumberAfterPlus(value)
      } else {
        value = tools.replaceAllPlus(value)
      }
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: regs.integerNumber.test(value), extra })
    },
    /**
   * @description 负数，只能输入-、.、数字
   * @param { Object } el - dom元素
   * @param { Object } binding - 绑定的值
   */
    negative: (el, binding) => {
      const { value: { DpLen = 2, change, extra } } = binding // 小数点默认长度为2
      let value = tools.getInputValue(el)
      value = tools.replaceNotNumberType(value)
      value = tools.replaceAllPlus(value)
      value = tools.replaceNotMinusStart(value)
      value = tools.replaceMultipleMinus(value)
      value = tools.replaceNumberAfterMinus(value)
      value = tools.replaceDpBeforeNotNumber(value)
      value = tools.replaceZeroAfterNotDp(value)
      value = tools.replaceMultipleDp(value)
      value = tools.retainDpLen(value, DpLen)
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: regs.number.test(value), extra })
    },
    /**
   * @description 负整数，只能输入-、数字
   * @param { Object } el - dom元素
   * @param { Object } binding - 绑定的值
   */
    negativeInteger: (el, binding) => {
      const { value: { change, extra } } = binding // 小数点默认长度为2
      let value = tools.getInputValue(el)
      value = tools.replaceNotNumberType(value)
      value = tools.replaceAllPlus(value)
      value = tools.replaceAllDp(value)
      value = tools.replaceZeroStart(value)
      value = tools.replaceNotMinusStart(value)
      value = tools.replaceMultipleMinus(value)
      value = tools.replaceNumberAfterMinus(value)
      value = tools.replaceDpBeforeNotNumber(value)
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: regs.integerNumber.test(value), extra })
    },
    /**
   * @description 整数，只能输入+、- 。数字
   * @param { Object } el - dom元素
   * @param { Object } binding - 绑定的值
   */
    integer: (el, binding) => {
      const { value: { canWritePlus = false, change, extra } } = binding
      let value = tools.getInputValue(el)
      value = tools.replaceNotPlusMinusNumberStart(value)
      value = tools.replaceAllDp(value)
      value = tools.replaceNotNumberType(value)
      value = tools.replaceZeroStart(value)
      if (canWritePlus) {
        value = tools.replaceMultiplePlus(value)
        value = tools.replaceNumberAfterPlus(value)
      } else {
        value = tools.replaceAllPlus(value)
      }

      value = tools.replaceMultipleMinus(value)
      value = tools.replaceNumberAfterMinus(value)
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: regs.integerNumber.test(value), extra })
    },
    /**
   * @description 能输入正数。负数。小数
   * @param { Object } el - dom元素
   * @param { Object } binding - 绑定的值
   */
    anyNumber: (el, binding) => {
      const { value: { DpLen = 2, canWritePlus = false, change, extra } } = binding
      let value = tools.getInputValue(el)
      value = tools.replaceNotPlusMinusNumberStart(value)
      value = tools.replaceNotNumberType(value)
      value = tools.replaceZeroAfterNotDp(value)
      if (canWritePlus) {
        value = tools.replaceMultiplePlus(value)
        value = tools.replaceNumberAfterPlus(value)
        value = tools.replacePlusAfterDp(value)
        value = tools.replacePlusAfterMinus(value)
      } else {
        value = tools.replaceAllPlus(value)
      }
      value = tools.replaceMinusAfterPlus(value)
      value = tools.replaceMinusAfterDp(value)
      value = tools.replaceMultipleMinus(value)
      value = tools.replaceNumberAfterMinus(value)
      value = tools.replaceMultipleDp(value)
      value = tools.retainDpLen(value, DpLen)
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: regs.number.test(value), extra })
    },
    /**
   * @description 能输入数字
   * @param { Object } el - dom元素
   * @param { Object } binding - 绑定的值
   */
    number: (el, binding) => {
      const { value: { change, extra } } = binding
      let value = tools.getInputValue(el)
      value = tools.replaceNotNumberType(value)
      value = tools.replaceAllPlus(value)
      value = tools.replaceAllMinus(value)
      value = tools.replaceAllDp(value)
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: !!value, extra })
    },
    zh: (el, binding) => { // 中文
      const { value: { change, extra } } = binding
      let value = tools.getInputValue(el)
      value = value.replace(/[^\u4e00-\u9fa5]/g, '')
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: !!value, extra })
    },
    en: (el, binding) => { // 英文
      const { modifiers: { lowercase = false, upperCase = false }, value: { change, extra } } = binding
      let value = tools.getInputValue(el)
      if ((lowercase && upperCase) || (!lowercase && !upperCase)) {
        value = value.replace(/[^A-Za-z]+/g, '')
      }
      if (lowercase && !upperCase) {
        value = value.replace(/[^a-z]+/g, '')
      } else if (!lowercase && upperCase) {
        value = value.replace(/[^A-Z]+/g, '')
      }
      tools.setInputValue(el, value)
      typeof change === 'function' && change(value, { flag: !!value, extra })
    },
    group: (el, binding) => { // 组合
      const { modifiers: { number = false, enLowercase = false, enUpperCase = false, zh = false }, value: { group, change, extra } } = binding
      if (!el.__first) {
        let join = '',
          connector = ''
        for (const item of group) {
          item === '-' ? (connector = '-') : join += item
        }
        console.log(number)
        number && (join = `${join}50-9`)
        enLowercase && (join = `${join}a-z`)
        enUpperCase && (join = `${join}A-Z`)
        zh && (join = `${join}\u4e00-\u9fa5`)
        el.__join = `[${join}${connector}]+`
      }
      el.__first = true
      el.__reg = el.__reg || new RegExp(el.__join, 'g')
      const currentValue = el.value.charAt(el.value.length - 1)
      if (el.__reg.test(currentValue)) {
        el.__oldValue = el.value
      } else if (currentValue) {
        el.value = el.__oldValue || ''
      } else {
        el.__oldValue = el.value = ''
      }
      el.__reg.lastIndex = 0
      typeof change === 'function' && change(el.value, { flag: !!el.value, extra })
    }
  }
export default strategies
