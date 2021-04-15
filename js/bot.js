//Page Effects

$(document).ready(function(){

	$(".bot-header").animate({"height" : "247px"}, 500, function(){

		$(".bot-header h2").fadeIn(1000);
		$("#tm-chances").fadeIn(1000);
		$("#tm-time").fadeIn(1000);
		$(".bot-header h1").animate({"font-size" : "100px"},1000);

	});

	
});






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Create array of words
console.log("Hello CineMania!");

var flag = 0;

const word = ['DANGAL', 'LAGAAN', 'SHOLAY', 'CHHICHHORE', 'ANDHADHUN', 'DHOL', 'GOLMAAL', 'DHAMAAL', 'SOORYAVANSHAM', 'LAXMII', 'INCEPTION', 'HUGO', 'JOKER', 'PARASITE', 'ANTRUM', 'GOOSEBUMPS', 'AMELIE', 'ZODIAC', 'NIGHTCRAWLER', 'INTERSTELLAR' ];

//Choose word randomly

let randNum = Math.floor(Math.random()*word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let chancesText = ['C','H','A','N','C','E','S',' ','L','E','F','T',' ',':',' '];
var chances = chosenWord.length;
let timerText = ['T','I','M','E',' ','L','E','F','T',' ',':',' '];

console.log(chosenWord);

//DOM Manipulation
let docUnderScore = $(".underScore");
let docRightGuess = $(".rightGuess");
let docWrongGuess = $(".wrongGuess");
let docChances = $("#tm-chances");
let docTimer = $("#tm-time");

chancesText.push(chances.toString());
docChances[0].innerHTML = chancesText.join('');

//Returns the count of distinct characters of chosen word

function makeUnique(str) {
  return String.prototype.concat(...new Set(str));
}

//Create underscores based on word length

let generateUnderscore = () => {

	for (let i = 0; i < chosenWord.length; i++) {
		underScore.push('_');
		
	}
	return underScore;

}

axios.get('https://www.omdbapi.com?s=' + chosenWord + '&apikey=9be27fce').then(function(response){

		//$("#hint").html('<p>HINTS</p>');
		let output = ``;
		switch(chosenWord) 
		{
			case "DHOL":
				output = `<p style="font-size: 20px;">Starring Tushar Kapoor. Four lazy friends want to make easy money and aim to marry a rich girl.</p>`;
			  break;
			case "DANGAL":
				output = `<p style="font-size: 20px;">Starring Aamir Khan. "Maari chhoriya chhoro se kam hai ke".</p>`;
			  break;
			case "SHOLAY":
				output = `<p style="font-size: 20px;">Your Jay, Veeru and Gabbar.</p>`;
			  break;
			case "CHHICHHORE":
				output = `<p style="font-size: 20px;">Sushant Singh Rajput is in IIT Bombay.</p>`;
			  break;
			case "ANDHADHUN":
				output = `<p style="font-size: 20px;">Akash (Ayushmann Khurrana), a piano player pretending to be visually-impaired.</p>`;
			  break;
			case "GOLMAAL":
				output = `<p style="font-size: 20px;">Tushar kapoor won hearts without even speaking.</p>`;
			  break;
			case "DHAMAAL":
				output = `<p style="font-size: 20px;">Four good-for-nothing friends - Roy, Adi, Boman and Manav.</p>`;
			  break;
			case "SOORYAVANSHAM":
				output = `<p style="font-size: 20px;">Switch to Sony Max, it might be running on it even now.</p>`;
			  break
			case "LAXMII":
				output = `<p style="font-size: 20px;">Aasif visits his wife's parents' house and happens to go to a ground that is supposedly haunted.</p>`;
			  break;
			case "LAGAAN":
				output = `<p style="font-size: 20px;"> During the British Raj, a farmer named Bhuvan accepts the challenge of a cricket match.</p>`;
			  break;
			case "INCEPTION":
				output = `<p style="font-size: 20px;"> It a 2010 science fiction action film written and directed by Christopher Nolan and starring Decaprio.</p>`;
			  break;
			case "HUGO":
				output = `<p style="font-size: 20px;"> He is a young orphan who loves pottering around with the station clocks and whose most treasured possession is his late father's automaton.</p>`;
			  break;
			case "JOKER":
				output = `<p style="font-size: 20px;"> Keep Smiling. You wouldn't get it.</p>`;
			  break;
			case "PARASITE":
				output = `<p style="font-size: 20px;"> The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family.</p>`;
			  break;
			case "ANTRUM":
				output = `<p style="font-size: 20px;"> To rescue the soul of their deceased dog, a young boy and girl enter a forest and dig a hole to hell.</p>`;
			  break;
			case "GOOSEBUMPS":
				output = `<p style="font-size: 20px;"> R L Stine, is shocked when demons from his books come to life and create havoc in Delaware.</p>`;
			  break;
			case "AMELIE":
				output = `<p style="font-size: 20px;"> Despite being caught in her imaginative world, Amelie, a young waitress, decides to help people find happiness.</p>`;
			  break;
			case "ZODIAC":
				output = `<p style="font-size: 20px;"> Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer.</p>`;
			  break;
			case "NIGHTCRAWLER":
				output = `<p style="font-size: 20px;"> Louis Bloom, a petty thief, realises that he can make money by capturing photographs of crime scenes and starts resorting to extreme tactics to get them.</p>`;
			  break;
			case "INTERSTELLAR":
				output = `<p style="font-size: 20px;"> Directed by Nolan. When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, is tasked to pilot a spacecraft, to find a new planet for humans.</p>`;
			  break;  
			default:
				output = `<p style="font-size: 20px;">Default hint</p>`;
		  }

		  $("#hint").html(output);

	}).catch(function(err){
		console.log(err);
});

//MOVIE DATA

function getMovies(chosenWord){
	axios.get('https://www.omdbapi.com?s=' + chosenWord + '&apikey=9be27fce').then(function(response){

		let movie = response.data.Search;
		console.log(movie);
		console.log(movie[0]);
		console.log(movie[0].Poster);
		console.log(movie[0].Title);
		console.log(movie[0].Year);
		let output = `

			<div id="movie-poster-omdb">
				<img src="${movie[0].Poster}">
			</div>
			<div id="movie-name-omdb">
				<p>${movie[0].Title}</p>
			</div>
			<div id"movie-year-omdb">
				<p>${movie[0].Year}</p>
			</div>

		`;
		$("#movie-data").html(output);

	}).catch(function(err){
		console.log(err);
	});
}

//Timer

function countDown(secs){

	timerText.push(secs.toString());
	docTimer[0].innerHTML = timerText.join('');

	if(secs <= 0 && flag == 0)
	{
		clearTimeout(timer);
		alert("You Lost!");
		timerText.pop();
		getMovies(chosenWord);
		return;
	}else if(flag == 1){
		return;
	}
	secs--;
	var timer = setTimeout('countDown(' + secs + ')',1000);
	timerText.pop();

}


//Get users guess

document.addEventListener('keypress',(event) => {

	let keycode = event.keyCode;
	let keyWord = String.fromCharCode(keycode);

	keyWord = keyWord.toUpperCase();

	if (chosenWord.indexOf(keyWord) > -1) {

		rightWord.push(keyWord);
		
		for(let i = chosenWord.indexOf(keyWord); i < chosenWord.length; ++i){
			if(chosenWord[i] == keyWord){
				underScore[i] = keyWord;
			}
		}

		docUnderScore[0].innerHTML = underScore.join(' ');
		docRightGuess[0].innerHTML = rightWord.join('');

		if(underScore.join('') == chosenWord) {
			alert("Congratulations, You Won!");
			getMovies(chosenWord);
			flag = 1;
		}

	}else if(wrongWord.indexOf(keyWord) < 0){
		wrongWord.push(keyWord);
		docWrongGuess[0].innerHTML = wrongWord.join('');
		chancesText.pop();
		--chances;
		chancesText.push(chances.toString());
		docChances[0].innerHTML = chancesText.join('');

		console.log(makeUnique(wrongWord));

		if(makeUnique(wrongWord).length == chosenWord.length){
			alert("Oops, You Lost!");
			getMovies(chosenWord);
			flag = 1;
		}
	}
});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');


countDown(60);
