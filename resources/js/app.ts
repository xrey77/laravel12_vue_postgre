import '../css/app.scss';
import { createRouter, createWebHistory } from 'vue-router';
import { createApp, h } from 'vue';
import AppLayout from './Layouts/AppLayout.vue';
import List from '@/pages/List.vue';
import Catalogs from '@/pages/Catalogs.vue';
import Search from '@/pages/Search.vue';
import Profile from '@/pages/Profile.vue';
import Home from '@/pages/Home.vue';
// import NotFound from '@/pages/NotFound.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: "/:pathMatch(.*)*",component: NotFound },
        { path: "/", name: "home", component: Home },
        { path: "/about",name: "about",component: About },
        { path: "/contact",name: "contact",component: Contact },
        { path: "/profile",name: "profile",component: Profile },
        { path: "/listproducts",name: "listproducts",component: List},
        { path: "/listcatalogs",name: "listcatalogs",component: Catalogs },
        { path: "/searchproduct",name: "searchproduct",component: Search },
    ]
});

createApp(AppLayout).use(router).mount('#app');
