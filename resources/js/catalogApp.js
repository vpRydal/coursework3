import Vue from 'vue'
import router from './router'
import Products from './Components/Catalog/Products.vue'

export default new Vue({
    el: '#Catalog',
    router: router,
    components: {
        products: Products
    },
    data: {
        category: 'asd'
    },
    methods: {

    }
});

