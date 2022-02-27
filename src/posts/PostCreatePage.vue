<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <PostCreate />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCreate from "@/posts/PostCreate"
import { mapActions } from "vuex";
export default {
  name: 'PostCreatePage',
  components: {
    PostCreate
  },
  data() {
    return {
      post: {
        body: '',
      }
    }
  },
  methods: {
    ...mapActions(["createNewPost"]),
    createNewPostWrapper() {
      this.createNewPost(this.post)
    }
  }
}
</script>

<style scoped>
</style>