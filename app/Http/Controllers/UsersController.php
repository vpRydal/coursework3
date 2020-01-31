<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function index () {
        $users = User::get();
        return view('main', compact("users"));
    }

    public function toProfile ($login) {

        return view('user_profile', compact('currentUser'));
    }
}
