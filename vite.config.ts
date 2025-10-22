import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/Gideon/' : '/';
  return {
    base: base,
    plugins: [react()],
    build: {
      outDir: 'docs'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      host: true
    }
  }
});
