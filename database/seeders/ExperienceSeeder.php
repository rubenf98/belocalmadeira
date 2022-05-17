<?php

namespace Database\Seeders;

use App\Models\Experience;
use App\Models\ExperienceImage;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Experience::create([
            'name' => ['en' => "Level 1", 'pt' => "Nível 1"],
            'price' => 60,
            'private_price' => 80,
            'activity_id' => 1,
        ]);

        Experience::create([
            'name' => ['en' => "Level 2", 'pt' => "Nível 2"],
            'price' => 80,
            'private_price' => 100,
            'activity_id' => 1,
        ]);


        Experience::create([
            'name' => ['en' => "Level 3", 'pt' => "Nível 3"],
            'price' => 100,
            'private_price' => 120,
            'activity_id' => 1,
        ]);

        //----------------------------------------------------------------


        Experience::create([
            'name' => ['en' => "Rabaçal (25 Fontes e Risco)", 'pt' => "Rabaçal (25 Fontes e Risco)"],
            'price' => 60.00,
            'private_price' => 60,
            'activity_id' => 2,
        ]);

        Experience::create([
            'name' => ['en' => "Viewpoint of Pico do Areeiro / Pico Ruivo", 'pt' => "Miradouro do Pico do Areeiro / Pico Ruivo"],
            'price' => 40.00,
            'private_price' => 40,
            'activity_id' => 2,
        ]);
        
        Experience::create([
            'name' => ['en' => "Ponta de São Lourenço", 'pt' => "Ponta de São Lourenço"],
            'price' => 40.00,
            'private_price' => 40,
            'activity_id' => 2,
        ]);

    }
}
