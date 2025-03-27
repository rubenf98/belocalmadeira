<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Tour extends Model
{
    use HasTranslations, FiltersRecords;

    public $fillable = [
        'name',
        'subtitle',
        'title',
        'description',
        'description2',
        'description3',
        'description4',
        'image',
        'trajectory'
    ];

    public $translatable = [
        'name',
        'subtitle',
        'title',
        'description',
        'description2',
        'description3',
        'description4',
    ];

    public function transfers()
    {
        return $this->hasMany(Transfer::class);
    }
}
