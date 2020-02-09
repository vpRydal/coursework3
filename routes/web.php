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

Auth::routes();

// Admin/
Route::group(['namespace' => 'Admin', 'prefix' => 'admin'], function(){
    // Admin/News/
    Route::group(['namespace' => 'News', 'prefix' => 'news'], function () {
        Route::resource('', 'NewsController', [
            'only' => [
                'index',
                'create',
                'store',

            ],
            'names' => [
                'index' => 'news.table',
                'create' => 'news.create',
                'store' => 'news.save',

            ]
        ]);
        Route::get('{news}/edit', 'NewsController@edit')
            ->name('news.change');
        Route::get('multiple-destroy', 'NewsController@multipleDestroy')
            ->name('news.multiple.destroy');
        Route::post('ckeditor/image_upload/', 'NewsController@upload')
            ->name('upload');
    });

    Route::get('', 'AdminController@index')
        ->name('home');
});

// /
Route::resource('/', 'IndexController', [
    'only' => [
        'index'
    ],
    'names' => [
        'index' => 'home'
    ]
]);

