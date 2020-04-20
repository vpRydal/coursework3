import Vue from "vue";
import router from './router'
import store from './Store/index'
import {extend, localize, ValidationObserver, ValidationProvider} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';


require('./bootstrap');

Vue.component('Header', () => import('./Components/Header'));
Vue.component('Layout', () => import('./Components/Layout'));

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

localize({
    ru: {
        messages: {
            required: 'Это поле пустое',
            min: 'Это поле короче чем {length} символов',
            max: 'Это поле длинее чем {length} символов',
            email: 'Это поле не является email-ом',
            confirmed: 'Поле не совпадает',
            unique: 'Уже используется',
        }
    }
});

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

window.$store = store;
$store.dispatch('window/init');

const unique = {
    message:  `Уже используется`,
    validate(value, params) {
        if(value) {
            return axios
                .get(`/api/${params[0]}/unique`,
                    {
                        params: {
                            field: params[1],
                            value: value
                        }
                    }).
                then(({data:{result}}) => {
                    return result
                })
        } else {
            return false;
        }
    }
};

extend('unique', unique);

localize('ru');

Vue.directive('ucFirst', function (el) {
    let value = el.value;
    if (value !== '')
        el.value = value[0].toUpperCase() + value.slice(1);
    console.log(el.value)

});

const header = new Vue({
    el: '#header',
    render: h => h(Vue.component('Header')),
    router,
    store,
    components: {}
});
const content = new Vue({
    el: '#index',
    render: h => h(Vue.component('Layout')),
    router,
    store,
});
