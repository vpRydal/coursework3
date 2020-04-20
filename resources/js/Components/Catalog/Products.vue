<template>
    <div class="my-2 d-flex flex-wrap float-left">
        <div v-for="_product of products" class="my-1 mx-auto mx-lg-2">
                <Product
                    :title="_product.title"
                    :cost="_product.cost"
                    :short-description="_product.short_description"
                    :img-path="_product.img_path"
                    :slug="_product.slug"
                ></Product>
        </div>
    </div>
</template>

<script>
    import Product from './Product'
    export default {
        name: "Products",
        components: {
            Product
        },
        data() {
            return {
                products: []
            }
        },
        props: [
            'categoryId'
        ],
        created() {
            axios.get(`/api/products/popular`)
                .then(response => response.data.products)
                .then(products => {
                    this.products = products
                });
        },
        watch: {
            async categoryId() {
                console.log(this.categoryId)
                this.products = (await axios.get(`/api/category/${this.categoryId}/products`)).data.products

            },
        },
        methods: {
            getProducts: function (category=null, limit=null) {
            }
        },
    }
</script>

<style scoped>

</style>
