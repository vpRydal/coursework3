<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\SiteController;
use App\Repositories\NewsRepository;


class AdminController extends SiteController
{
    public function __construct(NewsRepository $newsRep)
    {
        parent::__construct($newsRep);
        $this->middleware('auth');
        $this->middleware('admin');
    }

}
