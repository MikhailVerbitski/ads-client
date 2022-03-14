import axios from "axios";

const BASE_URL = "http://localhost:3000";

const state = {
  auth_token: null,
  user: {
    id: null,
    first_name: null,
    second_name: null,
    email: null,
    phone: null,
    address: null,
    build: null,
    apartment: null,
    post_code: null,
    country: null,
    city: null,
    role: null,
  },
};
const getters = {
  getAuthToken(state) {
    return state.auth_token;
  },
  getUserEmail(state) {
    return state.user?.email;
  },
  getUserID(state) {
    return state.user?.id;
  },
  getUserRole(state) {
    return state.user?.role;
  },
  getUserAttrs(state) {
    return state.user;
  },
  isLoggedIn(state) {
    const loggedOut =
      state.auth_token == null || state.auth_token == JSON.stringify(null);
    return !loggedOut;
  },
};
const actions = {
  registerUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}/users`, payload)
        .then((response) => {
          commit("setUserInfo", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  loginUser({ commit }, payload) {
    new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}/users/sign_in`, payload)
        .then((response) => {
          commit("setUserInfo", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logoutUser({ commit }) {
    const config = {
      headers: {
        authorization: state.auth_token,
      },
    };
    new Promise((resolve, reject) => {
      axios
        .delete(`${BASE_URL}/users/sign_out`, config)
        .then(() => {
          commit("resetUserInfo");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  loginUserWithToken({ commit }, payload) {
    const config = {
      headers: {
        Authorization: payload.auth_token,
      },
    };
    new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}/api/v1/users/show`, config)
        .then((response) => {
          if (response.data.user) {
            commit("setUserInfoFromToken", response);
          } else {
            commit("resetUserInfo");
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateUserProfile({ commit, state }, new_user_data) {
    const config = {
      headers: {
        Authorization: state.auth_token,
      },
      user: new_user_data,
    };
    new Promise((resolve, reject) => {
      axios
        .put(`${BASE_URL}/api/v1/users/${state.user.id}`, config)
        .then((response) => {
          commit("setUserInfoFromToken", response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
const mutations = {
  setUserInfo(state, data) {
    state.user = data.data.user;
    state.auth_token = data.headers.authorization;
    axios.defaults.headers.common["Authorization"] = data.headers.authorization;
    localStorage.setItem("auth_token", data.headers.authorization);
  },
  setUserInfoFromToken(state, data) {
    state.user = data.data.user;
    state.auth_token = localStorage.getItem("auth_token");
    axios.defaults.headers.common["Authorization"] = localStorage.getItem("auth_token");
  },
  resetUserInfo(state) {
    Object.keys(state.user).forEach(k => state.user[k] = null);
    state.auth_token = null;
    localStorage.removeItem("auth_token");
    axios.defaults.headers.common["Authorization"] = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};