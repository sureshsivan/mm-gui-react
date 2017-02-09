var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': helpers.root('src/app/index.js'),
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader:  ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader']})},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})},
            // { test: /\.scss/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: helpers.root('src/app/index.html'),
            filename: 'index.html',
            inject: 'body',
            minify: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),
    ]
};