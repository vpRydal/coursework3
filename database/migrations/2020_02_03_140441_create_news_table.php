<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('img_path');
            $table->string('title')->unique();
            $table->string('slug')->unique();
            $table->text('text');
            $table->text('html_text');
            $table->boolean('is_published')->default(false)->unsigned();
            $table->bigInteger('author_id')->index()->unsigned();
            $table->timestamps();
        });

        Schema::table('news', function (Blueprint $table) {
            $table->foreign('author_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}
