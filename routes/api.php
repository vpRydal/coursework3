<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('logout', 'API\Auth\LoginController@logout');
Route::post('login', 'API\Auth\LoginController@login');

Route::group(['namespace' => 'API'], function () {
    Route::get('products/{category}', 'ProductController@getByCategory');
    Route::get('products', 'ProductController@getPopular');

    Route::group(['namespace' => 'Auth', 'prefix' => 'auth'], function () {


        Route::group(['middleware' => 'auth:sanctum'], function () {
            Route::post('user', 'LoginController@user');

        });

    });

    Route::get('index/news', 'IndexController@news');
    Route::get('news/view/{news}', 'IndexController@viewNews');

});


