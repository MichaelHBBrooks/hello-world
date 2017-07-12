var expect = require('chai').expect;

var foo = 'bar';
var beverages = {
    tea: ['chai', 'matcha', 'oolong']
};

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);

var answer = 43;
// "AssertionError: expected 43 to equal 42"
// expect(answer).to.equal(42);
// "AssertionSerror: topic [answer]: expected 43 to equal 42"
// expect(answer, 'topic [answer]').to.equal(42);
