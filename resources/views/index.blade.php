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

    <section class="about container flex-column align-items-center my-5">
        <h1 class="text-center mb-5">Почему стоит покупать у нас?</h1>
        <ul class="d-flex mx-auto justify-content-center container row">
            @foreach([
                [asset('/files/img/about/contact.png'), 'Бесплатная консультация специалистов'],
                [asset('/files/img/about/cosmetics.png'), 'Оригинальная и сиртифицированная косметика'],
                [asset('/files/img/about/customer.png'), 'Многочисленные честные отзывы покупателей'],
                [asset('/files/img/about/gift.png'), 'Многочисленные честные отзывы покупателей']
            ] as $item)
                <li class="mx-auto card text-center col-lg-3 col-5" style="border: none;!important">
                    <div class="card-body">
                            <img  class="card-img-top" src="{{ $item[0] }}">
                            <a class="card-title">
                                {{ $item[1] }}
                            </a>
                    </div>
                </li>
            @endforeach
        </ul>
    </section>

    <section class="news container text-center">
        <h1 class="my-5">
            Новости и акции
        </h1>
        <div id="index-news-carousel" class="">

            @foreach ($allNews as $news)
                @if($news->is_published)
                    <div class="card px-1" style="border: none;!important">
                        <img class="img-fluid card-img-top" src="{{ $news->img_preview }}" alt="">
                        <div class="card-body">
                            <a class="card-title stretched-link text-dark text-decoration-none" href="{{ route('news.show', $news) }}">{{ $news->description }}</a>
                        </div>
                    </div>
                @endif;
            @endforeach
        </div>
    </section>

    <section class="popular-product container">

    </section>
@endsection

@section('scripts-top')
    @parent
    <script src="{{ asset('js/index/carusel.js') }}"></script>
@stop
