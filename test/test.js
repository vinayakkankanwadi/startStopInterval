var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var assert = require('assert');
// Include our function as well
var ssi = require('..');

describe('startStopInterval', function() {
  it('calls startStopInterval function', function() {
	var clock = sinon.useFakeTimers();
    var spy = sinon.spy();
    ssi.startStopInterval(true,spy,2);
	assert(! spy.calledOnce);
    clock.tick(2);
    assert(spy.calledOnce);
	clock.tick(2);
    assert(spy.calledTwice);
	ssi.startStopInterval(false); // Stop
	clock.tick(2);
    assert(! spy.calledThrice);
    clock.restore();
  });
});