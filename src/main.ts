import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element-plus'
import './assets/css/global.css'
import 'element-plus/lib/theme-chalk/display.css'
import axios from './api/index'
import store from './store/index'

const app = createApp(App)

// 全局挂载api
app.config.globalProperties.$http = axios

installElementPlus(app)
app.use(router).use(store).mount('#app')
