import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

import { Select } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { format } from "date-fns";

import dataDepartamentos from "../../Datos/DataDepartamentos";
import dataProvincias from "../../Datos/DataProvincias";

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

    const [dateValue, setDateValue] = useState(null);
    useEffect(() => {
        // Convierte la fecha seleccionada a un string en el formato 'yyyy-MM-dd'
        const formattedDate = dateValue ? format(dateValue, "yyyy-MM-dd") : "";

        // Solo actualiza si el valor es diferente para evitar el bucle infinito
        if (data.birthday !== formattedDate) {
            setData("birthday", formattedDate);
        }
    }, [dateValue]); // Dependencia solo en dateValue

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    const [departamento, setDepartamento] = useState("");
    const [provincia, setProvincia] = useState("");
    const [distrito, setDistrito] = useState("");

    // Actualiza las provincias cuando cambia el departamento
    const handleDepartamentoChange = (value) => {
        // setDepartamento(value);
        // setProvincia("");
        // setDistrito("");
        // setData({ ...data, departamento: value, provincia: "", distrito: "" });
        setData({ ...data, departamento:value});
        setDepartamento(value);
        setProvincia("");
        setDistrito("");
    };

    // Actualiza los distritos cuando cambia la provincia
    const handleProvinciaChange = (value) => {
        // setProvincia(value);
        // setDistrito("");
        // setData({ ...data, provincia: value, distrito: "" });
        setData({ ...data, provincia:value});
        setProvincia(value);
        setProvincia(value);
        setDistrito("");
    };

    const handleDistritoChange = (value) => {
        // setData({ ...data, distrito: value });
        setData({ ...data, distrito:value});
        setDistrito(value);
    };

    // Obtiene las provincias para el departamento seleccionado
    const provincias = departamento
        ? dataDepartamentos[departamento] || []
        : [];

    // Obtiene los distritos para la provincia seleccionada
    const distritos = provincia ? dataProvincias[provincia] || [] : [];

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
                    <div className="mt-4 w-full">
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

                    <div className="mt-4 w-full">
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
                    <div className="mt-4 w-full">
                        <InputLabel htmlFor="distrito" value="Departamento" />

                        <Select
                            key={`departamento-${departamento}`}
                            id="departamento"
                            name="departamento"
                            value={departamento}
                            className="mt-1 block w-full"
                            autoComplete="departamento"
                            data={Object.keys(dataDepartamentos)}
                            // onChange={(value) => setData("departamento", value)}
                            // onChange={handleDepartamentoChange}
                            onChange={(value) =>
                                handleDepartamentoChange(value)
                            }
                            required
                        />

                        <InputError
                            message={errors.departamento}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 w-full">
                        <InputLabel htmlFor="provincia" value="Provincia" />

                        <Select
                            key={`provincia-${provincia}`}
                            id="provincia"
                            name="provincia"
                            value={provincia}
                            className="mt-1 block w-full"
                            autoComplete="provincia"
                            data={provincias}
                            // onChange={(value) => setData("provincia", value)}
                            // onChange={handleProvinciaChange}
                            onChange={(value) => handleProvinciaChange(value)}
                            required
                        />

                        <InputError
                            message={errors.provincia}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 w-full">
                        <InputLabel htmlFor="distrito" value="Distrito" />

                        <Select
                            key={`distrito-${distrito}`}
                            id="distrito"
                            name="distrito"
                            value={distrito}
                            className="mt-1 block w-full"
                            autoComplete="distrito"
                            data={distritos}
                            // onChange={(value) => setData("distrito", value)}
                            // onChange={(value) => setDistrito(value)}

                            onChange={(value) => handleDistritoChange(value)}
                            required
                        />

                        <InputError
                            message={errors.distrito}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="flex space-x-2">
                    <div className="mt-4 w-full">
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

                    <div className="mt-4 w-full">
                        <InputLabel
                            htmlFor="birthday"
                            value="Fecha de nacimiento"
                        />
                        <DatePickerInput
                            id="birthday"
                            name="birthday"
                            className="mt-1 block w-full"
                            value={
                                data.birthday ? new Date(data.birthday) : null
                            }
                            onChange={setDateValue}
                            required
                        />

                        <InputError
                            message={errors.birthday}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div className="mt-4 w-full">
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

                <div className="mt-4 w-full">
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
                            setData("current_address", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.current_address}
                        className="mt-2"
                    />
                </div>

                <div className="flex space-x-2">
                    <div className="mt-4 w-full">
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

                    <div className="mt-4 w-full">
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
