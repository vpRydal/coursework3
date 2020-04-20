import Vuex from 'vuex'
import Vue from "vue";
import Auth from "./modules/Auth/Index";
import Cart from "./modules/Cart/Index";
import Window from "./modules/Window";

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        auth: Auth,
        cart: Cart,
        window: Window,
    }
});

export default store;
