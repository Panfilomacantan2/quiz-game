let questionCounter = 0;
let score = 0;
let playerNameStored = [];
let defaultName = 'Player';
let questionSection = document.querySelector('.question-section');
let playerName = document.querySelector('#players-name');
let playAgainBtn = document.querySelector('.play-again-btn');
let startBtn = document.querySelector('#btn-start');
let nextBtn = document.querySelector('#next-btn');
let timer = document.querySelector('#timer');
let line = document.querySelector('.line');
let categoryQuestionLength = document.querySelector('#category-question-length');
let currentQuestionNumber = document.querySelector('.number-question-container .current-question-number');
let questionLength = document.querySelector('.number-question-container .question-length');
let categoryContainer = document.querySelector('.category-container');
let playerNameInput = document.querySelector('.category-input #player-name');
let playerBtn = document.querySelector('.category-input #player-btn');
let gameInterval;
let timeLeft = 15;
let correctIcon =
	'<div class="icon-correct"><i class="fa fa-check-circle" aria-hidden="true"></i></div>';
let wrongIcon =
	'<div class="icon-correct"><i class="fa fa-times-circle" aria-hidden="true"></i> </div>';


	//this is for the player name

playerBtn.addEventListener('click', function () {
	
		if (playerNameInput.value === null || playerNameInput.length === 0 || playerNameInput.value === '') {
			playerNameStored.push(defaultName);
			playerName.innerHTML = playerNameStored[0];

			console.log(defaultName);
		} else {
			playerNameStored.push(playerNameInput.value);
			playerName.innerHTML = playerNameStored[0];
			playerNameInput.value = '';
			console.log(playerNameStored);
			console.log(defaultName);
		}
	
	
});

nextBtn.style.display = 'none';

nextBtn.onclick = function () {
	if (questionCounter < questionArray.length - 1) {
		questionCounter++;
		showAnswer(questionCounter);
		console.log(questionCounter);
		nextBtn.style.display = 'none';
		timeLeft = 15;
		timer.innerText = `${timeLeft}`;
		gameInterval = setInterval(countdown, 1000);
	} else {
		clearInterval(gameInterval);
		timeLeft = 0;
		nextBtn.classList.add('disabled');
		console.log('COMPLETED');
		questionSection.classList.remove('show');
		resultContainer.classList.add('show');
	    playerName.innerHTML = playerNameStored[0];
	}
};

startBtn.onclick = function () {
	showAnswer(0);
	gameInterval = setInterval(countdown, 1000);
	categoryRules.classList.remove('show');
	questionSection.classList.add('show');

	//console.log("Array length",questionArray.length);
};

//game interval
function countdown() {
	if (timeLeft <= 0) {
		let options = document.querySelectorAll('#option-container .option');
		nextBtn.style.display = 'block';
		for (let i = 0; i < options.length; i++) {
			if (options[i].textContent === questionArray[questionCounter].answer) {
				options[i].classList.add('correct');
				options[i].insertAdjacentHTML('beforeend', correctIcon);
				// console.log(options[i].textContent);
			}
		}
		for (let i = 0; i < options.length; i++) {
			options[i].classList.add('disabled');
		}
		clearInterval(gameInterval);
	} else {
		timeLeft--;
		// line.style.width = `${timeLeft}%`;

		timer.innerText = `${timeLeft}`;
	}
	if (timeLeft < 10) {
		timer.innerText = `0${timeLeft}`;
	}
	//console.log(123);
}

function showAnswer(index) {
	// let options = document.querySelectorAll('.option');
	let questionText = document.querySelector(
		'.question-container #question-text',
	);

	let optionContainer = document.querySelector('#option-container');
	let optionTag = `<div class="option">${questionArray[index].options[0]}</div>
                   <div class="option">${questionArray[index].options[1]}</div>
                   <div class="option">${questionArray[index].options[2]}</div>
                   <div class="option">${questionArray[index].options[3]}</div>`;
	optionContainer.innerHTML = optionTag;

	questionText.innerHTML = `${questionArray[index].question}`;

	for (let i = 0; i < optionContainer.children.length; i++) {
		optionContainer.children[i].setAttribute(
			'onclick',
			'selectedOption(this)',
		);
	}
	currentQuestionNumber.innerText = `${index + 1}`;
	questionLength.innerText = questionArray.length;
	// console.log(optionContainer.children)

	//console.log('question counter', questionCounter);
}

//check the answer
function selectedOption(answer) {
	let userAnswer = answer.textContent;
	let questionAnswer = questionArray[questionCounter].answer;
	let options = document.querySelectorAll('#option-container .option');

	if (userAnswer === questionAnswer) {
		console.log('CORRECT');
		answer.insertAdjacentHTML('beforeend', correctIcon);
		answer.classList.add('correct');
		score++;
		showScore(score);
		//console.log('score:', score);
	} else {
		answer.classList.add('wrong');
		console.log('INCORRECT');
		answer.insertAdjacentHTML('beforeend', wrongIcon);

		//if the user clicks the wrong answer then it automatically choose the answer
		for (let i = 0; i < options.length; i++) {
			if (options[i].textContent === questionArray[questionCounter].answer) {
				options[i].insertAdjacentHTML('beforeend', correctIcon);
				options[i].classList.add('correct');
				// console.log(options[i].textContent);
			}
		}
		categoryQuestionLength.innerText = questionArray.length;
	}
	nextBtn.style.display = 'block';
	//clear the time when the user chose answer
	clearInterval(gameInterval);
	//if the user click all the options are disable
	for (let i = 0; i < options.length; i++) {
		options[i].classList.add('disabled');
	}
}

//show score function and manipulation

function showScore(totalScore) {
	let hideMessage = document.querySelector('#hide-message');
	let playerScore = document.querySelector('#player-score');

	if (totalScore === questionArray.length) {
		hideMessage.style.display = 'block';
	}

	playerScore.innerText = totalScore;
	categoryQuestionLength.innerText = questionArray.length;
}

//when the player wants to play again and reset all the elements
playAgainBtn.addEventListener('click', () => {
	let hideMessage = document.querySelector('#hide-message');
	let categoryBtn = document.querySelectorAll('.category-btn');
	let playerScore = document.querySelector('#player-score');
	let categoryQuestionLength = document.querySelector(
		'#category-question-length',
	);
	questionArray = [];
	score = 0;
	categoryQuestionLength.innerText = 0;
	playerScore.innerText = 0;
	currentQuestionNumber.innerText = 0;
	questionLength.innerText = 0;
	timeLeft = 15;
	timer.innerText = 15;
	questionCounter = 0;
	playerNameStored = [];
	playerName.innerHTML = `${defaultName}`;
	resultContainer.classList.remove('show');
	categoryContainer.classList.add('show');
	//gameInterval = setInterval(countdown, 1000)

	for (let i = 0; i < categoryBtn.length; i++) {
		categoryBtn[i].classList.remove('disabled');
	}
	categoryRules.classList.remove('hide');
	nextBtn.classList.remove('disabled');
	console.log('Array length', questionArray.length);
	hideMessage.style.display = 'none';
});

//function to navigate different divisions
let categoryRules = document.querySelector('.category-rules');
let resultContainer = document.querySelector('.result-container');
let questionContainer = document.querySelector('.question-section');
//include the categoryContainer here!
let ruleNext = document.querySelector('.category-rules #rule-next');
//once the button clicked the rules container will hide and later in play again i will remove the hide classlist
// ruleNext.addEventListener('click', function () {
// categoryRules.classList.add('hide');
// });

//for timer and front cover
let progressBarInterval;
let progressBarTime = 0;
let progressBar = document.querySelector(
	'.front-cover .progress-container .progress-bar',
);
let frontCover = document.querySelector('.front-cover');
document.addEventListener('DOMContentLoaded', function () {
	progressBarInterval = setInterval(loadInterval, 80);
});

function loadInterval() {
	if (progressBarTime >= 100) {
		clearInterval(progressBarInterval);
		frontCover.style.display = ' none';
		//
		categoryContainer.classList.add('show');
	} else {
		progressBarTime++;

		progressBar.style.width = `${progressBarTime}%`;
		document.querySelector('.loading').innerText = `${progressBarTime}%`;
	}
}

