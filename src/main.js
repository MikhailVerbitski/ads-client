import { createApp } from 'vue'
import store from "./store";

import components from '@/components/UI'
import App from './App'

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

const app = createApp(App).use(store)
components.forEach(component => app.component(component.name, component))
app.mount('#app')
