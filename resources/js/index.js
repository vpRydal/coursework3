import Vue from "vue";
import Store from './Store/index'
import Header from './Components/Header'
import router from './router'
import Layout from './Components/Layout'

require('./bootstrap');

const header = new Vue({
    el: '#header',
    render: h => h(Header),
    router,
    store: Store
});
const content = new Vue({
    el: '#index',
    render: h => h(Layout),
    router,
    store: Store
});
