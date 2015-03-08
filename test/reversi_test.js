'use strict';

var reversi = require('../');
var assert = require('power-assert');

describe('reversi', function () {
  it('returns initial matrix', function () {
    var expected = [
      {'col': 'a', 'row': '1', 'state': 'empty'},
      {'col': 'b', 'row': '1', 'state': 'empty'},
      {'col': 'c', 'row': '1', 'state': 'empty'},
      {'col': 'd', 'row': '1', 'state': 'empty'},
      {'col': 'a', 'row': '2', 'state': 'empty'},
      {'col': 'b', 'row': '2', 'state': 'white'},
      {'col': 'c', 'row': '2', 'state': 'black'},
      {'col': 'd', 'row': '2', 'state': 'empty'},
      {'col': 'a', 'row': '3', 'state': 'empty'},
      {'col': 'b', 'row': '3', 'state': 'black'},
      {'col': 'c', 'row': '3', 'state': 'white'},
      {'col': 'd', 'row': '3', 'state': 'empty'},
      {'col': 'a', 'row': '4', 'state': 'empty'},
      {'col': 'b', 'row': '4', 'state': 'empty'},
      {'col': 'c', 'row': '4', 'state': 'empty'},
      {'col': 'd', 'row': '4', 'state': 'empty'}
    ];
    assert.deepEqual(reversi.initialMatrix(4), expected);
  });
});
