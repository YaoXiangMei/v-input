<template>
  <el-scrollbar :native="false" style="min-width: 100px" class="el-scrollbar dg-w-200 dg-h-vh-100 dg-bg-c-fff">
    <div class="el-scrollbar">
      <el-menu
        @open="handleOpen"
        @close="handleClose"
        :default-active="defaultActive">
        <el-menu-item v-for="({ name, title }) in navs" :key="name" @click="handlerTo(name)" :index="name">
          <span slot="title">
            {{ title }}
          </span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  data () {
    return {
      navs: [{
        name: 'install',
        title: '安装'
      }, {
        name: 'positive',
        title: '正数'
      }, {
        name: 'positiveInteger',
        title: '正整数'
      }, {
        name: 'negative',
        title: '负数'
      }, {
        name: 'negativeInteger',
        title: '负整数'
      }, {
        name: 'anyNumber',
        title: '任意数'
      }, {
        name: 'number',
        title: '数字'
      }, {
        name: 'en',
        title: '英文'
      }, {
        name: 'zh',
        title: '中文'
      }, {
        name: 'group',
        title: '组合'
      }]

    }
  },
  computed: {
    defaultActive () {
      console.log(this.$route.name)
      return this.$route.name
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handlerTo (name) {
      this.$router.push({ name })
    }
  }
}
</script>
<style lang="scss" scoped>
.el-menu{
  border-right: none;
  .is-active{
    font-weight: bold;
    background-color: #f0f9eb
  }
}
.el-scrollbar /deep/ {
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>
