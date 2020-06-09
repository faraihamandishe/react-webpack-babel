const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DotEnv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new DotEnv({
      path: './.env.prod',
      safe: true,
      systemvars: true,
      silent: true,
      defaults: true
    })
  ]
});