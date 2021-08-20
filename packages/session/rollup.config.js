import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

const extensions = ['.js', '.ts' ];

export default  {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundles/bundle.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/bundles/bundle.esm.min.js',
      format: 'esm',
      plugins: [ terser() ],
      sourcemap: true
    },
    {
      file: 'dist/bundles/bundle.umd.js',
      format: 'umd',
      name: '@enjine/session',
      sourcemap: true
    },
    {
      file: 'dist/bundles/bundle.umd.min.js',
      format: 'umd',
      name: '@enjine/session',
      plugins: [ terser() ],
      sourcemap: true
    }
  ],
  plugins: [
    // commonjs({ include: '/node_modules/**/*', extensions }),
    resolve({ extensions }),
    babel({ babelHelpers: 'bundled', include: ['src/**/*.ts'], extensions, exclude: './node_modules/**' })
  ]
}
