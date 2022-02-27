import { createStore } from "vuex";
import sessionManager from "@/store/modules/session_manager";
import postManager from "@/store/modules/post_manager";

export default createStore({
  state: {
    theme: 'light',
  },
  getters: {},
  mutations: {
    changeTheme(state) {
      document.documentElement.className = state.theme = state.theme === 'light' ? 'dark' : 'light'
    }
  },
  actions: {},
  modules: {
    sessionManager,
    postManager,
  },
});