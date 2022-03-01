import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './api'
// 引入富文本
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App)
app
  .use(router)
  .use(Antd)
  .use(VueAxios, axios)
  .use(VueMarkdownEditor)
app.config.globalProperties.$http = () => api
app.provide('$http', api)

app.mount('#app')
