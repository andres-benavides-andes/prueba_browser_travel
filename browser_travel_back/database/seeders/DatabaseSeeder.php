<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\City::factory()->create([
            'name' => 'Miami',
            'lat' => '25.7826493',
            'lon' => '-80.3698896',
        ]);

        \App\Models\City::factory()->create([
            'name' => 'Orlando',
            'lat' => '28.4814029',
            'lon' => '-81.4830961',
        ]);

        \App\Models\City::factory()->create([
            'name' => 'New York',
            'lat' => '40.697668',
            'lon' => '-74.2605604',
        ]);
        
    }

}
