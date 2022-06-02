<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Activity;
use Illuminate\Database\Eloquent\Model;
use Cerbero\QueryFilters\FiltersRecords;

class Reservation extends Model
{
    use FiltersRecords;

    protected $fillable = [
        'private', 'experienceable_id',
        'experienceable_type', 'source', 'price', 'participants', 'notes', 'name',
        'email', 'address', 'phone', 'date', 'experience_id', "confirmation_token", "confirmation"
    ];

    public function reservationRarticipants()
    {
        return $this->hasMany('App\Models\ReservationParticipant');
    }

    public function experienceable()
    {
        return $this->morphTo();
    }

    public function activity($id)
    {
        return Activity::find($id);
    }

    public function storeParticipants($participants)
    {
        foreach ($participants as $participant) {
            $participant['birthday']  = new Carbon($participant['birthday']);
            $p = new ReservationParticipant($participant);
            $this->participants()->save($p);
        }
    }


    public static function disabledDates($people)
    {
        $reservations = Reservation::where("date", ">", Carbon::now())->latest()->get();
        $disabled = [];
        $dates = [];
        $treshold = $people ? 14 - $people : 14;

        foreach ($reservations as  $reservation) {

            if (!in_array($reservation->date, $disabled)) {
                if (array_key_exists($reservation->date, $dates)) {
                    $dates[$reservation->date] = $dates[$reservation->date] + $reservation->people;
                } else $dates[$reservation->date] = $reservation->people;

                if ($dates[$reservation->date] >= $treshold || $reservation->private) {
                    array_push($disabled, $reservation->date);
                }
            }
        }

        return ["dates" => $dates, "disabled" => $disabled];
    }
}
