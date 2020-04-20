<template>
    <div class="container d-flex flex-column flex-lg-row my-5">
        <aside id="catalog" class="float-left" style="min-width: 250px">
            <Catalog
                @categorySelected="categorySelected"
            ></Catalog>
        </aside>
        <main id="products" class="">
            <Products
                :categoryId="categoryId"
            ></Products>
        </main>
    </div>
</template>

<script>
    import Product from './Product'
    import Catalog from './Catalog'
    import Products from "./Products";

    export default {
        name: "IndexCatalog",
        components: {
            Products,
            Catalog,
            Product
        },
        data() {
            return {
                categoryId: null,
            }
        },
        async created() {
        },
        methods: {
            categorySelected(categoryId) {
                this.categoryId = categoryId;
            }
        },
    }
</script>

<style scoped>

</style>
