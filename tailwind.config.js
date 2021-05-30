const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.js'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                lime: colors.lime,
                truegray: colors.trueGray,
                gray: colors.gray,
                teal: colors.teal,
                cyan: colors.cyan,
                indigo: colors.indigo
            },
            inset: {
                '-68': '-17rem',
                '68': '17rem',
                '116': '29rem',
                '176': '44rem',
                '184': '46rem',
                '188': '47rem',
                '240': '60rem',
                '224': '56rem',
                '172': '43rem'
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio')
    ]
}