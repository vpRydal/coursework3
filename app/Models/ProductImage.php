<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $guarded = [];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function imagesFromJson()
    {
        return json_decode($this->images);
    }

    public function imagesToJson()
    {
        $this->images = json_encode($this->images);
    }
}
