import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            "black-900": "#232323",
            "black-800": "#343434",
            "black-700": "#454545",
            "black-600": "#565656",
            "black-500": "#676767",
            "black-400": "#898989",
            "black-300": "#9a9a9a",
            "black-200": "#ababab",
            "black-100": "#bdbdbd",
            white: "#eeeeee",
            red: "#cf0a0a",
        },
    },
    plugins: [addDynamicIconSelectors()],
};
