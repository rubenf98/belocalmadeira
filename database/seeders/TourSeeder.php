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
                'en' => "If you're planning a trip to Madeira whether for business or pleasure, book an airport transfer with us for a quick, comfortable onward journey to your final destination. ",
                'pt' => "Se está planeando uma viagem para a Madeira, seja a negócios ou lazer, reserve um transfer do aeroporto connosco para uma viagem rápida e confortável até seu destino final."
            ],
            'description2' => [
                'en' => "Booking with us is simple and can be done entirely online. We offer a great value door to door service, 24/7 customer service, and no hidden fees. ",
                'pt' => "A reserva connosco é simples e pode ser feita inteiramente online. Oferecemos um serviço porta a porta de grande valor, atendimento ao cliente 24 horas por dia, 7 dias por semana e sem taxas ocultas."
            ],
            'description3' => [
                'en' => "Our drivers track the progress of your flight, meaning there will always be someone waiting to transfer you from the airport on to your final destination. For complete peace of mind book an airport transfer from Madeira airport.",
                'pt' => "Os nossos motoristas acompanham o progresso do seu voo, o que significa que haverá sempre alguém à espera para o transferir do aeroporto até ao destino final. Para total tranquilidade reserve um transfer do aeroporto da Madeira."
            ],
            'image' => "/images/activities/tour/airport.jpg",
            'price' => 35,
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
            'image' => "/images/activities/hiking/picos.jpg",
            'trajectory' => "Pestana CR7 Hotel - Pico Arieiro - Pico Ruivo - Pestana CR7 Hotel",
        ]);
    }
}
