/*
 * reversi
 * https://github.com/sanemat/reversi
 *
 * Copyright (c) 2015 sanemat
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(matrix, turns, cb){
  cb(null, {
    turns: turns,
    matrix: []
  });
};

module.exports.init = function(rows, cb) {
  cb(null, {
    turns: [],
    matrix: module.exports.initialMatrix(rows)
  });
};

module.exports.allEmptyMatrix = function() {
  return [
    {'col': 'a', 'row': '1', 'state': 'empty'},
    {'col': 'b', 'row': '1', 'state': 'empty'},
    {'col': 'c', 'row': '1', 'state': 'empty'},
    {'col': 'd', 'row': '1', 'state': 'empty'},
    {'col': 'a', 'row': '2', 'state': 'empty'},
    {'col': 'b', 'row': '2', 'state': 'empty'},
    {'col': 'c', 'row': '2', 'state': 'empty'},
    {'col': 'd', 'row': '2', 'state': 'empty'},
    {'col': 'a', 'row': '3', 'state': 'empty'},
    {'col': 'b', 'row': '3', 'state': 'empty'},
    {'col': 'c', 'row': '3', 'state': 'empty'},
    {'col': 'd', 'row': '3', 'state': 'empty'},
    {'col': 'a', 'row': '4', 'state': 'empty'},
    {'col': 'b', 'row': '4', 'state': 'empty'},
    {'col': 'c', 'row': '4', 'state': 'empty'},
    {'col': 'd', 'row': '4', 'state': 'empty'}
  ];
};

module.exports.initialSettings = function() {
  return [
    {'col': 'b', 'row': '2', 'state': 'white'},
    {'col': 'c', 'row': '2', 'state': 'black'},
    {'col': 'b', 'row': '3', 'state': 'black'},
    {'col': 'c', 'row': '3', 'state': 'white'}
  ];
};

module.exports.initialMatrix = function(rows) {
  return module.exports.allEmptyMatrix(rows).map(function(row){
    var store = row;
    module.exports.initialSettings(rows).forEach(function(target){
      if (row['col'] === target['col'] && row['row'] === target['row']) {
        store = target;
      }
    });
    return store;
  });
};
