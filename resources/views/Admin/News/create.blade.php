@extends('layouts.layout')

@section('content')
    <form method="POST" class="container form-group" action="@section('form-route'){{ route('news.save') }} @show" enctype="multipart/form-data">
        @csrf
        @yield('form-method')
        <div class="form-row">
            <div class="form-row col-md-12">
                <div class="form-group col-md-6">
                    <label for="news-title">Заголовок</label>
                    <input class="form-control" type="text" name="title" id="news-title" placeholder="Заголовок" {{ $readonly['title'] ?? '' }} value="{{ $news->title ?? '' }}">
                </div>
                <div class="form-group col-md-6">
                    <label for="news-slug">Идентификатор</label>
                    <input class="form-control" type="text" name="slug" id="news-slug" placeholder="Идентификатор" {{ $readonly['slug'] ?? '' }} value="{{ $news->slug ?? '' }}">
                </div>
                <div class="form-group col-md-12">
                    <label for="news-description">Краткое описание</label>
                    <textarea class="form-control" name="description" id="news-description" rows="3" placeholder="Описание" {{ $readonly['description'] ?? '' }}>{{ $news->description ?? '' }}</textarea>
                </div>
            </div>
        </div>
        @yield('form-info')
        @yield('form-text')

        <div class="form-row">
            @yield('form-load-img')
            <div class="form-group col-md-3">
                <div class="form-group">
                    <button class="btn btn-dark form-control" type="submit" >Сохранить</button>
                </div>
                <div class="form-group">
                    @yield('form-is-publish')
                </div>
            </div>
        </div>
        <div id="news-img-area"></div>
    </form>
@stop
