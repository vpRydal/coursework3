<?php

namespace App\Repositories;

use \Illuminate\Database\Eloquent\Model;

abstract class Repository {
    public function __construct()
    {
    }

    abstract public function startConditions (): Model;
}
