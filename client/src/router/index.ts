import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router"

import Home from '../pages/Home.vue'
import NotHome from '../pages/NotHome.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/not-home',
        name: 'NotHome',
        component: NotHome
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router
