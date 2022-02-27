<template>
  <div class="wrapper">
    <post-item class="shadow card-overlay rounded" :post="post" :key="post.id" v-for="post in posts"/>
  </div>
</template>

<script>
  import PostItem from "@/posts/PostItem.vue"
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
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  grid-auto-rows: 240px;
  padding: 1em;
}
.wrapper > div {
  position: relative;
  overflow: hidden;
}
.wrapper div img {
  width: 100%;
  opacity: 0.4;
}
.wrapper div img, .overlay-text {
  position: absolute;
}

.card-overlay {
  background: linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 1)
  );
}
</style>