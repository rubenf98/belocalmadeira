<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotificationEmail extends Mailable
{
    public $reservation;
    public $type;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($reservation, $aType)
    {
        $this->reservation = $reservation;
        $this->type = $aType;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.reservation')->subject('Nova reserva');
    }
}
