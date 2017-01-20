var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractCSS = new ExtractTextPlugin('../css/[name].css');

module.exports = {
  entry: {
   adminapp: './scripts/adminapp.js',
   userapp: './scripts/userapp.js',
   vendor: ['preact', 'preact-router', 'preact-compat', 'preact-mdl','material-design-lite/material', 'redux', 'preact-redux',]
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].js'
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
        exclude: /node_modules/,
        options: {
          presets: ['es2015'],
          plugins:[
            ["transform-react-jsx", { "pragma": "h" }]
          ]
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
      extractCSS,
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: 2,
      })
  ]
};