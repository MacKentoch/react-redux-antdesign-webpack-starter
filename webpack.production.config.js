const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs                = require('fs');
const lessToJs          = require('less-vars-to-js');

const assetsDir       = path.join(__dirname, 'docs/public/assets');
const nodeModulesDir  = path.join(__dirname, 'node_modules');
const vendorsDir      = path.join(__dirname, 'src/app/vendors');
const indexFile       = path.join(__dirname, 'src/app/index.js');
const themeVars       = path.join(__dirname, 'src/app/style/antd-theme-overrides.less');

const themeVariables = lessToJs(fs.readFileSync(themeVars, 'utf8'));

/* eslint-disable quotes */
// lessToJs does not support @icon-url: "some-string", so we are manually adding it to the produced themeVariables js object here
// themeVariables['@icon-url'] = "'//localhost:3000/src/style/fonts/antd-fonts/iconfont'";
/* eslint-enable quotes */

const SPLIT_STYLE = true;

const config = {
  // devtool: '#source-map',
  entry: {
    app: [
      'babel-polyfill',
      indexFile
    ],
    vendor: [
      'react',
      'react-dom',
      'prop-types',
      'react-tap-event-plugin',
      'react-hot-loader',
      // 'antd',
      'babel-polyfill',
      'redux',
      'react-router-redux',
      'redux-logger',
      'redux-thunk',
      'react-router',
      'react-router-dom',
      'history',
      'classnames',
      'axios',
      'js-base64',
      'moment',
      'react-motion',
      'jwt-decode'
    ]
  },
  output: {
    path:     assetsDir,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test:     /\.jsx?$/,
        exclude:  [nodeModulesDir, vendorsDir],
        loader:   'babel-loader'
      },
      {
        test: /\.css$/,
        use:  SPLIT_STYLE 
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {loader: 'css-loader', options: { importLoaders: 1 }},
              'postcss-loader'
            ]
          })
          : [
            'style-loader',
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader'
          ]
      },
      {
        test: /\.less$/,
        use:  SPLIT_STYLE 
        ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader',
            { loader: 'less-loader', options: { modifyVars: themeVariables }}
          ]
        })
        : [
          'style-loader',
          {loader: 'css-loader', options: { importLoaders: 1 }},
          'postcss-loader',
          { loader: 'less-loader', options: { modifyVars: themeVariables }}
        ]
      },
      {
        test: /\.scss$/,
        use:  SPLIT_STYLE 
        ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader',
            'sass-loader'
          ]
        })
        : [
          'style-loader',
          {loader: 'css-loader', options: { importLoaders: 1 }},
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader:  'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    setNodeEnv(),
    new ExtractTextPlugin('app.styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name:     'vendor',
      filename: 'app.vendor.bundle.js' 
    })
  ]
};
/*
* here using hoisting so don't use `var NAME = function()...`
*/
function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  });
}

module.exports = config;
