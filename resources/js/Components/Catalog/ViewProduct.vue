<template>
    <main class="container my-5" id="product">
        <div class=" row">
            <div class=" d-block col-5">
                <div class="slider-for product-slider-for">
                    <div v-for="image of images" class="card px-1" style="border: none;!important">
                        <img class="img-fluid card-img-top" :src="image" alt="">
                    </div>
                </div>
                <div class="slider-nav mt-3">
                    <div v-for="image of images" class="card px-1"
                         style="border: none !important; border-radius: 0 !important">
                        <img class="img-fluid card-img-top" :src="image" alt=""
                             style="border-radius: 0 !important">
                    </div>
                </div>
            </div>
            <div class="col-7">
                <h1 class="font-weight-bold">{{ product.title }}</h1>
                <p class="font-weight-light text-black-50">{{ product.short_description }}</p>
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center">
                        <a class="" style="font-size: 30px">{{ product.cost }}<span class="ml-2">&#8381</span></a>
                        <a class="text-uppercase">Статус товара:
                            <span class="color-allete">{{ product.status ? "есть в наличии": "нет в наличии" }}</span>
                        </a>
                    </div>
                    <div class="form-inline my-5">
                        <div class="form-group mx-2">
                            <label for="count"></label>
                            <input v-model.number="count" id="count" class="form-control" type="number" name="count" value="1" min="1">
                        </div>
                        <input @click="addToCart" class="btn btn-allete btn-lg text-uppercase" type="submit" value="Добавить в корзину">
                    </div>
                    <h3 class="text-center  my-2">Описание</h3>
                    <p>
                        {{ product.decryption }}
                    </p>
                </div>
            </div>
        </div>
<!--        <Commnts>

        </Commnts>-->

    </main>
</template>

<script>
    import { bus } from './../../Bus.js'
    export default {
        name: "ViewProduct",
        data() {
            return {
                product: {
                    title: '',
                    cost: '',
                    status: '',
                    short_description: '',
                    decryption: '',
                },
                images: null,
                slug: null,
                count: 1,
            }
        },
        methods: {
            addToCart() {
                bus.$emit('ProductAddToCart', this.product);
            }
        },
        created() {
            this.slug = this.$route.params.slug;

            axios.get(`/api/product/${this.slug}`)
                .then(response => response.data)
                .then(({images, product}) => {
                    this.images = images;
                    this.product = product;

                    setTimeout(() => {
                        $('.slider-for').slick({
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            fade: true,
                            asNavFor: '.slider-nav',
                            lazyLoad: 'progressive',

                        });
                        $('.slider-nav').slick({
                            slidesToShow:4 ,
                            slidesToScroll: 1,
                            asNavFor: '.slider-for',
                            focusOnSelect: true,
                            lazyLoad: 'progressive',
                            autoplay: true,
                            autoplaySpeed: 2000,

                        });
                    }, 100)
                })
        }
    }
</script>

<style scoped>

</style>
