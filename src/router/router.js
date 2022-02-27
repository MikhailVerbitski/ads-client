import {createRouter, createWebHistory} from "vue-router";
import Posts from '@/posts/Posts'
import PostPage from '@/posts/PostPage'
import SessionManager from "@/components/SessionManager";
import SignUp from "@/users/SignUp";
import SignIn from "@/users/SignIn";
import UserProfile from "@/users/UserProfile";

const routes = [
  {
    path: '/',
    component: Posts
  },
  {
    path: '/sign_in',
    component: SignIn
  },
  {
    path: '/sign_up',
    component: SignUp
  },
  {
    path: '/post/:id',
    component: PostPage
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