@extends('layouts.layout')

@section('content')

    <main id="index">

    </main>
@endsection

@section('scripts-top')
    @parent
    <script src="{{ asset('js/index.js') }}" defer></script>
    <script src="{{ asset('js/index/carusel.js') }}"></script>

@stop
