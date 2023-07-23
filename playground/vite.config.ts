import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import libAssets from '../src/'

export default defineConfig({
  build: {
    lib: {
      name: 'main',
      entry: './src/main.ts',
      fileName: 'main',
      formats: ['es'],
    },
    minify: false,
    rollupOptions: {
      external: ['vue'],
    },
  },
  plugins: [
    vue(),
    Inspect(),
    libAssets({
      name: '[name].[contenthash:8].[ext]',
    }),
  ],
})
