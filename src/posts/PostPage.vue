<template>
  <div>
  </div>
</template>

<script>
  export default {
    props: {
    },
    methods: {
      getId() {
        console.log(this.$route.params.id)
      }
    },
    mounted() {
      this.getId()
    },
  }
</script>

<style scoped>
</style>