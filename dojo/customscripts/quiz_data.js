function quizData(key){
	var ret;

	if (key === 'copy') {
		ret = {
			no_answers: 'keine Antworten',
			one_answer: 'eine Antwort',
			x_answers: '%count% Antworten',
			no_questions: 'keine Fragen',
			one_question: 'eine Frage',
			x_questions: '%count% Fragen',
			resultsTitle: 'Auswertung',
			level1: "Exzellent, ich hätte es selbst nicht besser wissen können. ",
			level2: 'Nun, das war schon mal eine wirklich brauchbare Leistung. Immerhin %correct% richtig von %total% insgesamt!',
			level3: 'Das war schon mal ein ziemlich guter Versuch. Immerhin %correct% richtig von %total% insgesamt!',
			level4: 'Schade! Du warst vielleicht etwas zu aufgeregt.Viel Glück. Und bis zum nächsten Mal. (In diesem Versuch hast Du %correct% richtig getroffen, von %total% insgesamt)',
			}
	}

	if (key === 'q1_1') {
		ret = {
			title: "Frage 1",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Super', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nö!', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_2') {
		ret = {
			title: "Frage 2",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Fein!', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Super!', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_3') {
		ret = {
			title: "Frage 3",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Korrekt.', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Ja.', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_4') {
		ret = {
			title: "Frage 4",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nein.', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Super!', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_5') {
		ret = {
			title: "Frage 5",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Super.', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Ganz genau!', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_6') {
		ret = {
			title: "Frage 6",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Ähhh, wie kommst Du denn darauf?', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Ja.', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_7') {
		ret = {
			title: "Frage 7",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Ja.', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Ganz und gar nicht!', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Richtig!', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_8') {
		ret = {
			title: "Frage 8",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nein', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nein', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Bravo!', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_9') {
		ret = {
			title: "Frage 9",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Bravo!', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nö.', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nein.', audiopath: 'quack'}
			]	
		}
	}

	if (key === 'q1_10') {
		ret = {
			title: "Frage 10",
			imagepath: '1.png',
			audiopath: '',
			text: 'Hier kommt deine Frage hin',
			answers: [
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Ja', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Wie bitte?', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nö.', audiopath: 'quack'}
			]	
		}
	}


	return ret;
}

