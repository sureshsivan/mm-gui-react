var webpack = require('webpack');
var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS_JS = ['react', 'react-dom', 'redux', 'react-redux', 'semantic-ui-react'];
const VENDOR_LIBS_CSS = ['semantic-ui-css/semantic.css'];

const vendorCssExtractPlugin = new ExtractTextPlugin('vendor.[hash].css');
const appCssExtractPlugin = new ExtractTextPlugin('app.[hash].css');

module.exports = {
    entry: {
        'vendor': VENDOR_LIBS_JS,
        'app': helpers.root('src/app/index.js')
    },
    output: {
        path: helpers.root('dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[id].chunk.js',
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
            //  this is for vendor css/sass files
            { test: /\.css$/, use:  vendorCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader']}), include: /node_modules/},
            { test: /\.scss$/, use: vendorCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}), include: /node_modules/},
            // this is for app css files - need as single file for long term caching
            { test: /\.css$/, use:  appCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader']}), exclude: /node_modules/},
            { test: /\.scss$/, use: appCssExtractPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}), exclude: /node_modules/},
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
            name: ['vendor', 'manifest']
        }),
        vendorCssExtractPlugin,
        appCssExtractPlugin
    ]
};