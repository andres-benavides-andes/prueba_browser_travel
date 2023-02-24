<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Historic;
use App\Models\City;
use Illuminate\Http\Request;
use App\Http\Resources\V1\HistoricResource;
use Symfony\Component\HttpFoundation\Response;



class HistoricController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $historics = Historic::all();
        foreach ($historics as $key=>$historic){
            $city_name = City::find($historic['city_id'])->name;
            $historics[$key]->city = $city_name;
        }
        return HistoricResource::collection($historics);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //dd($request->all());
        $records = $request->all()['records'];
        foreach ($records as $record){
            $historic =  Historic::create($record);
            $historic->save();
        }
        return response()->noContent(Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Historic $historic)
    {
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Historic $historic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Historic $historic)
    {
        //
    }
}
