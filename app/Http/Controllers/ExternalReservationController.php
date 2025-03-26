<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExternalReservationRequest;
use App\Http\Resources\ReservationResource;
use App\Jobs\ConfirmationEmail;
use App\Models\Reservation;
use Illuminate\Support\Facades\DB;

class ExternalReservationController extends Controller
{
    /**
     * handle new reservation from external sources
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ExternalReservationRequest $request)
    {
        $validator = $request->validated();

        DB::beginTransaction();
        $record = Reservation::create($validator);
        DB::commit();

        ConfirmationEmail::dispatch($record->email, $record->confirmation_token, null);
        return new ReservationResource($record);
    }
}
