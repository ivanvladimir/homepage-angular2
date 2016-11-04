/* eslint no-var:0 */
'use strict';
var pkg = require('./package.json');

module.exports = {
  // metadata
  title: pkg.description,
  // root folder name
  src: 'src',
  dist: 'build',
  htmlIndexes: ['index.html'],
  // karma bundle src
  spec: './spec-bundle.js',
  // webpack entry
  entry: {
    polyfills: './src/polyfills.ts',
    vendor: './src/vendor.ts',
    main: './src/main.ts'
  },
  commonChunks: {
    name: ['polyfills', 'vendor'].reverse()
  },
  // webpack alias
  alias: {},
  copy: [
    {from: 'src/favicon.ico', to: 'favicon.ico'},
    {from: 'src/assets', to: 'assets'}
  ]
};
