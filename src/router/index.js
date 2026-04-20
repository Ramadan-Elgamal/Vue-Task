import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductDetailsView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/product/:id",
            name: "product-details",
            component: ProductDetailsView
        },
        { 
          path: "/cart",
          name: "cart",
          component: CartView
        }
    ]
});

export default router;
