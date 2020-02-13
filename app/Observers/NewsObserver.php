<?php

namespace App\Observers;

use App\Models\News;
use Illuminate\Support\Facades\Storage;

class NewsObserver
{
    public function creating (News $news) {
    }
    public function deleting (News $news) {

    }
    /**
     * Handle the news "created" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function created(News $news)
    {
        $disk = Storage::disk('public');
        $disk->makeDirectory('files\images\news\\' . $news->slug);
    }

    /**
     * Handle the news "updated" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function updated(News $news)
    {
        //
    }

    /**
     * Handle the news "deleted" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function deleted(News $news)
    {
        $disk = Storage::disk('public');
        $disk->deleteDirectory('files\images\news\\' . $news->slug);
    }

    /**
     * Handle the news "restored" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function restored(News $news)
    {
        //
    }

    /**
     * Handle the news "force deleted" event.
     *
     * @param  \App\Models\News  $news
     * @return void
     */
    public function forceDeleted(News $news)
    {
        //
    }
}
