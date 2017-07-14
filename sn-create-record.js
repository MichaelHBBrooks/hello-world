var request = require('request');

var host = 'https://dev30875.service-now.com';
var table = 'x_cerso_capio_operating_systems';
var record = {
    platform: 'win32',
    release: '6.1.7603'
};

createRecord(host, table, record);

function createRecord(host, table, record) {
    if (typeof host === 'undefined' ||
        typeof table === 'undefined' ||
        typeof record === 'undefined') {
        console.log('error', 'undefined argument');
    }
    var options = {
        method: 'POST',
        url: host + '/api/now/table/' + table,
        auth: {
            username: 'admin',
            password: 'Password1234'
        },
        json: record
    };

    request(options, function(err, httpResponse, body) {
        if (err) {
            console.log('error', err);
        }
        console.log('----------------------------------------------------------');
        console.log(body);
        console.log('----------------------------------------------------------');
        console.log(body.error.message);
    });

}