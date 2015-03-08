/*
 * reversi
 * https://github.com/sanemat/reversi
 *
 * Copyright (c) 2015 sanemat
 * Licensed under the MIT license.
 */

'use strict';

var reversi = require('../');
reversi.init(4, function(err, data){
  data.turns;// []
  data.matrix;// [ {"col": "a", "row": "1", "state": "empty"},
              //  {"col": "b", "row": "1", "state": "empty"}, ... ]
});
// matrix, turns, function
reversi([], [{"col": "b", "row": "1", "state": "black"}], function(err, data){
  data.turns;
  data.matrix;
});

console.log(reversi()); // "awesome"
