const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app/index.js',
        lib: './src/lib/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
                    }
                }
            }
        ]
        // loaders: [{
        //     test: /jsx?$/,
        //     exclude: /(node_modules)/,
        //     loader: 'babel-loader',
        //     query: {
        //         presets: ['react', 'env']
        //     }
        // }, {
        //     test: /\.scss$/,
        //     exclude: /(node_modules)/,
        //     loaders: ['style-loader', 'css-loader', 'sass-loader']
        // }]
    }
};
