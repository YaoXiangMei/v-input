<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="小数点的长度：">
        <el-input-number v-model="negative.DpLen" :min="1" />
      </el-form-item>
      <el-form-item label="请输入：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="negative.value" v-input-check:negative="{ change, DpLen: negative.DpLen }" />
          </el-col>
          <el-col :span="8">
            <i v-if="negative.value" :class="[negative.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <pre v-highlightjs>
      <code class="html">
        {{ negative.template }}
      </code>
      <code class="js">
        export default {
          data () {
            return {
              negative: {
                DpLen: 2,
                value: '',
                flag: false //是否校验通过
              }
            }
          },
          methods: {
            change (value, { flag }) {
              Object.assign(this.negative, {
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
      negative: {
        DpLen: 2,
        value: '-1.10',
        flag: true,
        template: `
        <template>
          <input
          type="text" :value="negative.value"
          v-input-check:negative="{ change, DpLen: negative.DpLen }" />
        </template>
        `
      }
    }
  },
  methods: {
    change (value, { flag }) {
      Object.assign(this.negative, {
        value,
        flag
      })
    }
  }
}
</script>
