import {createRouter, createWebHistory} from "vue-router";
import Posts from '@/posts/Posts'
import PostPage from '@/posts/PostPage'
import PostCreatePage from '@/posts/PostCreatePage'
import SessionManager from "@/components/SessionManager";
import SignUpPage from "@/users/SignUpPage";
import SignInPage from "@/users/SignInPage";
import UserProfile from "@/users/UserProfile";

const routes = [
  {
    path: '/',
    component: Posts
  },
  {
    path: '/sign_in',
    component: SignInPage
  },
  {
    path: '/sign_up',
    component: SignUpPage
  },
  {
    path: '/post/:id',
    component: PostPage
  },
  {
    path: '/newPost',
    component: PostCreatePage
  },
  {
    path: '/SessionManager',
    component: SessionManager
  },
  {
    path: '/user_profile',
    component: UserProfile
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;