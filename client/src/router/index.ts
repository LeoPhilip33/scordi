import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router"

import Home from '../pages/Home.vue'
import NotHome from '../pages/NotHome.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import Auth from '../pages/auth/Auth.vue'
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
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
        children: [
            {
                path: '',
                name: 'Login',
                component: Login,
            },
            {
                path: 'register',
                name: 'Register',
                component: Register,
            },
        ]
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router
