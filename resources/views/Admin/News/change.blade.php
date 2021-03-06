@extends('Admin.News.create')

@section('form-text')
    <div class="form-row">
        <div class="form-group col-md-12">
            <label for="editor1">Основное содержание</label>
            <textarea class="form-control" id="editor1" name="text">{{ $news ->html_text ?? '' }}</textarea>
        </div>
    </div>

@endsection

@section('scripts-bot')
    @parent
    <script src="{{ asset('/js/bootstrap-filestyle.js') }}"></script>
    <script src="{{ asset('/js/ckeditor/ckeditor.js') }}" type="text/javascript" charset="utf-8" ></script>
    <script>
        setTimeout(function(){
            CKEDITOR.replace( 'editor1', {
                filebrowserUploadUrl: "{{ route('news.upload', [
                '_token' => csrf_token(),
                'news' => $news->slug
                ]) }}" ,
                filebrowserUploadMethod: 'form'
            });
        },100);

    </script>
    <script src="{{ asset('/js/News/LoadImg.js') }}"></script>
@stop



@section('form-load-img')
    <div class="form-group col-md-9">
        <input type="file" name="img" id="news-img" class="filestyle" data-buttonBefore="true">
        <label for="news-img"></label>
    </div>
@endsection

@section('form-is-publish')
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="news-is-publish" name="is-publish" value= '1' {{ $news->is_published ? 'checked="checked"': '' }}>
        <label class="form-check-label" for="news-is-publish">Побликация</label>
    </div>
@endsection

@section('form-info')
<div class="form-row">
    <div class="col-md-4">
        <label for="news-date-create">Дата создания статьи</label>
        <input class="form-control" type="text" placeholder="" readonly id="news-date-create" value="{{ $news->created_at}}">

    </div>
    <div class="form-group col-md-4">
        <label for="news-date-change">Дата последнего изменения статьи</label>
        <input class="form-control" type="text" placeholder="" readonly id="news-date-change" value="{{ $news->updated_at }}">

    </div>
    <div class="form-group col-md-4">
        <label for="news-date-publishing">Дата публикации</label>
        <input class="form-control" type="text" placeholder="" readonly id="news-date-publishing" value="{{ $news->published_at ?? 'Не была опубликована'}}">
    </div>
</div>
@endsection

@section('form-route')
    {{ route('news.update', $news->slug) }}
@endsection


@section('form-method')
    @method('PATCH')
@endsection
