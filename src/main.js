import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router.js';
import Vuex from "vuex";

const store = new Vuex.Store({


    state: {
        cart: JSON.parse(localStorage.getItem('product')) || []

    },


    mutations: {
        toCart (state, list) {
            let arr = JSON.parse(localStorage.getItem('product')) || [];
            arr.push(list);
            state.cart = arr;
            localStorage.setItem('product', JSON.stringify(arr));
/*
            localStorage.clear();
*/
        },

        DELETE_POST(state, product) {
            state.cart.splice(product.productId, 1);
            localStorage.setItem('product', JSON.stringify(state.cart));
        }
    },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

