var winston = require('winston');

winston.add(winston.transports.File, { filename: 'winston-test2.log'});
winston.remove(winston.transports.Console);

winston.log('info', 'Hello distributed log files.');
winston.info('Hello again distributed logs.');

winston.level = 'debug';
winston.log('debug', 'Now my debug messages are written to the console.');
