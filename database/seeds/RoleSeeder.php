<?php

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleNames = ['admin', 'default_user'];

        foreach ($roleNames as $name)
            Role::create([
                'name' => $name,

            ]);
    }
}
