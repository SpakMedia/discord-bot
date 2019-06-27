// Load environment variables with dotenv
require('dotenv').config();

const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@root'  : __dirname,
  '@utils': __dirname + '/utils',
  '@events': __dirname + '/events',
  '@commands': __dirname + '/commands'
});

// Load config utility
require('./utils/config')

// Require the bot client utility class and login
require('./utils/client').login()
