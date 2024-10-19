<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class ActivityFilters extends QueryFilters
{
    public function visible($status)
    {
        $this->query->where('visible', $status);
    }
}
