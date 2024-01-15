import { useEffect, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

import { DatePickerInput } from "@mantine/dates";
import { format, parseISO } from "date-fns";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            paternal: user.paternal,
            maternal: user.maternal,
            departamento: user.departamento,
            provincia: user.provincia,
            distrito: user.distrito,
            dni: user.dni,
            birthday: user.birthday,
            email: user.email,
            current_address: user.current_address,
        });

    const [dateValue, setDateValue] = useState(
        user.birthday ? parseISO(user.birthday) : null
    );

    useEffect(() => {
        // Convierte la fecha seleccionada a un string en el formato 'yyyy-MM-dd'
        const formattedDate = dateValue ? format(dateValue, "yyyy-MM-dd") : "";

        // Solo actualiza si el valor es diferente para evitar el bucle infinito
        if (data.birthday !== formattedDate) {
            setData("birthday", formattedDate);
        }
    }, [dateValue]); // Dependencia solo en dateValue

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Perfil de información
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Actualice la información del perfil y la dirección de correo
                    electrónico de su cuenta.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Nombres" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value.toUpperCase())
                        }
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="paternal" value="Apellido Paterno" />

                    <TextInput
                        id="paternal"
                        className="mt-1 block w-full"
                        value={data.paternal}
                        onChange={(e) =>
                            setData("paternal", e.target.value.toUpperCase())
                        }
                        required
                        autoComplete="paternal"
                    />

                    <InputError className="mt-2" message={errors.paternal} />
                </div>

                <div>
                    <InputLabel htmlFor="maternal" value="Apellido Materno" />

                    <TextInput
                        id="maternal"
                        className="mt-1 block w-full"
                        value={data.maternal}
                        onChange={(e) =>
                            setData("maternal", e.target.value.toUpperCase())
                        }
                        required
                        autoComplete="maternal"
                    />

                    <InputError className="mt-2" message={errors.maternal} />
                </div>

                <div>
                    <InputLabel htmlFor="departamento" value="Departamento" />

                    <TextInput
                        id="departamento"
                        className="mt-1 block w-full"
                        value={data.departamento}
                        onChange={(e) =>
                            setData(
                                "departamento",
                                e.target.value.toUpperCase()
                            )
                        }
                        required
                        autoComplete="departamento"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.departamento}
                    />
                </div>

                <div>
                    <InputLabel htmlFor="provincia" value="Provincia" />

                    <TextInput
                        id="provincia"
                        className="mt-1 block w-full"
                        value={data.provincia}
                        onChange={(e) =>
                            setData("provincia", e.target.value.toUpperCase())
                        }
                        required
                        autoComplete="provincia"
                    />

                    <InputError className="mt-2" message={errors.provincia} />
                </div>

                <div>
                    <InputLabel htmlFor="distrito" value="Distrito" />

                    <TextInput
                        id="distrito"
                        className="mt-1 block w-full"
                        value={data.distrito}
                        onChange={(e) =>
                            setData("distrito", e.target.value.toUpperCase())
                        }
                        required
                        autoComplete="distrito"
                    />

                    <InputError className="mt-2" message={errors.distrito} />
                </div>

                <div>
                    <InputLabel htmlFor="dni" value="DNI" />

                    <TextInput
                        id="dni"
                        className="mt-1 block w-full"
                        value={data.dni}
                        onChange={(e) => setData("dni", e.target.value)}
                        required
                        autoComplete="dni"
                        maxLength={8}
                    />

                    <InputError className="mt-2" message={errors.dni} />
                </div>

                <div>
                    <InputLabel
                        htmlFor="birthday"
                        value="Fecha de Nacimiento"
                    />

                    {/* <TextInput
                        id="birthday"
                        className="mt-1 block w-full"
                        value={data.birthday}
                        onChange={(e) =>
                            setData("birthday", e.target.value.toUpperCase())
                        }
                        required
                        isFocused
                        autoComplete="birthday"
                    /> */}

                    <DatePickerInput
                        // size="xl"
                        id="birthday"
                        name="birthday"
                        className="mt-1 block w-full"
                        value={dateValue}
                        onChange={setDateValue}
                        required
                    />

                    <InputError className="mt-2" message={errors.birthday} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel
                        htmlFor="current_address"
                        value="Dirección actual"
                    />

                    <TextInput
                        id="current_address"
                        className="mt-1 block w-full"
                        value={data.current_address}
                        onChange={(e) =>
                            setData("current_address", e.target.value)
                        }
                        required
                        autoComplete="current_address"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.current_address}
                    />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Guardado.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
