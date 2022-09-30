<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ConfirmationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    protected $voucherName;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token, $voucherName)
    {
        $this->token = $token;
        $this->voucherName = $voucherName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $response = $this->view('emails.confirmation')->subject('Finaliza a tua reserva connosco!');
        if ($this->voucherName) {
            $response->attach(storage_path("/app/" . $this->voucherName));
        }
        return $response;
    }
}
