<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $guarded = [];

    public function childCategories()
    {
        return $this->hasMany($this, "parent_category_id", "id");
    }

    public function parentCategory()
    {
        return $this->belongsTo($this, "parent_category_id", "id");
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'category_id', 'id');
    }
}
