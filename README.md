## 介绍
实时校验input输入框的值vue插件  

[在线体验demo](https://yaoxiangmei.github.io/v-input-check)
## 安装
#### npm
```bash
  npm i v-input-check -S
```
#### 将插件安装到vue
``` js
    import Vue from 'Vue'
    import VInputCheck from 'v-input-check'
    
    Vue.use(VInputCheck)
```
#### cdn
```js
    <script src="dist/vue.min.js"></script>
    <script src="https://unpkg.com/v-input-check"></script>
    
    Vue.use(VInputCheck)
```
## 使用
```js
    <input type="text" :value="price" v-input-check:positive="{ change, DpLen: 1 }" />
    const app = new Vue({
        el: '#app',
        data () {
            return {
                price: ''
            }
        },
        methods: {
            change: (value, data) => {
                this.price = value
                console.log(value, data)
            }
        }
    })
```
类型
* positive - 正数
* positiveInteger - 正整数
* negative - 负数
* negativeInteger - 负整数
* integer - 整数
* number - 数字（不能输入小数点、+、-符号）
* anyNumber - 所有数字类型
* zh - 中文
* en - 英文
* en.lowercase - 英文小写
* en.upperCase - 英文大写写
* en.group - 组合

### options
类型: Object
```js
    <input type="text"  v-input-check:positive="options" />
```
| 参数 | 类型 | 说明 | 可选值 | 默认值 |
| ----- | :----: | ----- | :------: | :------: |
| change | function | 回调函数, function(value, data) {} | - | - |
| DpLen | number | 保留小数点的长度,只对positive、negative、anyNumberl类型有效 | - | 2 |
| canWritePlus | boolean |  是否可以输入+号,只对positive、positiveInteger、integer、anyNumber、类型有效 | false/true | fasle |
| extra | any |  额外字段，将会在change事件中返回给你，对你处理列表时可能有用 | - | - |
| group | array |  可组合可输入的字符,只对group类型有效。例如["@", "-", "_", "0-9", "a-z", "A-Z"]| - | - |
