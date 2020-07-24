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



var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1-b");
var q4a2 = document.getElementById("q4a2-s");
var q4a3 = document.getElementById("q4a3-sk");
var q4a4 = document.getElementById("q4a4-w");





//#TODO: Add Event Listeners to your answer choice variables.
//Question 1 event listeners
q1a1.addEventListener("click", basketballResult);
q1a2.addEventListener("click", walkingResult);
q1a3.addEventListener("click", swimmmingResult);
q1a4.addEventListener("click", skiingResult);

//Question 2 event listeners


//Question 3 event listeners


//Question 4 event listeners






//#TODO: Define quiz functions here
function basketballResult(){
  basketballScore += 1
  questionCount +=1 
  if (questionCount >= 3 {
      updateResult ()
      }
}

function walkingResult() {
  walkingScore += 1
  questionCount +=1 
  if (questionCount >= 3 {
      updateResult ()
      })
}

function swimming