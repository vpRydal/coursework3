let getters = {
    name: state => state.name,
    secondName: state => state.secondName,
    patronymic: state => state.patronymic,
    getFullFio: state => state.fullFio,
    getShortFio: state => state.shortFio,
    isEmpty: state => state.name == null && state.secondName == null && state.patronymic == null,
};
let state = {
    name: null,
    secondName: null,
    patronymic: null,
    shortFio: null,
    fullFio: null,
};
let mutations = {
    setFio(state, {name, second_name, patronymic}) {
        if (name)
            state.name = name;
        if(second_name)
            state.secondName = second_name;
        if(patronymic)
            state.patronymic = patronymic;
        if (name && second_name && patronymic) {
            state.shortFio = `${state.secondName} ${state.name[0]}. ${state.patronymic[0]}.`;
            state.fullFio = `${state.secondName} ${state.name} ${state.patronymic}`;
        }
    }
};


export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    modules: {
    }
}
