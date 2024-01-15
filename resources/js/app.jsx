import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import { MantineProvider, createTheme, Input } from "@mantine/core";
import inputClasses from "../css/Input.module.css";

const myTheme = createTheme({
    primaryColor: "blue",
    defaultRadius: "md",
    components: {
        Input: Input.extend({
            classNames: {
                input: inputClasses.input,
            },
        }),
    },
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <MantineProvider theme={myTheme}>
                <App {...props} />
            </MantineProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
