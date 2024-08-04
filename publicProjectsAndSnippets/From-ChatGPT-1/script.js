const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "J.K. Rowling",
        c: "Ernest Hemingway",
        d: "Mark Twain",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <div>${currentQuizData.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll("input[name='answer']");
    let selectedAnswer;
    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = "";
        result.innerHTML = `You scored ${score}/${quizData.length}!`;
    }
});

loadQuiz();
