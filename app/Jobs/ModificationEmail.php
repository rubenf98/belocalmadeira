<?php

namespace App\Jobs;

use App\Mail\ModificationEmail as MailModificationEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class ModificationEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $reservation;
    protected $changes;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aReservation, $aChanges)
    {
        $this->reservation = $aReservation;
        $this->changes = $aChanges;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to("belocalmadeira@gmail.com")->queue(new MailModificationEmail($this->reservation, $this->changes));
    }
}
