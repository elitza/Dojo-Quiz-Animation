var scene0 = function () {
  var scene = new Scene('scene0', 'Quiz', 990, 660); //

  var background = scene.createActor('shtikl.jpg',0,0,960,660);

  var kanzler_quiz = scene.createActor('actors/Quiz-Knopf2.png', 700, 100, 240, 88);

  kanzler_quiz.navigatesAndLoadsOnTouch('scene1');
  

  return scene;
};