const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarPercentage = document.getElementById("progressBarPercentage");

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

/**
 * Loads Settings Page, hides Game Page
 */

function loadSettingsPage() {
    $("#gamePage").hide();
    $("#settingsPage").show();
}
  
/**
* Loads Game Page and hides Settings Page
*/
  
function loadGamePage() {
    $("#settingsPage").hide();
    $("#gamePage").show();
}  
/**
 * Click button to display the Game Page
 */
$("#gameScreen").click(function() {
  loadGamePage();
});

/**
 * Fetching data from Open Trivia API (code by James Q Quick)
 */
fetch ( "https://opentdb.com/api.php?amount=10&type=multiple")

.then((response) => {
    return response.json();
  })
  .then((retrievedQuestions) => {
    console.log(retrievedQuestions);
    questions = retrievedQuestions.results.map(retrievedQuestion => {
        const arrangedQuestion = {
            question: retrievedQuestion.question
        };

        const queryChoises = [...retrievedQuestion.incorrect_answers];
        arrangedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        queryChoises.splice(arrangedQuestion.answer, -1, 0, 
        retrievedQuestion.correct_answer);

        queryChoises.forEach((choice, index) => {
            arrangedQuestion["choice" + (index+1)] = choice;
        })

        return arrangedQuestion;
    })
    
    startGame();
  })
  .catch(error => {
      console.log("error");
  });

const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 3;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("./finish.html");
    };

    questionCounter++;

    //Update progress bar
    progressBarPercentage.style.width = `${((questionCounter / MAX_QUESTIONS) * 100)}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswer = true;
};

/**
 * Feedback for answering the question correctly or not.
 */
choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        let outcome = "wrong";
            if (selectedAnswer == currentQuestion.answer) {
                outcome = "right";
            }
        
        selectedChoice.classList.add(outcome);

        setTimeout( () => {
            selectedChoice.classList.remove(outcome);
            getNewQuestion();
        }, 1000);
    });
});
