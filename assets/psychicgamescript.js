 // Our array of possible computer choices.
      var computerChoices = ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s"];
 	// Variables for tracking our wins, losses and ties. They begin at 0.
      var wins = 0;
      var losses = 0;
      var guessesRemaining = 10;
      var lettersUsed = [];

      var gameStart = false 
	  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // When the user presses a key, it will run the following function...
      console.log(computerGuess);
      document.onkeyup = function(event) {
      
      	console.log(event);

        var userGuess = event.key;

      	if (gameStart) { 

      		if (event.key === computerGuess) {
      			console.log("winner, resetting game");
      			wins++;
      			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      			console.log('computerGuess', computerGuess);
      			guessesRemaining--;
      			lettersUsed.push(userGuess);
      		}
      		else { 
      			console.log("incorrect, try again!");
      			losses++;
      			guessesRemaining--;
      			lettersUsed.push(userGuess);
      			
      		}


// This is how we reset the game...presumably
          if (guessesRemaining == 0) {
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            losses++;
            guessesRemaining = 10;
            losses = 0;
            wins = 0;
            guesses = [];
        }

      		console.log("I'm running!");

// Here we create the HTML that will be injected into our div and displayed on the page.
          var html = "<p> Press any key to start playing. Then click a random letter to record your first guess.</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Remaining: " + guessesRemaining + "</p>"
          "<p>Your Guesses So Far: " + lettersUsed.join() + "</p>" 
          
          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.getElementById("game").innerHTML = html;
          
      	} else {
      		gameStart = true;
      	}


      };