let questionArray = [];

const INSTRUMENTS = [
	{
		question:
			'In 1997 David Kalakaua became the first inductee into the Hall of Fame for this instrument.',
		answer: 'Ukelele',
		options: ['Gong', 'Piano', 'Guitar', 'Ukelele'],
	},
	{
		question:
			'Japanese orchestras include shakuhachi, traditionally made of this.',
		answer: 'Bamboo',
		options: ['Gong', 'Bamboo', 'Guitar', 'Piano'],
	},
	{
		question:
			"It 's the smallest member of the orchestra's brass family & also the one with the highest-pitched notes.",
		answer: 'Trumpet',
		options: ['Ukelele', 'Trumpet', 'Silk', 'Castanets'],
	},
	{
		question:
			'JThe amadinda, a type of this percussion instrument from Uganda, uses logs instead of wooden bars.',
		answer: 'Xylophone',
		options: ['Xylophone', 'Bamboo', 'Gong', 'Bass'],
	},
	{
		question:
			'In 1810 Sebastien Erard patented a pedal device for this instrument that changed the pitch of its strings.',
		answer: 'Harp',
		options: ['Violin', 'Bass', 'Guitar', 'Harp'],
	},
	{
		question: "About 6 feet long, it's sometimes called a bull fiddle.",
		answer: 'Bass',
		options: ['Bass', 'Violin', 'Guitar', 'Harp'],
	},
	{
		question:
			'Made by Wurlitzer beginning in the early 1900s, the "unit orchestra" was one of these instruments.',
		answer: 'Organ',
		options: ['Bass', 'Organ', 'Guitar', 'Piano'],
	},
	{
		question:
			'Beethoven wrote many solo pieces for this instrument which can be 7-10 feet long.',
		answer: 'Piano',
		options: ['Organ', 'Clarinet', 'Piccolo', 'Piano'],
	},
	{
		question:
			'The timbrel mentioned in the Bible, it consists of a parchment stretched over a wooden hoop with metal jingles.',
		answer: 'Tambourine',
		options: ['Tambourine', 'Clarinet', 'Piccolo', 'Cymbals'],
	},
	{
		question:
			'The 6-stringed Spanish version of this instrument has its strings tuned to E below the bass staff, A, D, G, B & E 	guitar.',
		answer: 'Guitar',
		options: ['Guitar', 'Clarinet', 'Piccolo', 'Cymbals'],
	},
	{
		question:
			'When Benny Goodman was doing his swinging, it was usually with this woodwind in his mouth.',
		answer: 'Clarinet',
		options: ['Guitar', 'Clarinet', 'Piccolo', 'Cymbals'],
	},
	{
		question:
			'Total number of musicians you need to play all of "The Music Man"\'s trombones & coronets in the big parade.',
		answer: '186',
		options: ['186', '150', '200', '158'],
	},
	{
		question:
			"This bent steel rod struck by a small metal rod is used in the final movement of Beethoven's Ninth.",
		answer: 'Triangle',
		options: ['Tambourine', 'Triangle', 'Cymbals', 'Trumpet'],
	},
	{
		question:
			'Violins & cellos are part of this section of a symphony orchestra.',
		answer: 'Strings',
		options: ['Strings', 'Percussion', 'Wind', 'Brass'],
	},
	{
		question:
			'A long-necked lute called the samisen is a popular instrument of this country.',
		answer: 'Japan',
		options: ['Japan', 'Canada', 'Taiwan', 'China'],
	},
	{
		question:
			'The English name of this woodwind is a corruption of its French name which means "high wood".',
		answer: 'Oboe',
		options: ['Flute', 'Oboe', 'banjos', 'Maracas'],
	},
	{
		question:
			'A glockenspiel sounds like these, "glocken" being the German word for them.',
		answer: 'Bells',
		options: ['Bells', 'Frets', 'Tuba', 'Maracas'],
	},
	{
		question: 'The snare & timpani are 2 of the most popular types of these.',
		answer: 'Drums',
		options: ['Bells', 'Drums', 'Tuba', 'Maracas'],
	},
	{
		question:
			'About 8 feet long if stretched out, this oboe family member can sound comedic or sad.',
		answer: 'Bassoon',
		options: ['Maracas', 'Drums', 'Tuba', 'Bassoon'],
	},
	{
		question:
			'Commonly, pianos have about 3 of these; modern pipe organs have 32.',
		answer: 'Pedals',
		options: ['Pedals', 'String', 'Frets', 'Bassoon'],
	},
];

const WATER = [
	{
		question:
			'This 315-mile-long river passes through Troy & Albany before hitting the bright lights of New York City.',
		answer: 'Hudzon',
		options: ['Hudzon', 'Yangtze', 'Grand Canyon', 'Rhine'],
	},
	{
		question:
			'Originating in the Tanggula Mountains, this is known to many Chinese as "long river" (\'cause it\'s 3,900 miles).',
		answer: 'Yangtze',
		options: ['None of the Above', 'Yangtze', 'Rhine', 'Seine'],
	},
	{
		question:
			'The Gulf of Taranto lies between the "heel" & the rest of the "foot" of this country.',
		answer: 'Italy',
		options: ['Philippines', 'Singapore', 'Italy', 'Thailand'],
	},
	{
		question:
			'Dutch settlers named this longest river of South Africa not for its color but their royal family.',
		answer: 'Orange',
		options: ['Orange', 'Red', 'Blue', 'Green'],
	},
	{
		question: "It's the largest river gorge in the world.",
		answer: 'Grand Canyon',
		options: ['Hebrides', 'Grand Canyon', 'Ohio River', 'Kashmir'],
	},
	{
		question: "Malta isn't surrounded by milk but by this body of water.",
		answer: 'Mediterranean',
		options: ['samsung', 'Mediterranean', 'Ohio River', 'Hebrides'],
	},
	{
		question:
			'Lake Kinneret & th.e Sea of Tiberias are other names for this Biblical "Sea".',
		answer: 'Sea of Galilee',
		options: ['Tasman Sea', 'Caribbean Sea', 'Salton Sea', 'Sea of Galilee'],
	},
	{
		question: 'Sittwe, Burma & Calcutta, India are major ports on this bay.',
		answer: 'Bengal bay',
		options: ['Bengal bay', 'Manila bay', 'Salton bay', 'Quebec bay'],
	},
	{
		question: "Namibia's coastline is provided by this body of water.",
		answer: 'Atlantic Ocean',
		options: [
			'Indian Ocean',
			'Atlantic Ocean',
			'Pacific Ocean',
			'Arctic Ocean',
		],
	},
	{
		question:
			'This bay that shares its name with the Philippine capital is nearly landlocked.',
		answer: 'Manila bay',
		options: ['Manila bay', 'Quebec bay', 'Bengal bay', 'Chesapeake bay'],
	},
	{
		question: 'The name of this ocean means "peaceful".',
		answer: 'Pacific',
		options: ['Pacific', 'Arctic', 'Atlantic', 'None of the Above'],
	},
	{
		question:
			"Located in the Highlands, Loch Lomond is this country's largest lake.",
		answer: 'Scotland',
		options: ['Scotland', 'Poland', 'Thailand', 'Malaysia'],
	},
	{
		question:
			'This Asian "sea" is actually a lake that\'s more than 4 1/2 times larger than Lake Superior.',
		answer: 'Caspian Sea',
		options: ['North sea', 'Caspian Sea', 'Philippine Sea', 'South Sea'],
	},
	{
		question:
			'The Shatt Al Arab is formed by the confluence of these 2 rivers.',
		answer: 'Tigris & the Euphrates',
		options: [
			'Amazon',
			'Colorado River',
			'Tigris & the Euphrates',
			'Mississippi River',
		],
	},
	{
		question:
			"The Orinoco begins in Venezuela's state that's named for this other river.",
		answer: 'Amazon',
		options: ['Amazon', 'Mississippi River', 'Nile River', 'Colorado River'],
	},
	{
		question:
			'Lake Nasser was formed in 1968 when the waters of this river were blocked by the Aswan High Dam.',
		answer: 'Nile River',
		options: ['Amazon', 'Mississippi River', 'Nile River', 'Colorado River'],
	},
	{
		question:
			"Narrow Biblical sea between Saudi Arabia & Africa that's an intense blue-green in color.",
		answer: 'Red Sea',
		options: ['Red Sea', 'Blue Sea', 'Green Sea', 'Black Sea'],
	},
	{
		question:
			"China's Huang River carries large amounts of straw-colored earth into this sea.",
		answer: 'Yellow Sea',
		options: ['White Sea', 'Yellow Sea', 'Red Sea', 'Blue Sea'],
	},
	{
		question:
			'Name of this sea is said to allude not to its dark water but its storms.',
		answer: 'Black Sea',
		options: ['Red Sea', 'Blue Sea', 'Black Sea', 'White Sea'],
	},
	{
		question:
			'Icebreakers now keep Port of Archangel, on this appropriately-named sea, open in winter.',
		answer: 'White Sea',
		options: ['White Sea', 'Red Sea', 'Yellow Sea', 'Blue Sea'],
	},
];
const ANIMALS = [
	{
		question:
			'Close relative of the pig, though its name means "river horse".',
		answer: 'hippopotamus',
		options: ['Hippopotamus', 'Horse', 'Pig', 'Duck'],
	},
	{
		question: 'They include killers, humpbacks & sperms.',
		answer: 'Whales',
		options: ['Whales', 'Dog', 'Lion', 'Turkey'],
	},
	{
		question: 'The "ship of the desert".',
		answer: 'Camel',
		options: ['Lion', 'Turkey', 'Camel', 'Elephant'],
	},
	{
		question: '"Sly" creature sought by sportsmen riding to hounds".',
		answer: 'Fox',
		options: ['Elephant', 'Horse', 'Fox', 'Dog'],
	},
	{
		question:
			'According to New York\'s Bronx Zoo, it\'s "the most dangerous animal in the world".',
		answer: 'Man',
		options: ['Man', 'Lion', 'Snake', 'Tiger'],
	},
	{
		question:
			'Australia\'s maned goose operates under an alias; it\'s really one of these "daffy" creatures.',
		answer: 'Duck',
		options: ['Goose', 'Bird', 'Duck', 'Swan'],
	},
	{
		question:
			'The most recent member of the "ursus", or bear, line is this species which headed north.',
		answer: 'Polar Bear',
		options: ['Dog', 'Polar Bear', 'Bear', 'Penguin'],
	},
	{
		question: "A mosquito's hum is actually the sound made by these.",
		answer: 'Wings',
		options: ['Wings', 'Mouth', 'Foot', 'Nose'],
	},
	{
		question: "Of teeth, nails or beaks, the ones turtles don't have.",
		answer: 'Teeth',
		options: ['Teeth', 'Mouth', 'Ears', 'Nose'],
	},
	{
		question:
			'The Bush species of this is the largest land mammal in the world.',
		answer: 'Elephant',
		options: ['Whales', 'Shark', 'Giraffe', 'Elephant'],
	},
	{
		question: "The flying fox isn't a type of fox, but a type of this.",
		answer: 'Bat',
		options: ['Dog', 'Bat', 'Goose', 'Swan'],
	},
	{
		question: "The part of the male lyrebird that's shaped like a lyre.",
		answer: 'Tail',
		options: ['Ears', 'Tail', 'Foot', 'Head'],
	},
	{
		question:
			'The adjective feliform describes anything that resembles one of these animals.',
		answer: 'Cat',
		options: ['Dog', 'Mouse', 'Cat', 'Chicken'],
	},
	{
		question: 'Mason, miner & killer are 3 types of these insects.',
		answer: 'Bees',
		options: ['Butterfly', 'Bees', 'Grasshopper', 'Mosquito'],
	},
	{
		question:
			'The macropis rufus; it can lean back on its tail to free its hind feet for use as weapons.',
		answer: 'Kangaroo',
		options: ['Kangaroo', 'Horse', 'Dog', 'Goat'],
	},
	{
		question:
			'Like its giant relative, the lesser variety of this is also a bamboo eater.',
		answer: 'Panda',
		options: ['Elephant', 'Horse', 'Carabao', 'Panda'],
	},
	{
		question:
			"These stinging arachnids give birth to live young which cling to their mother's backs for several days.",
		answer: 'Scorpions',
		options: ['Scorpions', 'Crab', 'Shrimp', 'Fish'],
	},
	{
		question:
			'The silvery blue, the spring azure & the common oakblue are blue-winged types of this beautiful insect.',
		answer: 'Butterfly',
		options: ['Ants', 'Butterfly', 'Grasshopper', 'Bees'],
	},
	{
		question:
			'Lizards & these creatures, like pythons & cobras, make up the largest group of reptiles.',
		answer: 'Snakes',
		options: ['Centipede', 'Snakes', 'Lizards', 'Scorpions'],
	},
	{
		question:
			'Up to 50 feet in length, the whale species of this fish is the largest in the sea.',
		answer: 'Shark',
		options: ['Shark', 'Whale', 'Penguin', 'Hippopotamus'],
	},
];

const SPORTS = [
	{
		question:
			'In this game, an entry sport to baseball, the batter hits the ball that rests atop a tube.',
		answer: 'T-ball',
		options: ['Tennis', 'Soccer', 'Golf', 'T-ball'],
	},
	{
		question: "It's the sport played professionally by Andre Agassi.",
		answer: 'Tennis',
		options: ['Tennis', 'Soccer', 'Golf', 'T-ball'],
	},
	{
		question: 'What the Europeans call association football, we call this.',
		answer: 'Soccer',
		options: ['Tennis', 'Soccer', 'Golf', 'Cricket'],
	},
	{
		question: 'Sport which uses epees, foils & sabres.',
		answer: 'Fencing',
		options: ['Skydiving', 'Golf', 'Fencing', 'Cricket'],
	},
	{
		question:
			"World's fastest sport, free-fall speeds of 614 MPH have been recorded in this.",
		answer: 'Skydiving',
		options: ['Skydiving', 'Golf', 'Cricket', 'Fencing'],
	},
	{
		question: 'Game where "dribbling" is "offensive".',
		answer: 'Basketball',
		options: ['Skydiving', 'Basketball', 'Cricket', 'Fencing'],
	},
	{
		question:
			'Sport in which you might leave a bucket, Christmas tree or picket fence.',
		answer: 'Bowling',
		options: ['Bowling', 'Basketball', 'Baseball', 'Fencing'],
	},
	{
		question:
			'According to Forbes Magazine, the 3 highest-paid athletes for 1990 compete in this sport.',
		answer: 'Boxing',
		options: ['Football', 'Basketball', 'Baseball', 'Boxing'],
	},
	{
		question:
			"With 18, this sport's Larissa Latynina has more Olympic medals than any other person.",
		answer: 'Gymnastics',
		options: ['Football', 'Basketball', 'Gymnastics', 'Boxing'],
	},
	{
		question:
			"The U.S.O.C. named Dot Richardson this Olympic sport's 1996 Female Athlete of the Year.",
		answer: 'Softball',
		options: ['Football', 'Basketball', 'Softball', 'Baseball'],
	},
	{
		question:
			'In 1996 Kent Steffes & Karch Kiraly won the first gold medal ever presented in this type of volleyball.',
		answer: 'Beach Volleyball',
		options: ['Beach Volleyball', 'Basketball', 'Volleyball', 'Football'],
	},
	{
		question: "He's the only Chicago Bulls player named Rookie of the Year.",
		answer: 'Michael Jordan',
		options: [
			'Hakeem Olajuwon',
			'Michael Jordan',
			'Joe Louis',
			'Steffi Graf',
		],
	},
	{
		question: 'The number of laps run in the Indy 500.',
		answer: '200',
		options: ['200', '300', '400', '500'],
	},
	{
		question:
			"According to rules, the strike zone in baseball extends from the batter's knees to here.",
		answer: 'Armpits',
		options: ['Knee', 'shoulder', 'Armpits', 'Head'],
	},
	{
		question:
			"On an official archery target, it's the color of the bull's eye.",
		answer: 'Yellow',
		options: ['Yellow', 'Green', 'Red', 'White'],
	},
	{
		question:
			'On July 17, 1994 this nation won a record fourth World Cup soccer title by beating Italy, 3-2 on penalty kicks.',
		answer: 'Brazil',
		options: ['China', 'Brazil', 'Indonesia', 'Russia'],
	},
	{
		question: "It's the only NBA team in Ohio.",
		answer: 'Cleveland Cavaliers',
		options: [
			'Golden State Warriors',
			'Cleveland Cavaliers',
			'Chicago Bulls',
			'Lakers',
		],
	},
	{
		question:
			'Number of downs allowed in Canadian football to advance the ball 10 yards.',
		answer: '3',
		options: ['7', '10', '3', '5'],
	},
	{
		question: 'This offshoot of soccer is named for a school in England.',
		answer: 'Rugby',
		options: ['Golf', 'Rugby', 'Gulf', 'Foil'],
	},
	{
		question:
			'Greco-Roman & freestyle are the 2 styles featured in this Olympic sport.',
		answer: 'Wrestling',
		options: ['Football', 'Wrestling', 'Boxing', 'Tennis'],
	},
];


const FRUITS = [
	{
		question:
			"Supreme Court said this salad ingredient could be classified as a vegetable (but it's botanically a fruit).",
		answer: 'Tomato',
		options: ['Tomato', 'Potato', 'Strawberry', 'Peaches'],
	},
	{
		question:
			'These red "berries" grown on the ground aren\'t true berries because the seeds are on the outside.',
		answer: 'Strawberries',
		options: ['Strawberries', 'Lettuce', 'Onions', 'Apple'],
	},
	{
		question: 'Santa Claus, casaba & Crenshaw are types of this fruit.',
		answer: 'Melon',
		options: ['Banana', 'Melon', 'Apple', 'Mango'],
	},
	{
		question:
			'Except for grains, this tuber is the most widely consumed human food.',
		answer: 'Potato',
		options: ['Potato', 'Mango', 'Peaches', 'Citrus'],
	},
	{
		question:
			'Wintercress is also called scurvy grass because of its high content of this vitamin.',
		answer: 'Vitamin C',
		options: ['Vitamin A', 'Vitamin C', 'Vitamin B', 'Vitamin E'],
	},
	{
		question:
			'Burpee ran a 1990 contest for the largest prize-winner variety of this; the deadline for entry was October 31st.',
		answer: 'Pumpkin',
		options: ['Banana', 'Grapes', 'Citrus', 'Pumpkin'],
	},
	{
		question:
			'Slices of this pickling vegetable are said to soften skin & soothe tired eyes.',
		answer: 'Cucumber',
		options: ['Citrus', 'Grapes', 'Cucumber', 'Orange'],
	},
	{
		question:
			'The plantain type of this tropical fruit is almost always eaten cooked.',
		answer: 'Banana',
		options: ['Pear', 'Banana', 'Cabbage', 'Avocado'],
	},
	{
		question:
			'These large green banana relatives are usually available in Hispanic markets as platanos.',
		answer: 'Plantains',
		options: ['Spinach', 'Plantains', 'Leek', 'Jicama'],
	},
	{
		question:
			'For cooking, popular ones of these include the Gravenstein & the Greening.',
		answer: 'Apple',
		options: ['Apple', 'Banana', 'Lettuce', 'Cabbage'],
	},
	{
		question:
			'In the South, this vegetable that thickens gumbo is also eaten fried.',
		answer: 'Okra',
		options: ['Eggplant', 'Papaya', 'Okra', 'Turnip'],
	},
	{
		question: "In Europe, it's known as an aubergine.",
		answer: 'Eggplant',
		options: [
			'Eggplant',
			'Grapes',
			'Turnip',
			'Kiwi',
		],
	},
	{
		question:
			'A serving of the butternut variety of this vegetable supplies over 100 percent of the RDA of beta carotene.',
		answer: 'Squash',
		options: ['Apple', 'Squash', 'Papaya', 'Banana'],
	},
	{
		question:
			'George Washington Carver developed 118 products from this tuber related to the morning glory.',
		answer: 'Sweet potatoes',
		options: ['Pods', 'Sweet potatoes', 'Lettuce', 'Kiwi'],
	},
	{
		question:
			'The name of this so-called artichoke isn\'t from a city in Israel but from girasole, Italian for "sunflower".',
		answer: 'Jerusalem',
		options: ['Russia', 'Jerusalem', 'Greece', 'Egypt'],
	},
	{
		question:
			"In 1493 Columbus encountered this, Hawaii's most valuable fruit crop, on the island of Guadeloupe.",
		answer: 'Pineapple',
		options: ['Radish', 'Pineapple', 'Banana', 'Papaya'],
	},
	{
		question:
			'This tropical fruit contains an enzyme called papain which is used to tenderize meat.',
		answer: 'Papaya',
		options: ['radish', 'Papaya', 'Squash', 'Cabbage'],
	},
	{
		question: 'Mustard family member that may be plain or horse.',
		answer: 'Raddish',
		options: ['Raddish', 'Squash', 'Papaya', 'Cucumber'],
	},
	{
		question:
			'To get its green flesh, cut lengthwise around the large seed, twist halves apart, remove seed & scoop.',
		answer: 'Avocado',
		options: ['Squash', 'Banana', 'Avocado', 'Apple'],
	},
	{
		question: 'Term for the edible leaves of the turnip, beet & collard.',
		answer: 'Greens',
		options: ['Greens', 'Blue', 'Yellow', 'Yellow Green'],
	},
];

let CATEGORIES_LIST = [
	'musical instruments',
	'bodies of water',
	'animals',
	'sports',
	'fruits and Vegetables',
];

CATEGORIES_LIST.forEach((list) => {
	let categoryContainer = document.querySelector('.category-container');
	let button = document.createElement('button');

	button.classList.add('category-btn');
	button.innerText = list;
	categoryContainer.appendChild(button);

	button.onclick = function () {
		document.querySelector('#choose').play();
		document.querySelector('#choose').currentTime = 0;

		switch (this.innerText.toUpperCase()) {
			case 'MUSICAL INSTRUMENTS':
				questionArray.push(...INSTRUMENTS);
				console.log('this is personal array');
				console.log(questionArray);
				break;
			case 'BODIES OF WATER':
				questionArray.push(...WATER);
				console.log('this is things array');
				console.log(questionArray);
				break;
			case 'ANIMALS':
				questionArray.push(...ANIMALS);
				console.log('this is earth array');
				console.log(questionArray);
				break;
			case 'SPORTS':
				questionArray.push(...SPORTS);
				console.log('this is earth array');
				console.log(questionArray);
				break;
			case 'FRUITS AND VEGETABLES':
				questionArray.push(...FRUITS);
				console.log('this is earth array');
				console.log(questionArray);
				break;
			default:
				console.log('IM WORKING ON IT');
		}

		if (questionArray.length >= 0 && playerNameStored.length >= 0) {
			for (let i = 0; i < categoryContainer.children.length; i++) {
				categoryContainer.children[i].classList.add('disabled');
			}
			if (
				playerNameInput.value === '' ||
				playerNameInput.value.length === 0
			) {
				playerNameStored.push('Player');
				playerName.innerHTML = playerNameStored[0];
			}
			categoryContainer.classList.remove('show');

			categoryRules.classList.add('show');
		}
	};
});
