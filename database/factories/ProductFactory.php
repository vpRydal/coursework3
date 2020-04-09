<?php

/** @var Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Str;
use App\Models\ProductCategory;

$factory->define(Product::class, function (Faker $faker) {
    $subCategories = ProductCategory::where('parent_category_id', "!=",null)->inRandomOrder()->first();
    $count = $faker->numberBetween(0, 100);
    $title = $faker->realText(random_int(20, 50));

    $created_at = $faker->dateTimeBetween('-5 years');
    $created_at->format("Y-m-d H:i:s");

    return [
        'status' => $count != 0,
        'cost' => $faker->randomFloat(3, 100, 2000),
        'title' => $title,
        'slug' => Str::slug($title),
        'decryption' => $faker->realText(random_int(150, 200)),
        'count' => $count,
        'short_description' => $faker->realText(random_int(50, 100)),
        'category_id' => $subCategories->id,
        'created_at' => $created_at,
        'updated_at' => $created_at,
        'img_path' => $faker->imageUrl()
    ];
});
