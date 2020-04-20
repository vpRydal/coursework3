import Fio from './Fio'

const state = {
    login: null,
    email: null,
    role: null,
};

const getters = {
    login: state => state.login,
    email: state => state.email,
    role: state => state.role,
    isAdmin: state => state.role === 'admin',
    isEmpty: (state, getters) => state.login === null && state.email === null && getters['fio/isEmpty'],
    fio: state => state.fio,
};

const mutations = {
    setUser(state, {login, email, role, name, second_name, patronymic}) {
        state.login = login;
        state.email = email;
        state.role = role.name;

        this.commit('auth/user/fio/setFio', {name: name, second_name: second_name, patronymic: patronymic});
    },
    empty(state) {
        state.login = null;
        state.email = null;
        state.role = null;

        this.commit('auth/user/fio/empty');
    }

};


export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    modules: {
        fio: Fio
    }
}
