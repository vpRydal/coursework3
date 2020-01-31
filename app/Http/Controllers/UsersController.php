<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    public function index () {
        $users = User::get();
        return view('main', compact("users"));
    }

    public function toProfile ($login) {
        $currentUser = User::where('login', $login)->first();
        return view('user_profile', compact('currentUser'));
    }
}
