var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessCounter = 10;
var upperCaseKey = "";
var user_guess = [];


//Computers guess
var compGuess = function compGuess() {
    for(i=0; i < 1; i++) {
    compSelection = letters[Math.floor(Math.random() * letters.length)];
    upperCaseKey = compSelection.toUpperCase();
    console.log("the computer guessed " + upperCaseKey);
    }
}

compGuess();

//take user input from keyboard and place in an array called "user_guess".

  document.onkeydown = function (e) {
    var keyPress;

    if (typeof event !== 'undefined') {
      keyPress = event.keyCode;
  }
    else if (e) {
      keyPress = e.which;
  }

    user_guess.push(String.fromCharCode(keyPress));
    var guessCount = document.getElementById("guessCount").innerHTML = String.fromCharCode(keyPress);

  
//win
  if (guessCount === upperCaseKey) {
    alert("got it");
    document.getElementById("wins").innerHTML = ++wins;
    compGuess();
  } else {
    document.getElementById("guessCounter").innerHTML = --guessCounter;
  }

//loss
  if (guessCounter === 0) {
    alert("you LOSE. you get NOTHING. GOOD DAY SIR.");
    document.getElementById("losses").innerHTML = ++losses;
    guessCounter = 10;
    compGuess();
  }

};
