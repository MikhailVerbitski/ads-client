<template>
  <div>
    <h3>Create new post</h3>
    <form @submit.prevent>
      <v-md-editor v-model="post.body" height="400px"></v-md-editor>
      <my-button @click="createNewPostWrapper">Create</my-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'PostCreate',
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
      this.createNewPost(this.post);
      this.$router.push('/');
      this.$emit('submit');
    }
  }
}
</script>

<style scoped>
</style>