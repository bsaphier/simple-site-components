const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    entry: {
        app: './src/app/index.js',
        lib: './src/lib/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dev'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    camelCase: true,
                    modules: true,
                    localIdentName: '[local]--[name]__[hash:base64:5]'
                }
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        }]
    }
});
