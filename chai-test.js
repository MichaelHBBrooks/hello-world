var assert = require('chai').assert;
var foo = 'barz';
var beverages = {
    tea: ['chai', 'matcha', 'oolong']
};

assert.typeOf(foo, 'string'); //  Without optional message.
assert.typeOf(foo, 'string', 'foo is a string.'); //  Without optional message.
assert.equal(foo, 'bar', 'foo equal "bar"');
assert.lengthOf(foo, 3, "foo's value has a length of 3");
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
