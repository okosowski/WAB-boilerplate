console.log('process.env.NODE_ENV', process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.production');
    break;
  case 'test':
  case 'testing':
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.development');
}
