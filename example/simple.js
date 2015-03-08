/*
 * reversi
 * https://github.com/sanemat/reversi
 *
 * Copyright (c) 2015 sanemat
 * Licensed under the MIT license.
 */

'use strict';

var reversi = require('../');
reversi.init(null, function(err, data){
  data.turns;// []
  data.matrix;// [ {"col": "a", "row": "1", "state": "empty"},
              //  {"col": "b", "row": "1", "state": "empty"}, ... ]
});
reversi.set({"turns": [{"col": "b", "row": "1", "state": "black"}], "matrix": []}, function(err, data){
  data.turns;
  data.matrix;
});

console.log(reversi()); // "awesome"
