<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function news()
    {
        return response()->json(News::select(['img_preview', 'description', 'slug'])->where('is_published', true)->get());
    }

    public function viewNews(News $news)
    {
        return response()->json($news);
    }
}
