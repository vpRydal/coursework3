<?php

namespace App\Http\Controllers\Admin\News;

use App\Http\Controllers\Admin\AdminController;
use App\Models\News;
use App\Repositories\NewsRepository;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;


class NewsController extends AdminController
{
    public function __construct()
    {
        parent::__construct(new NewsRepository);
        $this->template = 'News';
    }
    /**
     * Display a listing of the resource.
     *
     * @return Factory|View
     */
    public function index()
    {
        $this->template .= '.index';
        $this->vars['newsPaginator'] = $this->newsRep->getNewsForTable();
        return $this->renderOutput();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Factory|View
     */
    public function create()
    {
        $this->template .= '.create';
        return $this->renderOutput();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param $id
     * @return void
     */
    public function destroy(Request $request, $id)
    {
        dd(__METHOD__);
    }
    public function multipleDestroy(Request $request)
    {
        $success = $this->newsRep->multipleDestroy($request);

        if ($success)
            return redirect()->back()->with('status', true);
        else

            return redirect()->back()->with('status', false);


    }
}
