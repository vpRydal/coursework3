<template>
    <main class="container mt-5">
        <div class="row mx-auto">

            <div class="col-8">
                <Product class="" v-for="product of products" :product="product" :key="product.slug"></Product>

            </div>
            <div class="col-4 my-4" >
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">Итого: <span>{{ count }}</span> товара на <span>{{ totalCost }}</span></h5>
                        <button class="btn btn-allete">Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
    import Product from './Product'
    export default {
        name: "Cart",
        data() {
            return {
            }
        },
        components: {
            Product
        },
        created() {
        },
        methods: {
        },
        computed: {
            totalCost() {
                return this.$store.getters['cart/totalCost']
            },
            products() {
                return this.$store.getters['cart/products']
            },
            count() {
                return this.$store.getters['cart/countProducts']
            },
        }
    }
</script>

<style scoped>

</style>
