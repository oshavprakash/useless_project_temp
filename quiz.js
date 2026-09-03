const questionAudioContainer =
  document.getElementById("question-audio-container");
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
    question: "When you meet another Malayali outside Kerala, what's the first thing you want to know?",
    image: "images/question1.jpeg",
    answers: [
      {
        text: "Nothing, just say namaskaram",
        points: 2
      },
      {
        text: "Sadhanam kayil indo?",
        points: 8
      },
      {
        text: "aliyaaaa......(malayali sixth sense)",
        points: 4
      },
      {
        text: "\"Naattil evideya?(rest is history)\" immediately",
        points: 10
      }
    ]
  },

  {
  question: "Your ideal lunch looks like...",
  image: "images/question3.jpeg",

  answers: [
    {
      text: "Porotta and Beef",
      image: "images/q41.jpeg",
      points: 10
    },
    {
      text: "Burger And Sandwich",
      image: "images/q42.jpeg",
      points: 2
    },
    {
      text: "Rice, sambar, thoran and pickle",
      image: "images/q43.jpeg",
      points: 5
    },
    {
      text: "Full sadya energy",
      image: "images/question4.jpeg",
      points: 8
    }
  ]
},

  {
    question: "Her Famous Quote",
    image: "images/question3.jpeg",
    answers: [
      {
        text: "Don't Produce Too much",
        points: 10
      },
      {
        text: "Don't talk too much",
        points: 5
      },
      {
        text: "Don't expect too much",
        points: 2
      }
    ]
  },

   {
    question: "Dialogue From which movie",
    image: "images/question5.jpeg",
 answers: [
    {
      text: "Chitram",
      image: "images/m1.jpeg",
      points: 10
    },
    {
      text: "movie name",
      image: "images/m2.jpeg",
      points: 2
    },
    {
      text: "movie name",
      image: "images/m3.jpeg",
      points: 5
    },
    {
      text: "movie name",
      image: "images/m4.jpeg",
      points: 8
    }
  ]
  },

  {
    question: "What is the first thing you teach your non mallu friend",
    image: "images/question5.jpeg",
    answers: [
      {
        text: "Poda Patti!!",
        points: 10
      },
      {
        text: "peru entha?",
        points: 4
      },
      {
        text: "Sugam aano?",
        points: 8
      },
      {
        text: "Kazhicho?",
        points: 10
      }
    ]
  },

  {
    question: "What does ?",
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
  question: "Listen carefully. Associate this song with right person?",
  audio: "audio/q1.mpeg",
  answers: [
    {
      image: "images/p1.jpeg",
      points: 8
    },
    {
      image: "images/p2.jpeg",
      points: 10
    },
    {

      image: "images/p3.jpeg",
      points: 5
    }
  ]
},

 {
  question: "Listen carefully. What dialogue/song?sound is this?",
  audio: "audio/startend.mpeg",
  answers: [
    {
      text: "Option 1",
      points: 2
    },
    {
      text: "Option 2",
      points: 4
    },
    {
      text: "Option 3",
      points: 8
    },
    {
      text: "Option 4",
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
/* =========================
   QUESTION AUDIO
========================= */

questionAudioContainer.innerHTML = "";

if (current.audio) {

  const audio =
    document.createElement("audio");

  audio.src =
    current.audio;

  audio.controls =
    true;

  audio.classList.add(
    "question-audio"
  );

  questionAudioContainer.appendChild(
    audio
  );

}


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


    if (answer.image) {

  const optionImage =
    document.createElement("img");

  optionImage.src =
    answer.image;

  optionImage.alt =
    answer.text;

  optionImage.classList.add(
    "answer-image"
  );

  const optionText =
    document.createElement("span");

  optionText.textContent =
    answer.text;

  optionText.classList.add(
    "answer-text"
  );

  button.appendChild(optionImage);
  button.appendChild(optionText);

  button.classList.add("image-answer");

} else {

  button.textContent =
    answer.text;

}


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