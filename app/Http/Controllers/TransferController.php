<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransferRequest;
use App\Http\Resources\TransferResource;
use App\Models\Transfer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Jobs\ConfirmationEmail;
use App\Jobs\NotificationEmail;
use App\Jobs\TransferConfirmationEmail;
use App\QueryFilters\TransferFilters;

class TransferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(TransferFilters $filters)
    {
        return TransferResource::collection(Transfer::filterBy($filters)->latest()->paginate(10));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showFromToken(Request $request)
    {
        $transfer = Transfer::where("confirmation_token", $request->token)->first();

        if (!$transfer->confirmation) {
            NotificationEmail::dispatch($transfer, "um novo transfer")->delay(now()->addSecond());
            $transfer->confirmation = true;
            $transfer->save();
        }

        return new TransferResource($transfer);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TransferRequest $request)
    {
        $validator = $request->validated();

        $record = Transfer::create($validator);

        TransferConfirmationEmail::dispatch($record->email, $record->confirmation_token)->delay(now()->addSecond());


        return new TransferResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transfer  $Transfer
     * @return \Illuminate\Http\Response
     */
    public function show(Transfer $transfer)
    {
        return new TransferResource($transfer);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transfer  $Transfer
     * @return \Illuminate\Http\Response
     */
    public function edit(Transfer $transfer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transfer  $Transfer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transfer $transfer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transfer  $Transfer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transfer $transfer)
    {
        //
    }
}
