//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var basketballScore = 0;
var walkingScore = 0;
var swimmingScore = 0;
var skiingScore = 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var result = document.getElementById("result");
var restart = document.getElementById("restart")


// variables for question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
// variables for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
//variables for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//variables for question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");





//#TODO: Add Event Listeners to your answer choice variables.
//Question 1 event listeners
q1a1.addEventListener("click", basketballResult);
q1a2.addEventListener("click", walkingResult);
q1a3.addEventListener("click", swimmingResult);
q1a4.addEventListener("click", skiingResult);


//Question 2 event listeners
q2a1.addEventListener("click", skiingResult);
q2a2.addEventListener("click", walkingResult);
q2a3.addEventListener ("click", basketballResult);
q2a4.addEventListener ("click", swimmingResult);

//Question 3 event listeners
q3a1.addEventListener ("click", basketballResult);
q3a2.addEventListener ("click", walkingResult);
q3a3.addEventListener ("click", skiingResult);
q3a4.addEventListener ("click", swimmingResult);


//Question 4 event listeners
q4a1.addEventListener ("click", basketballResult);
q4a2.addEventListener ("click", swimmingResult);
q4a3.addEventListener ("click", skiingResult);
q4a4.addEventListener ("click", walkingResult);


restart.addEventListener("click", restartQuiz)


//#TODO: Define quiz functions here - Basketball
function basketballResult(){
  basketballScore += 1;
  questionCount +=1; 
  if (questionCount >= 4) {
      updateResult();
  }
}

// Walking function

function walkingResult() {
  walkingScore += 1;
  questionCount +=1 ;
  if (questionCount >= 4) {
      updateResult();
      }
}

//Walking function

function swimmingResult() {
  swimmingScore += 1;
  questionCount +=1;
  if (questionCount >= 4){
    updateResult();
  }
}

//Skiing function

function skiingResult(){
  skiingScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

// Update result function

function updateResult(){
  if (basketballScore > swimmingScore && basketballScore>walkingScore && basketballScore > skiingScore) {
    result.innerHTML = "Basketball is for you!";
  }
  else if (swimmingScore > basketballScore && swimmingScore > walkingScore && swimmingScore > skiingScore) {
    result.innerHTML = "Swimming is for you!";
  }
  else if (skiingScore > basketballScore && skiingScore > swimmingScore && skiingScore > walkingScore) {
    result.innerHTML = "Skiing is for you!";
  }
  else if (walkingScore > basketballScore && walkingScore > swimmingScore && walkingScore > skiingScore) {
    result.innerHTML = "Walking and hiking is for you!";
  }
  else{
    result.innerHTML = "Swimming is for you!";
  }
  
}

//Restart the quiz

function restartQuiz(){
  result.innerHTML = "Your result is..."
  var questionCount = 0;
  var basketballScore = 0;
  var walkingScore = 0;
  var swimmingScore = 0;
  var skiingScore = 0;
}