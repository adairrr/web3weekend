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
                truegray: colors.trueGray
            }
        }
    }
}