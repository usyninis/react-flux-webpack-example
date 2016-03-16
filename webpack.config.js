const path = require('path');
const config = require('./config');
// const appRoot = require('app-root-path');
//
// const validEnvs = ['development', 'test', 'production'];
// const env = process.env.NODE_ENV;
// env = validEnvs.indexOf(env) >= 0 ? env : validEnvs[0];
//
// const appConfigPath = appRoot.path + '/workplace/react/config/' + env + '.js';
//
// console.log('webpack env: ' + env);
// console.log('appConfigPath: ' + appConfigPath);

module.exports = {
  // resolve: {
  //   alias: {
  //     config: appConfigPath
  //   }
  // },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  entry: './frontend/app.js',
  output: {
    path: './public',
    filename: 'app.js'
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.jsx$/,
  //       exclude: /(node_modules|bower_components)/,
  //       loader: 'babel?presets[]=react,presets[]=es2015'
  //     },
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       loader: 'babel?presets[]=react,presets[]=es2015'
  //     }
  //   ]
  // }
  devServer: {
    port: 8081,
    //host: '',
    contentBase: "./public",
  }
};
