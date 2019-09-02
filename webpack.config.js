
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: 'development',
  output: {

    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: false
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use:[
        {
          loader: 'file-loader',
          options: {
            limit: 2000,
            name: 'images/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            limit: 8000,
            mimetype: 'image/svg+xml',
            name: 'fonts/[name].[hash].[ext]'
          }
        }
      ]
    }

    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'output management',
      template: './src/index.html',
      inject: true
    }),
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ManifestPlugin({ filename: '[name].[hash].js' })

  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
};
