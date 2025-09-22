import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server:{
    cors:{
      origin:'http://127.0.0.1:8000'
    },
    proxy:{
      '/api':{
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
