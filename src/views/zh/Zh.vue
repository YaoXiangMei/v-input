<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="请输入：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="zh.value" v-input-check:zh="{ change }" />
          </el-col>
          <el-col :span="8">
            <i v-if="zh.value" :class="[zh.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <pre v-highlightjs>
      <code class="html">
        {{ zh.template }}
      </code>
      <code class="js">
        export default {
          data () {
            return {
              zh: {
                value: '',
                flag: false //是否校验通过
              }
            }
          },
          methods: {
            change (value, { flag }) {
              Object.assign(this.zh, {
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
      zh: {
        value: '',
        flag: false,
        template: `
        <template>
          <input
          type="text" :value="zh.value"
          v-input-check:zh="{ change }" />
        </template>
        `
      }
    }
  },
  methods: {
    change (value, { flag }) {
      Object.assign(this.zh, {
        value,
        flag
      })
    }
  }
}
</script>
