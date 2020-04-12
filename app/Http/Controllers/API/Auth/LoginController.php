<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use AuthenticatesUsers;


    public function loggedOut(Request $request)
    {
        return response()->json(['success' => true]);
    }

    public function login(Request $request)
    {
        Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember_me);
        Auth::user()->role;
        return response()->json(Auth::user());
    }

    public function user()
    {
        Auth::user()->role;
        return Auth::user();
    }
}
