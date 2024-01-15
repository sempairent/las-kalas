import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            /*header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Inicio</h2>}*/
        >
            <Head title="Inicio" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-left ... ">Inicio</h5><br />

                        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white ">Bienvenido</h5><br />
                        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Puede escoger un servicio</p>
                        <br />
                        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            <a href="#" className="w-full sm:w-15 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-8 py-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                                <div className="text-left rtl:text-right">

                                    <div className="-mt-1 font-sans text-sm font-semibold">Consulta médica</div>
                                </div>
                            </a>
                            <a href="#" className="w-full sm:w-15 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-8 py-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                                <div className="text-left rtl:text-right">

                                    <div className="-mt-1 font-sans text-sm font-semibold ">Mis citas</div>
                                </div>
                            </a>
                        </div>


                        <br /><br />

                        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            <a href="#" className="w-full sm:w-15 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-8 py-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                                <div className="text-left rtl:text-right">

                                    <div className="-mt-1 font-sans text-sm font-semibold">Prescripciones médicas</div>
                                </div>
                            </a>
                            <a href="#" className="w-full sm:w-15 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-8 py-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                                <div className="text-left rtl:text-right">

                                    <div className="-mt-1 font-sans text-sm font-semibold">Registrar nueva cita</div>
                                </div>
                            </a>
                        </div>
                        <br /><br /><br />

                    </div>
                    <br /><br />

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
