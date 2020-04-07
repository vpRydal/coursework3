@extends('layouts.layout')

@section('content')
    <aside id="catalog" class="float-left rounded col-md-3 bg-light my-2">
        <div class="p-md-2">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="">
                        <a>Масла</a>
                        <ul>
                            <li class="list-group-item">Масло-1</li>
                            <li class="list-group-item">Масло-2</li>
                            <li class="list-group-item">Масло-3</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="">
                        <a>Крема</a>
                        <ul>
                            <li class="list-group-item">Крем-1</li>
                            <li class="list-group-item">Крем-2</li>
                            <li class="list-group-item">Крем-3</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="">
                        <a>Крема</a>
                        <ul>
                            <li class="list-group-item">Крем-1</li>
                            <li class="list-group-item">Крем-2</li>
                            <li class="list-group-item">Крем-3</li>
                        </ul>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="">
                        <a>Крема</a>
                        <ul>
                            <li class="list-group-item">Крем-1</li>
                            <li class="list-group-item">Крем-2</li>
                            <li class="list-group-item">Крем-3</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
    <main id="products" class="col-md-8 container">
        <ul class="list-group list-group-horizontal my-2 row">
            <li v-for="value in numbers" class="list-group-item border rounded mx-auto mx-1 my-1 col-sm-12 col-md-6 col-xl-4">
                <div class="">
                    <a class="d-flex flex-column text-left" href="#">
                        <img class="privew-img mx-auto" src="img.jpg" alt="">
                        <span>
                        <div class="d-flex flex-column">
                            <span class="text-dark font-weight-bold product-name">Оооооочень большое название</span>
                            <span class="text-muted my-2 product-description">Обоже, это что самое крутое описание?</span>
                            <span class="text-dark product-cost">999.99 шекелей</span>
                        </div>
                    </span>
                    </a>
                </div>
            </li>
        </ul>
    </main>
    <script>
        Vue({
            el: '#products',
            data: {
                numbers: [ 1, 2, 3, 4, 5 ]
            }
        });
    </script>
@endsection
