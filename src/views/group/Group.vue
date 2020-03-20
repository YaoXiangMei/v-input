<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="请输入：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="group.value" v-input-check:group="{ change, group: group.regs }" placeholder="可输入'@', '_', '-', '+'" />
          </el-col>
          <el-col :span="8">
            <i v-if="group.value" :class="[group.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="请输入：">
        <el-row>
          <el-col :span="8">
            <el-input v-model="group2.value" v-input-check:group.number.enLowercase.enUpperCase="{ change: group2Change, group: group2.regs }" placeholder="可输入'可输入数字、英文小写、英文大写、中文、'@', '_', '-', '+'" />
          </el-col>
          <el-col :span="8">
            <i v-if="group2.value" :class="[group2.flag ? 'el-icon-success dg-t-c-67c23a' : 'el-icon-error dg-t-c-f56c6c']" class="dg-m-l-16 dg-f-s-18" />
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <pre v-highlightjs>
      <code class="html">
        {{ group.template }}
        {{ group2.template }}
      </code>
      <code class="js">
        export default {
          data () {
            return {
              group: {
                regs: ['@', '_', '-', '+'],
                value: '',
                flag: false //是否校验通过
              }
            }
          },
          methods: {
            change (value, { flag }) {
              Object.assign(this.group, {
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
      group: {
        regs: ['@', '_', '-', '+'],
        value: '',
        flag: false,
        template: `
        <template>
          <input
          type="text" :value="group.value"
          v-input-check:group="{ change, group: group.regs }" placeholder="可输入'@', '_', '-', '+'" />
        </template>
        `
      },
      group2: {
        regs: ['@', '_', '-', '+'],
        value: '',
        flag: false,
        template: `
        <template>
          <input
          type="text" :value="group.value"
          v-input-check:group.number.enLowercase.enUpperCase.zh="{ change, group: group.regs }"
          placeholder="可输入数字、英文小写、英文大写、中文、'@', '_', '-', '+'" />
        </template>
        `
      }
    }
  },
  methods: {
    change (value, { flag }) {
      Object.assign(this.group, {
        value,
        flag
      })
    },
    group2Change (value, { flag }) {
      // Object.assign(this.group, {
      //   value,
      //   flag
      // })
    }
  }
}
</script>
