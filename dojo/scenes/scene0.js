var scene0 = function () {
  var scene = new Scene('scene0', 'Quiz', 990, 660); //

  scene.createActor('background.gif',0,0,750,500);
  scene.createActor('titelseite.gif', 40, 270, 400, 183);

  var kanzler_quiz = scene.createActor('nextquestion.png', 470, 300, 200, 65);
  kanzler_quiz.setText("Quiz starten &rarr;", "", "weiter");
  kanzler_quiz.navigatesAndLoadsOnTouch('scene1');

	scene.write(40, 40, "Wie wahlfit bist Du?", "title");

	var text1 = "Dieses Quiz wurde am 21. September 2013 im Rahmen des <a href=\"http://wahldatenhelfer.de/koeln/\">Wahl.Daten.Helfer-Hackathons</a> hergestellt."
	text1+= "Die Texter und Künstler hinter diesem Quiz sind im Alter von…"
	scene.write(40, 70, text1, "text_auf_titelseite");

  return scene;
};