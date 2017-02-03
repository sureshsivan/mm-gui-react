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
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
            // { test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
            // { test: /\.css$/, exclude: /node_modules/, use: ExtractTextPlugin.extract({
            //         loader: 'css-loader',
            //         options: {
            //             sourceMap: true
            //         }
            //     })
            // },
            // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader'), exclude: /node_modules/},
            // { test: /\.css$/, loader: 'raw', exclude: /node_modules/},
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' }
        ]
    },
    plugins: [
        // new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true })
        // new ExtractTextPlugin({
        //     filename: "[name].css",
        //     allChunks: true
        // })
    ]
};