var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});