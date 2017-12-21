const merge = require('webpack-merge');
const common = require('./webpack.client.common.js');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: 'bundle.min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/src/index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new StyleExtHtmlWebpackPlugin({
      minify: true
    }),
    new UglifyJsPlugin()
  ]

});