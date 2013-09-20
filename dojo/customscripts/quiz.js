function quizQuestion(scene, key, nextQuestion){
	var thisQuestion = {};
	thisQuestion.data = quizData(key);
	thisQuestion.answerActors = [];

	// count questions
	if (typeof scene.numberOfQuestions === 'undefined') scene.numberOfQuestions = 0;
	scene.numberOfQuestions++;

	// // print document
	// if (typeof scene.quizPrintButton === 'undefined') {
	// 	scene.quizPrintButton = scene.createActor('print.png', 600, 300);
	// 	setInvisible(scene.quizPrintButton);		
	// }


	thisQuestion.titleactor = scene.createActor('blank.png', 220, 120, 250, 30).setText(thisQuestion.data.title, '', 'quiz title');
	thisQuestion.textactor = scene.createActor('blank.png', 220, 365, 250, 180).setText(thisQuestion.data.text, '', 'quiz text');

	if (typeof thisQuestion.data.imagepath !== 'undefined' && thisQuestion.data.imagepath !== '') {
		thisQuestion.fragebild = scene.createActor(thisQuestion.data.imagepath, 220, 170);
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

		scene.quizTotalAnswersCounter = scene.createActor('blank.png', 250, -30, 20, 20);
		// scene.quizTotalAnswersCounter.setSynckey('totalCounter-szene-14');
		scene.quizTotalAnswersCounter.initializeCounterIfNeeded(0);	

		scene.quizCorrectAnswersCounter = scene.createActor('blank.png', 250, -30, 20, 20);
		// scene.quizCorrectAnswersCounter.setSynckey('correctCounter-szene-14');
		scene.quizCorrectAnswersCounter.initializeCounterIfNeeded(0);	
	}

	var black = scene.createActor('blackblock_40_opacity.png', 0, 0, 960, 660).isOnTop();

	var answerYPosition = 165;
	var nextAnswerYPositionStep = 90;

	var weiterbutton = scene.createActor('rechts.png', 410, 425, 50, 50).isOnTop(3);

	for (var i = 0; i < thisQuestion.data.answers.length; i++) {
		var qData = thisQuestion.data.answers[i];
		var myHeight = ((Math.ceil(qData.title.length / 18)+1) * 27);

		var answeractor = scene.createActor('blank.png', 530, answerYPosition, 220, myHeight);
		var answerplayer = scene.createActor('sprecher.png', 615, 170, 36, 28).isOnTop(3).plays(qData.audiopath, 'blank.png');
		answeractor.setText(qData.title, '', 'quiz answer answer' + i);
		answeractor.letsAppear(black, 0, 0);
		thisQuestion.answerActors.push(answeractor);

		if (qData.correct) {
			// correct answer
			var correctactor = scene.createActor('richtig.png', 250, 130, 100, 100).isOnTop(2).addClass('answer' + i);
			correctactor.setText(qData.explanation, '', 'quiz correct explanation');
			weiterbutton.letsDissolve(correctactor);
			weiterbutton.letsDissolve(answerplayer);
			answeractor.letsAppear(correctactor);
			answeractor.letsAppear(weiterbutton);
			answeractor.letsAppear(answerplayer);
			answeractor.letsAddToCounter(scene.quizCorrectAnswersCounter, 1, 1);

		} else {
			// wrong answer
			var wrongactor = scene.createActor('falsch.png', 250, 130, 100, 100).isOnTop(2);
			wrongactor.setText(qData.explanation, '', 'quiz wrong explanation');
			answeractor.letsAppear(wrongactor);
			answeractor.letsAppear(weiterbutton);
			answeractor.letsAppear(answerplayer);
			weiterbutton.letsDissolve(wrongactor);
			weiterbutton.letsDissolve(answerplayer);
		}

		nextAnswerYPositionStep = myHeight;

		if (nextAnswerYPositionStep < 110) nextAnswerYPositionStep = 110;
		answerYPosition += nextAnswerYPositionStep;
	}

	weiterbutton.letsAddToCounter(scene.quizTotalAnswersCounter, 1, 1);
	weiterbutton.letsDissolve(thisQuestion.titleactor);
	weiterbutton.letsDissolve(thisQuestion.fragebild);
	weiterbutton.letsDissolve(thisQuestion.textactor);
	weiterbutton.letsDissolve(thisQuestion.audioplayer);
	for (var i = thisQuestion.answerActors.length - 1; i >= 0; i--) weiterbutton.letsDissolve(thisQuestion.answerActors[i]);

	if (nextQuestion) {
		// there is another question, display it…
		weiterbutton.letsAppear(nextQuestion.titleactor);
		weiterbutton.letsAppear(nextQuestion.fragebild);
		weiterbutton.letsAppear(nextQuestion.textactor);
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

function updateQuizResultsText(textactor, correctAnswers, totalAnswers, scene){
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

	textactor.setText(txt, '', 'quiz');
}

function showQuizResults(scene, triggerButton){
	// console.log("*** showing quiz results");

	var copyData = quizData('copy');
	var resultsHtml = '';

	resultsHtml += '<h2>' + copyData.resultsTitle + '</h2>';

	var quizResultsTitleActor = scene.createActor('blank.png', 220, 120, 200, 30);
	quizResultsTitleActor.setText(copyData.resultsTitle, 'test', 'quiz title');	

	var quizResultsActor = scene.createActor('blank.png', 220, 200, 270, 350);
	quizResultsActor.setText('', '', 'quiz results');
	
	triggerButton.letsAppear(quizResultsActor);
	triggerButton.letsAppear(quizResultsTitleActor);
	//triggerButton.letsAppear(scene.quizPrintButton);

	scene.quizTotalAnswersCounter.reactOnMinimum(scene.numberOfQuestions, function(){
		updateQuizResultsText(quizResultsActor, scene.quizCorrectAnswersCounter.counter, scene.numberOfQuestions, scene);
	  // syncVisibleByKey("scene12-raum-der-pruefungen");
	});

}