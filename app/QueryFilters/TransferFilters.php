<?php

namespace App\QueryFilters;

use Carbon\Carbon;
use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class TransferFilters extends QueryFilters
{
    public function client($string)
    {
        $this->query->where('name', 'like', '%' . $string . '%')
            ->orWhere('email', 'like', '%' . $string . '%')
            ->orWhere('phone', 'like', '%' . $string . '%');
    }

    public function trajectory($string)
    {
        $this->query->where('trajectory', 'like', '%' . $string . '%');
    }

    public function date($string)
    {
        $this->query->whereDay('date', Carbon::parse($string));
    }

    public function returnDate($string)
    {
        $this->query->whereDay('return_date', Carbon::parse($string));
    }
}
