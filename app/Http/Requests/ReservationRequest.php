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
            $price = $activity->price * count($this->person);
        } else {
            $experience = Experience::find($this->activity[1]);
            $price = $experience->price * count($this->person);
        }

        $this->merge([
            'date' => new Carbon($this->date),
            'price' => $price,
            'private' => $this->private && true,
            'confirmation_token' => uniqid(),
            'experienceable_type' => $this->polymorphic_classes[$helper_size - 1],
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
            'date' => 'required|date|after:today',
            'address' => 'required|string',
            'experienceable_type' => 'required|string',
            'experienceable_id' => 'required|integer|exists:' . ($this->experienceable_type == 'App\Models\Activity' ? "activities" : "experiences") . ',id',
            'confirmation_token' => 'required',
            'email' => 'required|email',
            'price' => 'required',
            'name' => 'required|string',
            'participants' => 'required|integer|min:3|max:15',
            'private' => 'required|boolean',
            'phone' => 'nullable|numeric',
            'person' => 'required|size:' . $this->participants,
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
