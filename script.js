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
var resultimg = document.getElementById("resultimg")
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
// I was trying to get two inputs in the event listener to disable buttons 
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
    document.getElementById ("resultimg").src = "https://cdn.glitch.com/de3e202a-2841-440f-abf1-f6a6c047f3d3%2Fphoto-1519861531473-9200262188bf.jpg?v=1595753439460";
  }
  else if (swimmingScore > basketballScore && swimmingScore > walkingScore && swimmingScore > skiingScore) {
    result.innerHTML = "Swimming is for you!";
    document.getElementById ("resultimg").src = "https://cdn.glitch.com/de3e202a-2841-440f-abf1-f6a6c047f3d3%2Fphoto-1587527633747-416f1030939d.jpg?v=1595753447936";
  }
  else if (skiingScore > basketballScore && skiingScore > swimmingScore && skiingScore > walkingScore) {
    result.innerHTML = "Skiing is for you!";
    document.getElementById ("resultimg").src = "https://cdn.glitch.com/de3e202a-2841-440f-abf1-f6a6c047f3d3%2Fphoto-1550443640-6e18cdd503a4.jpg?v=1595753444044";
  }
  else if (walkingScore > basketballScore && walkingScore > swimmingScore && walkingScore > skiingScore) {
    result.innerHTML = "Walking and hiking is for you!";
    document.getElementById ("resultimg").src = "https://cdn.glitch.com/de3e202a-2841-440f-abf1-f6a6c047f3d3%2Fbb9f9777.jpg?v=1595753455917";
  }
  else{
    result.innerHTML = "Swimming is for you!";
    document.getElementById ("resultimg").src = "https://cdn.glitch.com/de3e202a-2841-440f-abf1-f6a6c047f3d3%2Fphoto-1587527633747-416f1030939d.jpg?v=1595753447936";
  }
  
}

//Restart the quiz

function restartQuiz(){
  result.innerHTML = "Your result is..."
  questionCount = 0;
  basketballScore = 0;
  walkingScore = 0;
  swimmingScore = 0;
  skiingScore = 0;
  document.getElementById ("resultimg").src = "https://cdn.glitch.com/de3e202a-2841-440f-abf1-f6a6c047f3d3%2Fphoto-1484069560501-87d72b0c3669.jpg?v=1595752585041";
  enableButtons();
  changeColorToNormal();
}

//Disable buttons for Q1
function disableQ1(){
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

//Add Event Listener for q1 buttons to disable them
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);


//Disable buttons for Q2
function disableQ2(){
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}
//Add Event Listner for q2 to disable buttons 
q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);


//Disable buttons for Q2
function disableQ3(){
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}
//Add Event Listner for q3 to disable buttons 
q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);


//Disable buttons for Q4
function disableQ4(){
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}
//Add Event Listner for q3 to disable buttons 
q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);








//Enables buttons  after the restart of the quiz

function enableButtons(){
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
}


//Change color to normal
function changeColorToNormal(){
  let btnActive = document.querySelector("#q1a1");
  btnActive.style.backgroundColor = "#58B19F";
  
  let btnCalm = document.querySelector("#q1a2");
  btnCalm.style.backgroundColor = ("#58B19F")
  
  let btnBeach = document.querySelector("#q1a3");
  btnBeach.style.backgroundColor = "#58B19F";
  
  let btnMount = document.querySelector("#q1a4");
  btnMount.style.backgroundColor = "#58B19F";
  
  let btnWinter = document.querySelector("#q2a1");
  btnWinter.style.backgroundColor = "#58B19F";
  
  let btnSpring = document.querySelector("#q2a2");
  btnSpring.style.backgroundColor = ("#58B19F")
  
  let btnFall = document.querySelector("#q2a3");
  btnFall.style.backgroundColor = "#58B19F";
  
  let btnSummer = document.querySelector("#q2a4");
  btnSummer.style.backgroundColor = "#58B19F";
  
  let btnLostCount = document.querySelector("#q3a1");
  btnLostCount.style.backgroundColor = "#58B19F";
  
  let btnFew = document.querySelector("#q3a2");
  btnFew.style.backgroundColor = ("#58B19F")
  
  let btnBF = document.querySelector("#q3a3");
  btnBF.style.backgroundColor = "#58B19F";
  
  let btnDog = document.querySelector("#q3a4");
  btnDog.style.backgroundColor = "#58B19F";
  
  let btnBall = document.querySelector("#q4a1");
  btnBall.style.backgroundColor = "#58B19F";
  
  let btnWave = document.querySelector("#q4a2");
  btnWave.style.backgroundColor = ("#58B19F")
  
  let btnStick = document.querySelector("#q4a3");
  btnStick.style.backgroundColor = "#58B19F";
  
  let btnMan = document.querySelector("#q4a4");
  btnMan.style.backgroundColor = "#58B19F";
  
}





 //Buttons to change color in Q1
let btnActive = document.querySelector("#q1a1");
btnActive.addEventListener("click", () => btnActive.style.backgroundColor = "#6c5ce7")

let btnCalm = document.querySelector("#q1a2");
btnCalm.addEventListener("click", () => btnCalm.style.backgroundColor = "#6c5ce7")

let btnBeach = document.querySelector("#q1a3");
btnBeach.addEventListener("click", () => btnBeach.style.backgroundColor = "#6c5ce7")

let btnMount = document.querySelector("#q1a4");
btnMount.addEventListener("click", () => btnMount.style.backgroundColor = "#6c5ce7")


 //Buttons to change color in Q2
let btnWinter = document.querySelector("#q2a1");
btnWinter.addEventListener("click", () => btnWinter.style.backgroundColor = "#6c5ce7")

let btnSpring = document.querySelector("#q2a2");
btnSpring.addEventListener("click", () => btnSpring.style.backgroundColor = "#6c5ce7")

let btnFall = document.querySelector("#q2a3");
btnFall.addEventListener("click", () => btnFall.style.backgroundColor = "#6c5ce7")

let btnSummer = document.querySelector("#q2a4");
btnSummer.addEventListener("click", () => btnSummer.style.backgroundColor = "#6c5ce7")


//Buttons to change color in Q3
let btnLostCount = document.querySelector("#q3a1");
btnLostCount.addEventListener("click", () => btnLostCount.style.backgroundColor = "#6c5ce7")

let btnFew = document.querySelector("#q3a2");
btnFew.addEventListener("click", () => btnFew.style.backgroundColor = "#6c5ce7")

let btnBF = document.querySelector("#q3a3");
btnBF.addEventListener("click", () => btnBF.style.backgroundColor = "#6c5ce7")

let btnDog = document.querySelector("#q3a4");
btnDog.addEventListener("click", () => btnDog.style.backgroundColor = "#6c5ce7")

//Buttons to change color in Q4
let btnBall = document.querySelector("#q4a1");
btnBall.addEventListener("click", () => btnBall.style.backgroundColor = "#6c5ce7")

let btnWave = document.querySelector("#q4a2");
btnWave.addEventListener("click", () => btnWave.style.backgroundColor = "#6c5ce7")

let btnStick = document.querySelector("#q4a3");
btnStick.addEventListener("click", () => btnStick.style.backgroundColor = "#6c5ce7")

let btnMan = document.querySelector("#q4a4");
btnMan.addEventListener("click", () => btnMan.style.backgroundColor = "#6c5ce7")