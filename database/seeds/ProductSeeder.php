<?php

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Product::class, 50)->create()->each(function ($u) {
            $id = $u->id;
            factory(ProductImage::class)->create(['product_id' => $id]);
        });
    }
}
