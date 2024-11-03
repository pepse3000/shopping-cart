import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from 'url';
import svgr from "vite-plugin-svgr";
import sass from 'sass';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@styles', replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) },
    ],
  },
  plugins: [react(), tsconfigPaths(), svgr({
    include: "**/*.svg?react",
      }
  )],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
