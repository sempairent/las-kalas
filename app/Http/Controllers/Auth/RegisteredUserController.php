<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:25|regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/',
            'paternal' => 'required|string|max:15|regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/',
            'maternal' => 'required|string|max:15|regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/',
            'departamento' => 'required|string|max:20|regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/',
            'provincia' => 'required|string|max:20|regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/',
            'distrito' => 'required|string|max:20|regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/',
            'dni' => 'required|size:8|regex:/^[0-9]+$/|unique:'.User::class,
            'birthday' => 'required|date|after:1900-01-01|before_or_equal:today',
            'email' => 'required|string|lowercase|email|max:40|unique:'.User::class,
            'current_address' => 'required|string|max:70',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'paternal' => $request->paternal,
            'maternal' => $request->maternal,
            'departamento' => $request->departamento,
            'provincia' => $request->provincia,
            'distrito' => $request->distrito,
            'dni' => $request->dni,
            'birthday' => $request->birthday,
            'email' => $request->email,
            'current_address' => $request->current_address,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
