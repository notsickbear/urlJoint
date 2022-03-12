import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { Notify } from 'vant';

const app = createApp(App)
app.use(createPinia())
app.use(Notify)
app.mount('#app')
