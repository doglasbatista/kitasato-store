const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index',
  cache: false,
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  output: {
    publicPath: 'http://localhost:3002/',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'product-list',
      library: {type: 'var', name: 'product-list'},
      remotes: {},
      exposes: {},
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
