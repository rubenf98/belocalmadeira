<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsletterResource;
use App\Models\Newsletter;

class HandleNewsletterSubscriptionInvokable extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Newsletter $newsletter)
    {
        $newsletter->subscribed = !$newsletter->subscribed;
        $newsletter->save();

        return new NewsletterResource($newsletter);
    }
}
