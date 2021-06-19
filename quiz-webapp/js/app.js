let questionCounter = 0;
let score = 0;
let playerNameStored = [];
// let playerTimeStored = []
let questionSection = document.querySelector('.question-section');
let playerName = document.querySelector('.players-name');
let playAgainBtn = document.querySelector('.play-again-btn');
let startBtn = document.querySelector('#btn-start');
let nextBtn = document.querySelector('#next-btn');
let timer = document.querySelector('#timer');
let line = document.querySelector('.line');
let categoryQuestionLength = document.querySelector(
	'#category-question-length',
);
let currentQuestionNumber = document.querySelector(
	'.number-question-container .current-question-number',
);
let questionLength = document.querySelector(
	'.number-question-container .question-length',
);
let categoryContainer = document.querySelector('.category-container');
let playerNameInput = document.querySelector('.category-input #player-name');
let playerBtn = document.querySelector('.category-input #player-btn');
let gameInterval;
let timeLeft = 21;
let correctIcon =
	'<div class="icon-correct"><i class="fa fa-check-circle" aria-hidden="true"></i></div>';
let wrongIcon =
	'<div class="icon-correct"><i class="fa fa-times-circle" aria-hidden="true"></i> </div>';

// window.onload = () => {
// 	document.querySelector('#playing').play();
// 	document.querySelector('#playing').currentTime = 0;
// 	document.querySelector('#playing').volume = 0.5;
// };
//THIS IS FOR THE LEVELS
//  let selectLevel = document.querySelector('#select-level');

// selectLevel.addEventListener('click', function () {
// switch (this.value.toUpperCase()) {
// case 'EASY':
//
// playerTimeStored.push(20)
// console.log("THIS IS EASY PART")
// console.log(playerTimeStored[0])
// break;
// case 'MEDIUM':
//
// playerTimeStored.push(15);
// console.log('THIS IS MEDIUM PART');
// console.log(playerTimeStored[0]);
// break;
// case 'HARD':
// playerTimeStored.push(10);
// console.log('THIS IS HARD PART');
// console.log(playerTimeStored[0]);
// break;
// }
// });

playerBtn.addEventListener('click', function () {
	if (playerNameInput.value === '' || playerNameInput.value.length === 0) {
		playerNameStored.push('Player');
		playerName.innerHTML = playerNameStored[0];
	} else {
		playerNameStored.push(playerNameInput.value);
		playerName.innerHTML = playerNameStored[0];
		document.querySelector('#players-name').innerText = `- ${playerNameStored[0]} -`;
		playerNameInput.value = '';
		console.log(playerNameStored);
		
	}
	document.querySelector('#choose').play();
	document.querySelector('#choose').currentTime = 0;
});

nextBtn.style.display = 'none';

nextBtn.onclick = function () {
	if (questionCounter < questionArray.length - 1) {
		questionCounter++;
		showAnswer(questionCounter);
		console.log(questionCounter);
		nextBtn.style.display = 'none';
		timer.innerText = timeLeft;
		timeLeft = 21;
		gameInterval = setInterval(countdown, 1000);
	} else {
		clearInterval(gameInterval);
		//playerTimeStored[0] = 20;
		nextBtn.classList.add('disabled');
		console.log('COMPLETED');
		questionSection.classList.remove('show');
		resultContainer.classList.add('show');
		playerName.innerHTML = playerNameStored[0];
		document.querySelector('#congratulation').play();
		document.querySelector('#congratulation').currentTime = 0;
	}
	document.querySelector('#choose').play();
	document.querySelector('#choose').currentTime = 0;
};

startBtn.onclick = function () {
	showAnswer(0);
	gameInterval = setInterval(countdown, 1000);
	categoryRules.classList.remove('show');
	questionSection.classList.add('show');

	document.querySelector('#choose').play();
	document.querySelector('#choose').currentTime = 0;
	//console.log("Array length",questionArray.length);
};

//game interval
function countdown() {
	if (timeLeft <= 0) {
		let options = document.querySelectorAll('#option-container .option');
		nextBtn.style.display = 'block';
		for (let i = 0; i < options.length; i++) {
			if (
				options[i].textContent.toUpperCase() ===
				questionArray[questionCounter].answer.toUpperCase()
			) {
				options[i].classList.add('correct');
				options[i].insertAdjacentHTML('beforeend', correctIcon);
				// console.log(options[i].textContent);
			}
		}
		for (let i = 0; i < options.length; i++) {
			options[i].classList.add('disabled');
		}
		clearInterval(gameInterval);
		document.querySelector('#timesUp').play();
		document.querySelector('#timesUp').currentTime = 0;
	} else {
		timeLeft--;
		// line.style.width = `${timeLeft}%`;

		timer.innerText = timeLeft;
	}
	if (timeLeft < 10) {
		timer.innerText = '0' + timeLeft;
	}
	//console.log(123);

	categoryQuestionLength.innerText = questionArray.length;
	playerName.innerHTML = 'Player';
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
	let userAnswer = answer.textContent.toUpperCase();
	let questionAnswer = questionArray[questionCounter].answer.toUpperCase();
	let options = document.querySelectorAll('#option-container .option');

	if (userAnswer === questionAnswer) {
		console.log('CORRECT');
		answer.insertAdjacentHTML('beforeend', correctIcon);
		answer.classList.add('correct');
		score++;
		showScore(score);
		//console.log('score:', score);
		document.querySelector('#check').play();
		document.querySelector('#check').currentTime = 0;
	} else {
		answer.classList.add('wrong');
		console.log('INCORRECT');
		answer.insertAdjacentHTML('beforeend', wrongIcon);

		//if the user clicks the wrong answer then it automatically choose the answer
		for (let i = 0; i < options.length; i++) {
			if (
				options[i].textContent.toUpperCase() ===
				questionArray[questionCounter].answer.toUpperCase()
			) {
				options[i].insertAdjacentHTML('beforeend', correctIcon);
				options[i].classList.add('correct');
				// console.log(options[i].textContent);
			}
		}
		categoryQuestionLength.innerText = questionArray.length;
		document.querySelector('#wrong').play();
		document.querySelector('#wrong').currentTime = 0;
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
	playerName.innerHTML = 'Player';
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
	timeLeft = 20;
	timer.innerText = timeLeft;
	questionCounter = 0;
	//playerNameStored = [];
	//playerTimeStored.length = 0;
	playerName.innerHTML = 'Player';
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
	document.querySelector('#choose').play();
	document.querySelector('#choose').currentTime = 0;
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
		frontCover.style.display = ' none';
		categoryContainer.classList.add('show');
		document.querySelector('#playing').play();
		document.querySelector('#playing').currentTime = 0;
		document.querySelector('#playing').volume = 0.5;
		clearInterval(progressBarInterval);
	} else {
		progressBarTime++;

		progressBar.style.width = `${progressBarTime}%`;
		document.querySelector('.loading').innerText = `${progressBarTime}%`;
		// document.querySelector('#playing').pause();
		// document.querySelector('#playing').currentTime = 0;
	}
}

document.querySelector('#quit-btn').onclick = function () {
	window.location.reload();
	document.querySelector('#choose').play();
	document.querySelector('#choose').currentTime = 0;
	document.querySelector('#playing').pause();
	document.querySelector('#playing').currentTime = 0;
};

//this is for the images when selecting

let images = document.querySelectorAll('.avatar-container img');

images.forEach(img => {
	img.addEventListener('click', function () {
		document.querySelector('#user-avatar').src = img.src;
	})
})

//toggle btn to hide / show the avatar container

document.querySelector('#avatar-btn').onclick = function () {
	let imgContainer = document.querySelector('.avatar-container')

	imgContainer.classList.toggle('show')
}

//for opening the navigation to 100%

document.querySelector('#openNav').onclick = function () {
	document.querySelector('.nav-container').style.width = '350px';
}

//for closing the navigation bar to 0%
document.querySelector('#closeNav').onclick = function () {
	document.querySelector('.nav-container').style.width = 0 + 'px';
}