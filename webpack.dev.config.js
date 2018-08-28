// @flow

// #region imports
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
// #endregion

// #region constants
const outputPath = path.join(__dirname, 'docs/assets');
const publicPath = '/assets/';
const nodeModulesDir = path.join(__dirname, 'node_modules');
const indexFile = path.join(__dirname, 'src/front/index.js');
const themeVars = path.join(
  __dirname,
  'src/front/style/antd-theme-overrides.less',
);
// specific antd:
const themeVariables = lessToJs(fs.readFileSync(themeVars, 'utf8'));
/* eslint-disable quotes */
// lessToJs does not support @icon-url: "some-string", so we are manually adding it to the produced themeVariables js object here
// themeVariables['@icon-url'] = "'//localhost:3000/src/style/fonts/antd-fonts/iconfont'";
/* eslint-enable quotes */
// #endregion

const config = {
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  entry: {
    app: indexFile,
  },
  resolve: {
    modules: ['src/front', 'node_modules'],
    extensions: ['.js', 'jsx'],
  },
  output: {
    path: outputPath,
    publicPath,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true, modifyVars: themeVariables },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/front/statics/index.html',
    }),
    new ModernizrWebpackPlugin({
      htmlWebpackPlugin: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

module.exports = config;
