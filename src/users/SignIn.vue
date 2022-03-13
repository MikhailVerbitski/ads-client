<template>
  <div class="row justify-content-center second-color">
    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

      <form @submit="onLogin" class="mx-1 mx-md-4">

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="email" id="form3Example3c" class="form-control" v-model="loginEmail" />
            <label class="form-label" for="form3Example3c">Your Email</label>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div class="form-outline flex-fill mb-0">
            <input type="password" id="form3Example4c" class="form-control" v-model="loginPassword" />
            <label class="form-label" for="form3Example4c">Password</label>
          </div>
        </div>

        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <input type="submit" class="btn btn-primary btn-lg" value="Login" />
        </div>

      </form>

      <!-- <form @submit.prevent="onLogin" class="login-form">
          <input class="login-form-email" type="text" v-model="loginEmail" placeholder="Email" />
          <br />
          <input class="login-form-password" type="password" v-model="loginPassword" placeholder="Password" />
          <br />
          <input type="submit" value="Login" class="login-form-submit" />
      </form> -->

    </div>
    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

      <img src="ezgif-4-2fee17a04c-removebg-preview.png" class="img-fluid" alt="Sample image">

    </div>
  </div>
</template>

<script>
import "@/store/index.js";
import { mapActions } from "vuex";
export default {
  name: "SingIn",
  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },
  methods: {
    ...mapActions(["loginUser", "logoutUser"]),
    onLogin(event) {
      event.preventDefault();
      let data = {
        user: {
          email: this.loginEmail,
          password: this.loginPassword,
        },
      };
      this.loginUser(data);
      this.resetData();
      this.$router.push('/')
    },
    resetData() {
      this.signUpEmail = "";
      this.signUpPassword = "";
      this.loginEmail = "";
      this.loginPassword = "";
    },
  },
}
</script>
