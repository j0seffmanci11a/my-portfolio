import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "j0seffmanci11a/my-portfolio/", // 👈 important!
  plugins: [react()],
})
