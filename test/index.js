'use strict';
const NPS = require('../index');
const test = require('tape');

test('It returns a function', (assert) => {
  assert.equal(typeof(NPS),"function","module returns a function");
  assert.end();
});

test('It only accepts one argument', (assert) => {
  assert.throws(()=>{new NPS()}, TypeError,"Missing input scores array argument");
  assert.throws(()=>{new NPS([1,2],[3,4])}, RangeError,"Too many arguments");
  assert.end();
});

//test('It only accepts an array'
test('It only accepts an array', (assert) => {
  assert.throws(()=>{new NPS(1)}, TypeError,"Argument cannot be an Integer");
  assert.throws(()=>{new NPS("1")}, TypeError,"Argument cannot be a String");
  assert.throws(()=>{new NPS(true)}, TypeError,"Argument cannot be a Boolean");
  assert.end();
});

test('It catches non-number input within the array', (assert) => {
  assert.throws(()=>{new NPS([1,9,10,"lol"])},TypeError,"Score must be a number");
  assert.end();
});

test('It catches numbers out of range', (assert) => {
  assert.throws(()=>{new NPS([-1,9,10])},RangeError,"Score must be between 0 and 10");
  assert.throws(()=>{new NPS([1,9,11])},RangeError,"Score must be between 0 and 10");
  assert.end();
});

test('It calculates an NPS score', (assert) => {
  var t = new NPS([1,9,10]);
  assert.equal(t.score,33,"[1,9,10] yields a score of 33");
  assert.end();
});
