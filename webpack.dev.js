const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    modules: [
      path.resolve(),
      'node_modules'
    ]
  }
});