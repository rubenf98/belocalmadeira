<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('price', 5, 2);
            $table->integer('level')->nullable();
            $table->boolean('visible')->default(true);
            $table->integer('price_per_person')->default(1);
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->string('type')->nullable();

            $table->decimal('private_price', 5, 2)->nullable();
            $table->unsignedBigInteger('activity_id');
            $table->timestamps();

            $table->foreign('activity_id')->references('id')->on('activities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('experiences');
    }
}
