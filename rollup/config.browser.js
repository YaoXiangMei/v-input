import base from './config.base'
import { terser } from 'rollup-plugin-terser'
const config = {
  ...base,
  ...{
    output: {
      file: 'dist/v-input-check.browser.min.js',
      format: 'iife',
      name: 'VInputCheck'
    }
  }
}
config.plugins.push(terser())
export default config
