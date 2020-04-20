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

    public function authenticated(Request $request, User $user)
    {
        $user->role;
        return response()->json(['user' => $user]);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['success' => true]);

    }

    public function user(Request $request)
    {
        Auth::user()->role;
        return response()->json(['user' => Auth::user()]);
    }
}
