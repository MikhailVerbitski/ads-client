<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <SignIn />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from "@/users/SignIn"
export default {
	name: "SignInPage",
  components: {
    SignIn
  },
}
</script>
