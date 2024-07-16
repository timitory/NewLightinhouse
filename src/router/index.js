import {createRouter,createWebHistory } from "vue-router";
import AllProduct from "../views/AllProduct.vue";
import Homepage from "../views/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: Homepage,
        },
        {
            path:'/allproduct',
            name:'allproduct',
            component: AllProduct,
        }

    ]
})

export default router