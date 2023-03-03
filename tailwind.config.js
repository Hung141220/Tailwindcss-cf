/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "light-coffee": "#c89f94",
            },
        },
    },
    plugins: [],
};
