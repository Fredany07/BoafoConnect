import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // ✅ Ensures dist stays inside the Frontend folder
  },
  
})
