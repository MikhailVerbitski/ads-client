import axios from "axios";

const BASE_URL = "http://localhost:3000";

const state = {
  post_list: null,
  dialog_create_post_showed: false,
  post_list_request_params: {
    page: 1,
    count: 200,
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
  loadPosts({ commit, getters }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/api/v1/posts`, {
            params: getters.getPostListRequestParams,
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
  createNewPost({ commit }, post) {
    new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}/api/v1/posts`, post)
        .then((response) => {
          dispatch('loadPosts')
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
    state.post_list = data.data.records;
    state.post_list_request_params.page += 1;
  },
  switchDialogCreatePost(state, new_state) {
    state.dialog_create_post_showed = new_state;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};