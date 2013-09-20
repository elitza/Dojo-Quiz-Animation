var scene1 = function () {
  var scene = new Scene('scene1', 'Kanzler-Quiz', 990, 660); //
  scene.scrollingPerspective(5, 1);

  // setup the quiz
  var bg = scene.createActor('texture1.jpg', 0, 0, 960, 660);

  // starting/closing the quiz
  var close = scene.createActor('links.png', 760, 60, 50, 50);
  close.navigatesAndLoadsOnTouch('scene0');

  var frage10 = quizQuestion(scene, 'q1_10');
  var frage9 = quizQuestion(scene, 'q1_9', frage10);
  var frage8 = quizQuestion(scene, 'q1_8', frage9);
  var frage7 = quizQuestion(scene, 'q1_7', frage8);
  var frage6 = quizQuestion(scene, 'q1_6', frage7);
  var frage5 = quizQuestion(scene, 'q1_5', frage6);
  var frage4 = quizQuestion(scene, 'q1_4', frage5);
  var frage3 = quizQuestion(scene, 'q1_3', frage4);
  var frage2 = quizQuestion(scene, 'q1_2', frage3);
  var frage1 = quizQuestion(scene, 'q1_1', frage2);


  return scene;
};
