<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityDropdownResource extends JsonResource
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
            'image' =>   $this->image,
            'name' => $this->getTranslations('name'),
            'label' => $this->getTranslation('name', $request->language) . ($this->price ? (" (" . $this->price . "€)") : ""),
            'children' => MinExperienceResource::collection($this->experiences()->where('visible', 1)->get()),
        ];
    }
}
