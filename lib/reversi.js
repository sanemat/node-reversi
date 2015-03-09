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

module.exports.makeGameTree = function(board, player, wasPassed){
  return {
    board: board,
    player: player,
    moves: module.exports.listPossibleMoves(board, player, wasPassed)
  };
};

module.exports.listPossibleMoves = function(board, player, wasPassed){
  return module.exports.completePassingMove(
    module.exports.listAttackingMoves(board, player),
    board,
    player,
    wasPassed
  );
};

module.exports.completePassingMove = function(attackingMoves, board, player, wasPassed){
  if (0 < attackingMoves.length) {
    return attackingMoves;
  } else if (!wasPassed) {
    return [{
      isPassingMove: true,
      gameTree: module.exports.makeGameTree(board, module.exports.nextPlayer(player), true)
    }];
  } else {
    return [];
  }
};
module.exports.nextPlayer = function(player) {
  return player == BLACK ? WHITE : BLACK;
};

module.exports.canAttack = function(board, x, y, player){
  return listVulnerableCells(board, x, y, player).length;
};

module.exports.makeAttackedBoard = function(board, x, y, player){
  var newBoard = JSON.parse(JSON.stringify(board));
  var vulnerableCells = module.exports.listVulnerableCells(board, x, y, player);
  for (i = 0; i < vulnerableCells.length; i++) {
    newBoard[vulnerableCells[i]] = player;
  }
  return newBoard;
};

module.exports.listVulnerableCells = function(board, x, y, player){
  var vulnerableCells = [];

  if (board[[x, y]] != EMPTY) {
    return vulnerableCells;
  }

  var opponent = module.exports.nextPlayer(player);
  for (var dx = -1; dx <= 1; dx++) {
    for (var dy = -1; dy <= 1; dy++) {
      if (dx == 0 && dy == 0) {
        continue;
      }
      for (var i = 1; i < N; i++) {
        var nx = x + i * dx;
        var ny = y + i * dy;
        if (nx < 0 || N <= nx || ny < 0 || N <= ny) {
          break;
        }
        var cell = board[[nx, ny]];
        if (cell == player && 2 <= i) {
          for (j = 0; j < i; j++) {
            vulnerableCells.push([x + j * dx, y + j * dy]);
          }
          break;
        }
        if (cell != opponent) {
          break;
        }
      }
    }
  }

  return vulnerableCells;
};
