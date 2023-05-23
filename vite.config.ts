import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { inspectorServer } from 'react-dev-inspector/plugins/vite'

const publicDir = path.join(__dirname, 'public')
const srcDir = path.join(__dirname, 'src')
const rendererDir = path.join(srcDir, 'renderer')

// https://vitejs.dev/config/
export default defineConfig((env) => {
  console.log('vite run env:', env)

  return {
    root: rendererDir,
    publicDir: publicDir,
    resolve: {
      alias: {
        '@': srcDir,
      },
    },
    plugins: [
      react(),
      /** 用于点击跳转源码 */
      inspectorServer(),
    ],
    clearScreen: false,
  }
})
