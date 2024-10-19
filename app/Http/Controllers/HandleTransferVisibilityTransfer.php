<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransferResource;
use App\Models\Transfer;
use Illuminate\Http\Request;

class HandleTransferVisibilityTransfer extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Transfer $transfer)
    {
        $transfer->admin_confirmation = 1;
        $transfer->save();

        return new TransferResource($transfer);
    }
}
