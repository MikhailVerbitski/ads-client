<template>
  <div>
    <my-select v-model="selectedSort" :options="sortOption">

    </my-select>

    <my-button @click="showDialog">Create Post</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list v-if="isPostsLoaded" :posts="posts" @delete="deletePost"/>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
  import axios from "axios";
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  export default {
    components: {
      PostList, PostForm
    },
    data() {
      return {
        posts: [],
        selectedSort: "",
        sortOption: [
          { value: 'title', name: "Title" },
          { value: 'id', name: "ID" },
        ],
        dialogVisible: false,
        isPostsLoaded: false,
      }
    },
    methods: {
      createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
      },
      deletePost(post) {
        this.posts = this.posts.filter(p => p.id != post.id);
      },
      showDialog() {
        this.dialogVisible = true;
      },
    },
    async mounted() {
      const response = await axios.get('http://localhost:3000/api/v1/posts');
      this.posts = response.data;
      this.isPostsLoaded = true;
    },
    // computed: {
    //   sortedPosts() {
    //     return [...this.posts].sort((a, b) => a[this.selectedSort]?.localeCompare(b[this.selectedSort]))
    //   },
    // },
    watch: {
      selectedSort(newValue) {
        // this.posts.sort((a, b) => a[this.selectedSort]?.toString().localeCompare(b[this.selectedSort].toString()));
        this.posts.sort((a,b)=> (a[this.selectedSort] > b[this.selectedSort] ? 1 : -1))
        console.log(newValue);
        console.log(this.posts.sort((a,b)=> (a[this.selectedSort] > b[this.selectedSort] ? 1 : -1)));
      },
    },
  }
</script>

<style scoped>
</style>