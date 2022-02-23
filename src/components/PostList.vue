<template>
  <div>
    <div v-if="posts.length > 0">
      <post-item class="post" :post="post" :key="post.id" v-for="post in posts" @delete="this.$emit('delete', post)"/>
    </div>
    <h2 v-else>
      There are no posts
    </h2>
  </div>
</template>

<script>
  import PostItem from "@/components/PostItem.vue"
  export default {
    components: {
      PostItem
    },
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>