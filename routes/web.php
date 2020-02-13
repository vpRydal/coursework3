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

// /
Route::resource('/', 'IndexController', [
    'only' => [
        'index'
    ],
    'names' => [
        'index' => 'home'
    ]
]);

