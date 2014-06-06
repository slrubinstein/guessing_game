// TO DOs

// check for repeat guesses
// say "hotter" or "colder" based on previous guesses

// Hint/cheat button
// Add row to table to store hot/cold values
// win screen
// adjust div color based on hot or cold
// disable return key guessing at end of game


// Pick a random number between 1 and 100 and assign to variable "answer"


var $answer = Math.ceil(Math.random()*100);
var guesses = [];
var $guess = $("#userGuess");
var guessesRemaining = 5;

$("span").prepend(guessesRemaining + ' ');

function isGuessValid() {
	if(!$guess.val()) {
		alert("Make a guess!");
		return false;
	}

	if(isNaN($guess.val())) {
		alert("That is not a number.");
		$guess.val('');
		return false;
	}

	if($guess.val() < 0 || $guess.val() > 100) {
		alert("Please enter a number between 1 and 100");
		$guess.val('');
		return false;
	} else {
		return true;
	}

}

function provideFeedback(guess) {
	if(Math.abs(guess - $answer) < 10) {
			$("#temperature").text("Hot!");
			// change css color to reflect hotness
		} else if (Math.abs(guess - $answer) < 20) {
			$("#temperature").text("Warm");
			// change css color to reflect hotness
		} else if (Math.abs(guess - $answer) < 30) {
			$("#temperature").text("Cool");
			// change css color to reflect hotness
		} else {
			$("#temperature").text("Cold!");
			// change css color to reflect hotness
		}

		if(guess - $answer > 0) {
			$("#highLow").text("Guess lower");
		} else {
			$("#highLow").text("Guess higher");
		}
}

function guessEvent() {
	//confirm guess is legal
	if(isGuessValid()) {
		//if guess is legal, assign it to a variable and push to array
		var guess = $guess.val();
		guesses.push(guess)
		$("tbody").append("<td>" + guess + "</td>");

		// Check guess against answer
		//if guess == answer, you win
		if(guess == $answer) {
			$("button").prop("disabled", true);
			return alert("You win!") // possibly create winEvent function
		}

		//guesses remaining -= 1
		guessesRemaining -= 1;
		$("span").text(guessesRemaining + ' ');
		$guess.val('');

		//if guesses remaining == 0, you lose and button is disabled
		if(guessesRemaining == 0) {
			$("#temperature").text('');
			$("span").prepend("<p>Sorry, you lose.<br>The number was " + $answer + "!</p>");
			$("button").prop("disabled", true);
			$("#temperature").hide();
			$("#highLow").hide();
		}	
		//else give feedback based on guess
		provideFeedback(guess);
	}
}

// When guess button is clicked or when enter pressed, run guessEvent
$("#guessButton").click(guessEvent);
$("#userGuess").keypress(function(e) {
	if(e.which == 13)
		$("#guessButton").click();
});


$("#newGameButton").click(function() {
	location.reload();
});


// Display past guesses - right now it is adding a new line on each guess.
// Need to fix so there is only 1 line but it updates the array.
function displayGuesses(guesses) {
	$("form").append("<p>Past guesses: " + guesses.join(', ') + "</p>");
};