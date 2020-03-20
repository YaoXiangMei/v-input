import base from './config.base'
const config = {
  ...base,
  ...{
    output: {
      file: 'dist/v-input-check.umd.js',
      format: 'umd',
      name: 'VInputCheck'
    }
  }
}
export default config
