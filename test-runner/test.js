var expect = require('chai').expect;
var it = require('./runner.js').it;

it('1 should equal to 1', function() {
    expect(1).to.equal(1);
});

it('1 should equal to 2', function() {
    expect(1).to.equal(2);
});

it('true should equal to true', function() {
    expect(true).to.equal(true);
});