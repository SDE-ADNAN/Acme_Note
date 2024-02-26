import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: {
      // Add any custom aliases here if needed
      // For example:
      '@components': '/src/components'
    }
  }
})
