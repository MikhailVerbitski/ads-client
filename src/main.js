// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
// import components
import components from '@/components/UI'
// import directives
import directives from '@/directives';
// GDialog
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import { plugin as dialogPlugin } from 'gitart-vue-dialog'
// vue-markdown-editor
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';
VMdEditor.lang.use('en-US', enUS);

import { createApp } from 'vue'
import App from '@/App'
import store from "@/store"
import router from "@/router/router"

// Load JWT from Local Storage on Refresh.
let localAuthToken = localStorage.auth_token;
let cookieExists = localAuthToken !== "undefined" && localAuthToken !== null;
if (cookieExists) {
  const auth_token = localStorage.getItem("auth_token");
  const authTokenExists = auth_token !== "undefined" && auth_token !== null;
  if (authTokenExists) {
    store.dispatch("loginUserWithToken", { auth_token });
  }
}

VMdEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App).use(store).use(router).use(dialogPlugin).use(VMdEditor);
app.component('GDialog', GDialog)
components.forEach(component => app.component(component.name, component))
directives.forEach(directive => app.directive(directive.name, directive))
app.mount('#app')
