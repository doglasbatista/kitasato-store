const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index',
  cache: false,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    port: 3003,
  },
  optimization: {
    minimize: false,
  },
  output: {
    publicPath: 'http://localhost:3003/',
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
      name: 'mini_cart',
      library: {type: 'var', name: 'mini_cart'},
      filename: 'remoteEntry.js',
      remotes: {
      },
      exposes: {
        App: './src/App',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      main: ['main'],
    }),
  ],
};
