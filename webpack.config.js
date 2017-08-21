var webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/client.js',
],
  output: {
    path: require("path").resolve('/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
   extensions: ['', '.js', '.jsx']
 },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  node: {
dns: 'mock',
net: 'mock'
},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
