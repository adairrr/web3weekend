const postcssPresetEnv = require('postcss-preset-env')
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
        postcssPresetEnv({
            browsers: ['>0.25%', 'not ie 11', 'not dead', 'not op_mini all']
        }),
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        require('postcss-nested'),
        cssnano({
            preset: 'default'
        }),
        purgecss({
            content: ['./src/**/*.js', './public/index.html'],
            defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        })
    ]
}
// this file does not work when in the monorepo, and paths are relative to: ./packages/fronend, 
// NOT where this file is located
