const webpack       = require('webpack');
const path          = require('path');
const fs            = require('fs');
const lessToJs      = require('less-vars-to-js');

const assetsDir   = path.join(__dirname, 'public/assets');
const vendorsDir  = path.join(__dirname, 'src/app/vendors');
const srcInclude  = path.join(__dirname, 'src/app');
const indexFile   = path.join(__dirname, 'src/app/index.js');
const themeVars   = path.join(__dirname, 'src/app/style/antd-theme-overrides.less');

const themeVariables = lessToJs(fs.readFileSync(themeVars, 'utf8'));


const config = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    indexFile
  ],
  output: {
    path:       assetsDir,
    filename:   'bundle.js',
    publicPath: '/public/assets/'
  },
  module: {
    rules: [
      {
        test:     /\.jsx?$/,
        include:  srcInclude,
        exclude:  [vendorsDir],
        loaders:  ['babel-loader']
      },
      {
        test: /\.css$/,
        use:  [
          'style-loader',
          {loader: 'css-loader', options: { importLoaders: 1 }},
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 }},
          'postcss-loader',
          { loader: 'less-loader', options: { modifyVars: themeVariables }}
        ]
      },
      {
        test:  /\.scss$/,
        use:  [
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    setNodeEnv()
  ]
};
/*
* here using hoisting so don't use `var NAME = function()...`
*/
function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('dev')
    }
  });
}

module.exports = config;
