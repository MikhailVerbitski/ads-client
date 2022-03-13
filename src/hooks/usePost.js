import axios from 'axios'
import { ref, onMounted } from 'vue'

export function usePost(postId) {
  const post = ref({});
  const isLoaded = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/posts/${postId}`);
      post.value = response.data;
    } catch(e) {
      console.log("can't load post");
    } finally {
      isLoaded.value = true;
    }
  }
  onMounted(() => { fetching() })
  return {
    post, isLoaded
  }
}