// create and assign all global scope variables
var wins = 0;
var losses = 0;
var targetScore = targetNumber(19, 120);
var userScore = 0;
var crystalValues = [];
function targetNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function crystalValueRandomizer() {
  for (var i = 0; i < 4; i++) {
    crystalValues.push(Math.floor(Math.random() * 11 + 1));
  }
}

function reset() {
  targetNumber();
  userScore = 0;
  crystalValueRandomizer();
}
reset();
console.log(targetScore)
console.log(crystalValues)

$(".crystal").on("click", function() {
  alert("You clicked a crystal!");
});

if (userScore === targetScore) {
    wins++
}

// Grab the value of the crystal that was clicked on
//Add that the the plauyer's score
//with each click, we need to check whether the player won, lost, or needs to click again
    //if the score is === the goal
        //wins ++
        //run the reset function (be sure to include in that function something that will update the page)
    //if score > goal
        //losses++
        //run the same reset function