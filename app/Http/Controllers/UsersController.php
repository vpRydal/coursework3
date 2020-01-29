<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\users;

class UsersController extends Controller
{
    public function index () {
        $users = users::get();
        return view('main', compact("users"));
    }

    public function toProfile ($login) {
        $currentUser = users::where('login', $login)->first();
        return view('user_profile', compact('currentUser'));
    }
}
