import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'enbolivares-api',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: 'dist',
  },
})
