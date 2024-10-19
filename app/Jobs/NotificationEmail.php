<?php

namespace App\Jobs;

use App\Mail\NotificationEmail as MailNotificationEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NotificationEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $reservation;
    protected $type;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aReservation, $aType)
    {
        $this->reservation = $aReservation;
        $this->type = $aType;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Mail::to("belocalmadeira@gmail.com")->queue(new MailNotificationEmail($this->reservation, $this->type));
    }
}
