const questions = [
    {
        question: "Which is larget animal in the world?",
        answer: [
            {text: "Shark", correct: false},
            {text: "Lion", correct: false},
            {text: "Elephant", correct: false},
            {text: "Blue whale", correct: true},
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answer: [
            {text: "Asie", correct: false},
            {text: "Australia", correct: true},
            {text: "Europe", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is larget desert in the world?",
        answer: [
            {text: "Antartica", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: true},
            {text: "Mauritanie", correct: false},
        ]
    },
    {
        question: "Who is the rich's Man in the world?",
        answer: [
            {text: "Macron", correct: false},
            {text: "Joe Biden", correct: false},
            {text: "Poutine", correct: false},
            {text: "Elon Musk", correct: true},
        ]
    },
];
const questionElement = document.getElementById('question');
const buttonAnswers = document.getElementById('button-answer');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();    
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    //reponse ajout
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        buttonAnswers.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });

}

function resetState(){
    nextButton.style.display = 'none';
    while(buttonAnswers.firstChild){
        buttonAnswers.removeChild(buttonAnswers.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("Incorrect")
    }
    
}

startQuiz();





















