<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'img_path',
        'title',
        'is_published',
        'author_id',
        'html_text',
        'description',
        'slug'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function User () {
        return $this->belongsTo(User::class);
    }
}
