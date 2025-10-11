import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import axios from 'axios'
import request from './util/request'

const pinia = createPinia()

const app=createApp(App)
app.config.globalProperties.$http=axios
app.provide('$axios',request)
app.use(router)
app.use(pinia)
app.use(MotionPlugin)
app.mount('#app')
