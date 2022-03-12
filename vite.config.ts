import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default ({mode})  => {
  const {
    VITE_BASE
  } = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [
      vue(),
      createStyleImportPlugin({
        // 引入 vant3
        resolves: [VantResolve()],
      })
    ],
    base: VITE_BASE
  })
}
