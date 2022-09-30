<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->integer('experienceable_id');
            $table->string('experienceable_type');
            $table->boolean('private')->default(false);
            $table->boolean('confirmation')->default(false);
            $table->string('confirmation_token')->unique();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->string('recipient')->nullable();
            $table->integer('participants');
            $table->string('source')->default("website");
            $table->integer('price')->default(0);
            $table->string('phone')->nullable();
            $table->date('date')->nullable();
            $table->time('time')->default("08:00:00");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
}
