<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="输入+号：">
        <el-switch v-model="positiveInteger.canWritePlus" />
      </el-form-item>
      <el-form-item label="请输入：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="positiveInteger.value" v-input-check:positiveInteger="{ change, canWritePlus: positiveInteger.canWritePlus }" />
          </el-col>
          <el-col :span="8">
            <i v-if="positiveInteger.value" :class="[positiveInteger.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <pre v-highlightjs>
      <code class="html">
        {{ positiveInteger.template }}
      </code>
      <code class="js">
        export default {
          data () {
            return {
              positiveInteger: {
                canWritePlus: false,
                value: '',
                flag: false //是否校验通过
              }
            }
          },
          methods: {
            change (value, { flag }) {
              Object.assign(this.positiveInteger, {
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
      positiveInteger: {
        canWritePlus: false,
        DpLen: 2,
        value: '',
        flag: false,
        template: `
        <template>
          <input type="text"
          :value="positiveInteger.value"
          v-input-check:positiveInteger="{ change, canWritePlus: positiveInteger.canWritePlus }" />
        </template>
        `
      }
    }
  },
  methods: {
    change (value, { flag }) {
      Object.assign(this.positiveInteger, {
        value,
        flag
      })
    }
  }
}
</script>
