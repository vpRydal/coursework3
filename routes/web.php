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


Auth::routes();

Route::group(['middleware' => 'auth'], function(){
    Route::get('/admin', 'AdminController@index')->name('admin');
});

Route::get('/home', 'HomeController@index')->name('home');
