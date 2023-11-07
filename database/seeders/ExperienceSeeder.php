<?php

namespace Database\Seeders;

use App\Models\Experience;
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
            'name' => ['en' => "Family Pack", 'pt' => "Pacote Família"],
            'level' => 1,
            'price' => 60,
            'private_price' => 150,
            'activity_id' => 1,
        ]);

        Experience::create([
            'name' => ['en' => "Ribeira das Cales", 'pt' => "Ribeira das Cales"],
            'level' => 1,
            'price' => 60,
            'private_price' => 150,
            'activity_id' => 1,
        ]);

        Experience::create([
            'name' => ['en' => "Nuns Valley (Summer Canyoning)", 'pt' => "Curral das Freiras (Canyoning Verão)"],
            'level' => 2,
            'price' => 80,
            'private_price' => 150,
            'activity_id' => 1,
        ]);

        Experience::create([
            'name' => ['en' => "Ribeiro Frio (Winter Canyoning)", 'pt' => "Ribeiro Frio (Canyoning Inverno)"],
            'level' => 2,
            'price' => 80,
            'private_price' => 150,
            'activity_id' => 1,
        ]);


        Experience::create([
            'name' => ['en' => "Ribeira Funda", 'pt' => "Ribeira Funda"],
            'level' => 3,
            'price' => 150,
            'private_price' => 150,
            'activity_id' => 1,
        ]);

        //----------------------------------------------------------------


        Experience::create([
            'name' => ['en' => "Rabaçal (25 Fontes e Risco)", 'pt' => "Rabaçal (25 Fontes e Risco)"],
            'price' => 60.00,
            'private_price' => 120,
            'activity_id' => 2,
        ]);

        Experience::create([
            'name' => ['en' => "Viewpoint of Pico do Areeiro / Pico Ruivo", 'pt' => "Miradouro do Pico do Areeiro / Pico Ruivo"],
            'price' => 60.00,
            'private_price' => 120,
            'activity_id' => 2,
        ]);

        Experience::create([
            'name' => ['en' => "Ponta de São Lourenço", 'pt' => "Ponta de São Lourenço"],
            'price' => 60.00,
            'private_price' => 120,
            'activity_id' => 2,
        ]);
    }
}
