import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewNews from './Components/Index/ViewNews'
import Index from './Components/Index/Index'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', name: 'index', component: Index },
        { path: '/news/:slug', name: 'news', component: ViewNews},

    ],
    mode: 'history'
})
