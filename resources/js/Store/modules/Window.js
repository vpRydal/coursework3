import {bus} from '../../Bus.js'

export let ES = 0;
export let SM = 576;
export let MD = 768;
export let LG = 992;
export let XL = 1200;

const state = {
    width: null,
    height: null,
};


const getters = {
    height: state => state.height,
    width: state => state.width,
    size: state => {
        let width = state.width;

        if (width > XL)
            return XL;
        else if (width > LG)
            return LG;
        else if (width > MD)
            return MD;
        else if (width > SM)
            return SM;
        else if (width > ES)
            return ES;
    }
};

const mutations = {
    setWidth(state, width) {
        state.width = width;
    },
    setHeight(state, height) {
        state.height = height;
    },
};

let updateSize = () => {
    bus.$emit('WidowResized', window.innerWidth);
    $store.dispatch('window/setWidth', window.innerWidth);
    $store.dispatch('window/setHeight', window.innerHeight);
};

const actions = {
    init() {
        window.addEventListener('resize', updateSize);
        updateSize();
    },
    setWidth({state, commit}, width) {
        commit('setWidth', width)
    },
    setHeight({state, commit}, height) {
        commit('setHeight', height)
    },
};


export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
}
