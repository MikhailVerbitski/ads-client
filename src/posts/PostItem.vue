<template>
  <div>
    <div class="container_img shadow card-overlay rounded">
      <img v-bind:src="findImage()" />
      <a @click="$router.push(`/post/${post.id}`)">
        <span class="centered overlay-text">
          {{ findTitle() }}
        </span>
      </a>
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
    findImage() {
      const arr = this.post.body.match(/http[^"\s\)]+/g).filter(u => !u.match(/github/))
      const src = arr && arr[0]
      return src
    },
    findTitle() {
      const arr = /[#]+\s([^\n]+)/.exec(this.post.body)
      const title = arr && arr[1]
      return title
    }
  },
}
</script>

<style scoped>
.card-overlay {
  background: linear-gradient(
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 1)
  );
}
div img {
  width: 100%;
  opacity: 0.6;
}

.container_img {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>