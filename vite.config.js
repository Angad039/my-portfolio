// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',  
  server: {
    // force file-watch polling (helps ensure rebuild on every save)
    watch: {
      usePolling: true,
    },
    // you can also tweak host/port here
    hmr: true,
  },
})
