const tools = {
  canBindElements: ['input', 'textarea'],
  /**
   * @description 是否是可以绑定的该指令的元素，只有可输入的指令才能绑定
   * @param  { Object } el - dom元素
   */
  canBind (el) {
    const tagName = el.tagName.toLocaleLowerCase()
    if (tools.canBindElements.includes(tagName) || el.getAttribute('contenteditable')) return el
    return el.querySelector('input,textarea')
  },
  /**
   * @description 获取输入框的值
   * @param  { Object } el - dom元素
   */
  getInputValue (el) {
    const tagName = el.tagName.toLocaleLowerCase(),
      key = {
        input: 'value',
        textarea: 'value'
      }[tagName] || 'innerText'
    return el[key]
  },
  /**
   * @description 设置输入框的值
   * @param  { Object } el - dom元素
   */
  setInputValue (el, value, oldValue) {
    const tagName = el.tagName.toLocaleLowerCase(),
      key = {
        input: 'value',
        textarea: 'value'
      }[tagName] || 'innerText'
    let position = 0
    key === 'innerText' && (position = tools.getCursortPosition(el))
    el[key] = value
    key === 'innerText' && tools.setCaretPosition(el, el.__oldValue === value ? position - 1 : position)
    el.__oldValue = value
  },
  getCursortPosition (el) {
    const doc = el.ownerDocument || el.document,
      win = doc.defaultView || doc.parentWindow
    let sel = ''
    if (typeof win.getSelection != 'undefined') { // webkit
      sel = win.getSelection()
      if (sel.rangeCount > 0) {
        const range = win.getSelection().getRangeAt(0),
          preCaretRange = range.cloneRange()
        preCaretRange.selectNodeContents(el)
        preCaretRange.setEnd(range.endContainer, range.endOffset)
        this.cursurPosition = preCaretRange.toString().length
      }
    } else if ((sel = doc.selection) && sel.type != 'Control') { // IE
      const textRange = sel.createRange(),
        preCaretTextRange = doc.body.createTextRange()
      preCaretTextRange.moveToElementText(el)
      preCaretTextRange.setEndPoint('EndToEnd', textRange)
      this.cursurPosition = preCaretTextRange.text.length
    }
    return this.cursurPosition
  },
  setCaretPosition (el, pos) {
    var range, selection
    if (document.createRange) { // webkit
      range = document.createRange()
      range.selectNodeContents(el)
      if (el.innerHTML.length > 0) {
        range.setStart(el.childNodes[0], pos)
      }
      range.collapse(true)
      selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
    } else if (document.selection) { // IE
      range = document.body.createTextRange()
      range.moveToElementText(el)
      range.collapse(false)
      range.select()
    }
  },
  /**
   * description 删除所有非数字类型的字符
   * @param  { string } value
   */
  replaceNotNumberType (value) {
    return value.replace(/[^.\d+-]/g, '')
  },
  /**
   * description 只保留一个-号
   * @param  { string } value
   */
  replaceMultipleMinus (value) {
    return value.replace('-', '$#$').replace(/-/g, '').replace('$#$', '-')
  },
  /**
   * description 只保留一个+号
   * @param  { string } value
   */
  replaceMultiplePlus (value) {
    return value.replace('+', '$#$').replace(/\+/g, '').replace('$#$', '+')
  },
  /**
   * description 只保留一个.号
   * @param  { string } value
   */
  replaceMultipleDp (value) {
    return value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
  },
  /**
   * @description 替换数字后面的其它字符
   * @param  { string } value
   */
  replaceNumberAfterChar (value) {
    return value.replace(/((\+|-)?\d+)[^\d]/g, '$1')
  },
  /**
   * @description 替换数字后面的-号
   * @param  { string } value
   */
  replaceNumberAfterMinus (value) {
    return value.replace(/(\d+)-/g, '$1')
  },
  /**
   * @description 替换数字后面的+
   * @param  { string } value
   */
  replaceNumberAfterPlus (value) {
    return value.replace(/(\d+)\+/g, '$1')
  },
  /**
   * @description 替换-后面的.
   * @param  { string } value
   */
  replaceMinusAfterDp (value) {
    return value.replace(/(-)\./g, '$1')
  },
  /**
   * @description 替换-后面的+
   * @param  { string } value
   */
  replaceMinusAfterPlus (value) {
    return value.replace(/(-.*)\+/g, '$1')
  },
  /**
   * @description 替换+后面的.
   * @param  { string } value
   */
  replacePlusAfterDp (value) {
    return value.replace(/(\+)\./g, '$1')
  },
  /**
   * @description 替换+后面的-
   * @param  { string } value
   */
  replacePlusAfterMinus (value) {
    return value.replace(/(\+.*)-/g, '$1')
  },
  /**
   * @description 替换小数点后面的非数字
   * @param  { string } value
   */
  replaceDpBeforeNotNumber (value) {
    return value.replace(/((\+|-)?\.)[^\d]+/g, '$1')
  },
  /**
   * @description 替换所有的-号
   * @param  { string } value
   */
  replaceAllMinus (value) {
    return value.replace(/-/g, '')
  },
  /**
   * @description 替换所有的+号
   * @param  { string } value
   */
  replaceAllPlus (value) {
    return value.replace(/\+/g, '')
  },
  /**
   * @description 替换所有的.号
   * @param  { string } value
   */
  replaceAllDp (value) {
    return value.replace(/\./g, '')
  },
  /**
   * @description 替换非+号或数字开头的字符
   * @param  { string } value
   */
  replaceNotPlusNumberStart (value) {
    return value.replace(/^[^\d+]+/g, '')
  },
  /**
   * @description 替换非+号，-号。数字开头的字符
   * @param  { string } value
   */
  replaceNotPlusMinusNumberStart (value) {
    return value.replace(/^[^\d+-]+/g, '')
  },
  /**
   * @description 替换非-号开头的字符
   * @param  { string } value
   */
  replaceNotMinusStart (value) {
    return value.replace(/^[^-]/g, '')
  },
  /**
   * @description 替换0开头的字符
   * @param  { string } value
   */
  replaceZeroStart (value) {
    return value.replace(/^(\+|-)?0/g, '$1')
  },
  /**
   * @description 替换非0后面的非.
   * @param  { string } value
   */
  replaceZeroAfterNotDp (value) {
    return value.replace(/^(\+|-)?0[^.]/g, '$1' + 0)
  },
  /**
   * @description 保留小数点
   * @param  { string } value
   * @param  { number } len 小数点的长度
   */
  retainDpLen (value, len) {
    return value.replace(new RegExp(`^(\\+|-)*(\\d+)\\.(\\d{${len}}).*$`), '$1$2.$3')
  }
}
export default tools
