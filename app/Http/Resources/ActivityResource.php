<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
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
            'price' => $this->price,
            'private_price' => $this->private_price,
            'label' =>  $this->getTranslation('name', $request->language) . ($this->price ? (" (" . $this->price . "€)") : ""),
            'children' => MinExperienceResource::collection($this->experiences()->where('visible', 1)->get()),
        ];
    }
}
