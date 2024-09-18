import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue';
import Cookies from '../pages/Cookies.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/cookies', component: Cookies },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})