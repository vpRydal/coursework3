import User from './User'

const state = {
};
const getters = {
    check(state, getter) {
        return !getter['user/isGuest']
    },
    user(state, getter) {
        return state.user
    }
};
const mutations = {
    setUser({state, commit}, user) {
        this.commit('auth/user/setUser', user);
    },
    logout() {
        delete this.axios.defaults.headers.common['Authorization'];
        this.commit('auth/user/userSet', {});
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
