<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black second-color" style="border-radius: 25px;">
          <div class="md" v-if="isLoaded">
            <Markdown :source="post.body" />
          </div>
          <div v-else>Loading...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { usePost } from '@/hooks/usePost'
import Markdown from 'vue3-markdown-it';
export default {
  components: {
    Markdown
  },
  setup(props) {
    const route = useRoute();
    const {post, isLoaded} = usePost(route.params.id);
    return {
      post,
      isLoaded,
    }
  },
}
</script>

<style scoped>
.md {
  text-align: left;
  padding: 2%;
}
</style>