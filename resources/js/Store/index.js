import Vuex from 'vuex'
import Auth from "./modules/Auth";
import Vue from "vue";

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        auth: Auth
    }
});

export default store;
