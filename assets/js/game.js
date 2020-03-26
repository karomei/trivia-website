const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
 {
     question: "Who is the cutest?",
     choice1: "My mama",
     choice2: "A kitten",
     choice3: "Leonardo DiCaprio",
     choice4: "Christian",
     answer: 4
 },
 {
    question: "Who shot the sheriff?",
    choice1: "Bob Marley",
    choice2: "You",
    choice3: "Me",
    choice4: "Jeanie with the gun",
    answer: 1
 },
 {
    question: "What is the meaning of life?",
    choice1: "Love",
    choice2: "42",
    choice3: "43",
    choice4: "There's none",
    answer: 2
 }
];

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
        
        const outcome = "incorrect";
            if (selectedAnswer == currentQuestion.answer) {
                outcome = "correct";
            }
        
        selectedChoice.classList.add(outcome);

        setTimeout( () => {
            selectedChoice.classList.remove(outcome);
            getNewQuestion();
        }, 1000);
    });
});

startGame();