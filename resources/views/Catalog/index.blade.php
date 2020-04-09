@extends('layouts.layout')

@section('content')
    <div id="Catalog" class="container d-flex flex-column flex-lg-row my-5" >
        <aside id="catalog" class="float-left" style="min-width: 250px">
            <div class="p-md-2">
                <ul class="list-group list-group-flush">
                    @foreach($categories as $num => $category)
                        <li class="list-group-item">
                            <div class="">
                                <a class="text-muted text-decoration-none" data-toggle="collapse" href="#collapseExample{{ $num }}" role="button"
                                   aria-expanded="false" aria-controls="collapseExample">
                                    {{ $category->name }}
                                </a>
                                <div class="collapse" id="collapseExample{{ $num }}">
                                    <ul>
                                        @foreach($category->childCategories as $category)
                                            <li class="list-group-item card card-body">
                                                <a class="text-muted text-decoration-none" role="button" @click="category = '{{ $category->id }}'">
                                                    {{ $category->name }}
                                                </a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>

                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </aside>
        <main id="products" class="">
            <products :category="category">

            </products>
        </main>
    </div>
@endsection

