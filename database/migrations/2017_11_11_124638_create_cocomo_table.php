<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCocomoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cocomo', function (Blueprint $table) {
            $table->increments('id');
            $table->string('cocomoBasic');
            $table->string('cocomoIntermediate');
            $table->integer('user_id');
            $table->string('cocomoScaleFactors');
            $table->string('cocomoEffortPrevent');
            $table->string('cocomoEffortDeep');
            $table->string('cocomo2size');
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
        Schema::dropIfExists('cocomo');
    }
}
