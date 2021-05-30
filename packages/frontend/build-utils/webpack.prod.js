const commonPaths = require('./common-paths')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = {
    mode: 'production',
    entry: {
        app: `${commonPaths.appEntry}/index.js`
    },
    output: {
        filename: 'static/[name].[fullhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        removeAvailableModules: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                parallel: true,
                terserOptions: {
                    keep_classnames: false,
                    mangle: true,
                    compress: false,
                    keep_fnames: false,
                    toplevel: true,
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    plugins: [
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10000
        }),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 15
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/styles.[fullhash].css'
        }),
        new CleanWebpackPlugin({
            options: {
                output: {
                    path: commonPaths.outputPath
                }
            }
        })
    ]
}

module.exports = config