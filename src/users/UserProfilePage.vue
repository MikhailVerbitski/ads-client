<template>
  <div class="container text-black second-color">
    <div class="row">
      <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img class="user_photo rounded-circle mt-5" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
            <span class="font-weight-bold">
              {{ this.user.first_name }}
            </span>
            <span class="text-black-50">
              {{ this.user.email }}
            </span>
            <span> </span>
          </div>
      </div>
      <div class="col-md-9 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
          </div>

          <div class="row mt-2">
              <div class="col-md-6"><label class="labels">Name</label><input v-model="user.first_name" type="text" class="form-control" placeholder="Enter first name"></div>
              <div class="col-md-6"><label class="labels">Surname</label><input v-model="user.second_name" type="text" class="form-control" placeholder="Enter second name"></div>
          </div>

          <div class="row mt-3">
            <div class="col-md-12"><label class="labels">Email</label><input v-model="user.email" type="email" class="form-control" placeholder="Enter email"></div>
          </div>

          <div class="row mt-3">
            <div class="col-md-12"><label class="labels">Mobile Number</label><input v-model="user.phone" type="text" class="form-control" placeholder="Enter phone number"></div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6"><label class="labels">Change password</label><input v-model="private_data.password" type="password" class="form-control" placeholder="Enter new password"></div>
            <div class="col-md-6"><label class="labels">Repeat New password</label><input v-model="private_data.password_confirmation" type="password" class="form-control" placeholder="Repeat new password"></div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6"><label class="labels">Address</label><input v-model="user.address" type="text" class="form-control" placeholder="Enter your address"></div>
            <div class="col-md-2"><label class="labels">Build</label><input v-model="user.build" type="text" class="form-control" placeholder="Build"></div>
            <div class="col-md-2"><label class="labels">Apartment</label><input v-model="user.apartment" type="text" class="form-control" placeholder="Apartment"></div>
            <div class="col-md-2"><label class="labels">Postcode</label><input v-model="user.post_code" type="text" class="form-control" placeholder="Postcode"></div>
          </div>

          <div class="row mt-3">
            <div class="col-md-6"><label class="labels">Country</label><input v-model="user.country" type="text" class="form-control" placeholder="Enter your country"></div>
            <div class="col-md-6"><label class="labels">City</label><input v-model="user.city" type="text" class="form-control" placeholder="Enter your city"></div>
          </div>

          <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="saveChanges">Save Profile</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/store/modules/session_manager";
import { mapGetters, mapActions } from "vuex";
export default {
	name: "UserProfilePage",
  data() {
    return {
      private_data: {
        password: '',
        password_confirmation: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      user: 'getUserAttrs',
    })
  },
  methods: {
    ...mapActions(["updateUserProfile"]),
    saveChanges() {
      const new_user_data = {...this.user, ...this.private_data};
      this.updateUserProfile(new_user_data);
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
.user_photo {
  width: 150px;
}
</style>