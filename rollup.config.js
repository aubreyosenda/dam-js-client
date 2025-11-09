import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'named'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'DAMClient',
      exports: 'named'
    }
  ],
  plugins: [
    resolve({
      browser: true
    }),
    commonjs(),
    terser.terser()
  ]
};