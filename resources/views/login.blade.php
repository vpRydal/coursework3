@extends('layouts.layout')

@section('content')
    <main class="container">
        <form method="POST" action="{{ route('login') }}" class="px-4 py-3">
            @csrf
            <div class="form-group">
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input name="email" type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
            </div>
            <div class="form-group">
                <label for="exampleDropdownFormPassword1">Password</label>
                <input name="password" type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input type="checkbox" name="remember" class="form-check-input" id="dropdownCheck" checked value="true">
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
            @error('email')<a class="dropdown-item" href="#">{{ $massage ?? '' }}</a>@enderror
            @error('password')<a class="dropdown-item" href="#">{{ $message ?? '' }}</a>@enderror
        </form>
    </main>

@stop
