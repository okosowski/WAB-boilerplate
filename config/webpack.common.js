const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

const pkg = require('../package.json');


module.exports = {
  module: {
    loaders: [
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.html$/,
        loaders: [
          'html-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'file-loader'
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', '/src/index.html'),
      inject: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '..', '/dist'),
    filename: "bundle.js",
    pathinfo: true
  },
  devServer: {
    historyApiFallback: true
  },
  entry: {
    index: path.join(__dirname, '..', '/src/app/app.module.js'),
    vendor: Object.keys(pkg.dependencies)
  }
};
