var timer = 30;
var rightAnswers;
var wrongAnswers;
var intervalId;




//------------------------------------------- Start game -------------------------------------
$( document ).ready(function() {
	intervalId = setInterval(decrement, 1000);

// Countdonw Timer
	function decrement() {
		timer--;

		$("#gameTimer").html(timer)

		if (timer === 0) {
			// Take to the score page
		}
	}
});