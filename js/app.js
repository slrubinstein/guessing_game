// When document is ready, pick a random number between 1 and 100 and assign to variable "answer"

//$("document").ready(function() {
	var $answer = Math.ceil(Math.random()*100);
	var guesses = [];
//});

// doc.ready created a local variable and I want a global variable, so for now removed doc.ready


// When guess is submitted, assign to variable "guess"

$("form").submit(function(event) {
	event.preventDefault()
	var guess = $("#userGuess").val();
	console.log("You guessed " + guess);
	guesses.push(guess)

// Check guess against answer

if (guess == $answer) {
	alert("You win!");
} else {
	alert("You guessed incorrectly");
	displayGuesses(guesses);
}

});

$("form .newGame").submit(function(event) {
	location.reload();
});


// Display past guesses - right now it is adding a new line on each guess.
// Need to fix so there is only 1 line but it updates the array.
function displayGuesses(guesses) {
	$("form").append("<p>Past guesses: " + guesses.join(', ') + "</p>");
};