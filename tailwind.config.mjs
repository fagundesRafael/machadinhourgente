// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Inclui tudo dentro de 'app'
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Inclui tudo dentro de 'components'
];
export const theme = {
    extend: {
        // Suas extensões de tema
    },
};
export const plugins = [];