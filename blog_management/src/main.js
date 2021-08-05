import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './api'

const app = createApp(App).use(router)
app.use(Antd)
app.use(VueAxios, axios)
app.config.globalProperties.$http = () => api
app.provide('$http', api)

app.mount('#app')
