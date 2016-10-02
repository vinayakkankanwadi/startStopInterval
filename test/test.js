var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var assert = require('assert');
// Include our function as well
var ssi = require('..');

describe('startStopInterval', function() {
  it('calls startStopInterval function with interval', function() {
	var clock = sinon.useFakeTimers();
    var spy = sinon.spy();
    ssi.startStopInterval(true,spy,2);
	assert(! spy.calledOnce);
    clock.tick(2);
    assert(spy.calledOnce);
	clock.tick(2);
    assert(spy.calledTwice);
	ssi.startStopInterval(false,spy); // Stop
	clock.tick(2);
    assert(! spy.calledThrice);
    clock.restore();
  });
    it('calls startStopInterval function without interval', function() {
	var clock = sinon.useFakeTimers();
    var spy = sinon.spy();
    ssi.startStopInterval(true,spy);
	assert(! spy.calledOnce);
    clock.tick(1000);
    assert(spy.calledOnce);
	clock.tick(1000);
    assert(spy.calledTwice);
	ssi.startStopInterval(false,spy); // Stop
	clock.tick(1000);
    assert(! spy.calledThrice);
    clock.restore();
  });
   it('calls startStopInterval function more than once', function() {
	var clock = sinon.useFakeTimers();
    var spy = sinon.spy();
    ssi.startStopInterval(true,spy);
	ssi.startStopInterval(true,spy); //called twice
	assert(! spy.calledOnce);
    clock.tick(1000);
    assert(spy.calledOnce);
	clock.tick(1000);
    assert(spy.calledTwice);
	ssi.startStopInterval(false,spy); // Stop
	clock.tick(1000);
    assert(! spy.calledThrice);
    clock.restore();
  });
});