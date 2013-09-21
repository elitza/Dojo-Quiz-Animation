function quizQuestion(scene, key, nextQuestion){
	var thisQuestion = {};
	thisQuestion.data = quizData(key);
	thisQuestion.answerActors = [];

	// count questions
	if (typeof scene.numberOfQuestions === 'undefined') scene.numberOfQuestions = 0;
	scene.numberOfQuestions++;

	thisQuestion.titleactor = scene.createActor('blank.png', 40, 40, 250, 60).setText(thisQuestion.data.title, '', 'quiz title');
	thisQuestion.questionactor = scene.createActor('blank.png', 40, 90, 600, 180).setText(thisQuestion.data.text, '', 'quiz text question');

	if (typeof thisQuestion.data.imagepath !== 'undefined' && thisQuestion.data.imagepath !== '') {
		thisQuestion.fragebild = scene.createActor(thisQuestion.data.imagepath, 400, 90);
	} else {
		thisQuestion.fragebild = scene.createActor('blank.png', 0, 0, 0, 0);
	}

	if (typeof thisQuestion.data.audiopath !== 'undefined' && thisQuestion.data.audiopath !== '') {
		thisQuestion.audioplayer = scene.createActor('blank.png', 320, 230, 50, 50).plays(thisQuestion.data.audiopath, 'blank.png');
	} else {
		thisQuestion.audioplayer = scene.createActor('blank.png', 0, 0, 0, 0);
	}

	if (typeof scene.quizTotalAnswersCounter === 'undefined') {
		// thereis no counter yet (first question definition in this scene),
		// create a counter-actor!

		scene.quizTotalAnswersCounter = scene.createActor('blank.png', 961, -30, 1, 1);
		// scene.quizTotalAnswersCounter.setSynckey('totalCounter-szene-14');
		scene.quizTotalAnswersCounter.initializeCounterIfNeeded(0);	

		scene.quizCorrectAnswersCounter = scene.createActor('blank.png', 961, -30, 1, 1);
		// scene.quizCorrectAnswersCounter.setSynckey('correctCounter-szene-14');
		scene.quizCorrectAnswersCounter.initializeCounterIfNeeded(0);	
	}

	var black = scene.createActor('blackblock_40_opacity.png', 0, 0, 960, 660).isOnTop();

	var answerXPosition = 0;
	var nextAnswerXPositionStep = 375;

	var weiterbutton = scene.createActor('rechts.png', 610, 355, 50, 50).isOnTop(3);

	// LOOP THROUGH ANSWERS
	for (var i = 0; i < thisQuestion.data.answers.length; i++) {
		var qData = thisQuestion.data.answers[i];
		var answeractor = scene.createActor('blank.png', answerXPosition, 340, 220, 300);
		var answerplayer = scene.createActor('sprecher.png', 615, 170, 36, 28).isOnTop(3).plays(qData.audiopath, 'blank.png');
		answeractor.setText(qData.title, '', 'quiz answer answer' + i);
		answeractor.letsAppear(black, 0, 0);
		thisQuestion.answerActors.push(answeractor);

		if (qData.correct) {
			// correct answer
			var correctactor = scene.createActor('zettel.png', 250, 130, 433, 297).isOnTop(2).addClass('answer' + i);
			correctactor.setText(qData.explanation, '', 'quiz correct explanation');
			weiterbutton.letsDissolve(correctactor);
			weiterbutton.letsDissolve(answerplayer);
			answeractor.letsAppear(correctactor);
			answeractor.letsAppear(weiterbutton);
			answeractor.letsAppear(answerplayer);
			answeractor.letsAddToCounter(scene.quizCorrectAnswersCounter, 1, 1);

		} else {
			// wrong answer
			var wrongactor = scene.createActor('zettel.png', 250, 130, 433, 297).isOnTop(2);
			wrongactor.setText(qData.explanation, '', 'quiz wrong explanation');
			answeractor.letsAppear(wrongactor);
			answeractor.letsAppear(weiterbutton);
			answeractor.letsAppear(answerplayer);
			weiterbutton.letsDissolve(wrongactor);
			weiterbutton.letsDissolve(answerplayer);
		}

		if (nextAnswerXPositionStep < 110) nextAnswerXPositionStep = 110;
		answerXPosition += nextAnswerXPositionStep;
	}

	weiterbutton.letsAddToCounter(scene.quizTotalAnswersCounter, 1, 1);
	weiterbutton.letsDissolve(thisQuestion.titleactor);
	weiterbutton.letsDissolve(thisQuestion.fragebild);
	weiterbutton.letsDissolve(thisQuestion.questionactor);
	weiterbutton.letsDissolve(thisQuestion.audioplayer);
	for (var i = thisQuestion.answerActors.length - 1; i >= 0; i--) weiterbutton.letsDissolve(thisQuestion.answerActors[i]);

	if (nextQuestion) {
		// there is another question, display it…
		weiterbutton.letsAppear(nextQuestion.titleactor);
		weiterbutton.letsAppear(nextQuestion.fragebild);
		weiterbutton.letsAppear(nextQuestion.questionactor);
		for (var i = nextQuestion.answerActors.length - 1; i >= 0; i--) weiterbutton.letsAppear(nextQuestion.answerActors[i]);
	} else {
		showQuizResults(scene, weiterbutton);
	}

	weiterbutton.letsDissolve(wrongactor);
	weiterbutton.letsDissolve(black);
	weiterbutton.dissolvesOnTouch();

	if (typeof scene.quiz === 'undefined') scene.quiz = {}; // only happens at first question
	scene.quiz[key] = thisQuestion;
	return scene.quiz[key];
}

function updateQuizResultsText(questionactor, correctAnswers, totalAnswers, scene){
	// console.log("!!! updating results");

	var copyData = quizData('copy');
	var factor = correctAnswers / totalAnswers;
	var txt;

	if (factor == 1) {
		txt = copyData.level1;
		if (typeof scene.quizCertificate !== 'undefined') setVisible(scene.quizCertificate);
	} else if (factor >= 0.9){
		txt = copyData.level2;
	} else if (factor >= 0.4){
		txt = copyData.level3;
	} else {
		txt = copyData.level4;
	}
	txt = txt.replace('%correct%', pluralize(correctAnswers, copyData.no_answers, copyData.one_answer, copyData.x_answers));
	txt = txt.replace('%total%', pluralize(totalAnswers, copyData.no_questions, copyData.one_question, copyData.x_questions));

	questionactor.setText(txt, '', 'quiz');
}

function showQuizResults(scene, triggerButton){
	// console.log("*** showing quiz results");

	var copyData = quizData('copy');
	var resultsHtml = '';

	resultsHtml += '<h2>' + copyData.resultsTitle + '</h2>';

	var quizResultsTitleActor = scene.createActor('blank.png', 110, 120, 400, 40);
	quizResultsTitleActor.setText(copyData.resultsTitle, '', 'quiz title');	

	var quizResultsActor = scene.createActor('blank.png', 110, 200, 700, 400);
	quizResultsActor.setText('', '', 'quiz results');
	
	triggerButton.letsAppear(quizResultsActor);
	triggerButton.letsAppear(quizResultsTitleActor);
	//triggerButton.letsAppear(scene.quizPrintButton);

	scene.quizTotalAnswersCounter.reactOnMinimum(scene.numberOfQuestions, function(){
		updateQuizResultsText(quizResultsActor, scene.quizCorrectAnswersCounter.counter, scene.numberOfQuestions, scene);
	  // syncVisibleByKey("scene12-raum-der-pruefungen");
	});

}