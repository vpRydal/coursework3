<?php

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [];
        $rolesId = [];
        $rolesName = ['admin', 'default_user'];

        // get roles id by name
        foreach ($rolesName as $name) {
            $role = Role::select(['id'])->where('name', $name)->first();
            $rolesId[$name] = $role->id;
        }

        // user admin
        $users[] = [
            'login' => 'Rydal',
            'password' => Hash::make('funt1974'),
            'email' => 'i.am.alex2k@mail.ru',
            'role_id' => $rolesId['admin']
        ];
        // default user
        $users[] = [
            'login' => 'Tester',
            'password' => Hash::make('12345678'),
            'email' => 'stefanov-2000@mail.ru',
            'role_id' => $rolesId['default_user']
        ];

        foreach ($users as $user)
            User::create($user);
    }
}
