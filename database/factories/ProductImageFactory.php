<?php

/** @var Factory $factory */

use App\Models\ProductImage;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(ProductImage::class, function (Faker $faker) {
    $images = [];

    for ($i = 0; $i < random_int(2, 7); $i++) {
        $images[] = $faker->imageUrl(300, 300);
    }

    return [
        'images' => json_encode($images),
    ];
});
