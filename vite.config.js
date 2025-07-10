/**
 * Vite configuration for Mercy Maya's dev portfolio.
 * This config keeps things blazing‑fast while building
 * lightweight static assets that DreamHost can serve without a Node server.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Output to /dist ready for FTP upload
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})