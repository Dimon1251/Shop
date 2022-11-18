
import { createRouter, createWebHashHistory } from 'vue-router';
import Cart from "./pages/Cart.vue";
import ProductPage from "./pages/ProductPage.vue";
import MainPage from "./pages/MainPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/cart', component: Cart, name: 'cart', props: true },
        { path: '/product', component: ProductPage },
        { path: '/', component: MainPage },
        { path: '/product/:id', name: 'productProfile', component: ProductPage, props: true },
    ]

})
