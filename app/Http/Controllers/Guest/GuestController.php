<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\SiteController;
use App\Http\Requests\NewsRequest;
use App\Repositories\NewsRepository;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;

class GuestController extends SiteController
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
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Factory|View
     */

    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewsRequest $request
     * @return RedirectResponse
     */
    public function store(NewsRequest $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param News $news
     * @return Response
     */
    public function show(News $news)
    {
        dd(__METHOD__);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  News  $news
     * @return Factory|View
     */
    public function edit(News $news)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param NewsRequest $request
     * @param News $news
     * @return RedirectResponse
     */
    public function update(NewsRequest $request, News $news)
    {
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param News $news
     * @return void
     */
    public function destroy(Request $request, News $news)
    {

    }
}
