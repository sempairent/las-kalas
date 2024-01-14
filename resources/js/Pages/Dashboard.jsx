import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div class="py-20 px-20 flex flex-col items-center md:flex-row md:justify-center">
    <div class="mb-5 md:mb-0 md:mr-2 w-full md:w-1/2">
        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-8 md:px-20 py-4 mb-5 w-full md:w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Consulta médica
        </button>
    </div>
    <div class="md:ml-2 w-full md:w-1/2">
        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-8 md:px-20 py-4 mb-5 w-full md:w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Mis citas
        </button>
    </div>
</div>
<div class="py-20 px-20 flex flex-col items-center md:flex-row md:justify-center">
    <div class="mb-5 md:mb-0 md:mr-2 w-full md:w-1/2">
        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-8 md:px-20 py-4 mb-5 w-full md:w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Prescripciones médicas
        </button>
    </div>
    <div class="md:ml-2 w-full md:w-1/2">
        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-8 md:px-20 py-4 mb-5 w-full md:w-full dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Registrar nueva cita
        </button>
    </div>
</div>





        </AuthenticatedLayout>
    );
}
