import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue';
import Cookies from '../pages/Cookies.vue';
import News from '../pages/News.vue';
import NewsSolo from '../pages/NewsSolo.vue';
import FAQ from '../pages/FAQ.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/cookies', component: Cookies },
    { path: '/news', component: News },
    { path: '/news-solo/:id', component: NewsSolo },
    { path: '/faq', component: FAQ }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})