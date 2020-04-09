<template>
    <div class="my-2 d-flex flex-wrap float-left">
        <div v-for="_product of products" class="my-1 mx-auto mx-lg-2">
                <product
                    :title="_product.title"
                    :cost="_product.cost"
                    :short-description="_product.short_description"
                    :img-path="_product.img_path"
                    :slug="_product.slug"
                ></product>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import router from 'vue-router'
    import Product from "./Product";

    export default {
        name: "Products",
        data() {
            return {
                products: this.getProducts()
            }
        },
        computed: {
        },
        components: {
            product: Product
        },
        methods: {
            getProducts: function (category=null, limit=null) {
                let uri;
                if(category == null)
                    uri = `/api/products`;
                else
                    uri = `/api/products/${category}`;
                console.log(uri)

                axios.get(uri)
                    .then(response => {
                        this.products = response.data.data
                    })
            }
        },
        watch: {
            category: function () {
                this.products = this.getProducts(this.category)
            }
        },
        props: ['urlProductGive', 'category']
    }
</script>

<style scoped>

</style>
