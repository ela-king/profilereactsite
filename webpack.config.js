const webpack = require('webpack');
const htmlplugin = require('html-webpack-plugin');
const path = require("path");

const config = {
    mode: process.env.NODE_ENV || "production",
    entry: "./app/index.js",
    output: {
        publicPath: "/",
        path: path.resolve("dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                { 
                    loader: 'css-loader',
                    options: { importLoaders: 1 } 
                },
                'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlplugin({
            template: "./public/index.html"
        })
    ],
    devServer: {
        hot: true,
        open: true,
        inline: true,
        contentBase: ['./app']
    },
    target: "web",
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

module.exports = config;