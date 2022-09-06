import { esbuildFlowPlugin, flowPlugin } from '@bunchtogether/vite-plugin-flow';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import envCompatible from 'vite-plugin-env-compatible';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: ''
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ],
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()]
    }
  },
  plugins: [
    flowPlugin(),
    viteCommonjs(),
    envCompatible(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'quill-blot-formatter-vite'
        }
      }
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'quill-blot-formatter-vite',
      // the proper extensions will be added
      fileName: 'quill-blot-formatter-vite'
    },
  }
})
