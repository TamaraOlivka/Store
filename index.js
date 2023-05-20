import { createRouter , createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import Info from '../views/Info.vue'
import post1 from '../views/post1.vue'
import post2 from '../views/post2.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/info',
        component: Info
    },
    {
        path: '/post1',
        component: post1
    },
    {
        path: '/post2',
        component: post2
    }
]

const router = createRouter({
    'history' : createWebHistory(),
    routes,
    'linkActiveClass': 'font-bold'
})

export default router