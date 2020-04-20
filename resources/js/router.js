import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewNews from './Components/Index/ViewNews'
import Index from './Components/Index/Index'
import Catalog from './Components/Catalog/Index'
import ViewProduct from './Components/Catalog/ViewProduct'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', name: 'index', component: Index },
        { path: '/news/:slug', name: 'viewNews', component: ViewNews},
        { path: '/catalog', name: 'catalog', component: Catalog},
        { path: '/catalog/product/:slug', name: 'viewProduct', component: () => import ('./Components/Catalog/ViewProduct')},
        { path: '/cart', name: 'cart', component: () => import ('./Components/Cart/Index')},

    ],
    mode: 'history'
})
