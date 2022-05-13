const quizData = [
    {
        question: "Creating an object is called:",
        a: "Instantiation",
        b: "Reference",
        c: "Variable",
        d: "Abstraction",
        correct: "a"
    }, {
        question: "What is the most used progamming language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }, {
        question: "Which of the following is not a programming language?",
        a: "TypeScript",
        b: "Python",
        c: "Anaconda",
        d: "Java",
        correct: "c"
    }, {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Application Terminals Motorboats",
        correct: "a"
    }, {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b" 
    }
]

const quiz = document.getElementById("quiz")
const answersEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected(){
    let answer = undefined;

    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswers(){
    answersEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener("click", (e) => {
    //Checando a resposta
    const pa = document.getElementById("pa")
    pa.innerText = ""
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz() 
        } 
        else{
            quiz.innerHTML = `<h1>Congratulations</h1> <h2>You answered correctly at ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`
        }
    }
    
    if(!answer){
        pa.innerText = "No one is selected. Try again!"
    }


})

//https://discord.com/channels/964152796670726204/964152796670726207