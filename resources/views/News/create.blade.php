@extends('layouts.layout')
@section('content')
    <form method="POST" class="container form-group" action="{{ route('news.save') }}" enctype="multipart/form-data">
        @csrf
        <div class="form-row">
            <div class="form-row col-md-9">
                <div class="form-group col-md-6">
                    <label for="news-title">Заголовок</label>
                    <input class="form-control" type="text" name="title" id="news-title" placeholder="Заголовок" {{ $vars['readonly']['title'] ?? '' }}>
                </div>
                <div class="form-group col-md-6">
                    <label for="news-slug">Идентификатор</label>
                    <input class="form-control" type="text" name="slug" id="news-slug" placeholder="Идентификатор" {{ $vars['readonly']['slug'] ?? '' }}>
                </div>
                <div class="form-group col-md-12">
                    <label for="news-description">Краткое описание</label>
                    <textarea class="form-control" name="description" id="news-description" rows="3" placeholder="Описание" {{ $vars['readonly']['description'] ?? '' }}></textarea>
                </div>
            </div>
            <div class="form-group col-md-3">
                <label for="news-date-create">Дата создания статьи</label>
                <input class="form-control" type="text" placeholder="" readonly id="news-date-create">

                <label for="news-date-change">Дата последнего изменения статьи</label>
                <input class="form-control" type="text" placeholder="" readonly id="news-date-change">

                <label for="news-date-publishing">Дата публикации</label>
                <input class="form-control" type="text" placeholder="" readonly id="news-date-publishing">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-12">
                <label for="editor1">Основное содержание</label>
                <textarea class="form-control" id="editor1" name="text"></textarea>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-9">
                <input type="file" name="img" id="news-img" class="filestyle" data-buttonBefore="true">
                <label for="news-img"></label>
            </div>
            <div class="form-group col-md-3">
                <div class="form-group">
                    <button class="btn btn-dark form-control" type="submit" >Сохранить</button>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="news-is-publish" name="is-publish">
                        <label class="form-check-label" for="news-is-publish">Побликация</label>
                    </div>
                </div>
            </div>
        </div>
        <div id="news-img-area"></div>
    </form>

    <script src="{{ asset('/js/bootstrap-filestyle.js') }}"></script>
    <script src="{{ asset('/js/ckeditor/ckeditor.js') }}"
            type="text/javascript" charset="utf-8" ></script>
    <script src="{{ asset('/js/News/LoadImg.js') }}"></script>
    <script>
        let slug = $('#news-slug').val();
        CKEDITOR.replace( 'editor1', {
            filebrowserUploadUrl: "{{ route('upload', ['_token' => csrf_token()]) }}" + slug,
            filebrowserUploadMethod: 'form'
        });
    </script>
@endsection
