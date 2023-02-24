<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;
use App\Http\Resources\V1\CityResource;
use Illuminate\Support\Facades\Http;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$client->request('GET');
        $cities = City::all();

        $baseUrl = env('OPEN_WEATHER_API');

        foreach ($cities as $key=>$city){
            $params = [
                   'lat' => $city['lat'],
                   'lon' => $city['lon'],
                   'appid' => env('OPEN_WEATHER_API_KEY')
                ];
            $api_info = Http::get($baseUrl,$params);
            $cities[$key]->humidity = $api_info->object()->current->humidity;
        }
        return CityResource::collection($cities);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       
    }

    /**
     * Display the specified resource.
     */
    public function show(City $city)
    {
        return new CityResource($city);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, City $city)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(City $city)
    {
        //
    }
}
