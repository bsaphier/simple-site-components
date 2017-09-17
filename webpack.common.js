const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/index.js'
        // lib: './src/lib/index.js'
    },
    // plugins: [
        // new CleanWebpackPlugin(['dist/public']),
        // new HtmlWebpackPlugin({
        //     title: 'My Site',
        // })
    // ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: {
        loaders: [{
            test: /jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'env']
            }
        }, {
            test: /\.scss$/,
            exclude: /(node_modules)/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};