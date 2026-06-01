import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 讓所有跨域 axios 請求都帶上 cookie（JSESSIONID），否則後端 Spring Security 認不出 session
window.axios.defaults.withCredentials = true

createApp(App).use(store).use(router).mount('#app')