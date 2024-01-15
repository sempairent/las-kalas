import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Especialidades({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Especialidades
                </h2>
            }
        >
            <Head title="Especialidad" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="sm:flex sm:justify-center">
                        <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none">
                            <a href="#!">
                                <img
                                    class="rounded-t-lg sm:rounded-tr-none"
                                    src="https://www.shutterstock.com/image-photo/man-portrait-doctor-wearing-white-600nw-2278090533.jpg"
                                    alt=""
                                />
                            </a>
                            <div class="p-6">
                                <h5 class="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    Dr. Midward Arela Y.
                                </h5>
                                <br />
                                <p class="text-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    Ginecologia y Obstetricia
                                </p>
                            </div>
                            <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                                <small>Especialidad</small>
                            </div>
                        </div>
                        <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-none">
                            <a href="#!">
                                <img
                                    class="rounded-t-lg sm:rounded-none"
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
                                    alt="Palm Springs Road"
                                />
                            </a>
                            <div class="p-6">
                                <h5 class="mb-2 text-xl font-medium leading-tight text-center text-neutral-800 dark:text-neutral-50">
                                    Dr. Mario Hancco G.
                                </h5>
                                <br />
                                <p class="mb-4 text-base text-center text-neutral-600 dark:text-neutral-200">
                                    Ginecología y Obstetricia
                                </p>
                            </div>
                            <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                                <small>Especialidad</small>
                            </div>
                        </div>
                        <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-l-none">
                            <a href="#!">
                                <img
                                    class="rounded-t-lg sm:rounded-tl-none"
                                    src="https://st.depositphotos.com/1518767/3917/i/450/depositphotos_39179963-stock-photo-male-doctor-with-laptop-at.jpg"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div class="p-6">
                                <h5 class="mb-2 text-xl font-medium leading-tight text-center text-neutral-800 dark:text-neutral-50">
                                    Dr. Vidmar Mengoa H.
                                </h5>{" "}
                                <br />
                                <p class="mb-4 text-base text-neutral-600 text-center dark:text-neutral-200">
                                    Nefrología
                                </p>
                            </div>
                            <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                                <small>Especialidad</small>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div class="sm:flex sm:justify-center">
                        <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-r-none">
                            <a href="#!">
                                <img
                                    class="rounded-t-lg sm:rounded-tr-none"
                                    src="https://www.shutterstock.com/image-photo/man-portrait-doctor-wearing-white-600nw-2278090533.jpg"
                                    alt="Hollywood Sign on The Hill"
                                />
                            </a>
                            <div class="p-6">
                                <h5 class="mb-2 text-xl font-medium leading-tight text-center text-neutral-800 dark:text-neutral-50">
                                    Dr. Felix E. Poma C.
                                </h5>{" "}
                                <br />
                                <p class="mb-4 text-base text-neutral-600 text-center dark:text-neutral-200">
                                    Cirugía General y Laparoscopia
                                </p>
                            </div>
                            <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                                <small>Especialidad</small>
                            </div>
                        </div>
                        <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-none">
                            <a href="#!">
                                <img
                                    class="rounded-t-lg sm:rounded-none"
                                    src="https://wallpaperset.com/w/full/9/2/0/455904.jpg"
                                    alt="Palm Springs Road"
                                />
                            </a>
                            <div class="p-6">
                                <h5 class="mb-2 text-xl font-medium leading-tight text-center text-neutral-800 dark:text-neutral-50">
                                    Dr. Alfredo Japura E.
                                </h5>
                                <br />
                                <p class="mb-4 text-base text-center text-neutral-600 dark:text-neutral-200">
                                    Oftamología
                                </p>
                            </div>
                            <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                                <small>Especialidad</small>
                            </div>
                        </div>
                        <div class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 sm:rounded-l-none">
                            <a href="#!">
                                <img
                                    class="rounded-t-lg sm:rounded-tl-none"
                                    src="https://c0.wallpaperflare.com/preview/685/663/788/adult-doctor-girl-healthcare.jpg"
                                    alt="Los Angeles Skyscrapers"
                                />
                            </a>
                            <div class="p-6">
                                <h5 class="mb-2 text-xl font-medium leading-tight text-center text-neutral-800 dark:text-neutral-50">
                                    Dra. Judith P. Ochoa M
                                </h5>
                                <br />
                                <p class="mb-4 text-base text-center text-neutral-600 dark:text-neutral-200">
                                    Reumatología
                                </p>
                            </div>
                            <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
                                <small>Especialidad</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
