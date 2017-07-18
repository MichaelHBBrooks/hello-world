var request = require('request');

var host = 'https://dev30875.service-now.com';
var authentication = {
    username: 'admin',
    password: 'Password1234'
}

populateBrowserTables(host, authentication);
// populateOSTables(host, authentication);

function populateBrowserTables(host, authentication) {
    var table = 'x_cerso_capio_browsers';

    var capabilities_list = [];
    capabilities_list.push({
        browser: 'chrome'
    });
    capabilities_list.push({
        browser: 'firefox'
    });
    capabilities_list.push({
        browser: 'iexplore'
    });
    capabilities_list.push({
        browser: 'opera'
    });
    capabilities_list.push({
        browser: 'safari'
    });

    populateTable(host, authentication, table, capabilities_list);
}

function populateTable(host, authentication, table, list) {
    for (var x = 0; x < list.length; x++) {
        createRecord(host, table, list[x]);
    }
}

function populateOSTables(host, authentication) {
    var table = 'x_cerso_capio_operating_systems';

    var os_list = [];
    os_list.push(newOS('win32', 'Windows 10', '10.0'));
    os_list.push(newOS('win32', 'Windows Server 2016', '10.0'));
    os_list.push(newOS('win32', 'Windows 8.1', '6.3'));
    os_list.push(newOS('win32', 'Windows Server 2012 R2', '6.3'));
    os_list.push(newOS('win32', 'Windows 8', '6.2'));
    os_list.push(newOS('win32', 'Windows Server 2012', '6.2'));
    os_list.push(newOS('win32', 'Windows 7', '6.1'));
    os_list.push(newOS('win32', 'Windows Server 2008 R2', '6.1'));
    os_list.push(newOS('win32', 'Windows Server 2008', '6.0'));
    os_list.push(newOS('win32', 'Windows Vista', '6.0'));
    os_list.push(newOS('win32', 'Windows Server 2003 R2', '5.2'));
    os_list.push(newOS('win32', 'Windows Server 2003', '5.2'));
    os_list.push(newOS('win32', 'Windows XP 64-Bit Edition', '5.2'));
    os_list.push(newOS('win32', 'Windows XP', '5.1'));
    os_list.push(newOS('win32', 'Windows 2000', '5.0'));

    populateTable(host, authentication, table, os_list);

}

function newOS(new_platform, new_simple_name, new_release) {
    var new_record = {
        platform: new_platform,
        simple_name: new_simple_name,
        release: new_release
    };
    return new_record;
}

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
        if (body) {
            console.log('----------------------------------------------------------');
            console.log(body);
            console.log('----------------------------------------------------------');
            if (body.error) {
                if (body.error.message) {
                    console.log(body.error.message);
                }
            }
        }
    });
}