class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }

  setupTowers() {

    this.$el.append("<ul class='game-board'></ul>");
    let $thisUL = $('ul');

    $thisUL.append("<li class='tower' id=1 ></li>");
    let $tower1 = $('#1');
      $tower1.append("<li class= 'piece top'></li>");
      $tower1.append("<li class= 'piece middle'></li>");
      $tower1.append("<li class='piece bottom'></li>");
    $thisUL.append("<li class='tower' id=2 ></li>");
    $thisUL.append("<li class='tower' id=3 ></li>");



    //add event handler on game-board for every tower
      //change tower border bottom to red
  }

}

module.exports = HanoiView;
