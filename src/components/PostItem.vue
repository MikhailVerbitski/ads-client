<template>
  <div>
    <div>
      <p>Id: {{post.id}}</p>
      <p>{{post.content}}</p>
    </div>
    <div>
      <my-button @click="this.$emit('delete', this)">Delete</my-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>