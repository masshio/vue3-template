import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
// console.log(new URL('./src', import.meta.url)); // 'file:///D:/work/vue3-template/src'
console.log(fileURLToPath(new URL('./src', import.meta.url))); // D:\work\vue3-template\src

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/repo',
  plugins: [
    vue(),
    {
      ...legacy({
        targets: ['default']
      }),
      enforce: 'pre',
      apply: 'build'
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
