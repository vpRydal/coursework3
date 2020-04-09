<?php

namespace App\Repositories;

use App\Models\News;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;


class NewsRepository extends Repository
{
    public function startConditions(): Model
    {
        return new News();
    }

    public function getNewsForTableWithPaginate () {
        $news = $this->startConditions()
            ->select([
                'title',
                'created_at',
                'is_published',
                'id',
                'slug',

            ])
            ->orderByDesc('created_at')
            ->paginate(20);

        return $news;

    }

    public function getNewsForSlider () {
        return News::select([
            'description',
            'img_preview',
            'slug',
            'is_published'
        ])->get();
    }

    public function multipleDestroy (Request $request) {
        return News::destroy($request->input('checkbox'));
    }
}
