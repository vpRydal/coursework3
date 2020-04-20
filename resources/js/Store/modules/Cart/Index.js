import Vue from "vue";

const state = {
    products: [],
    totalCost: 0
};

let productFromStorage = () => Vue.$ls.get('productsInCart', []);

const getters = {
    products: state => state.products,
    countProducts: state => state.products.length,
    productBySlug: state => slug => {
        let product = state.products.filter(product => product.slug === slug)

        if (product.length === 0) return null;
        else return product[0];
    },
    productCountOnCart: (state, getters) => slug => getters.productBySlug(slug).countInCart,
    productTotalCost: (state, getters) => slug => getters.productBySlug(slug).totalCost,
    totalCost: state => state.totalCost,
    productExist: (state, getters) => product => getters.productBySlug(product.slug) !== null,
    isEmpty: (state, getters) => getters.countProducts === 0 && productFromStorage().length === 0,
    productPrepare: () => product => {
        product.countInCart = 1;
        product.totalCost = Number(product.cost) * Number(product.countInCart);

        return product
    },
};

const mutations = {
    addProduct(state, product) {
        state.products.push(product);
        let products = productFromStorage();
        products.push(product.slug);

        Vue.$ls.set('productsInCart', products);

        this.dispatch('cart/recountTotalCost')
    },
    setProducts(state, products) {
        state.products = products;

        this.dispatch('cart/recountTotalCost')
    }
};

const actions = {
    addProduct({state, getters, commit}, product) {
        if (!getters.productExist(product))
            commit('addProduct', getters.productPrepare(product))
    },
    recountTotalCost({state, getters}) {
        let totalCost = 0;

        for (let product of getters.products) {
            totalCost += product.totalCost
        }

        state.totalCost = totalCost;
    },
    productSetCount({state, getters, commit}, {slug, count}) {
        let product = getters.productBySlug(slug);
        product.countInCart = count;
        product.totalCost = product.cost * count;

        this.dispatch('cart/recountTotalCost')
    },
    productDelete({state, getters, commit}, slug) {
        console.log(slug)
        let products = getters.products.filter((el) => {
            return el.slug !== slug
        });

        commit('setProducts', products);

        let productsLS = productFromStorage().filter((el) => {
            return el !== slug
        });


        Vue.$ls.set('productsInCart', productsLS);

    },
    async init({state, getters, commit}) {
        if (getters.isEmpty)
            return;

        let products = (await axios.get('/api/products', {params: {
                fieldName: 'slug',
                byFields: productFromStorage(),
                selectFields: ['slug', 'cost', 'title', 'short_description', 'img_path', 'count']
            }})).data.products;

        let preparedProducts = [];
        for (let product of products) {
            preparedProducts.push(getters.productPrepare(product));
        }
        commit('setProducts', preparedProducts)
    }
};


export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    modules: {
    }
}
