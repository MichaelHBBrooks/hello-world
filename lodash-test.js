var lodash = require('lodash');

// lodash.forEach([1,2],function(value){
// 	console.log(value);
// });

var x = 0;

var y = lodash.forEach([1, 2, 3], sometimeLater());

console.log('Final x = ' + x);

console.log(y);

//sometimeLater();

function sometimeLater() {
    setTimeout(function() {
        x++;
        console.log('x = ' + x);
    }, 1000);
}