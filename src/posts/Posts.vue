<template>
  <div>
    <post-list v-if="isPostListLoaded" :posts="getPostList"/>
    <div v-else>Loading...</div>
    <div v-intersection="loadPosts" class="scroll-observer"></div>
  </div>
</template>

<script>
import "@/store/index.js";
import { mapActions, mapGetters } from "vuex";
import PostForm from "@/posts/PostForm.vue";
import PostList from "@/posts/PostList.vue";
export default {
  components: {
    PostList, PostForm
  },
  computed: {
    ...mapGetters(["getPostList", "isPostListLoaded"]),
  },
  methods: {
    ...mapActions(["loadPosts"]),
    deletePost(post) {
      this.posts = this.posts.filter(p => p.id != post.id);
    },
  },
}
</script>

<style scoped>
</style>