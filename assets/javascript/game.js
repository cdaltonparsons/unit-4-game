var wins = 0;
var losses = 0;
var targetScore = randomNumber(19, 120);
var userScore = 0;
var scoreStr = "";
var images = [
  "assets/images/amber.png",
  "assets/images/amethyst.png",
  "assets/images/salt_crystal.png",
  "assets/images/zircon.png"
];
$("#wins").text(wins);
$("#losses").text(losses);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function crystals() {
  for (var i = 0; i < images.length; i++) {
    var div = $("<img>");
    div.addClass("crystal");
    div.attr("value", randomNumber(1, 12));
    div.attr("src", images[i]);
    $("#div-container").append(div);
  }
}

function reset() {
  targetScore = randomNumber(19, 120);
  userScore = 0;
  $("#target-score").text(targetScore);
  $("#total-score").text(userScore);
  $("#div-container").empty();
  $("#wins").text(wins);
  $("#losses").text(losses);
  images.sort(function() { return 0.5 - Math.random()})
  crystals();
}

reset();

$("#div-container").on("click", ".crystal", function() {
  scoreStr = $(this).attr("value");
  var score = parseInt(scoreStr);
  userScore += score;
  $("#total-score").text(userScore);
  if (userScore === targetScore) {
    wins++;
    reset();
  } else if (userScore > targetScore) {
    losses++;
    reset();
  }

  console.log(userScore);
});
