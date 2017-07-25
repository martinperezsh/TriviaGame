
// Start game on click
$('#start').on("click", function() {
  game.start();
})


var questions = [{
  question: "Which actor won MTV's movie awards best kiss with Well Ferrell in 2007?",
  answers:["John C Reilley", "Sasha Baron Cohen", "Mark Walberg", "Jon Heder"],
  correctAnswer: "Sasha Baron Cohen"
}, {
  question: "What is Will Ferrell's first name?",
  answers:["John", "Ronald", "William", "Armando"],
  correctAnswer: "John"
}, {
  question: "What award show has Will Ferrell been nominated for the most?",
  answers:["Emmy Awards", "MTV Movie Awards", "Teen Choice Awards", "Golden Globe Awards"],
  correctAnswer: "Teen Choice Awards"
}, {
  question: "Which of the movies he has starred in came out in 2008?",
  answers:["The Other Guys", "Step Brothers", "Casa De Mi Padre", "Blades of Glory"],
  correctAnswer: "Step Brothers"
}, {
  question: "Of the following movies which movie has Will Ferrell NOT been a voice actor in?",
  answers:["Megamind", "Toy Story 3", "The Lego Movie", "Curious George"],
  correctAnswer: "Toy Story 3"
}];
   
var game = {
  correct: 0,
  incorrect: 0,
  counter: 30,
  countdown: function() {
    game.counter--;
    $('#counter').html(game.counter);
    if(game.counter === 0){
      game.done();
    }
  },
  start: function(){
//timer decrease time by 1 second
    timer = setInterval(game.countdown, 1000);
// Put timer in html
    $('#subwrapper').prepend('<h2> Time Remaining: <span id="counter">30</span> Seconds </h2>')
// remove start button
    $('#start').remove();
// Put the questions and answers in the html
    for (var i =0; i < questions.length; i++){
      $('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
      for (var j = 0; j < questions[i].answers.length; j++){
        $('#subwrapper').append('<input type="radio" name="question-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j])
      }
    }
  },
  done: function(){
    $.each($('input[name="question-0"]:checked'), function(){
      if($(this).val() === questions[0].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-1"]:checked'), function(){
     if($(this).val() === questions[1].correctAnswer){
       game.correct++;
     } else {
       game.incorrect++;
     }
   });
   $.each($('input[name="question-2"]:checked'), function(){
     if($(this).val() === questions[2].correctAnswer){
       game.correct++;
     } else {
       game.incorrect++;
     }
   });
   $.each($('input[name="question-3"]:checked'), function(){
      if($(this).val() === questions[3].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
   });
   $.each($('input[name="question-4"]:checked'), function(){
      if($(this).val() === questions[4].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
   });
    
   this.result();
  },
  result: function(){
    clearInterval(timer);
    $('#subwrapper h2').remove();
    $('#subwrapper').html('<h2>Trivia Completed!</h2>');
    $('#subwrapper').append('<h3>Correct Answers: ' + this.correct + '</h3>');
    $('#subwrapper').append('<h3>Inorrect Answers: ' + this.incorrect + '</h3>');
    $('#subwrapper').append('<h3>Unanswered: ' +(questions.length - (this.incorrect + this.correct)) + '</h3>');
  }
//  closes game function 
};