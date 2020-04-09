@extends('layouts.layout')

@section('content')
    <main class="container my-5" id="product">
        <div class=" row">
            <div class=" d-block col-5">
                <div class="slider-for product-slider-for">
                    @foreach($product->images->imagesFromJson() as $image)
                        <div class="card px-1" style="border: none;!important">
                            <img class="img-fluid card-img-top" src="{{ $image }}" alt="">
                        </div>
                    @endforeach
                </div>
                <div class="slider-nav mt-3" >
                    @foreach($product->images->imagesFromJson() as $image)
                        <div class="card px-1" style="border: none !important; border-radius: 0 !important">
                            <img class="img-fluid card-img-top" src="{{ $image }}" alt="" style="border-radius: 0 !important">
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="col-7">
                <h1 class="font-weight-bold">{{ $product->title }}</h1>
                <p class="font-weight-light text-black-50">{{ $product->short_description }}</p>
                <div class="d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center">
                        <a class="" style="font-size: 30px">{{ $product->cost }}<span class="ml-2">&#8381</span></a>
                        <a class="text-uppercase">Статус товара:
                            <span class="color-allete">{{ $product->status ? "есть в наличии": "нет в наличии" }}</span>
                        </a>
                    </div>
                    <form action="" class="form-inline my-5">
                        <div class="form-group mx-2">
                            <label for="count"></label>
                            <input id="count" class="form-control" type="number" name="count" value="1" min="1">
                        </div>
                        <input class="btn btn-allete btn-lg text-uppercase" type="submit" value="Добавить в корзину" name="">
                    </form>
                    <h3 class="text-center  my-2">Описание</h3>
                    <p>
                        {{ $product->decryption }}
                    </p>
                </div>
            </div>
        </div>

    </main>
@stop

@section('scripts-top')
    @parent
    <script src="{{ asset('js/catalog/productsSlider.js') }}"></script>
@stop

