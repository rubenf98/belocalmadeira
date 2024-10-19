<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfers', function (Blueprint $table) {
            $table->id();
            $table->decimal('price', 5, 2);
            $table->date('confirmed_at')->nullable();
            $table->string('phone')->nullable();
            $table->boolean('seen')->default(false);
            $table->boolean('confirmation')->default(false);
            $table->boolean('admin_confirmation')->default(false);
            $table->string('name')->nullable();
            $table->string('trajectory');
            $table->string('email')->nullable();
            $table->string('confirmation_token')->unique();
            $table->datetime('date');
            $table->datetime('return_date')->nullable();
            $table->integer('passengers');
            $table->unsignedBigInteger('tour_id');
            $table->timestamps();

            $table->foreign('tour_id')->references('id')->on('tours');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transfers');
    }
}
