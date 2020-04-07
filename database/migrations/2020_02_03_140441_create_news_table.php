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
            $table->string('title');
            $table->string('slug')->unique();

            $table->string('img_preview')->nullable();
            $table->text('description')->nullable();
            $table->text('html_text')->nullable();

            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable();
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
