<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function byCategory(ProductCategory $category)
    {

        $products = $category->products()->select(['slug', 'title', 'cost', 'short_description', 'img_path'])->get();

        return response()->json(['products' => $products]);
    }

    public function popular()
    {
        $products = Product::select(['slug', 'title', 'img_path', 'cost', 'short_description'])->get();
        return response()->json(['products' => $products]);
    }
    public function get(Product $product)
    {
        $images = $product->images()->select(['images'])->first();
        return response()->json(['product' => $product, 'images' => json_decode($images->images)]);
    }

    public function byField(Request $request)
    {
        $products = Product::select($request->selectFields)->whereIn($request->fieldName, $request->byFields)->get();
        return response()->json(['products' => $products]);
    }
}
