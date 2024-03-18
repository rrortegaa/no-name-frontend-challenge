import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        question2: resolve(__dirname, 'question2.html'),
        question3: resolve(__dirname, 'question3.html'),
        question4: resolve(__dirname, 'question4.html'),
        question4cv: resolve(__dirname, 'question4cv.html')

      },
    },
  },
})
