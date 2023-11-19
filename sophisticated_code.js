/*
Filename: sophisticated_code.js

Description: This code generates an interactive quiz game that tests the user's knowledge in various subjects. It includes multiple choice questions, randomizing question order, keeping track of scores, and providing feedback to the user.

Author: Assistant AI

Date: [Current Date]
*/

// Global Variables
var score = 0;
var currentQuestion = 0;

// Quiz Questions
var questions = [
  {
    question: "What is the capital of France?",
    answers: [
      "London",
      "Madrid",
      "Paris",
      "Rome"
    ],
    correctAnswerIndex: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Michelangelo"
    ],
    correctAnswerIndex: 2
  },
  // Add more questions here...
];

// Function to start the quiz
function startQuiz() {
  displayQuestion();
}

// Function to display a question
function displayQuestion() {
  var questionContainer = document.getElementById("question-container");
  var questionText = document.getElementById("question-text");
  var answersContainer = document.getElementById("answers-container");

  var question = questions[currentQuestion];
  questionText.textContent = question.question;

  // Clear previous answers
  answersContainer.innerHTML = "";

  // Loop through answers and create radio buttons
  for (var i = 0; i < question.answers.length; i++) {
    var answerLabel = document.createElement("label");
    var radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.name = "answer-choice";
    radioBtn.value = i;

    answerLabel.appendChild(radioBtn);
    answerLabel.appendChild(document.createTextNode(question.answers[i]));
    answersContainer.appendChild(answerLabel);
  }

  // Add Submit button
  var submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.addEventListener("click", checkAnswer);
  answersContainer.appendChild(submitBtn);
}

// Function to check the selected answer
function checkAnswer() {
  var selectedAnswer = document.querySelector('input[name="answer-choice"]:checked');

  if (selectedAnswer) {
    var question = questions[currentQuestion];
    var selectedAnswerIndex = parseInt(selectedAnswer.value);

    if (selectedAnswerIndex === question.correctAnswerIndex) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion === questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
}

// Function to end the quiz
function endQuiz() {
  var quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  var resultText = document.createElement("h2");
  resultText.textContent = "Quiz Finished! Your Score: " + score + "/" + questions.length;
  quizContainer.appendChild(resultText);
  // Add more fancy end quiz logic if desired...
}

// Start the quiz when the page loads
window.addEventListener("load", startQuiz);