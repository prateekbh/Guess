const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const serverUtils = require('./utils/serverUtils');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prod = process.argv.indexOf('-p') !== -1;
const outputString = prod ? '[name]-[chunkhash].js': '[name].js';
const cssOutputString = prod ? '../css/[name]-[chunkhash].css': '../css/[name].css';
const extractCSS = new ExtractTextPlugin(cssOutputString);
const config = {
  entry: {
   adminapp: './scripts/adminapp.js',
   userapp: './scripts/userapp.js',
   analytics: './scripts/analytics.js',
   vendor: ['babel-regenerator-runtime', 'preact', 'preact-router', 'preact-compat', 'preact-mdl', 'material-design-lite/material', 'redux', 'preact-redux', './scripts/vendorcacheBurst']
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
      })
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