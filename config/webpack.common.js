var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: helpers.root('src/app/index.js'),
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
            // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader'), exclude: /node_modules/},
            // { test: /\.css$/, loader: 'raw', exclude: /node_modules/},
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]', exclude: /node_modules/ }
        ]
    },
    plugins: [
        // new ExtractTextPlugin({
        //     filename: "[name].css",
        //     allChunks: true
        // })
    ]
};