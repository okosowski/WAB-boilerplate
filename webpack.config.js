const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const pkg = require('./package.json');


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
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ],
  postcss: () => [autoprefixer],
  debug: true,
  devtool: 'cheap-source-map',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js",
    pathinfo: true
  },
  devServer: {
    historyApiFallback: true
  },
  entry: {
    index: "./src/app/app.module.js",
    vendor: Object.keys(pkg.dependencies)
  }
};
