<?php

namespace App\Http\Requests;

use App\Models\Experience;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class ExternalReservationRequest extends FormRequest
{
    private $polymorphic_classes = ['App\Models\Activity', 'App\Models\Experience'];

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $helper_size = count($this->experience);
        $experienceable_type = $this->polymorphic_classes[$helper_size - 1];

        $this->merge([
            'date' => new Carbon($this->date),
            'confirmation_token' => uniqid(),
            'experience_id' => $this->experience[1],
            'confirmation' => 1,
            'participants' => $this->people,
            'experienceable_type' => $experienceable_type,
            'experienceable_id' =>  $helper_size == 2 ? $this->experience[1] : $this->experience[0],
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
            'confirmation_token' => 'required',
            'source' => 'required',
            'confirmation' => 'required',
            'email' => 'required|email',
            'name' => 'required|string',
            'price' => 'required',
            'participants' => 'required|integer|min:2|max:15',
            'experienceable_type' => 'required|string',
            'experienceable_id' => 'required|integer|exists:' . ($this->experienceable_type == 'App\Models\Activity' ? "activities" : "experiences") . ',id',
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
