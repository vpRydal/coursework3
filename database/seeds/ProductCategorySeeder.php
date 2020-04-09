<?php

use Illuminate\Database\Seeder;
use App\Models\ProductCategory;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mainCategories = ['Для лица', "Для ног", "Для рук"];
        $subCategory = ["Масла", "Крема"];

        foreach ($mainCategories as $m_category) {
            $category = ProductCategory::create(['name' => $m_category]);

             foreach ($subCategory as $s_category) {
                 ProductCategory::create(['name' => $s_category, 'parent_category_id' => $category->id]);
             }
        }

    }
}
