module.exports = {
    entry: {
        app: './src/app/index.js',
        lib: './src/lib/index.js'
    },
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
