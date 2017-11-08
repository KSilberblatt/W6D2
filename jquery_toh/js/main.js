const HanoiGame = require('./game');
const HanoiView = require('./toh-view');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);

});
