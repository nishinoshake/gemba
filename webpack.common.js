const path = require('path')

module.exports = {
  entry: {
    'assets/js/specialmooove': './src/assets/js/specialmooove/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
