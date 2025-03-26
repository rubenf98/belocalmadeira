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
                'en' => "Book an airport transfer with us for a quick, comfortable, and hassle-free journey to your destination, offering a seamless experience with simple online booking, 24/7 customer service, flight tracking, no hidden fees, and a professional, friendly driver who will be waiting for you at the airport, ensuring peace of mind and a smooth onward journey to your final destination.",
                'pt' => "Reserve um transfer do aeroporto connosco para uma viagem rápida, confortável e sem complicações até ao seu destino, oferecendo uma experiência perfeita com reserva simples online, serviço de apoio ao cliente 24/7, monitorização de voos, sem taxas ocultas, e um motorista profissional e simpático que o aguardará no aeroporto, garantindo total tranquilidade e uma viagem suave até ao seu destino final."
            ],
            'image' => "/image/homepage/airport.jpg",
            'price' => 35,
            'maxprice' => 55,
        ]);

        Tour::create([
            'name' => ['en' => "Transfer Picos", 'pt' => "Transfer Picos"],
            'price' => 50,
            'maxprice' => 50,
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
