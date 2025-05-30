<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'experienceable' =>  $this->experienceable,
            'name' =>   $this->name,
            'email' =>   $this->email,
            'recipient' =>   $this->recipient,
            'price' =>   $this->price,
            'seen' =>   $this->seen,
            'address' =>   $this->address,
            'phone' =>   $this->phone,
            'coupon' =>   $this->coupon,
            'source' =>   $this->source,
            'date' =>   $this->date,
            'time' =>   $this->time,
            'people' =>   $this->people,
            'notes' =>   $this->notes,
            'private' =>   $this->private,
            'confirmation' =>  (int) $this->confirmation,
            'participants' =>   $this->participants,
            'reservationRarticipants' =>   $this->reservationRarticipants,
            'created_at' => (string) $this->created_at,
            'updated_at' => (string) $this->updated_at,
        ];
    }
}
