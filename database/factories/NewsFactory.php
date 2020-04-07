<?php

/** @var Factory $factory */

use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(\App\Models\News::class, function (Faker $faker) {
    $title = $faker->sentence(rand(3, 8), true);
    $description = $faker->realText(rand(50, 100));
    $author_id = rand(1, 2);
    $slug = Str::slug($title);
    return [
        'title' => $title,
        'description' => $description,
        'author_id' => $author_id,
        'slug' => $slug
    ];
});
