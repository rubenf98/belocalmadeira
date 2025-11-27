<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Seeder;

class ActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Activity::create([
            'name' => ['en' => "Canyoning", 'pt' => "Canyoning"],
        ]);

        Activity::create([
            'name' => ['en' => "Hiking", 'pt' => "Caminhada"],
        ]);

        Activity::create([
            'name' => ['en' => "Biking", 'pt' => "Bicicleta"],
            'price' => 95,
            'private_price' => 150,
        ]);

        Activity::create([
            'name' => ['en' => "Coasteering", 'pt' => "Coasteering"],
            'price' => 60,
            'private_price' => 150,
        ]);

        Activity::create([
            'name' => ['en' => "Jeep Tour", 'pt' => "Jeep Tour"],
        ]);
    }
}
