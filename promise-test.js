var fs = require('fs');

var myFile = './test.json';
var myEncoding = 'utf8';

// fs.readFile(myFile, myEncoding, function(err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });


// readFileAsync(myFile, myEncoding).then(console.log, console.error);
readFileAsync(myFile, myEncoding).then(function(asdf){
	console.log('success!');
	console.log(asdf);
}, console.error);


function readFileAsync(file, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, encoding, function(err, data) {
            if (err) {
                return reject(err);
            }
            resolve(data);
            // fulfill(data);
        });
    });
}