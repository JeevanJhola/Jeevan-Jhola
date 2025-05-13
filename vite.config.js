import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Jeevan-Jhola/',  // IMPORTANT for GitHub Pages
  plugins: [react()],
})
