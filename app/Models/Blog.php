<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'body',
        'image',
        'date',
    ];

    protected $appends = ['next', 'previous'];

    public function getNextAttribute()
    {
        $next = self::select('id', 'title')
            ->where('id', '>', $this->id)
            ->orderBy('id', 'asc')
            ->first();

        return $next ? [
            'id' => $next->id,
            'title' => $next->title,
        ] : null;
    }

    public function getPreviousAttribute()
    {
        $previous = self::select('id', 'title')
            ->where('id', '<', $this->id)
            ->orderBy('id', 'desc')
            ->first();

        return $previous ? [
            'id' => $previous->id,
            'title' => $previous->title,
        ] : null;
    }
}
