var request = require('request');

var options = {
    method: 'GET',
    url: 'https://dev30875.service-now.com' + '/api/now/table/x_cerso_capio_operating_systems',
    auth: {
        username: 'admin',
        password: 'Password1234'
    },
    sysparm_query: 'platform%3Dwin32%5Erelease%3D6.1.7601',
    sysparm_limit: '1'
}

request(options, function(err, httpResponse, body) {
    if (err) {
        console.log('error', err);
    }
    var result = JSON.parse(body);
    console.log('----------------------------------------------------------');
    console.log(httpResponse);
    console.log('----------------------------------------------------------');
    console.log(body);
    console.log('----------------------------------------------------------');
    console.log(result.result[0].simple_name);
});