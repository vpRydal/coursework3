import User from './User';
import Vue from "vue";

const state = {
    logged: null
};
const getters = {
    isLogged(state, getter) {
        return state.logged;

    },
    user(state, getter) {
        return state.user
    }
};

const mutations = {
    login(state, user) {
        this.commit('auth/user/setUser', user);
        state.logged = true;
        Vue.$ls.set('isLoggedIn', true);
    },
    logout(state) {
        this.commit('auth/user/empty');
        state.logged = false;
        Vue.$ls.set('isLoggedIn', false);
    },
    init(state) {
        state.logged = Vue.$ls.get('isLoggedIn', false);
    }
};

export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    modules: {
        user: User
    }
}
