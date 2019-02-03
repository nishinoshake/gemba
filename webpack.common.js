const path = require('path')

module.exports = {
  entry: {
    'assets/js/abobo': './src/assets/js/abobo/index.js',
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
