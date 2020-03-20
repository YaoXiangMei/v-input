<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="请输入：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="negativeInteger.value" v-input-check:negativeInteger="{ change }" />
          </el-col>
          <el-col :span="8">
            <i v-if="negativeInteger.value" :class="[negativeInteger.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <pre v-highlightjs>
      <code class="html">
        {{ negativeInteger.template }}
      </code>
      <code class="js">
        export default {
          data () {
            return {
              negativeInteger: {
                value: '',
                flag: false //是否校验通过
              }
            }
          },
          methods: {
            change (value, { flag }) {
              Object.assign(this.negativeInteger, {
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
      negativeInteger: {
        value: '-1',
        flag: true,
        template: `
        <template>
          <input
          type="text" :value="negativeInteger.value"
          v-input-check:negativeInteger="{ change }" />
        </template>
        `
      }
    }
  },
  methods: {
    change (value, { flag }) {
      Object.assign(this.negativeInteger, {
        value,
        flag
      })
    }
  }
}
</script>
