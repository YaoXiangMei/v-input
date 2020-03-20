import base from './config.base'
const config = {
  ...base,
  ...{
    output: {
      file: 'dist/v-input-check.esm.js',
      format: 'cjs',
      name: 'VInputCheck'
    }
  }
}
export default config
