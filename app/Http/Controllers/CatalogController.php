<?php

namespace App\Http\Controllers;

use App\Repositories\NewsRepository;
use Illuminate\Http\Request;

class CatalogController extends SiteController
{
    public function __construct(NewsRepository $newsRep)
    {
        parent::__construct($newsRep);
        $this->template='Catalog';
    }

    public function index()
    {
        $this->template .= '.index';
        return $this->renderOutput();
    }
}
