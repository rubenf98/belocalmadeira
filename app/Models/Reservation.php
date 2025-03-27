<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Activity;
use Illuminate\Database\Eloquent\Model;
use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Support\Facades\Storage;
use setasign\Fpdi\Fpdi;

class Reservation extends Model
{
    use FiltersRecords;

    protected $fillable = [
        'private', 'experienceable_id',
        'experienceable_type', 'source', 'price', 'participants', 'notes', 'name', 'recipient',
        'email', 'address', 'phone', 'date', 'experience_id', "confirmation_token", "confirmation", "coupon_id"
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

            $this->reservationRarticipants()->save($p);
        }
    }


    public static function disabledDates($people)
    {
        $reservations = Reservation::where("date", ">", Carbon::now())->latest()->get();
        $initDisabled = BlockReservationDate::where("date", ">", Carbon::now())->latest()->get();
        $disabled = [];

        foreach ($initDisabled as $date) {
            array_push($disabled, $date->date);
        }
        $dates = [];
        $treshold = $people ? 14 - $people : 14;

        foreach ($reservations as  $reservation) {

            if (!in_array($reservation->date, $disabled)) {
                if (array_key_exists($reservation->date, $dates)) {
                    $dates[$reservation->date] = $dates[$reservation->date] + $reservation->participants;
                } else $dates[$reservation->date] = $reservation->participants;

                if ($dates[$reservation->date] >= $treshold || $reservation->private) {
                    array_push($disabled, $reservation->date);
                }
            }
        }

        return ["dates" => $dates, "disabled" => $disabled];
    }

    public function process($filename, $from, $to, $activity)
    {
        // download sample file.
        //Storage::disk('local')->put('test.pdf', file_get_contents(storage_path("/app/voucher.pdf")));

        $outputFile = Storage::disk('local')->path($filename);
        // fill data
        self::fillPDF(Storage::disk('local')->path('voucher.pdf'), $outputFile, $from, $to, $activity);
        //output to browser
        return response()->file($outputFile);
    }

    public static function fillPDF($file, $outputFile, $from, $to, $activity)
    {
        $fpdi = new FPDI;
        // merger operations
        $count = $fpdi->setSourceFile($file);
        for ($i = 1; $i <= $count; $i++) {
            $template   = $fpdi->importPage($i);
            $size       = $fpdi->getTemplateSize($template);
            $fpdi->AddPage($size['orientation'], array($size['width'], $size['height']));
            $fpdi->useTemplate($template);

            $fpdi->SetFont("helvetica", "", 12);
            $fpdi->SetTextColor(10, 10, 10);
            $fpdi->Text(35, 97, $from);
            $fpdi->Text(35, 107, $to);
            $fpdi->Text(35, 119, $activity);
        }
        return $fpdi->Output($outputFile, 'F');
    }
}
