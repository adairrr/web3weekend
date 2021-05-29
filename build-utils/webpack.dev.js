const commonPaths = require('./common-paths')
const webpack = require('webpack')
const port = process.env.PORT || 3000
const config = {
    mode: 'development',
    entry: {
        app: `${commonPaths.appEntry}/index.js`
    },
    output: {
        filename: '[name].[fullhash].js'
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    'postcss-loader',
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        hot: true,
        open: true, 
        proxy: {
            "/api/**": {
                target: "http://localhost:4000",
                pathRewrite: { '^/api': '' },
                headers: {
                    "Connection": "keep-alive"
                }
            }
        }
    }
}

module.exports = config