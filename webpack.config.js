const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const serverUtils = require('./utils/serverUtils');
const extractCSS = new ExtractTextPlugin('../css/[name].css');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prod = process.argv.indexOf('-p') !== -1;
const outputString = prod ? '[name]-[chunkhash].js': '[name].js';

const config = {
  entry: {
   adminapp: './scripts/adminapp.js',
   userapp: './scripts/userapp.js',
   vendor: ['babel-regenerator-runtime', 'preact', 'preact-router', 'preact-compat', 'preact-mdl', 'material-design-lite/material', 'redux', 'preact-redux']
  },
  output: {
    path: __dirname + '/public/js',
    publicPath: '/public/js/',
    filename: outputString,
  },
  resolve: {
      alias: {
          'react': 'preact-compat',
          'react-dom': 'preact-compat'
      }
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/proptypes|scripts\/sw.js/,
        options: {
          presets: [['es2015', {"modules": false}]],
          plugins:[
            ["transform-react-jsx", { "pragma": "h" }],
            "transform-async-to-generator",
          ],
        }
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader','postcss-loader']
        }),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          },
          'svg-react-loader',
        ]
      }
	  ]
  },
  plugins: [
      new CleanWebpackPlugin('./public'),
      extractCSS,
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: 2,
      }),
      new ManifestPlugin({
        fileName: '../my-manifest.json',
        basePath: '',
      }),
      new WebpackMd5Hash()
  ]
};


if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'PROD': true
      }
  }));
} else {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'PROD': false
      }
  }));
}

module.exports = config;