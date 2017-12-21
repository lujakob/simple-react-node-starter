const merge = require('webpack-merge');
const common = require('./webpack.client.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {

  devServer: {
    contentBase: './client/dist',
    publicPath: '/',
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/src/index.html'
    })
  ]

});