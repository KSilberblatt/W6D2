class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents($square) {
    let row = parseInt($($square[0].attributes['row']).val());
    let col = parseInt($($square[0].attributes['column']).val());
    let pos = [row, col];
    this.makeMove($square, pos);
  }

  makeMove($square, pos) {
    //makes move on game by changes css of that $square
    let player = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.css("background", "white");
    $square.css("font-size", "60px");
    $square.css("font-family", "sans-serif");
    $square.css("text-align", "center");
    $square.css("font-weight", "bold");
    $square.css("font-weight", "bold");
    $square.text(player);

    if (this.game.isOver()) {
      let $listUL = $('ul');
      $listUL.off("click", 'li');

      


      if (this.game.winner() === null){
        this.$el.append("<h2>It's a draw!</h2>");
      } else {
        this.$el.append(`<h2>You win, ${this.game.winner()}!</h2>`);
      }
    }
  }

  setupBoard() {
    this.$el.append("<ul></ul>");
    let $listUL = $('ul');

    for (var i = 0; i <= 2; i++) {
      for (var j = 0; j <= 2; j++) {
        $listUL.append(`<li row=${i} column=${j}></li>`);
      }
    }

    //add ul event listener on each li
    $listUL.on("click", 'li', (e) => {
      const $square = $(e.currentTarget);

      this.bindEvents($square);
    });
  }
}

module.exports = View;
