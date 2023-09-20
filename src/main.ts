import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log("🚀 ~ file: main.ts:10 ~ app:", app)

app.use(createPinia())
app.use(router)

app.mount('#app')
