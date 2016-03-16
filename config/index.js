var processEnv = process.env.NODE_ENV;
var assign = require('object-assign');
var defaultConfig = require('./default');

defaultConfig.env = processEnv || defaultConfig.env;

var envConfigs = {
  development: require('./development'),
  test: require('./test'),
  production: require('./production')
};

var config = assign(defaultConfig, envConfigs[defaultConfig.env]);

console.log('NODE_ENV: ' + processEnv);
console.log('config env: ' + config.env);



module.exports = config;
