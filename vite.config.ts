import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import { visualizer } from "rollup-plugin-visualizer";
import myPlugin from './src/plugins/visualizer'
import socket from './src/plugins/websocket'
// console.log(new URL('./src', import.meta.url)); // 'file:///D:/work/vue3-template/src'
console.log(fileURLToPath(new URL('./src', import.meta.url))); // D:\work\vue3-template\src

// https://vitejs.dev/config/
export default defineConfig((config) => {
  console.log("🚀 ~ file: vite.config.ts:11 ~ defineConfig ~ command, mode:", config)
  return {
    base: '/repo',
    publicDir: 'public',
    plugins: [
      vue(),
      {
        ...legacy({
          targets: ['default']
        }),
        enforce: 'pre', // https://cn.vitejs.dev/guide/using-plugins.html#enforcing-plugin-ordering
        apply: 'build' // https://cn.vitejs.dev/guide/using-plugins.html#conditional-application
      },
      myPlugin(),
      {
        ...socket(),
        apply: 'serve'
      },
      visualizer() as PluginOption
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      outDir: 'myDist',
      assetsDir: 'admin',
    },
    server: {
      host: 'localhost',
      port: 5173,
      open: true,
      cors: true,
    }
  }
})
