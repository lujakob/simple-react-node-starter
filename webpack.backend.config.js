const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './backend/index.js',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'backend/dist')
  },
  module: {
    loaders: [
      // ES6 enabled
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  }
};