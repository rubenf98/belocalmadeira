<?php

namespace App\Jobs;

use App\Mail\TransferConfirmationMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;


class TransferConfirmationEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email;
    protected $token;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aEmail, $aToken)
    {
        $this->email = $aEmail;
        $this->token = $aToken;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to($this->email)->queue(new TransferConfirmationMail($this->token));
    }
}
