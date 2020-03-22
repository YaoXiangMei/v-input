<template>
  <div>
    <h1>
      安装
    </h1>
    <pre v-highlightjs>
      <code class="shell">
        npm install v-input -S
      </code>
    </pre>
    <h4>引入</h4>
    <pre v-highlightjs>
      <code class="javascript">
        import Vue from 'vue'
        import VInputCheck from 'v-input'

        Vue.use(VInputCheck)
      </code>
    </pre>
    <h4>cdn</h4>
    <pre v-highlightjs>
      <code class="javascript">
        &lt;script src="dist/vue.min.js" /&gt;
        &lt;script src="https://unpkg.com/v-input-check" /&gt;

        Vue.use(VInputCheck)
      </code>
    </pre>
    <h1>使用</h1>
    <h4 class="dg-m-t-32">
      例子（正数，保留两位小数）
    </h4>
    <pre v-highlightjs>
      <code class="html">
        {{ use.template }}
      </code>
    </pre>
    <pre v-highlightjs>
      <code class="javascript">
        export default {
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
        }
      </code>
    </pre>
    <h4>
      参数
    </h4>
    <el-table :data="params" stripe border class="dg-m-t-32">
      <el-table-column label="名称" prop="name" />
      <el-table-column label="说明" prop="explain" />
    </el-table>
    <h4 class="dg-m-t-32">
      配置
    </h4>
    <pre v-highlightjs>
      <code class="html">
        {{ options.template }}
      </code>
    </pre>
    <el-table :data="options.data" stripe border>
      <el-table-column label="名称" prop="name" />
      <el-table-column label="类型" prop="type" />
      <el-table-column label="说明" prop="explain" />
      <el-table-column label="可选值" prop="optional" />
      <el-table-column label="默认值" prop="default" />
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      use: {
        template: `
        <input type="text" :value="price" v-input-check:positive="{ change, DpLen: 2 }" />
        `
      },
      params: [{
        name: 'positive',
        explain: '正数'
      }, {
        name: 'positiveInteger',
        explain: '正整数'
      }, {
        name: 'negative',
        explain: '负数'
      }, {
        name: 'negativeInteger',
        explain: '负整数'
      }, {
        name: 'integer',
        explain: '整数'
      }, {
        name: 'number',
        explain: '数字（不能输入小数点、+、-符号）'
      }, {
        name: 'anyNumber',
        explain: '所有数字类型'
      }, {
        name: 'zh',
        explain: '中文'
      }, {
        name: 'en',
        explain: '英文'
      }, {
        name: 'en.lowercase',
        explain: '英文小写'
      }, {
        name: 'en.upperCase',
        explain: '英文大写写'
      }],
      options: {
        template: `
        <input type="text"  v-input-check:positive="options" />
        `,
        data: [{
          name: 'options.change',
          type: 'function',
          explain: '回调函数, function(value, data) {}',
          optional: '-',
          default: '-'
        }, {
          name: 'options.DpLen',
          type: 'number',
          explain: '保留小数点的长度,只对positive、negative、anyNumberl类型有效',
          optional: '-',
          default: '2'
        }, {
          name: 'options.canWritePlus',
          type: 'boolean',
          explain: '是否可以输入+号,只对positive、positiveInteger、integer、anyNumber、类型有效',
          optional: 'false/true',
          default: 'false'
        }, {
          name: 'options.extra',
          type: 'any',
          explain: '额外字段，将会在change事件中返回给你，对你处理列表时可能有用',
          optional: '-',
          default: '-'
        }, {
          name: 'options.group',
          type: 'array',
          explain: '可组合可输入的字符,只对group类型有效。例如["@", "-", "_", "0-9", "a-z", "A-Z"]',
          optional: '-',
          default: '-'
        }]
      }
    }
  }
}
</script>
