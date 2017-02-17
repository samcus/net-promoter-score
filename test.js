'use strict';
const NPS = require('./index');
const test = require('tape');



test('It returns a function', (assert) => {
  assert.equal(typeof(NPS),"function","module returns a function");
  assert.end();
});

test('It catches non-numbers', (assert) => {
  var nps = new NPS([
    7,7,10,"lol"]);

  nps.then(function(data){
    assert.equal(54,data.score);
    assert.end();
    console.log(data);
  });
});


test('It catches works?', (assert) => {
  var nps = new NPS([
    7,7,10,9,10,9,1,7,10,9,10,9,1,7,
    10,9,10,9,1,7,10,9,10,9,7,7,10,
    9,10,9,1,7,10,9,10,9,1,7,10,9,
    10,9,1,7,10,9,10,9,7,7,10,9,10,
    9,1,7,10,9,10,9,1,7,10,9,10,9,
    1,7,10,9,10,9]);

  nps.then(function(data){
    assert.equal(54,data.score);
    assert.end();
    console.log(data);
  });
});
