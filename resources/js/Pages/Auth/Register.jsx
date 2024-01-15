import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

import { DatePicker } from "antd";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        paternal: "",
        maternal: "",
        departamento: "",
        provincia: "",
        distrito: "",
        dni: "",
        birthday: "",
        email: "",
        current_address: "",
        password: "",
        password_confirmation: "",
    });

    const handleDateChange = (date, dateString) => {
        setData("birthday", dateString); // Actualiza el estado del formulario con la fecha seleccionada
    };

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Nombres" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) =>
                            setData("name", e.target.value.toUpperCase())
                        }
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="flex space-x-2">
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="paternal"
                            value="Apellido Paterno"
                        />

                        <TextInput
                            id="paternal"
                            name="paternal"
                            value={data.paternal}
                            className="mt-1 block w-full"
                            autoComplete="paternal"
                            onChange={(e) =>
                                setData(
                                    "paternal",
                                    e.target.value.toUpperCase()
                                )
                            }
                            required
                        />

                        <InputError
                            message={errors.paternal}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="maternal"
                            value="Apellido Materno"
                        />

                        <TextInput
                            id="maternal"
                            name="maternal"
                            value={data.maternal}
                            className="mt-1 block w-full"
                            autoComplete="maternal"
                            onChange={(e) =>
                                setData(
                                    "maternal",
                                    e.target.value.toUpperCase()
                                )
                            }
                            required
                        />

                        <InputError
                            message={errors.maternal}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className="mt-4">
                        <InputLabel htmlFor="distrito" value="Departamento" />

                        <TextInput
                            id="departamento"
                            name="departamento"
                            value={data.departamento}
                            className="mt-1 block w-full"
                            autoComplete="departamento"
                            onChange={(e) =>
                                setData(
                                    "departamento",
                                    e.target.value.toUpperCase()
                                )
                            }
                            required
                        />

                        <InputError
                            message={errors.departamento}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="provincia" value="Provincia" />

                        <TextInput
                            id="provincia"
                            name="provincia"
                            value={data.provincia}
                            className="mt-1 block w-full"
                            autoComplete="provincia"
                            onChange={(e) =>
                                setData(
                                    "provincia",
                                    e.target.value.toUpperCase()
                                )
                            }
                            required
                        />

                        <InputError
                            message={errors.provincia}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="distrito" value="Distrito" />

                        <TextInput
                            id="distrito"
                            name="distrito"
                            value={data.distrito}
                            className="mt-1 block w-full"
                            autoComplete="distrito"
                            onChange={(e) =>
                                setData(
                                    "distrito",
                                    e.target.value.toUpperCase()
                                )
                            }
                            required
                        />

                        <InputError
                            message={errors.distrito}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className="mt-4">
                        <InputLabel htmlFor="dni" value="DNI" />

                        <TextInput
                            id="dni"
                            name="dni"
                            value={data.dni}
                            className="mt-1 block w-full"
                            autoComplete="dni"
                            onChange={(e) => setData("dni", e.target.value)}
                            maxLength={8}
                            required
                        />

                        <InputError message={errors.dni} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="birthday"
                            value="Fecha de nacimiento"
                        />

                        {/* <TextInput
                            id="birthday"
                            name="birthday"
                            value={data.birthday}
                            className="mt-1 block w-full"
                            autoComplete="birthday"
                            onChange={(e) =>
                                setData("birthday", e.target.value)
                            }
                            required
                        /> */}
                        <DatePicker
                            id="birthday"
                            name="birthday"
                            className="mt-1 block w-full"
                            onChange={handleDateChange}
                            format="YYYY-MM-DD" // Formato de fecha, ajusta según necesidad
                            autoComplete="birthday"
                            required
                        />

                        <InputError
                            message={errors.birthday}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="current_address"
                        value="Dirección actual"
                    />

                    <TextInput
                        id="current_address"
                        current_address="current_address"
                        value={data.current_address}
                        className="mt-1 block w-full"
                        autoComplete="current_address"
                        onChange={(e) =>
                            setData(
                                "current_address",
                                e.target.value.toUpperCase()
                            )
                        }
                        required
                    />

                    <InputError
                        message={errors.current_address}
                        className="mt-2"
                    />
                </div>

                <div className="flex space-x-2">
                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Contraseña" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirmar contraseña"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        ¿Ya estás registrado?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Registrar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
