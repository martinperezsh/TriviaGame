// Starting at 31 because 30 wont appear on screen if its 30
var timer = 31;
var rightAnswers = 0;
var wrongAnswers = 0;
var intervalId;
// getting value of radio buttons
var valq1 = $('input[name=q1]:checked').val();
var valq2 = $('input[name=q2]:checked').val();
var valq3 = $('input[name=q3]:checked').val();
var valq4 = $('input[name=q4]:checked').val();
var valq5 = $('input[name=q5]:checked').val();



//------------------------------------------- Start game -------------------------------------
$( document ).ready(function() {
// Makes it only show the start screen
  $(".container").hide();
  $("#scoreScreen").hide();
  
// Starts the trivia
  $(".btn").on("click", function(){
    $("#startScreen").hide();
    $(".container").show();
    intervalId = setInterval(decrement, 1000);
  });

  $("#submit").on("click", function () {

    score();
  })


  
	

// Countdonw Timer
	function decrement() {
		timer--;

		$("#gameTimer").html(timer)

// Ends game and shows score
		if (timer === 0) {
			$(".container").hide();
      $("#scoreScreen").show();
      score();
		}
	
  }
  
//   Adds up the score
  function score(){
  	console.log(valq1);
    if (valq1 === 1) {
      rightAnswers++;
      console.log(valq1);
    } else {
      wrongAnswers++;
    }
    if (valq2 === 1) {
      rightAnswers++;
    } else  {
      wrongAnswers++;
    }
    if (valq3 === 1) {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }
    if (valq4 === 1) {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }
    if (valq5 === 1) {
      rightAnswers++;
    } else {
      wrongAnswers++;
    }
    
   console.log(rightAnswers + " correct");
   console.log(wrongAnswers + " wrong");
  }

// Display score after game

    score();
  
    $("#rightAnswers").html(rightAnswers);
    $("#wrongAnswers").html(wrongAnswers);
});