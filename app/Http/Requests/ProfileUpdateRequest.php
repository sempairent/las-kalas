<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:25', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/'],
            'paternal' => ['required', 'string', 'max:15', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/'],
            'maternal' => ['required', 'string', 'max:15', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/'],
            'departamento' => ['required', 'string', 'max:30', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/'],
            'provincia' => ['required', 'string', 'max:30', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/'],
            'distrito' => ['required', 'string', 'max:30', 'regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/'],
            'dni' => ['required', 'size:8', 'regex:/^[0-9]+$/', Rule::unique(User::class)->ignore($this->user()->id)],
            'birthday' => ['required', 'date', 'after:1900-01-01', 'before_or_equal:today'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:40', Rule::unique(User::class)->ignore($this->user()->id)],
            'current_address' => ['required', 'string', 'max:70'],
        ];
    }
}
