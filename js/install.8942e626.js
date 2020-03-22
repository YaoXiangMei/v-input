(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["install"],{3615:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(" 安装 ")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),a("code",{staticClass:"shell"},[e._v("\n      npm install v-input -S\n    ")]),e._v("\n  ")]),a("h4",[e._v("引入")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),a("code",{staticClass:"javascript"},[e._v("\n      import Vue from 'vue'\n      import VInputCheck from 'v-input'\n\n      Vue.use(VInputCheck)\n    ")]),e._v("\n  ")]),a("h4",[e._v("cdn")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),a("code",{staticClass:"javascript"},[e._v('\n      <script src="dist/vue.min.js" />\n      <script src="https://unpkg.com/v-input-check" />\n\n      Vue.use(VInputCheck)\n    ')]),e._v("\n  ")]),a("h1",[e._v("使用")]),a("h4",{staticClass:"dg-m-t-32"},[e._v(" 例子（正数，保留两位小数） ")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v("\n      "+e._s(e.use.template)+"\n    ")]),e._v("\n  ")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),a("code",{staticClass:"javascript"},[e._v("\n      export default {\n        data () {\n            return {\n                price: ''\n            }\n        },\n        methods: {\n            change: (value, data) => {\n                this.price = value\n                console.log(value, data)\n            }\n        }\n      }\n    ")]),e._v("\n  ")]),a("h4",[e._v(" 参数 ")]),a("el-table",{staticClass:"dg-m-t-32",attrs:{data:e.params,stripe:"",border:""}},[a("el-table-column",{attrs:{label:"名称",prop:"name"}}),a("el-table-column",{attrs:{label:"说明",prop:"explain"}})],1),a("h4",{staticClass:"dg-m-t-32"},[e._v(" 配置 ")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("    "),a("code",{staticClass:"html"},[e._v("\n      "+e._s(e.options.template)+"\n    ")]),e._v("\n  ")]),a("el-table",{attrs:{data:e.options.data,stripe:"",border:""}},[a("el-table-column",{attrs:{label:"名称",prop:"name"}}),a("el-table-column",{attrs:{label:"类型",prop:"type"}}),a("el-table-column",{attrs:{label:"说明",prop:"explain"}}),a("el-table-column",{attrs:{label:"可选值",prop:"optional"}}),a("el-table-column",{attrs:{label:"默认值",prop:"default"}})],1)],1)},i=[],l={data(){return{use:{template:'\n        <input type="text" :value="price" v-input-check:positive="{ change, DpLen: 2 }" />\n        '},params:[{name:"positive",explain:"正数"},{name:"positiveInteger",explain:"正整数"},{name:"negative",explain:"负数"},{name:"negativeInteger",explain:"负整数"},{name:"integer",explain:"整数"},{name:"number",explain:"数字（不能输入小数点、+、-符号）"},{name:"anyNumber",explain:"所有数字类型"},{name:"zh",explain:"中文"},{name:"en",explain:"英文"},{name:"en.lowercase",explain:"英文小写"},{name:"en.upperCase",explain:"英文大写写"}],options:{template:'\n        <input type="text"  v-input-check:positive="options" />\n        ',data:[{name:"options.change",type:"function",explain:"回调函数, function(value, data) {}",optional:"-",default:"-"},{name:"options.DpLen",type:"number",explain:"保留小数点的长度,只对positive、negative、anyNumberl类型有效",optional:"-",default:"2"},{name:"options.canWritePlus",type:"boolean",explain:"是否可以输入+号,只对positive、positiveInteger、integer、anyNumber、类型有效",optional:"false/true",default:"false"},{name:"options.extra",type:"any",explain:"额外字段，将会在change事件中返回给你，对你处理列表时可能有用",optional:"-",default:"-"},{name:"options.group",type:"array",explain:'可组合可输入的字符,只对group类型有效。例如["@", "-", "_", "0-9", "a-z", "A-Z"]',optional:"-",default:"-"}]}}}},p=l,s=a("e90a"),r=Object(s["a"])(p,n,i,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=install.8942e626.js.map