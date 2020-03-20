<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="输入+号：">
        <el-switch v-model="anyNumber.canWritePlus" />
      </el-form-item>
      <el-form-item label="小数点的长度：">
        <el-input-number v-model="anyNumber.DpLen" :min="1" />
      </el-form-item>
      <el-form-item label="请输入：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="anyNumber.value" v-input-check:anyNumber="{ change, canWritePlus: anyNumber.canWritePlus, DpLen: anyNumber.DpLen }" />
          </el-col>
          <el-col :span="8">
            <i v-if="anyNumber.value" :class="[anyNumber.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <pre v-highlightjs>
      <code class="html">
        {{ anyNumber.template }}
      </code>
      <code class="js">
        export default {
          data () {
            return {
              anyNumber: {
                canWritePlus: false,
                DpLen: 2,
                value: '',
                flag: false //是否校验通过
              }
            }
          },
          methods: {
            change (value, { flag }) {
              Object.assign(this.anyNumber, {
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
      anyNumber: {
        canWritePlus: false,
        DpLen: 2,
        value: '',
        flag: false,
        template: `
        <template>
          <input
          type="text" :value="anyNumber.value"
          v-input-check:anyNumber="{ change, canWritePlus: anyNumber.canWritePlus, DpLen: anyNumber.DpLen }" />
        </template>
        `
      }
    }
  },
  methods: {
    change (value, { flag }) {
      Object.assign(this.anyNumber, {
        value,
        flag
      })
    }
  }
}
</script>
