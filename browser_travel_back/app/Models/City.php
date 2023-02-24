<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuids;


class City extends Model
{
    use HasFactory;
    use Uuids;
    protected $fillable = [
        'name',
        'lat',
        'lon'
    ];


    public function historic(): HasMany{
        return $this->hasMany(Historic::class);
    }
}
