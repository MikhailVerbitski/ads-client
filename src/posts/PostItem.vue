<template>
  <div>
    <div>
      <!-- <p>Id: {{post.id}}</p> -->
      <img />
      <a @click="$router.push(`/posts/${post.id}`)">
        <span class="overlay-text">{{post.body}}</span>
      </a>
    </div>
    <!-- <div>
      <my-button @click="this.$emit('delete', this)">Delete</my-button>
    </div> -->
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
.overlay-text {
  padding: 140px 10px;
  text-shadow: 0 4px 8px black;
  font-size: 1.3em;
  line-height: 30px;
}
.overlay-text * {
  color: white !important;
}
</style>