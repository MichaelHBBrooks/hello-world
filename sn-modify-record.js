var request = require('request');

var host = 'https://dev30875.service-now.com';
var table = 'x_cerso_capio_operating_systems';
var sysID = '86822a33db333200ae1f7e7dbf961949'
var record = {
    simple_name: 'asdf'
};

createRecord(host, table, record, sysID);

function createRecord(host, table, record, sysID) {
    if (typeof host === 'undefined' ||
        typeof table === 'undefined' ||
        typeof record === 'undefined' ||
        typeof sysID === 'undefined') {
        console.log('error', 'undefined argument');
    }
    var options = {
        method: 'PUT',
        url: host + '/api/now/table/' + table + '/' + sysID,
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
    });
}