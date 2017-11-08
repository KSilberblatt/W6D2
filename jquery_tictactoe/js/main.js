const View = require('./ttt-view'); // require appropriate file
const Game = require('./../solution/game'); // require appropriate file

$( () => {
  // Your code here
  const newGame = new Game();
  const $ttt = $('.ttt');
  const newView = new View(newGame, $ttt);

});
