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
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nö!', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Autsch!', audiopath: 'quack'}
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
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Exzellent kombiniert!', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Ja, denn schließlich kann man nie genug Wissen ansammeln!', audiopath: 'quack'},
				{correct: true, title: 'Es gibt eine Nuss zu knacken', explanation: 'Gaaaanz recht, denn viele Rätsel wollen gelöst werden, um hier weiterzukommen.', audiopath: 'quack'}
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
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Und das funktioniert sogar.', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Kaum zu glauben, ich weiß, aber so erzählt man es sich hier in Merlantis.', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Wohl wahr, denn Hirsche müssen auch ihr Revier verteidigen.', audiopath: 'quack'}
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
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Vollkommen überbewertet! Du musst ja auch nicht dauernd.', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Exzellent! Zu dem eingebauten Navi von Tauben erfährst Du im Raum der Sinne noch mehr.', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Gaaaanz richtig! Seit jeher ist die weiße Taube mit Olivenzweig ein Friedenssymbol.', audiopath: 'quack'}
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
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Ganz genau!', audiopath: 'quack'},
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Hmmm.', audiopath: 'quack'}
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
				{correct: true, title: 'Hier kommt eine richtige Antwort hin.', explanation: 'Ja.', audiopath: 'quack'},
				{correct: false, title: 'Hier kommt eine falsche Antwort hin.', explanation: 'Nö.', audiopath: 'quack'}
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
			audiopath: 'kraehe',
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

