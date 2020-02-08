@extends('layouts.layout')

@section('content')
    <section class="slider">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="{{asset('/files/img/slider/1.jpg')}}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="{{asset('/files/img/slider/2.jpg')}}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="{{asset('/files/img/slider/3.jpg')}}" class="d-block w-100" alt="...">
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
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="rounded-circle active"></li>
                <li class="rounded-circle" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li class="rounded-circle" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
        </div>
    </section>
    <section class="about container flex-column align-items-center mt-5">
        <h1 class="text-center mb-3">Почему стоит покупать у нас?</h1>
        <ul class="d-flex mx-auto justify-content-center container-fluid row">
            <li class="">
                <div class="about-border ">
                    <div class="">
                        <img  class="" src="{{asset('/files/img/about/contact.png')}}">
                        <a>
                            Бесплатная консультация специалистов
                        </a>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="about-border">
                    <div class="">
                        <img src="{{asset('/files/img/about/cosmetics.png')}}">
                        <a>
                            Оригинальная и сиртифицированная косметика
                        </a>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="about-border">
                    <div class="">
                        <img src="{{asset('/files/img/about/customer.png')}}">
                        <a>
                            Многочисленные честные отзывы покупателей
                        </a>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="about-border">
                    <div class="">
                        <img src="{{asset('/files/img/about/gift.png')}}">
                        <a>
                            Многочисленные честные отзывы покупателей
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    </section>
    <section class="news">

    </section>
    <section class="popular-product">
     <h1>
         Новости и акции
     </h1>

        <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">

                <div class="carousel-item active">
                    <ul class="carousel-in news-carousel-ul">
                        <li class='popular-product-border'>
                            <div>
                                <img src="{{asset("/files/img/news/н1.jpg")}}">
                                <a></a>
                            </div>
                        </li>
                        <li class='popular-product-border'>
                            <div>
                                <img src="{{asset("/files/img/news/н1.jpg")}}">
                                <a></a>
                            </div>
                        </li>
                        <li class='popular-product-border'>
                            <div>
                                <img src="{{asset("/files/img/news/н1.jpg")}}">
                                <a></a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="carousel-item">
                    <ul class="carousel-in news-carousel-ul">
                        <li class='popular-product-border'>
                            <div>
                                <img src="{{asset("/files/img/news/н1.jpg")}}">
                                <a></a>
                            </div>
                        </li>
                        <li class='popular-product-border'>
                            <div>
                                <img src="{{asset("/files/img/news/н1.jpg")}}">
                                <a></a>
                            </div>
                        </li>
                        <li class='popular-product-border'>
                            <div>
                                <img src="{{asset("/files/img/news/н1.jpg")}}">
                                <a></a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>

@endsection
