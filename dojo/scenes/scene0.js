var scene0 = function () {
  var scene = new Scene('scene0', 'Quiz', 990, 660); //

  var background = scene.createActor('background.jpg',0,0,960,660);

  var kanzler_quiz = scene.createActor('actors/Quiz-Knopf1.png', 200, 200, 240, 88);

  kanzler_quiz.navigatesAndLoadsOnTouch('scene1');
  

  return scene;
};