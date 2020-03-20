<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="请输入：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="en.value" v-input-check:en="{ change }" placeholder="能输入大小写" />
          </el-col>
          <el-col :span="8">
            <i v-if="en.value" :class="[en.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="小写：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="enLowercase.value" v-input-check:en.lowercase="{ change: changeLowercase }" placeholder="只能输入小写" />
          </el-col>
          <el-col :span="8">
            <i v-if="enLowercase.value" :class="[enLowercase.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="大写：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="enUpperCase.value" v-input-check:en.upperCase="{ change: changeUpperCase }" placeholder="只能输入大写" />
          </el-col>
          <el-col :span="8">
            <i v-if="enUpperCase.value" :class="[enUpperCase.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <pre v-highlightjs>
      <code class="html">
        {{ en.template }}
        {{ enLowercase.template }}
        {{ enUpperCase.template }}
      </code>
      <code class="js">
        export default {
          data () {
            return {
              en: {
                value: '',
                flag: false //是否校验通过
              }
            }
          },
          methods: {
            change (value, { flag }) {
              Object.assign(this.en, {
                value,
                flag
              })
            }
          }
        }
      </code>
    </pre>
  </div>
</template>
<script>
export default {
  data () {
    return {
      en: {
        value: '',
        flag: false,
        template: `
        <template>
          <input
          type="text" :value="en.value"
          v-input-check:en="{ change } " placeholder="能输入大小写" />
        </template>
        `
      },
      enLowercase: {
        value: '',
        flag: false,
        template: `
        <template>
          <input
          type="text" :value="en.value"
          v-input-check:en.lowercase="{ change } " placeholder="只能输入小写" />
        </template>
        `
      },
      enUpperCase: {
        value: '',
        flag: false,
        template: `
        <template>
          <input
          type="text" :value="en.value"
          v-input-check:en.upperCase="{ change } " placeholder="只能输入大写" />
        </template>
        `
      }
    }
  },
  methods: {
    change (value, { flag }) {
      Object.assign(this.en, {
        value,
        flag
      })
    },
    changeLowercase (value, { flag }) {
      Object.assign(this.enLowercase, {
        value,
        flag
      })
    },
    changeUpperCase (value, { flag }) {
      Object.assign(this.enUpperCase, {
        value,
        flag
      })
    }
  }
}
</script>
