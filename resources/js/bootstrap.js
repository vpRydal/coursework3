import Vue from "vue";
import axios from "axios";
import router from "vue-router";
import lsWatcher from "vue-storage-watcher"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import jQuery from 'jquery'
import Popper from 'vue-popperjs'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.$ = jQuery;
global.Popper = Popper;


window._ = require('lodash');
Vue.use(router);

window.axios = require('axios');

Vue.prototype.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.withCredentials = true;


Vue.use(lsWatcher, { prefix: "allete_" });


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(PortalVue);
