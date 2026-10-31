import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 모든 .vue / .scss 파일에서 변수, 믹스인을 import 없이 사용
        additionalData: `
          @use '@/assets/styles/variables' as *;
          @use '@/assets/styles/mixins' as *;
        `,
      },
    },
  },
})
