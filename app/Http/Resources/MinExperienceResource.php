<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MinExperienceResource extends JsonResource
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
            'value' => $this->id,
            'name' => $this->getTranslations('name'),
            'label' =>  $this->getTranslation('name', $request->language) . ($this->price ? (" (" . $this->price . "€)") : ""),
            'price' => $this->price,
            'image' =>   $this->image,
            'pickup' => $this->getTranslations('pickup'),
            'pickup_address' => $this->pickup_address,
            'price_per_person' =>   $this->price_per_person,
            'private_price' => $this->private_price,
        ];
    }
}
