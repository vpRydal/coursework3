<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function all()
    {
        $categories = [];

        foreach (ProductCategory::select(['id', 'name'])->where('parent_category_id', null)->get() as $category) {
            $childCategories = $category->childCategories()->select(['id', 'name'])->get();
            $category = $category->toArray();
            $category['child_categories'] = $childCategories->toArray();
            $categories[] = $category;
        }

        return response()->json(['categories' => $categories]);
    }
}
