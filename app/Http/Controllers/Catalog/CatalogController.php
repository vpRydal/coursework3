<?php

namespace App\Http\Controllers\Catalog;

use App\Http\Controllers\SiteController;
use App\Models\ProductCategory;
use App\Repositories\NewsRepository;

class CatalogController extends SiteController
{
    public function __construct(NewsRepository $newsRep)
    {
        parent::__construct($newsRep);
        $this->template='Catalog.';
    }

    public function index()
    {
        $this->template .= 'index';
        $this->vars['categories'] = ProductCategory::where("parent_category_id", null)->get();

        return $this->renderOutput();
    }
}
