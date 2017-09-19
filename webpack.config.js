const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const extractSass = new ExtractTextPlugin({
    filename: 'css/main.css',
    allChunks: true
});

module.exports = {
    entry: [
        './src/css/main.scss',
        './src/js/main.js'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [ {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
                })
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        extractSass,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            lodash: "lodash"
        })
    ],
    devtool: 'source-map'
};