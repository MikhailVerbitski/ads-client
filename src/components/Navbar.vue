<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-margins">
    <div class="container-fluid">
			<router-link class="navbar-brand" to="/">Super site</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" @click="showDialog" aria-current="page" href="#">Create new Post!</a>
          </li>
        </ul>


        <GDialog v-model="dialogVisible">
          <PostCreate @create="createPost"/>
        </GDialog>

				<label class="switch">
					<input id="slider" @change="$store.commit('changeTheme')" type="checkbox">
					<span class="slider round"></span>
				</label>

        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        
        <ul class="navbar-nav mr-auto">
          <a class="nav-link dropdown-toggle user-action" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            <img alt="Avatar" class="avatar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
          </a>

          <ul v-if="isLoggedIn" class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/user_profile">Profile</router-link></li>
            <li><button class="dropdown-item" @click="logoutUser">Logout</button></li>
          </ul>

          <ul v-else class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <!-- <li><router-link class="dropdown-item" to="/sign_in">Login</router-link></li> -->
            <li><button class="dropdown-item" @click="dialogLoginVisible = true">Login</button></li>
            <GDialog v-model="dialogLoginVisible" transition="custom-from-bottom-transition" max-width="70%">
              <SingIn />
            </GDialog>

            <!-- <li><router-link class="dropdown-item" to="/sign_up">Registration</router-link></li> -->
            <li><button class="dropdown-item" @click="dialogRegistrationVisible = true">Registration</button></li>
            <GDialog v-model="dialogRegistrationVisible" transition="custom-from-bottom-transition" max-width="70%">
              <SignUp />
            </GDialog>
          </ul>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import "@/store/index.js";
import PostCreate from "@/posts/PostCreate";
import { mapActions, mapGetters } from "vuex";
import { GDialog } from 'gitart-vue-dialog'

import SingIn from "@/users/SignIn"
import SignUp from "@/users/SignUp"

export default {
	name: "Navbar",
  components: {
    PostCreate, GDialog, SingIn, SignUp
  },
  data() {
    return {
      dialogVisible: false,
      dialogLoginVisible: false,
      dialogRegistrationVisible: false,
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
	methods: {
    ...mapActions(["logoutUser"]),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    showDialog() {
      this.dialogVisible = true;
    },
	},
}
</script>

<style lang="scss">
.navbar-margins {
  margin-bottom: 2%;
}

.navbar img {
	border-radius: 50%;
	width: 36px;
	height: 36px;
	margin-right: 10px;
}
.navbar .dropdown-item i {
	font-size: 16px;
	min-width: 22px;
}
.navbar .dropdown-item .material-icons {
	font-size: 21px;
	line-height: 16px;
	vertical-align: middle;
	margin-top: -2px;
}
.navbar .navbar-nav .user-action {
	padding: 9px 15px;
	font-size: 15px;
}
@media (min-width: 1200px){
	.form-inline .input-group {
		width: 350px;
		margin-left: 30px;
	}
}
@media (max-width: 1199px){
	.navbar .navbar-nav > a > i {
		display: inline-block;			
		text-align: left;
		min-width: 30px;
		position: relative;
		top: 4px;
	}
	.navbar .navbar-collapse {
		border: none;
		box-shadow: none;
		padding: 0;
	}
	.navbar .navbar-form {
		border: none;			
		display: block;
		margin: 10px 0;
		padding: 0;
	}
	.navbar .navbar-nav {
		margin: 8px 0;
	}
	.navbar .navbar-toggle {
		margin-right: 0;
	}
	.input-group {
		width: 100%;
	}
}


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
	margin-right: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 40px;
  width: 40px;
  left: 0px;
  bottom: 4px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 0 0px 15px #2020203d;
  background: white url('https://i.ibb.co/FxzBYR9/night.png');
  background-repeat: no-repeat;
  background-position: center;
}
input:checked + .slider {
  background-color: #2196f3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
  background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
  background-repeat: no-repeat;
  background-position: center;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}


.custom-from-bottom-transition {
  &-enter-from {
    transform: translate(0, 100%);
    opacity: 0;
  }

  &-leave-to {
    transform: translate(0, -30%);
    opacity: 0;
  }
}
</style>