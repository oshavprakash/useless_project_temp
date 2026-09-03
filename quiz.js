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
  question: "Your ideal food looks like...",
  image: "images/question10.jpeg",

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
      text: "Biriyani",
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
    image: "images/question9.jpeg",
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
    audio: "audio/q2.mpeg",
    image: "images/q11.jpeg",
 answers: [
    {
      text: "Vellanakalude naadu",
      image: "images/m1.jpeg",
      points: 10
    },
    {
      text: "Ponmuttayidunna tharavu",
      image: "images/m2.jpeg",
      points: 2
    },
    {
      text: "Meesha Madhavan",
      image: "images/m33.jpeg",
      points: 5
    },
    {
      text: "Manichithrathaazhu",
      image: "images/m5.jpeg",
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
    question: "What do you call this?",
    image: "images/t1.jpeg",
    answers: [
      {
        text: "Kstrc",
        points: 2
      },
      {
        text: "Aana Vandi",
        points: 5
      },
      {
        text: "Bus",
        points: 8
      }
    ]
  },

 {
  question: "Listen carefully. Associate this song with right person?",
  image: "images/question6.jpeg",
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

/* =========================
   SHOW FINAL VIDEO
========================= */

function showResult() {

  /* ADD FINAL MODE */

  const desktopLayout =
    document.querySelector(".desktop-layout");


  if (desktopLayout) {

    desktopLayout.classList.add(
      "final-mode"
    );

  }


  /* Stop and remove question audio */

  if (questionAudioContainer) {

    questionAudioContainer.innerHTML =
      "";

  }


  /* Question number */

  questionNumber.textContent =
    "THE END";


  /* Title */

  questionText.textContent =
    "WATCH THIS 👀";


  /* Remove all answer options */

  answersContainer.innerHTML =
    "";


  /* Create video */

  const video =
    document.createElement("video");


  video.src =
    "videos/final.mp4";


  video.controls =
    true;


  video.autoplay =
    true;


  video.classList.add(
    "final-video"
  );


  answersContainer.appendChild(
    video
  );


  /* Change button */

  nextButton.textContent =
    "PLAY AGAIN ↻";


  nextButton.disabled =
    false;


  /* Remove normal NEXT function */

  nextButton.removeEventListener(
    "click",
    handleNext
  );


  /* Restart quiz */

  nextButton.addEventListener(
    "click",
    restartQuiz,
    { once: true }
  );


  /* Progress complete */

  progressFill.style.width =
    "100%";

}


/* =========================
   RESTART QUIZ
========================= */

function showResult() {

  /* ADD FINAL MODE */

  const desktopLayout =
    document.querySelector(".desktop-layout");


  if (desktopLayout) {

    desktopLayout.classList.add(
      "final-mode"
    );

  }


  /* Stop and remove question audio */

  if (questionAudioContainer) {

    questionAudioContainer.innerHTML =
      "";

  }


  /* Question number */

  questionNumber.textContent =
    "THE END";


  /* Title */

  questionText.textContent =
    "WATCH THIS 👀";


  /* Remove all answer options */

  answersContainer.innerHTML =
    "";


  /* Create video */

  const video =
    document.createElement("video");


  video.src =
    "video/final.mp4";


  video.controls =
    true;


  video.autoplay =
    true;


  video.classList.add(
    "final-video"
  );


  answersContainer.appendChild(
    video
  );


  /* Change button */

  nextButton.textContent =
    "PLAY AGAIN ↻";


  nextButton.disabled =
    false;


  /* Remove normal NEXT function */

  nextButton.removeEventListener(
    "click",
    handleNext
  );


  /* Restart quiz */

  nextButton.addEventListener(
    "click",
    restartQuiz,
    { once: true }
  );


  /* Progress complete */

  progressFill.style.width =
    "100%";

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