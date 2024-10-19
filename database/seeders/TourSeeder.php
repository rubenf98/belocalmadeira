<?php

namespace Database\Seeders;

use App\Models\Tour;
use Illuminate\Database\Seeder;

class TourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tour::create([
            'name' => ['en' => "Airport transfer", 'pt' => "Transfer aeroporto"],
            'subtitle' => [
                'en' => "Time-Saving Service",
                'pt' => "Serviço que economiza tempo"
            ],
            'title' => [
                'en' => "Your Madeira Airport Transport Solution",
                'pt' => "A sua solução de transporte no Aeroporto da Madeira"
            ],
            'description' => [
                'en' => "Experience the ultimate in convenience with our 24/7 airport transfer service. We’re ready whenever you are, ensuring timely transportation to your hotel or departure flight",
                'pt' => "Experimente o nosso serviço de transporte do aeroporto 24 horas por dia, 7 dias por semana. Estamos prontos sempre que estiver, garantindo transporte oportuno para o seu hotel ou voo de partida"
            ],
            'image' => "/image/homepage/airport.jpg",
            'price' => 45,
        ]);

        Tour::create([
            'name' => ['en' => "Transfer Picos", 'pt' => "Transfer Picos"],
            'price' => 50,
            'subtitle' => [
                'en' => "High-Altitude Fun",
                'pt' => "Diversão em alta altitude"
            ],
            'title' => [
                'en' => "Let us guide you to the Madeira Peaks",
                'pt' => "Deixe-nos guiá-lo até aos Picos da Madeira"
            ],
            'description' => [
                'en' => "Enjoy convenient, hassle-free transportation to and from your Levada track journey’s start and end points with our service.",
                'pt' => "Desfrute de transporte conveniente e sem complicações de e para os pontos inicial e final da sua jornada na Levada com o nosso serviço."
            ],
            'image' => "/image/homepage/picos.jpg",
            'trajectory' => "Pestana CR7 Hotel - Pico Arieiro - Pico Ruivo - Pestana CR7 Hotel",
        ]);
    }
}
