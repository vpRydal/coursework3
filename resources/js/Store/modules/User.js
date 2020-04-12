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
    isGuest: (state, getters ) => state.login === null && state.email === null && getters['fio/isEmpty'],
    fio: state => state.fio,
};

const mutations = {
    setUser(state, {login, email, role, name, second_name, patronymic}) {
        state.login = login;
        state.email = email;
        state.role = role.name;

        this.commit('auth/user/fio/setFio', {name:name, second_name:second_name, patronymic:patronymic});
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
