<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getByCategory(Request $request, ProductCategory $category)
    {
        $products = $category->products()->get();

        return response()->json(['success' => true, 'data' => $products], 200);
    }

    public function getPopular()
    {
        $products = Product::select(['slug', 'title', 'img_path', 'cost', 'short_description'])->get();
        return response()->json(['success' => true, 'data' => $products], 200);
    }
}
