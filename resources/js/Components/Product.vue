<template>
    <div class="card">
        <img :src="imgPath" class="card-img-top" alt="">
        <div class="card-body">
            <p class="text-dark card-title font-weight-bold product-name">{{ title }}</p>
            <p class="text-muted card-text my-2 product-description">{{ shortDescription }}</p>
            <a class="text-dark product-cost">{{ cost }}</a>
            <a :href='"/catalog/product/" + slug ' class="d-flex flex-column text-left stretched-link"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",
        data: () => {
            return {
            }
        },
        props: ['title', 'cost', 'imgPath', 'shortDescription', 'slug']
    }
</script>

<style scoped>
    div, div img {
        width: 250px;
    }
    div img {
        height: 250px;
    }
    div {
        height: 450px;
    }
</style>
