<?php

namespace App\Http\Requests;

use App\Models\Activity;
use App\Models\Experience;
use App\Models\Tour;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class TransferRequest extends FormRequest
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
        $tour = Tour::find($this->tour);
        $price =  $tour->price * $this->participants;

        if ($this->return) {
            $price = $price * 2;
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
        $trajectory = "";
        if ($tour->trajectory) {
            $trajectory = $tour->trajectory;
        } else {
            if ($this->direction == "to") {
                $trajectory =  "Aeroporto - " . $this->address;
            } else {
                $trajectory =  $this->address . " - Aeroporto";
            }
        }



        if ($this->date) {
            $this->merge([
                'date' => Carbon::createFromFormat('Y-m-d H:i', $this->date)
            ]);
        }

        if ($this->return) {
            $this->merge([
                'return_date' => Carbon::createFromFormat('Y-m-d H:i', $this->return_date)
            ]);
        }

        $this->merge([
            'price' => $price,
            'phone' =>  $phone,
            'tour_id' => $this->tour,
            'confirmation_token' => uniqid(),
            'passengers' => $this->participants,
            'trajectory' => $trajectory,
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
            'return_date' => 'nullable|date|after:today',
            'address' => 'nullable|string',
            'trajectory' => 'required|string',
            'tour_id' => 'required|integer|exists:tours,id',
            'confirmation_token' => 'required',
            'email' => 'required|email',
            'price' => 'required',
            'phone' => 'required',
            'name' => 'required|string',
            'passengers' => 'required|integer|min:1|max:15',
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
