//  swal({
	//  icon: 'success',
	//  title: 'Good day!',
//    text:"Hi, friends. My name is Panfilo P. Macantan the developer of this game. Welcome to my Quiz Game. Please give a feedback and comment me if you like it. "
//  })
let questionArray = [];

let PERSON = [
	{
		question: 'What is my name?',
		answer: 'pan',
		options: ['san', 'pan', 'wan', 'lan'],
	},
	{
		question: 'What is my age?',
		answer: '20',
		options: ['18', '20', '30', '19'],
	},
	{
		question: 'What is my gender?',
		answer: 'male',
		options: ['lesbian', 'male', 'female', 'bisexual'],
	},
];
let THINGS = [
	{
		question: 'What is my things?',
		answer: 'laptop',
		options: ['laptop', 'bag', 'cellphone', 'paper'],
	},
	{
		question: 'What is my brand cellphone?',
		answer: 'samsung',
		options: ['samsung', 'vivo', 'oppo', 'apple'],
	},
];
let EARTH = [
	{
		question: 'What is our planet?',
		answer: 'earth',
		options: ['jupiter', 'venus', 'earth', 'mars'],
	},
	{
		question: 'What is my age?',
		answer: '20',
		options: ['18', '20', '30', '19'],
	},
];

let CATEGORIES_LIST = ['person', 'things', 'earth', 'body', 'science'];

CATEGORIES_LIST.forEach((list) => {
	let categoryContainer = document.querySelector('.category-container');
	let button = document.createElement('button');

	button.classList.add('category-btn');
	button.innerText = list;
	categoryContainer.appendChild(button);

	button.onclick = function () {
		switch (this.innerText.toUpperCase()) {
			case 'PERSON':
				questionArray.push(...PERSON);
				console.log('this is personal array');
				console.log(questionArray);
				break;
			case 'THINGS':
				questionArray.push(...THINGS);
				console.log('this is things array');
				console.log(questionArray);
				break;
			case 'EARTH':
				questionArray.push(...EARTH);
				console.log('this is earth array');
				console.log(questionArray);
				break;
			default:
				console.log('IM WORKING ON IT');
		}

		if(questionArray.length >= 0 && playerNameStored.length >= 0){
			for (let i = 0; i < categoryContainer.children.length; i++){
				categoryContainer.children[i].classList.add("disabled")
			}

			categoryContainer.classList.remove('show')

			categoryRules.classList.add('show')
		}


	};
});
