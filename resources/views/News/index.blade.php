@extends('layouts.layout')
@section('content')
    <div class="container">
        @if(!is_null(session('status')))
            <div class="alert {{session('status') ? 'alert-success': 'alert-danger'}}" style="margin-top: 20px">
                {{session('status') ? 'Успешно удалено': 'Удаление не удалось'}}
            </div>
        @endif
        <form method="GET" action="{{route('news.multiple.destroy')}}">
            @csrf
            <table class="table" id="news-table">
                <tr>
                    <th scope="col"> <a>Заголовок</a> </th>
                    <th scope="col"> <a>Дата создания</a> </th>
                    <th scope="col"> <a>Публикация</a> </th>
                    <th scope="col"> <button >Выделить все</button> </th>
                </tr>
                @foreach($vars['newsPaginator'] as $newsItem)
                    <tr class="{{$newsItem->is_published ?'' :'alert alert-light'}}">
                        <td scope="row">
                            <a href="{{asset('')}}"> {{$newsItem->title}} </a>
                        </td>
                        <td scope="row">
                            <a> {{$newsItem->created_at ?? 'none'}} </a>
                        </td>
                        <td scope="row">
                            <a> {{$newsItem->is_published ? 'Да' : 'Нет'}} </a>
                        </td>
                        <td scope="row">
                            <input type="checkbox" name="checkbox[]" value="{{$newsItem->id}}">
                        </td>
                    </tr>
                @endforeach
            </table>
            @if($vars['newsPaginator']->total() > $vars['newsPaginator']->count())
                <div class="row justify-content-center">
                    <div class="col-md-2">
                        <div class="card">
                            <div class="card-body">
                                {{ $vars['newsPaginator']->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            @endif
            <button type="submit" >Удалить</button>
        </form>
            <a href="{{ route('news.create') }}">Добавить</a>
    </div>

@endsection
