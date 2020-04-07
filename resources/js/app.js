import Vue from 'vue'
import router from './router'

require('./bootstrap');

const app = new Vue({
    el: 'App',
    components: {
    },
    router: router
});
