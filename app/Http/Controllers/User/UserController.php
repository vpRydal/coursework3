<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\SiteController;
use App\Repositories\NewsRepository;

class UserController extends SiteController
{
    public function __construct()
    {
        parent::__construct(new NewsRepository);
    }
}
