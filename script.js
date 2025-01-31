const questions=[
    {
        question:"if the base sequence in DNA is 5' AAAT 3',then the base sequence in mRNA is:",
        answers: [
            { text: "5' UUUU 3'",correct: false},
            { text: "3' UUUU 5'",correct: false},
            { text: "5' AAAU 3'",correct: true},
            { text: "3' AAAU 5'",correct: false},
        ]
    },
    {
        question:"Avery, MacLeod, and McCarty used the S (virulent) and R (avirulent) strains of Streptococcus pneumoniae. They isolated and purified protein, DNA, and RNA from the bacteria and treated them with related enzymes. They concluded that:",
        answers: [
            { text: "DNA was the transforming agent",correct: true},
            { text: "RNA was the transforming agent",correct: false},
            { text: "protein was the transforming agent",correct: false},
            { text: "All are correct",correct: false},
        ]
    },
    {
        question:"Identify the characteristic which is not applicable to the genetic code:",
        answers: [
            { text: "Non-polar",correct: true},
            { text: "Non-Overlapping",correct: false},
            { text: "commaless",correct: false},
            { text: "Universal",correct: false},
        ]
    },
    {
        question:"Ribose is differentiable from deoxyribose in having:",
        answers: [
            { text: "Two extra oxygen",correct: false},
            { text: "No oxygen",correct: false},
            { text: "Hydroxyl group at 2 nd carbon",correct: true},
            { text: "One extra hydrogen",correct: false},
        ]
    },
    {
        question:"A DNA strand is directly involved in the synthesis of all the following except:",
        answers: [
            { text: "Another DNA",correct: false},
            { text: "t-RNA & m-RNA",correct: false},
            { text: "r-RNA",correct: false},
            { text: "protein",correct: true},
        ]
    },
    {
        question:"The genes are responsible for growth and differentiation in an organism through regulation of:",
        answers: [
            { text: "Translocation",correct: false},
            { text: "Transformation",correct: false},
            { text: "Transduction and transplantation",correct: false},
            { text: "translation and transcription",correct: true},
        ]
    },
    {
        question:"Genetic information is carried out by a long-chain molecule made up of:",
        answers: [
            { text: "Amino acids",correct: false},
            { text: "Enzymes",correct: false},
            { text: "Nucleotides",correct: true},
            { text: "Histone proteins",correct: false},
        ]
    },
    {
        question:"Anticodons are found in:",
        answers: [
            { text: "mRNA",correct: false},
            { text: "tRNA",correct: true},
            { text: "rRNA",correct: false},
            { text: "In all",correct: false},
        ]
    },
    {
        question:"Which of the following elements is not found in nitrogenous bases?",
        answers: [
            { text: "Nitrogen",correct: false},
            { text: "Hydrogen",correct: false},
            { text: "Carbon",correct: false},
            { text: "Phosphorous",correct: true},
        ]
    },
    {
        question:"Transfer of genetic information from a polymer of nucleotides to a polymer of amino acids is:",
        answers: [
            { text: "Replication",correct: false},
            { text: "Transcription",correct: false},
            { text: "Translation",correct: true},
            { text: "Reverse transcription",correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!` ;
    nextButton.innerHTML="play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();