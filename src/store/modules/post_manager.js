import axios from "axios";

const BASE_URL = "http://localhost:3000/";

const state = {
  post_list: null,
  dialog_create_post_showed: false,
  post_list_request_params: {
    page: 1,
    count: 10,
  },
};
const getters = {
  getPostList(state) {
    return state.post_list || [];
  },
  getPostListRequestParams(state) {
    return state.post_list_request_params;
  },
  isDialogCreatePostShowed(state) {
    return state.dialog_create_post_showed;
  },
  isPostListLoaded(state) {
    return state.post_list && state.post_list.length > 0
  }
};
const actions = {
  loadPosts({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/api/v1/posts`, {
            params: this.getPostListRequestParams,
            headers: {
              Authorization: localStorage.getItem("auth_token"),
            },
          }
        )
        .then((response) => {
          commit("setPostsInfo", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
const mutations = {
  setPostsInfo(state, data) {
    state.post_list = data.data;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};