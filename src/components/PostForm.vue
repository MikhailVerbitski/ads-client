<template>
    <div>
      <h3>Create new post</h3>
      <form @submit.prevent>
        <input v-model="post.content" @input="post.content = $event.target.value" type="text" placeholder="Content"/>
        <my-button @click="createNewPost">Create</my-button>
      </form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          id: null,
          content: '',
        }
      }
    },
    methods: {
      createNewPost() {
        this.post.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
          id: null,
          content: '',
        }
      }
    }
  }
</script>

<style scoped>

</style>