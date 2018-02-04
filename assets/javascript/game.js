var answer = " ";
var blank = "_";
var wins = 0;
var losses = 0;
var userGuess;
function start() {
  console.log("Starting Game");
  // Do any set up
  answer = "topic";

}

function guess(guessLetter) {
  for (i = 0; i < answer.length; i++) {
    if (guessLetter == answer[i]) {
      //revealmatching letter(s)
      wins++;
      console.log("NICE, correct guesses at:" + wins);
      break;
    }
    else {
      losses++;
      console.log("NOT QUITE misses at:" + losses);
      break;
    }
  }
  // Accept user guess, check and return update
}
