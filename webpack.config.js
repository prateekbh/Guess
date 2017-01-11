var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
   adminapp: './scripts/adminapp.js',
   userapp: './scripts/userapp.js',
   vendor: ['preact', 'preact-router', 'preact-compat', 'preact-mdl','material-design-lite/material', 'redux', 'preact-redux']
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
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins:[
            ["transform-react-jsx", { "pragma": "h" }]
          ]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader'
        )
      },
      {
          test: /\.(jpe?g|png|gif)(?:\?.*|)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack'
          ]
      },
      {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
      }
	  ]
  },
  plugins: [
      new ExtractTextPlugin("../css/[name].css"),
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
  ]
};