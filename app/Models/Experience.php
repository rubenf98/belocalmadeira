<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;
use Cerbero\QueryFilters\FiltersRecords;

class Experience extends Model
{
    use HasTranslations;
    use FiltersRecords;

    public $translatable = [
        'name', 'level',
    ];

    protected $with = ['activity'];

    public function activity()
    {
        return $this->belongsTo("App\Models\Activity");
    }

    public function reservations()
    {
        return $this->morphMany(Reservation::class, 'experienceable');
    }
}
