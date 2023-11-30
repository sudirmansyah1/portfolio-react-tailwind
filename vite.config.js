import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://sudirmansyah.id/',
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.fbx'],
})
