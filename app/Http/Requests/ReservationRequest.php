<?php

namespace App\Http\Requests;

use App\Models\Activity;
use App\Models\Experience;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class ReservationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    private $polymorphic_classes = ['App\Models\Activity', 'App\Models\Experience'];

    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $price = 0;
        $helper_size = count($this->activity);
        $experienceable_type = $this->polymorphic_classes[$helper_size - 1];
        if ($experienceable_type == 'App\Models\Activity') {
            $activity = Activity::find($this->activity[0]);
            $price = ($this->private ? $activity->private_price : $activity->price) * $this->participants;
        } else {
            $experience = Experience::find($this->activity[1]);
            if ($experience->visible) {
                $price = ($this->private ? $experience->private_price : $experience->price) * $this->participants;
            } else {
                $price = 120;
            }
        }

        if ($this->participants >= 4) {
            $price = $price * .9;
        }

        $phone = null;
        if (is_array($this->phone)) {
            if (array_key_exists("code", $this->phone) && array_key_exists("phone", $this->phone)) {
                $phone = $this->phone["code"] . $this->phone["phone"];
            }
        } else {
            $phone = $this->phone;
        }



        if ($this->date) {
            $this->merge([
                'date' => new Carbon($this->date)
            ]);
        }

        $this->merge([
            'price' => $price,
            'source' => "website",
            'phone' =>  $phone,
            'private' => $this->private && true,
            'confirmation_token' => uniqid(),
            'experienceable_type' => $experienceable_type,
            'experienceable_id' =>  $helper_size == 2 ? $this->activity[1] : $this->activity[0],
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'date' => 'required_if:source,website|date|after:today',
            'source' => 'required|string',
            'address' => 'required_if:source,website|string',
            'experienceable_type' => 'required|string',
            'experienceable_id' => 'required|integer|exists:' . ($this->experienceable_type == 'App\Models\Activity' ? "activities" : "experiences") . ',id',
            'confirmation_token' => 'required',
            'email' => 'required|email',
            'price' => 'required',
            'name' => 'required|string',
            'participants' => 'required|integer|min:1|max:15',
            'private' => 'required_if:source,website|boolean',
            'phone' => 'required|numeric',
            'person' => 'required_if:source,website|size:' . $this->participants,
            'person.*.name' => 'required|string',
            'person.*.birthday' => 'required|date',
            'person.*.gender' => 'required|string',
            'person.*.height' => 'required',
            'person.*.shoe' => 'required|string',
            'person.*.weight' => 'required',
        ];
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Reservation requires a reservation name',
            'email.required' => 'Reservation requires a contact email',
            'address.required' => 'Pickup address is required',
            'person.size' => 'Information for all participants is required',
            'person.*.birthday.required' => 'Birthday for all participants is required',
            'person.*.gender.required' => 'Gender for all participants is required',
            'person.*.height.required' => 'Height for all participants is required',
            'person.*.shoe.required' => 'Show size for all participants is required',
            'person.*.weight.required' => 'Weight for all participants is required',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422));
    }
}
