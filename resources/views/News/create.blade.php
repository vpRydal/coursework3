@extends('layouts.layout')
@section('content')
    <div id="editor1" ></div>


    <script src="{{ asset('/js/ckeditor/ckeditor.js') }}"
            type="text/javascript" charset="utf-8" ></script>
    <script>
        var editor = CKEDITOR.replace( 'editor1' );
    </script>
@endsection
