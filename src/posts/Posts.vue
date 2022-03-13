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
import PostList from "@/posts/PostList.vue";
export default {
  components: {
    PostList
  },
  computed: {
    ...mapGetters(["getPostList", "isPostListLoaded"]),
  },
  methods: {
    ...mapActions(["loadPosts"]),
  },
  created() {
    this.loadPosts();
  },
}
</script>

<style scoped>
</style>