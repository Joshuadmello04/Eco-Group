// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import * as path from 'path' // 👈 1. Import 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: { // 👈 2. Add the resolve object
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 3. Define the '@' alias
    },
  },
})