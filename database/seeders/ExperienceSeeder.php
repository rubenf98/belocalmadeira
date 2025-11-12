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
            'image' => "/image/activities/levels/family_01.jpg",
            'key' => "canyoning",
            'description' => ['en' => "We provide you one of the best family adventures that Madeira can offer. Enjoy 10% OFF for families on all tours with 4 or more participants! We take your family to enjoy splashing and jumping in the beautiful waterfalls, green pools and to entertain the whole family.", 'pt' => "Pacote Família"],
            'level' => 1,
            'price' => 60,
            'private_price' => 150,
            'activity_id' => 1,
        ]);

        Experience::create([
            'name' => ['en' => "Ribeira das Cales", 'pt' => "Ribeira das Cales"],
            'image' => "/image/activities/levels/cales_01.jpg",
            'key' => "canyoning",
            'description' => ['en' => "This canyoning is intended for those who wish to have the first contact with the activity. It is a easy and accessible route for all ages (over 7 years old).", 'pt' => "Pacote Família"],
            'level' => 1,
            'price' => 60,
            'private_price' => 150,
            'activity_id' => 1,
        ]);

        Experience::create([
            'name' => ['en' => "Nuns Valley (Summer Canyoning)", 'pt' => "Curral das Freiras (Canyoning Verão)"],
            'image' => "/image/activities/levels/curral_01.jpg",
            'key' => "canyoning",
            'description' => ['en' => "Surrounded by steep mountains, this canyon lies in the middle of the island, in the valley that the Nuns from Santa Clara convent fled to when Funchal was attacked by pirates in 1566.", 'pt' => "Pacote Família"],
            'level' => 2,
            'price' => 80,
            'private_price' => 150,
            'activity_id' => 1,
        ]);

        Experience::create([
            'name' => ['en' => "Ribeiro Frio (Winter Canyoning)", 'pt' => "Ribeiro Frio (Canyoning Inverno)"],
            'image' => "/image/activities/levels/ribeiro_frio_01.jpg",
            'key' => "canyoning",
            'description' => ['en' => "Canyoning Ribeiro Frio is a canyon in the north side of Madeira Island and consists in 8 rappels along the way. The Canyon is located within the Laurissilva Forest that is a UNESCO world heritage site since 1999 and one of the seven wonders of Portugal.", 'pt' => "Pacote Família"],
            'level' => 2,
            'price' => 80,
            'private_price' => 150,
            'activity_id' => 1,
        ]);


        Experience::create([
            'name' => ['en' => "Ribeira Funda", 'pt' => "Ribeira Funda"],
            'image' => "/image/activities/levels/funda_011.jpg",
            'key' => "canyoning",
            'description' => ['en' => "Advanced Canyoning on Madeira Island distinguished by its great verticals and high technical level, offering epic endings by the north sea.", 'pt' => "Pacote Família"],
            'level' => 3,
            'price' => 150,
            'private_price' => 150,
            'activity_id' => 1,
        ]);

        //----------------------------------------------------------------


        Experience::create([
            'name' => ['en' => "Rabaçal (25 Fontes e Risco)", 'pt' => "Rabaçal (25 Fontes e Risco)"],
            'image' => "/image/activities/levels/25fontes_01.jpg",
            'key' => "hiking",
            'description' => ['en' => "Levada das 25 Fontes gives you the chance to discover the superb natural surroundings, created by the waters that come down from Paul da Serra.", 'pt' => "Pacote Família"],
            'price' => 60.00,
            'private_price' => 120,
            'activity_id' => 2,
        ]);

        Experience::create([
            'name' => ['en' => "Viewpoint of Pico do Areeiro / Pico Ruivo", 'pt' => "Miradouro do Pico do Areeiro / Pico Ruivo"],
            'image' => "/image/activities/levels/picos_01.jpg",
            'key' => "hiking",
            'description' => ['en' => "PR1 Vereda do Areeiro is a trail connecting three iconic spots in Madeira, the highest peaks of the island.", 'pt' => "Pacote Família"],
            'price' => 60.00,
            'private_price' => 120,
            'activity_id' => 2,
        ]);

        Experience::create([
            'name' => ['en' => "Ponta de São Lourenço", 'pt' => "Ponta de São Lourenço"],
            'image' => "/image/activities/levels/saolourenco_01.jpg",
            'key' => "hiking",
            'description' => ['en' => "This 3 km trail (+ 3 km return) will take you to discover the eastern tip of the island, with panoramic views over the north and south sides.", 'pt' => "Pacote Família"],
            'price' => 60.00,
            'private_price' => 120,
            'activity_id' => 2,
        ]);

        //----------------------------------------------------------------


        Experience::create([
            'name' => ['en' => "Private 4x4 Jeep Tour - Adventure in Madeira", 'pt' => "Private 4x4 Jeep Tour - Adventure in Madeira"],
            'image' => "/image/activities/levels/25fontes_01.jpg",
            'key' => "jeep",
            'description' => ['en' => "Discover the Island of Madeira in the most authentic and exclusive way - aboard a private 4x4 Jeep, guided by passionate local experts who will reveal to you the island’s hidden treasures, breathtaking landscapes, and cultural heritage.", 'pt' => "Pacote Família"],
            'price' => 350,
            'private_price' => 350,
            'activity_id' => 5,
            'price_per_person' => 6,
        ]);

        Experience::create([
            'name' => ['en' => "Westside Wonders 4x4 Jeep Tour", 'pt' => "Miradouro do Pico do Areeiro / Pico Ruivo"],
            'image' => "/image/activities/levels/picos_01.jpg",
            'key' => "jeep",
            'description' => ['en' => "The Western side of Madeira is where nature reveals its most dramatic contrasts: towering sea cliffs, waterfalls plunging into the ocean, volcanic black-sand beaches, lush valleys, and enchanting ancient forests.", 'pt' => "Pacote Família"],
            'price' => 65,
            'private_price' => 65,
            'activity_id' => 5,
        ]);

        Experience::create([
            'name' => ['en' => "Half-Day Jeep Tour from Funchal", 'pt' => "Ponta de São Lourenço"],
            'image' => "/image/activities/levels/saolourenco_01.jpg",
            'key' => "jeep",
            'description' => ['en' => "Short on time but eager to discover Madeira’s natural beauty and cultural charm? Our Half-Day Jeep Tour from Funchal is the perfect solution. Designed for cruise ship passengers, city visitors, or anyone with limited time, this 3-hour journey offers a compact yet unforgettable glimpse of the island's highlights.", 'pt' => "Pacote Família"],
            'price' => 45,
            'private_price' => 45,
            'activity_id' => 5,
        ]);

        Experience::create([
            'name' => ['en' => "Sunset Jeep Tour Madeira - Discover Madeira''s Golden Hour", 'pt' => "Ponta de São Lourenço"],
            'image' => "/image/activities/levels/saolourenco_01.jpg",
            'key' => "jeep",
            'description' => ['en' => "This exclusive experience offers your clients the opportunity to witness the sunset from Pico do Areeiro (1,818 m), Madeira’s third-highest peak. Unlike the busy morning and afternoon tours, the mountain at dusk is calm, atmospheric, and truly unique. The light conditions are ideal for photography and the setting is perfect for couples, families, or small groups seeking an authentic and memorable moment above the clouds.", 'pt' => "Pacote Família"],
            'price' => 45,
            'private_price' => 45,
            'activity_id' => 5,
        ]);
    }
}
