/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                jost: ['Jost'],
                spartan: ['Spartan'],
                Sassy: ['Sassy Frass'],
                Solitreo:['Solitreo'],
                OpenSans:['Open Sans'],
                LeagueSpartan:['League Spartan']
            }

        },
    },
    plugins: [],
}
