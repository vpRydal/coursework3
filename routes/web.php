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

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/{any}', function () {
    return view('index');
})->where(['any' => '.*']);

/*// Admin/
Route::group(['namespace' => 'Admin', 'prefix' => 'admin'], function(){
    // Admin/News/
    Route::group(['namespace' => 'News', 'as' => 'news.'], function () {
        Route::resource('news', 'NewsController')
            ->only([
                'index',
                'create',
                'store',
                'edit',
                'update'
            ])
            ->names([
                'index' => 'table',
                'store' => 'save',
                'edit' => 'change',
                'create' => 'create',
                'update' => 'update'
            ]);
        Route::group(['prefix' => 'news'], function () {
            Route::get('multiple-destroy', 'NewsController@multipleDestroy')
                ->name('multiple.destroy');
            Route::post('ckeditor/image_upload/{news}', 'NewsController@upload')
                ->name('upload');

        });
    });
});

Route::group(['namespace' => 'User', 'prefix' => 'user', 'as' => 'user.', 'middleware' => 'auth'], function(){

});

// /*/
/*Route::resource('/', 'IndexController', [
    'only' => [
        'index',
    ],
    'names' => [
        'index' => 'home'
    ]
]);*/

Route::get('/login', 'IndexController@login')->name('login');
/*
Route::resource('news', 'NewsController')
    ->only([
        'index',
        'show',
    ])
    ->names([
            'index' => 'news.all',
            'show' => 'news.show',
        ]
    );
Route::group(['namespace' => 'catalog', 'prefix' => 'catalog'], function () {
    Route::resource('', 'CatalogController')
        ->only([
            'index',
        ])
        ->names([
                'index' => 'catalog',
            ]
        );
    Route::get('product/{product}', 'ProductController@index');
});*/
/*
Route::group(['namespace' => 'Guest', 'prefix' => 'guest'], function(){
    Route::resource('news', 'NewsController')
        ->only([
            'index',
            'show',
        ])
        ->names([
            'index' => 'table',
            'show' => 'show',
        ]);
});*/
