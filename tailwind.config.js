/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports =  {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors:{
                primary:{
                    1:'#4825ff',
                    2:'#3300bd'
                },
                scarWhite:{
                    1:'#ffffff'
                }
            }
        },
    },
    plugins: [],
}