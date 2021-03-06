'use strict';
const webpack = require('webpack');
const common = require('./common');
const fs = require('fs');

module.exports = common.extend({
  name: 'client',
  entry: './client/js/client.js',
  output: {
    path: 'dist/public/js/',
    filename: 'client.js',
  },
  plugins: [
      new webpack.DllReferencePlugin({
          context: '.',
          manifest: JSON.parse(fs.readFileSync(common.vendorDll))
      })
  ]
});

