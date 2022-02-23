<template>
  <div>
    <p>Likes</p>
    <div>
      <button @click="AddLike">Like</button>
      <button @click="AddDislike">Dislike</button>
    </div>
    <div>
      <div>Count of likes {{ likes }}</div>
      <div>Count of dislikes {{ dislike }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        likes: 0,
        dislike: 0
      }
    },
    methods: {
      AddLike() {
        this.likes += 1;
      },
      AddDislike() {
        this.dislike += 1;
      }
    }
  }
</script>

<style scoped>

</style>