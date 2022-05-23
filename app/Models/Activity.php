<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Activity extends Model
{
    use HasTranslations;

    public $translatable = [
        'name'
    ];

    public function experiences()
    {
        return $this->hasMany("App\Models\Experience");
    }

    public function reservation()
    {
        return $this->hasManyThrough(Reservation::class, Experience::class);
    }

    public function reservations()
    {
        return $this->morphMany(Reservation::class, 'experienceable');
    }
}
