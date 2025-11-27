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
            'activity' =>  $this->activity,
            'visible' =>   $this->visible,
            'level' =>   $this->level,
            'key' =>   $this->key,
            'price_per_person' =>   $this->price_per_person,

            'image' =>   $this->image,
            'name' =>  $this->getTranslations('name'),
            'description' =>  $this->getTranslations('description'),
            'price' => $this->price,
            'private_price' => $this->private_price,
        ];
    }
}
