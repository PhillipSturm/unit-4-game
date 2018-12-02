// On Page Load
$(document).ready(function () {
  // ! Setting the Target Number to randomly be between 19 and 120
  var targetNumber = Math.floor(Math.random() * 120 + 19);

  // ! Setting the crystal's value randomly between 1 and 12 
  var crystal1 = Math.floor(Math.random() * 12 + 1);
  var crystal2 = Math.floor(Math.random() * 12 + 1);
  var crystal3 = Math.floor(Math.random() * 12 + 1);
  var crystal4 = Math.floor(Math.random() * 12 + 1);
  
  var wins = 0;
  var losses = 0;
  var totalScore = 0;

  // ! Displaying initial information
  $("#targetDisplay").text("Magic Number : " + targetNumber);
  $("#winsDisplay").text("Wins : " + wins);
  $("#lossesDisplay").text("Losses : " + losses);
  $("#scoreDisplay").text(totalScore);

  // ! If the User wins
  function win() {
    alert("Winner!");
    wins++;
    $("#winsDisplay").text("Wins : " + wins);
    reset();
  }
  // ! If the user loses
  function loss() {
    alert("You lose");
    losses++;
    $("#lossesDisplay").text("Losses : " + losses);
    reset();
  }
  // ! Automatically starting a new game
  function reset() {
    targetNumber = Math.floor(Math.random() * 120 + 19);
    $("#targetDisplay").text(targetNumber);
    crystal1 = Math.floor(Math.random() * 12 + 1);
    crystal2 = Math.floor(Math.random() * 12 + 1);
    crystal3 = Math.floor(Math.random() * 12 + 1);
    crystal4 = Math.floor(Math.random() * 12 + 1);
    totalScore = 0;
    $("#scoreDisplay").text(totalScore);
  }

  // ! Assigning value to crystals on click

  $("#blue").on("click", function () {
    totalScore = totalScore + crystal1;
    $("#scoreDisplay").text(totalScore);

    if (totalScore == targetNumber) {
      win();
    } else if (totalScore > targetNumber) {
      loss();
    }
  })

  $("#green").on("click", function () {
    totalScore = totalScore + crystal1;
    $("#scoreDisplay").text(totalScore);

    if (totalScore == targetNumber) {
      win();
    } else if (totalScore > targetNumber) {
      loss();
    }
  })

  $("#red").on("click", function () {
    totalScore = totalScore + crystal1;
    $("#scoreDisplay").text(totalScore);

    if (totalScore == targetNumber) {
      win();
    } else if (totalScore > targetNumber) {
      loss();
    }
  })

  $("#yellow").on("click", function () {
    totalScore = totalScore + crystal1;
    $("#scoreDisplay").text(totalScore);

    if (totalScore == targetNumber) {
      win();
    } else if (totalScore > targetNumber) {
      loss();
    }
  });
});