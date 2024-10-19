<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfer extends Model
{
    use HasFactory, FiltersRecords;

    protected $fillable = [
        'price', 'confirmed_at', 'seen',
        'phone', 'name', 'email', 'location', 'date', 'return_date', 'trajectory', 'passengers', 'tour_id', "confirmation_token", "confirmation"
    ];

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }
}
