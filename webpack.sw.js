const webpack = require("webpack");
const path = require('path');
const config = {
  entry: {
   sworker: ['babel-regenerator-runtime','./swsource.js'],
  },
  output: {
    path: __dirname + '/',
    filename: 'sw.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        options: {
          presets: [['es2015', {"modules": false}]],
          plugins:[
            ["transform-react-jsx", { "pragma": "h" }],
            "transform-async-to-generator",
          ],
        }
      }
	]
  }
};

module.exports = config;