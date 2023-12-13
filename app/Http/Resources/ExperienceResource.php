<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExperienceResource extends JsonResource
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
            'activity_id' =>  $this->act,
            'visible' =>   $this->visible,
            'name' =>  $this->getTranslations('name'),
            'price' => $this->price,
            'private_price' => $this->private_price,
        ];
    }
}
