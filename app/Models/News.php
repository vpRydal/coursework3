<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = [
        'img_path',
        'title',
        'text',
        'is_published',
        'author_id',
        'html_text',

    ];

    public function User () {
        return $this->belongsTo(User::class);
    }
}
