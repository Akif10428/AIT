import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://akif10428.github.io/AIT/
export default defineConfig({
  plugins: [react()],
  base: '/AIT/',
  // Public HTML samples (e.g. /samples/startup/) must win over SPA fallback.
  appType: 'mpa',
})
