<?php

namespace App\Http\Controllers;

use App\Repositories\NewsRepository;

class SiteController extends Controller
{
    public function __construct(NewsRepository $newsRep)
    {
        parent::__construct();
        $this->newsRep= $newsRep;
    }

    protected $catalogRep;
    protected $newsRep;

    protected $vars;
    protected $template;

    protected function renderOutput () {
        try {
            $catalog = view('catalog')->render();
        } catch (\Throwable $e) {
            $catalog = null;
        }
        return view($this->template)->with('vars', $this->vars);
    }
}
