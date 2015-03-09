/*
 * reversi
 * https://github.com/sanemat/reversi
 *
 * Copyright (c) 2015 sanemat
 * Licensed under the MIT license.
 */

'use strict';
var N = 4;
var EMPTY = 'empty';
var WHITE = 'white';
var BLACK = 'black';

module.exports.makeInitialGameBoard = function() {
  var board = {};

  for (var x = 0; x < N; x++) {
    for (var y = 0; y < N; y++) {
      board[[x, y]] = EMPTY;
    }
  }

  var x2 = x >> 1;
  var y2 = y >> 1;
  board[[x2 - 1, y2 - 1]] = WHITE;
  board[[x2 - 1, y2 - 0]] = BLACK;
  board[[x2 - 0, y2 - 1]] = BLACK;
  board[[x2 - 0, y2 - 0]] = WHITE;

  return board;
};
