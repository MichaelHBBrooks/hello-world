var winston = require('winston');
var should = require ('chai').should();

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
    'timestamp': true,
    colorize: 'all',
    handleExceptions: true
});

winston.log('info', 'Testing chai with winston.');

var beverages = {
	tea: ['chai', 'matcha', 'oolong' ]
};

beverages.should.have.property('tea').with.lengthOf(999);
