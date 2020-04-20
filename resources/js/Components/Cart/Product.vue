<template>
    <div class="card my-4 shadow cart">
        <span class="product-close" @click="deleteSelf">&times;</span>

        <div class="row no-gutters">
            <div class="col-12 col-lg-4">
                <img :src="product.img_path" class="card-img cart-img" alt="...">
            </div>
            <div class="col-12 col-lg-8 d-flex flex-column align-content-between">
                <div class="card-body">
                    <h4 class="card-title">{{ product.title }}</h4>
                    <div class="row">
                        <a class="text-muted col-3">Артикул:</a>
                        <a class="card-text col-3">???????</a>
                    </div>
                    <div class="row">
                        <a class="text-muted col-3">Скидка:</a>
                        <a class="card-text col-3">???????</a>
                    </div>
                </div>
            </div>
            <div class="card-footer col-12">
                <div class="my-auto row container">
                    <a class="text-cost col-6 col-lg-4 align-self-center my-auto"><span class="text-dark">{{ product.cost }}</span>
                        руб.</a>
                    <div class="counter col-6 col-lg-3 align-self-center offset-4">
                        <Counter
                            @CountChanged="changeCount"
                            :max="product.count"
                            :min="1"
                        ></Counter>
                    </div>
                    <!--                    <div class=" col-12 col-lg-1 align-self-center">
                                            <img @click="deleteFromCart" class="cart-trash-img"
                                                 src="/trash.png" alt="">
                                        </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from "../Counter";
    export default {
        name: "Product",
        props: ['product'],
        components: {Counter},
        data() {
            return {
                count: 1,
                totalCost: this.product.cost * this.count
            }
        },
        watch: {
            count() {
                if (this.count <= 0)
                    this.count = 1;
                else if (this.count > this.product.count)
                    this.count = this.product.count;
            }
        },
        methods: {
            deleteSelf() {
                this.$store.dispatch('cart/productDelete', this.product.slug);
            },
            changeCount(count) {
                this.count = count;
                this.totalCost = this.product.cost * count;

                this.$store.dispatch('cart/productSetCount', {slug: this.product.slug, count: this.count})
            }
        }
    }
</script>

<style scoped>
    .cart-img {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .cart-trash-img {
        height: 40px;
        width: 40px;
        cursor: pointer;
    }

    .text-cost {
        font-size: 20px;
    }
    .cart {
    }
    .product-close {
        cursor: pointer;

        position: absolute;
        right: -12px;
        top: -14px;

        text-align: center;
        z-index: 3;

        height: 25px;
        width: 25px;

        line-height: 20px;

        font-size: 25px;

        display: block;
        margin: auto;

        border-radius: 50px;
        background-color: #e6e6e6 !important;
        color: #ec7b8d;

    }
</style>
