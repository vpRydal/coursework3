<?php


namespace App\Repositories;


use App\Models\News;
use App\Models\User;
use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;


class NewsRepository extends Repository
{
    public function startConditions(): Model
    {
        return new News();
    }

    public function getNewsForTable () {
        $news = $this->startConditions()->select(['title', 'created_at', 'is_published', 'id'])->orderByDesc('created_at')->paginate(5);

        return $news;

    }

    public function multipleDestroy (Request $request) {
        return News::destroy($request->input('checkbox'));
    }
}
