const questionElement = document.getElementById("question");

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let correctAnswer = num1 * num2;

questionElement.innerText = `What is ${num1} Multyiply by ${num2}?`;

const form = document.getElementById('form');
const input = document.getElementById('inp');
let scoreElement = document.getElementById('score');
let score = Number(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreElement.textContent = `score : ${score}`;

form.addEventListener('submit',function() {
    let userAnswer = +input.value;
    if(correctAnswer === userAnswer) {
        score++;
        updatescore();
    }
    else {
        score=0;
        updatescore();
    }
});

function updatescore() {
    localStorage.setItem("score",String(score));
}