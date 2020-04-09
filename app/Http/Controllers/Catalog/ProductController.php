<?php

namespace App\Http\Controllers\Catalog;

use App\Http\Controllers\Controller;
use App\Http\Controllers\SiteController;
use App\Models\Product;
use App\Repositories\NewsRepository;
use Illuminate\Http\Request;

class ProductController extends SiteController
{
    public function __construct(NewsRepository $newsRep)
    {
        parent::__construct($newsRep);
        $this->template='Catalog.';
    }

    public function index(Product $product)
    {
        $this->template .= 'product';
        $this->vars['product'] = $product;

        return $this->renderOutput();
    }
}
