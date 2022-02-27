<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <SignUp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from "@/users/SignUp"
export default {
	name: "SignUpPage",
  components: {
    SignUp
  },
}
</script>
