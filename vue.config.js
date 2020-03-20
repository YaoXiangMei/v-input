const path = require('path')

module.exports = {
  lintOnSave: true,
  outputDir: './doc-dist',
  publicPath: './',
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, './src/main.js')
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.resolve(__dirname, './docs-src'))
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
  }
}
