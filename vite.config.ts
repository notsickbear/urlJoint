import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({mode})  => {
  const {
    VITE_BASE
  } = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [vue()],
    base: VITE_BASE
  })
}
