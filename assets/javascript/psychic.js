document.addEventListener("DOMContentLoaded", function (event) {
  //Do work

  var answer;
  wins = 0;
  losses = 0;
  incorrectGuesses = 0;
  guessesLeft = 10;
  userGuess = "N/A";
  userText = document.getElementById("game");
  var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
  var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessesLeft + "</p>";
  var answer = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(answer);
  
  function shuffle() {
    answer = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(answer);
    return;
  }

  function textUpdate() {
    html =
      "<p>You chose: " + userGuess + "</p>" +
      "<p>wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>Guesses left: " + guessesLeft + "</p>";
    document.getElementById("game").innerHTML = html
    console.log('html updated')
  }
  textUpdate();

  document.onkeydown = function (press) {
    userGuess = press.key;
    console.log(userGuess);
    if (userGuess != alphabet) {
      
    }
    if (userGuess == answer) {
      wins++;
      incorrectGuesses = 0;
      guessesLeft = 10;
      console.log("you win!");
      textUpdate();
      shuffle()
    }
    else {
      incorrectGuesses++;
      guessesLeft--;
      console.log("wrong");
      textUpdate();

    }
    if (incorrectGuesses == 10) {
      losses++;
      incorrectGuesses = 0;
      guessesLeft = 10;
      console.log("Try again.");
      textUpdate();
      shuffle()

    }



  }



});