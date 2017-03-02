
const chai = require('chai');
const expect = chai.expect;
const runner = require('./runner.js');
const it = runner.it;

it('1 should equal to 1', () => {
    expect(1).to.equal(1);
});

it('1 should equal not to 2', () => {
    expect(1).to.equal(2);
});


it('a should equal to 2 after 100 milli seconds', () => {
    let a = 1;
    return new Promise((resolve) => {
        setTimeout(() => {
            a = 2;
            expect(a).to.equal(2);
            console.log('a', a);
            resolve();
        }, 100);
    });
});