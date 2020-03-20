import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  input: 'src/lib/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx', 'vue']
    }),
    commonjs(),
    json()
  ]
}
