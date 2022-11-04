import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router"

import Home from '../pages/Home.vue'
import NotHome from '../pages/NotHome.vue'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import Auth from '../pages/auth/Auth.vue'
import App from '../pages/app/AppLayout.vue'
import Friend from '../pages/app/Friend.vue'
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
    {
        path: '/app',
        name: 'App',
        component: App,
        children: [
            {
                path: '',
                name: 'Friend',
                component: Friend,
            },

        ]
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router
