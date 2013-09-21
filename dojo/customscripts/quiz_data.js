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
			title: "Frage von Maia",
			imagepath: 'frage1.jpg',
			audiopath: '',
			text: 'Wofür steht die grüne Partei?',
			answers: [
				{correct: true, title: 'Sie wollen mehr Umweltschutz.', explanation: 'Super!', audiopath: 'richtig'},
				{correct: false, title: 'Sie wollen Atomstrom.', explanation: 'Falsch!', audiopath: 'falsch'}
			]	
		}
	}

	if (key === 'q1_2') {
		ret = {
			title: "Frage von Patryck und Martyna",
			imagepath: 'frage2.jpg',
			audiopath: '',
			text: 'Wer kandidiert zum Bundeskanzler?',
			answers: [
				{correct: true, title: 'Angela Merkel', explanation: 'Fein!', audiopath: 'richtig'},
				{correct: false, title: 'Donald Tusk', explanation: 'So ein Quatsch!', audiopath: 'falsch'}
			]	
		}
	}

	if (key === 'q1_3') {
		ret = {
			title: "Frage von Kian",
			imagepath: 'frage3.jpg',
			audiopath: '',
			text: 'Wieviele Bundeskanzler gab es bis heute?',
			answers: [
				{correct: true, title: 'Es gab 8 Bundeskanzler.', explanation: 'Korrekt.', audiopath: 'richtig'},
				{correct: false, title: 'Es gab 10 Bundeskanzler.', explanation: 'Falsch.', audiopath: 'falsch'}
			]	
		}
	}

	if (key === 'q1_4') {
		ret = {
			title: "Frage von Dominik",
			imagepath: 'frage4.jpg',
			audiopath: '',
			text: 'Was ist eine Partei?',
			answers: [
				{correct: false, title: 'Eine Partei ist ein Fußballclub.', explanation: 'Nein.', audiopath: 'falsch'},
				{correct: true, title: 'Eine Partei ist wählbar und hat ein Wahlprogramm.', explanation: 'Super!', audiopath: 'richtig'}
			]	
		}
	}

	if (key === 'q1_5') {
		ret = {
			title: "Frage von Erasmus",
			imagepath: 'frage5.jpg',
			audiopath: '',
			text: 'Wer war der erste deutsche Bundeskanzler?',
			answers: [
				{correct: true, title: 'Konrad Adenauer', explanation: 'Super.', audiopath: 'richtig'},
				{correct: false, title: 'Ludwig Erhard', explanation: 'Ganz genau!', audiopath: 'falsch'}
			]	
		}
	}

	if (key === 'q1_6') {
		ret = {
			title: "Frage von Leo (9J ahre alt)",
			imagepath: 'frage6.jpg',
			audiopath: '',
			text: 'Welche Partei fordert 10 Euro Mindestlohn?',
			answers: [
				{correct: false, title: 'Die SPD', explanation: 'Falsch!', audiopath: 'falsch'},
				{correct: true, title: 'Die Linke', explanation: 'Ja.', audiopath: 'richtig'}
			]	
		}
	}

	if (key === 'q1_7') {
		ret = {
			title: "Frage von Levia (6 Jare alt)",
			imagepath: 'frage7.jpg',
			audiopath: '',
			text: 'Welcher dieser beiden Politiker gehört zu den Grünen?',
			answers: [
				{correct: true, title: 'Volker Beck', explanation: 'Ja.', audiopath: 'richtig'},
				{correct: false, title: 'Martin Wortmann', explanation: 'Ganz und gar nicht!', audiopath: 'falsch'},
			]	
		}
	}

	if (key === 'q1_8') {
		ret = {
			title: "Frage von Luna",
			imagepath: 'frage8.jpg',
			audiopath: '',
			text: 'Gibt es Wahlen für Kinder?',
			answers: [
				{correct: false, title: 'Nein, natürlich nicht!', explanation: 'Nein', audiopath: 'falsch'},
				{correct: true, title: 'Ja, aber keine richtigen Wahlen.', explanation: 'Bravo!', audiopath: 'richtig'}
			]	
		}
	}

	if (key === 'q1_9') {
		ret = {
			title: "Frage von Pia (11 Jahre alt)",
			imagepath: 'frage9.jpg',
			audiopath: '',
			text: 'Wieviel Prozent der Ingenieursstudenten sind weiblich?',
			answers: [
				{correct: true, title: '20,6%', explanation: 'Bravo!', audiopath: 'richtig'},
				{correct: false, title: '40,8%', explanation: 'Nö.', audiopath: 'falsch'},
			]
		}
	}

	if (key === 'q1_10') {
		ret = {
			title: "Frage von Leo (9 Jahre alt)",
			imagepath: 'frage10.jpg',
			audiopath: '',
			text: 'Welche Partei hat den Slogan: Gemeinsam erfolgreich',
			answers: [
				{correct: true, title: 'Die CDU', explanation: 'Ja', audiopath: 'richtig'},
				{correct: false, title: 'Die SPD', explanation: 'Wie bitte?', audiopath: 'falsch'},
			]	
		}
	}


	return ret;
}

