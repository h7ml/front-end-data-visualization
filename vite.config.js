import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: { // https://cn.vitejs.dev/config/#server-options
    host: '0.0.0.0'
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }] // https://cn.vitejs.dev/config/#resolve-alias
  },
  build: {
    chunkSizeWarningLimit: 5000
  }
})