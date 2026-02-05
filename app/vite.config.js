import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Deshabilita source maps en build
    minify: 'terser', // Minifica el código
    terserOptions: {
      compress: {
        drop_console: true, // Elimina console.log en producción
      },
    },
  },
})
