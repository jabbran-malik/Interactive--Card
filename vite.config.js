import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite' // Make sure this matches your import

export default defineConfig({
  plugins: [react(), tailwind()]
})
