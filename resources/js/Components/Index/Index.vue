<template>
    <keep-alive>
        <main>
            <section class="slider">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/files/img/slider/1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="/files/img/slider/2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="/files/img/slider/3.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <ol class="carousel-indicators ">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"
                            class="rounded-circle active"></li>
                        <li class="rounded-circle" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li class="rounded-circle" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                </div>
            </section>
            <section class="about container flex-column align-items-center my-5">
                <h1 class="text-center mb-5">Почему стоит покупать у нас?</h1>
                <ul class="d-flex mx-auto justify-content-center container row">
                    <li v-for="[image, description] of imagesAbout" class="mx-auto card text-center col-lg-3 col-5"
                        style="border: none;!important">
                        <div class="card-body">
                            <img :src="image" class="card-img-top" alt="(">
                            <a class="card-title">
                                {{ description }}
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="news container text-center">
                <h1 class="my-5">
                    Новости и акции
                </h1>
                <div id="index-news-carousel" class="">
                    <div v-for="{img_preview, description, slug} of news" class="card px-1"
                         style="border: none;!important">
                        <img :src="img_preview" class="img-fluid card-img-top" alt=""
                             style="width: 270px; height: 200px;">
                        <div class="card-body">
                            <router-link :to="'news/' + slug">
                                <a class="card-title stretched-link text-dark text-decoration-none">{{ description
                                    }}</a>
                            </router-link>
                        </div>
                    </div>

                </div>
            </section>
            <section class="popular-product container">
            </section>
        </main>
    </keep-alive>
</template>

<script>
    export default {
        name: "Index",
        data: () => {
            return {
                imagesAbout: [
                    ['/files/img/about/contact.png', 'Бесплатная консультация специалистов'],
                    ['/files/img/about/cosmetics.png', 'Оригинальная и сиртифицированная косметика'],
                    ['/files/img/about/customer.png', 'Многочисленные честные отзывы покупателей'],
                    ['/files/img/about/gift.png', 'Многочисленные честные отзывы покупателей']
                ],
                news: []
            }
        },
        watch: {},
        created() {
            this.news =  axios
                .get('/api/index/news')
                .then(({data}) => data)
        },
        computed: {}
    }
</script>

<style scoped>

</style>
