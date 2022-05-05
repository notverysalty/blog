import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// markdown
import VueMarkdownEditor from "@kangc/v-md-editor";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";

// axios
import axios from "axios";
import VueAxios from "vue-axios";
import api from "./api";
import randomColor from 'randomcolor'

import Prism from "prismjs";

import * as ElementPlusIconsVue from '@element-plus/icons-vue'



VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App);

app
  .use(ElementPlus)
  .use(router)
  .use(VueMarkdownEditor)
  .use(VueAxios, axios);
app.config.globalProperties.$http = () => api
app.config.globalProperties.randomColor = () => randomColor
app.provide("$http", api)
app.provide("randomColor", randomColor)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app")
