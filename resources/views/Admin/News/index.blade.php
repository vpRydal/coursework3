@extends('layouts.layout')
@section('content')
    <div id="App">
        <div class="container">
            @if(!is_null(session('status')))
                <div class="alert {{session('status') ? 'alert-success': 'alert-danger'}}" style="margin-top: 20px">
                    {{session('status') ? 'Успешно удалено': 'Удаление не удалось'}}
                </div>
            @endif
            <form method="GET" action="{{route('news.multiple.destroy')}}" id="news-form-table">
                @csrf
                <table class="table" id="news-table">
                    <tr>
                        <th scope="col"><a>Заголовок</a></th>
                        <th scope="col"><a>Дата создания</a></th>
                        <th scope="col"><a>Публикация</a></th>
                        <th scope="col"><a v-on:click="checkAll" class="btn btn-dark text-light">Выделить все</a></th>
                    </tr>
                    @foreach($newsPaginator as $newsItem)
                        <tr class="{{$newsItem->is_published ?'' :'alert alert-light'}}">
                            <td scope="row">
                                <a href="{{ route('news.change', $newsItem->slug) }}"> {{$newsItem->title}} </a>
                            </td>
                            <td scope="row">
                                <a> {{$newsItem->created_at ?? 'none'}} </a>
                            </td>
                            <td scope="row">
                                <a> {{$newsItem->is_published ? 'Да' : 'Нет'}} </a>
                            </td>
                            <td scope="row">
                                <input v-bind:checked="checkedAll" type="checkbox" name="checkbox[]"
                                       value="{{$newsItem->id}}">
                            </td>
                        </tr>
                    @endforeach
                </table>
                {{ $newsPaginator->links() }}

            </form>
            <div class="container float-left">
                <button form="news-form-table" class="btn btn-dark" type="submit">Удалить</button>
                <a class="btn btn-dark" href="{{ route('news.create') }}">Добавить</a>
            </div>
        </div>
    </div>
@endsection
