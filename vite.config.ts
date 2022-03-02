import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({mode})  => {
  const {
    VITE_BASE
  } = loadEnv(mode, process.cwd())
  return defineConfig({
    // 端口号(默认3000)
    port: 3001,
    // 是否自动打开浏览器(默认false)
    open: true,
    plugins: [vue()],
    base: VITE_BASE
  })
}
