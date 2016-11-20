const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');

module.exports = webpackMerge(commonConfig, {
  debug: false,
  devtool: 'source-map',

  plugins: [
    /**
     * Plugin: DedupePlugin
     * Description: Prevents the inclusion of duplicate code into bundle
     * and instead applies a copy of the function at runtime.
     * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
     * See: https://github.com/webpack/docs/wiki/optimization#deduplication
     */
    new DedupePlugin(),
  ]
});
