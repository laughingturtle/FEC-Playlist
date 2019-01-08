let webpack = require('webpack');
let path = require('path');
let SRC_DIR = path.join(__dirname, '/client');
let DIST_DIR = path.join(__dirname, '/public');

module.exports = {
    entry: `${SRC_DIR}/final.js`,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },
    module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : SRC_DIR,
          loader : 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  };