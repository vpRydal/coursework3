<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\DB;

Route::get('main', 'UsersController@index');
Route::get('main/user_profile/{user}', 'UsersController@toProfile');

/*Route::get('main', function () {
    $users = DB::table("users")->get();
    return view('main', compact("users"));
});

Route::get('main/user_profile/{user}', function ($login) {
    $currentUser = DB::table("users")->where('login', $login)->first();
    return view('user_profile', compact('currentUser'));
});*/

