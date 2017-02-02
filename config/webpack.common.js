var webpack = require('webpack');
var helpers = require('./helpers');


module.exports = {
    entry: helpers.root('src/client/index.js'),
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};