/* =========================
   GET PHOTO ELEMENT
========================= */

const questionImage =
  document.getElementById("question-image");


/* =========================
   QUESTIONS
========================= */

const questions = [

  {
    question: "It's 4 PM. What's happening at home?",
    image: "images/question1.jpeg",
    answers: [
      {
        text: "Nothing, just chilling",
        points: 2
      },
      {
        text: "Coffee, maybe a biscuit",
        points: 4
      },
      {
        text: "Chaya + something fried, non-negotiable",
        points: 8
      },
      {
        text: "Chaya, parippu vada, and a full family debate",
        points: 10
      }
    ]
  },

  {
    question: "When you meet another Malayali outside Kerala, what's the first thing you want to know?",
    image: "images/question2.jpeg",
    answers: [
      {
        text: "Nothing, just say hello",
        points: 2
      },
      {
        text: "Their name",
        points: 4
      },
      {
        text: "Which part of Kerala they're from",
        points: 8
      },
      {
        text: "\"Naattil evideya?\" immediately",
        points: 10
      }
    ]
  },

  {
    question: "Your ideal lunch looks like...",
    image: "images/question3.jpeg",
    answers: [
      {
        text: "Sandwich or burger",
        points: 2
      },
      {
        text: "Rice and curry",
        points: 5
      },
      {
        text: "Rice, sambar, thoran and pickle",
        points: 8
      },
      {
        text: "Full sadya energy",
        points: 10
      }
    ]
  },

  {
    question: "It's raining heavily outside. Your reaction?",
    image: "images/question4.jpeg",
    answers: [
      {
        text: "Stay inside",
        points: 2
      },
      {
        text: "Enjoy looking at the rain",
        points: 4
      },
      {
        text: "Immediately want chaya and snacks",
        points: 8
      },
      {
        text: "Chaya + pazhampori + standing outside watching the rain",
        points: 10
      }
    ]
  },

  {
    question: "You arrive at a family function. What happens first?",
    image: "images/question5.jpeg",
    answers: [
      {
        text: "Find a quiet corner",
        points: 2
      },
      {
        text: "Say hi to everyone",
        points: 4
      },
      {
        text: "Someone asks what you're studying or doing",
        points: 8
      },
      {
        text: "Within 5 minutes: career, marriage and life plans",
        points: 10
      }
    ]
  },

  {
    question: "How often do you randomly use Malayalam movie dialogues?",
    image: "images/question6.jpeg",
    answers: [
      {
        text: "Never",
        points: 1
      },
      {
        text: "Sometimes",
        points: 4
      },
      {
        text: "Pretty often",
        points: 7
      },
      {
        text: "My entire personality is dialogue references",
        points: 10
      }
    ]
  },

  {
    question: "What does Onam mean to you?",
    image: "images/question7.jpeg",
    answers: [
      {
        text: "Just another holiday",
        points: 2
      },
      {
        text: "Nice food and decorations",
        points: 5
      },
      {
        text: "Pookalam + Onasadya",
        points: 8
      },
      {
        text: "Full Onam mode activated",
        points: 10
      }
    ]
  },

  {
    question: "You're travelling and suddenly hear someone speaking Malayalam nearby.",
    image: "images/question2.jpeg",
    answers: [
      {
        text: "Ignore it",
        points: 1
      },
      {
        text: "Notice it but say nothing",
        points: 4
      },
      {
        text: "Try to figure out where they're from",
        points: 8
      },
      {
        text: "Mentally prepare to ask: Naattil evideya?",
        points: 10
      }
    ]
  },

  {
    question: "Which combination feels the most like home?",
    image: "images/question1.jpeg",
    answers: [
      {
        text: "Wi-Fi + headphones",
        points: 2
      },
      {
        text: "Coffee + snacks",
        points: 4
      },
      {
        text: "Chaya + banana chips",
        points: 8
      },
      {
        text: "Chaya + banana chips + coconut oil somewhere nearby",
        points: 10
      }
    ]
  },

  {
    question: "Someone says, \"I'm more Mallu than you.\" What do you do?",
    image: "images/question6.jpeg",
    answers: [
      {
        text: "Agree peacefully",
        points: 2
      },
      {
        text: "Laugh and move on",
        points: 4
      },
      {
        text: "Start defending yourself",
        points: 7
      },
      {
        text: "\"Enthada ithokke?\" Challenge accepted",
        points: 10
      }
    ]
  }

];


/* =========================
   VARIABLES
========================= */

let currentQuestion = 0;

let totalScore = 0;

let selectedPoints = null;


/* =========================
   GET HTML ELEMENTS
========================= */

const questionText =
  document.getElementById("question-text");


const answersContainer =
  document.getElementById("answers-container");


const questionNumber =
  document.getElementById("question-number");


const nextButton =
  document.getElementById("next-button");


const progressFill =
  document.getElementById("progress-fill");


/* =========================
   SHUFFLE ANSWERS
========================= */

function shuffleAnswers(answers) {

  const shuffled = [...answers];

  for (let i = shuffled.length - 1; i > 0; i--) {

    const randomIndex =
      Math.floor(Math.random() * (i + 1));

    const temporary =
      shuffled[i];

    shuffled[i] =
      shuffled[randomIndex];

    shuffled[randomIndex] =
      temporary;

  }

  return shuffled;

}


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

  selectedPoints = null;

  nextButton.disabled = true;


  const current =
    questions[currentQuestion];


  /* UPDATE PHOTO */

  if (questionImage) {

    questionImage.src =
      current.image;

    questionImage.alt =
      `Question ${currentQuestion + 1} image`;

  }


  /* QUESTION NUMBER */

  questionNumber.textContent =
    `Q.${currentQuestion + 1}/${questions.length}`;


  /* QUESTION TEXT */

  questionText.textContent =
    current.question;


  /* CLEAR OLD ANSWERS */

  answersContainer.innerHTML =
    "";


  /* SHUFFLE ANSWERS */

  const shuffledAnswers =
    shuffleAnswers(current.answers);


  /* CREATE ANSWER BUTTONS */

  shuffledAnswers.forEach(function(answer) {

    const button =
      document.createElement("button");


    button.classList.add(
      "answer-option"
    );


    button.textContent =
      answer.text;


    button.addEventListener(
      "click",
      function() {

        selectAnswer(
          button,
          answer.points
        );

      }
    );


    answersContainer.appendChild(
      button
    );

  });


  updateProgress();

}


/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(button, points) {

  const allAnswers =
    document.querySelectorAll(
      ".answer-option"
    );


  allAnswers.forEach(function(answer) {

    answer.classList.remove(
      "selected"
    );

  });


  button.classList.add(
    "selected"
  );


  selectedPoints = points;


  nextButton.disabled = false;

}


/* =========================
   NEXT QUESTION
========================= */

nextButton.addEventListener(
  "click",
  handleNext
);


function handleNext() {

  if (selectedPoints === null) {

    return;

  }


  totalScore +=
    selectedPoints;


  currentQuestion++;


  if (
    currentQuestion < questions.length
  ) {

    showQuestion();

  }

  else {

    showResult();

  }

}


/* =========================
   UPDATE PROGRESS
========================= */

function updateProgress() {

  const progress =
    ((currentQuestion + 1) /
      questions.length) * 100;


  progressFill.style.width =
    progress + "%";

}


/* =========================
   SHOW RESULT
========================= */

function showResult() {

  const maxScore =
    questions.length * 10;


  const percentage =
    Math.round(
      (totalScore / maxScore) * 100
    );


  let level = "";

  let message = "";


  if (percentage <= 20) {

    level =
      "MALLU LOADING... 🌱";

    message =
      "A little more chaya and you're getting there!";

  }

  else if (percentage <= 40) {

    level =
      "MALLU BEGINNER 😄";

    message =
      "The Mallu energy is slowly activating!";

  }

  else if (percentage <= 60) {

    level =
      "CERTIFIED MALLU 🌴";

    message =
      "Okay okay... you definitely know the vibes!";

  }

  else if (percentage <= 80) {

    level =
      "FULL-ON MALLU ENERGY 🔥";

    message =
      "Chaya levels are dangerously high!";

  }

  else if (percentage <= 95) {

    level =
      "ULTIMATE MALLU 🥥";

    message =
      "You have achieved maximum Kerala vibes!";

  }

  else {

    level =
      "MALLU LEGEND 👑";

    message =
      "Naattil evideya? Because this score is legendary!";

  }


  questionNumber.textContent =
    "RESULT";


  questionText.innerHTML =
    `HOW MALLU ARE YOU?<br><br>
     ${percentage}%<br><br>
     ${level}`;


  answersContainer.innerHTML =
    `<div class="result-message">
      ${message}
    </div>`;


  nextButton.textContent =
    "PLAY AGAIN ↻";


  nextButton.disabled =
    false;


  nextButton.removeEventListener(
    "click",
    handleNext
  );


  nextButton.addEventListener(
    "click",
    restartQuiz,
    { once: true }
  );


  progressFill.style.width =
    "100%";


  /* Optional result image */

  if (questionImage) {

    questionImage.src =
      "images/question7.jpeg";

    questionImage.alt =
      "Quiz complete";

  }

}


/* =========================
   RESTART QUIZ
========================= */

function restartQuiz() {

  currentQuestion = 0;

  totalScore = 0;

  selectedPoints = null;


  nextButton.textContent =
    "NEXT →";


  nextButton.addEventListener(
    "click",
    handleNext
  );


  showQuestion();

}


/* =========================
   CLOCK
========================= */

function updateClock() {

  const clock =
    document.getElementById("clock");


  if (!clock) {

    return;

  }


  const now =
    new Date();


  let hours =
    now.getHours();


  let minutes =
    now.getMinutes();


  const ampm =
    hours >= 12
      ? "PM"
      : "AM";


  hours =
    hours % 12;


  if (hours === 0) {

    hours = 12;

  }


  if (minutes < 10) {

    minutes =
      "0" + minutes;

  }


  clock.textContent =
    `${hours}:${minutes} ${ampm}`;

}


updateClock();


setInterval(
  updateClock,
  1000
);


/* =========================
   START QUIZ
========================= */

showQuestion();