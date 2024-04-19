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
                    2:'#3300bd',
                    3:'rgba(101,104,255,0.89)'
                },

                secondary:{
                    1:'#f4f4f4',
                    2:'#aeadad',
                    3:'#f4f4f4',
                },
                details:{
                    1:'#1e1e1e'
                },
                textPrimary:{
                    1:'#ffffff'
                    ,
                    2:'#ffffff'
                },
                scarWhite:{
                    1:'#ffffff'
                }
            }
        },
    },
    plugins: [],
}