import Vue from "vue";
import Store from './Store/index'
import Header from './Components/Header'

require('./bootstrap');

new Vue({
    el: '#header',
    render: h => h(Header),
    created() {
    },
    components: {
    },
    store: Store
});
