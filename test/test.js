var chai = require('chai');
var expect = chai.expect;

describe('Dummy suite of tests', function() {
  it('should 1 be equal to 1', function() {
    expect(1).to.equal(1);
  });
  it('should 2 be greater than 0', function() {
    expect(2).to.be.above(0);
  });
});