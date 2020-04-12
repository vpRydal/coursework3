<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $admin = Gate::allows("isAdmin");

        if ($request->ajax()) {
            if (!$admin) {
                return response()->json(['message' => 'access error'], 403);
            } else {
                return $next($request);
            }
        } else {
            if ($admin) {
                return $next($request);

            } else {
                return redirect('/');

            }
        }
    }
}
