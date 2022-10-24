module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                comicsans: ["comicsans", "sans-serif"],
                montserrat: ["Montserrat", "sans-serrif"]
            }
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
