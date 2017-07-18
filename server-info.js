var os = require('os');

console.log('platform: ' + os.platform());
console.log('release: ' + os.release());
console.log('type: ' + os.type());
console.log('architecture: ' + os.arch());
console.log('user name: ' + os.userInfo().username);
console.log('host name: ' + os.hostname());
var net = os.networkInterfaces();
console.log(net);