import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173,
    strictPort: false,
    allowedHosts: 'all'
  },
  server: {
    host: true,
    port: 5173
  }
})
