<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width = device-width, initial-scale = 1, shrink-to-fit = no">

    <title>{{ config('app.name') }}</title>

    {{-- CSS --}}

    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('js/slick/slick.css') }}"/>
    <link rel="stylesheet" type="text/css" href="{{ asset('js/slick/slick-theme.css') }}"/>
    <link rel="stylesheet" href="{{asset("css/style.css")}}">


    {{-- Js --}}
    @section('scripts-top')
    @show

</head>
<body>
<div id="header"></div>

@yield('content')

@section('scripts-bot')
    <script src="{{ asset('js/slick/slick.js') }}"></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

@show
</body>
</html>
