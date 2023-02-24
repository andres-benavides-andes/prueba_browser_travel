<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;

class Historic extends Model
{
    use HasFactory;
    use Uuids;
    protected $fillable = [
        'humidity',
        'city_id'
    ];

    public function city(){
        return $this->belongsTo(City::class);
    }
}
