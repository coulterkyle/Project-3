import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: process.env.VITE_ROOT_URL,
        secure: false,
        changeOrigin: true
      }
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  }
})
