const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({title: 'Production'})
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.scss$/,
            exclude: /(node_modules)/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};