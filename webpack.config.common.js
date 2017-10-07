module.exports = {
    module: {
        rules: [{
            test: /jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                }
            }
        }]
    }
};
