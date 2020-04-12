import Vue from "vue";
import axios from "axios";
import router from "vue-router";

window._ = require('lodash');

Vue.use(router);

window.axios = require('axios');
Vue.prototype.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;


/*if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
/!*    window.axios.defaults.headers.common['Authorization'] = `Bearer ${user.api_token}`;*!/
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}*/
