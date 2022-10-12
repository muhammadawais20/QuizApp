let questions = [
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the hero in the 80s animated video game Dragon's Lair?",
    correct_answer: "Dirk the Daring",
    incorrect_answers: ["Arthur", "Sir Toby Belch", "Guy of Gisbourne"],
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "easy",
    question: "What is the scientific name for modern day humans?",
    correct_answer: "Homo Sapiens",
    incorrect_answers: [
      "Homo Ergaster",
      "Homo Erectus",
      "Homo Neanderthalensis",
    ],
  },
  {
    category: "Entertainment: Books",
    type: "multiple",
    difficulty: "hard",
    question: "What is Ron Weasley's middle name",
    correct_answer: "Bilius",
    incorrect_answers: ["Arthur", "John", "Dominic"],
  },
  {
    category: "Entertainment: Comics",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the creator of the comic series The Walking Dead?",
    correct_answer: "Robert Kirkman",
    incorrect_answers: [
      "Stan Lee",
      "Malcolm Wheeler-Nicholson",
      "Robert Crumb",
    ],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "At the start of a standard game of the Monopoly if you throw a double six which square would you land on?",
    correct_answer: "Electric Company",
    incorrect_answers: ["Water Works", "Chance", "Community Chest"],
  },
  {
    category: "Geography",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Jamaica",
    correct_answer: "Kingston",
    incorrect_answers: ["Rio de Janeiro", "Dar es Salaam", "Kano"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question: "When did Jamaica recieve its independence from England ",
    correct_answer: "1962",
    incorrect_answers: ["1492", "1963", "1987"],
  },
  {
    category: "Animals",
    type: "boolean",
    difficulty: "easy",
    question: "Kangaroos keep food in their pouches next to their children.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "medium",
    question: "In 2013 how much money was lost by Nigerian scams",
    correct_answer: "412.7 Billion",
    incorrect_answers: ["495 Million", "4956 Million", "42.7 Billion"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "medium",
    question:
      "How old was Lyndon B. Johnson when he assumed the role of President of the United States",
    correct_answer: "55",
    incorrect_answers: ["50", "60", "54"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In World of Warcraft loreC who organized the creation of the Paladins",
    correct_answer: "Alonsus Faol",
    incorrect_answers: [
      "Uther the Lightbringer",
      "Alexandros Mograine",
      "SargerasC The Daemon Lord",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "medium",
    question: "In the game 2Subnautica2C a 2Cave Crawler2 will attack you.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Entertainment: Japanese Anime 6 Manga",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the device that allows for infinite energy in the anime 2Dimension W2",
    correct_answer: "Coils",
    incorrect_answers: ["Wires", "Collectors", "Tesla"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of Cream the Rabbit7s mom in the 2Sonic the Hedgehog2 series",
    correct_answer: "Vanilla",
    incorrect_answers: ["Peach", "Strawberry", "Mint"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "easy",
    question:
      "These two countries held a commonwealth from the 16th to 18th century.",
    correct_answer: "Poland and Lithuania",
    incorrect_answers: [
      "Hutu and Rwanda",
      "North Korea and South Korea",
      "Bangladesh and Bhutan",
    ],
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these voices wasn7t a choice for the House AI in 2The Simpsons Treehouse of Horror2 shortC House of Whacks",
    correct_answer: "George Clooney",
    incorrect_answers: ["Matthew Perry", "Dennis Miller", "Pierce Brosnan"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "medium",
    question:
      "From which album is the Gorillaz songC 2On Melancholy Hill2 featured in",
    correct_answer: "Plastic Beach",
    incorrect_answers: ["Demon Days", "Humanz", "The Fall"],
  },
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question:
      "Scotland voted to become an independent country during the referendum from September 2014.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Left 4 DeadC which campaign has the protagonists going through a subway in order to reach a hospital for evacuation",
    correct_answer: "No Mercy",
    incorrect_answers: ["Subway Sprint", "Hospital Havoc", "Blood Harvest"],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the last colony the UK ceded marking the end of the British Empire",
    correct_answer: "Hong Kong",
    incorrect_answers: ["India", "Australia", "Ireland"],
  },
];

let currentQuestion = 0;
let initialScore = 0;

let totalQuestion = questions.length;

const option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let button = document.getElementById("next-question");
let correctText = document.getElementById("correct");
let sorryText = document.getElementById("sorry");
let quizCompleted = document.getElementById("quiz-completed");

function quizApp(currentQuestion = 0, initialScore = 0) {
  let percentageBar = ((currentQuestion + 1) / totalQuestion) * 100;

  let topBarWidth = document.getElementById("question-top-bar-width");
  topBarWidth.style.width = `${percentageBar}%`;
  topBarWidth.style.backgroundColor = "gray";

  let currentQues = document.getElementById("totalQuestion");
  currentQues.innerText = `Question ${currentQuestion + 1} of ${totalQuestion}`;

  let category = document.getElementById("category");
  category.innerText = questions[currentQuestion].category;

  let question = document.getElementById("question");
  question.innerText = questions[currentQuestion].question;

  //Shuffle options
  let answerArray = [
    ...questions[currentQuestion].incorrect_answers,
    questions[currentQuestion].correct_answer,
  ];
  answerArray.sort(() => Math.random() - 0.5);

  option1.innerText = answerArray[0];
  option2.innerText = answerArray[1];
  option3.innerText = answerArray[2];
  option4.innerText = answerArray[3];

  button.style.display = "none";
  correctText.style.display = "none";
  sorryText.style.display = "none";

  function showCorrectTag() {
    button.style.display = "block";
    correctText.style.display = "block";
    sorryText.style.display = "none";
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
  }

  function showInCorrectTag() {
    button.style.display = "block";
    sorryText.style.display = "block";
    correctText.style.display = "none";
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
  }

  document.getElementById("option1").addEventListener("click", () => {
    let option1InnerText = option1.innerText;

    if (option1InnerText == questions[currentQuestion].correct_answer) {
      showCorrectTag();
      calculateCurrentScore();
      calclulateMinScore();
      option1.style.backgroundColor = "green";
    } else {
      showInCorrectTag();
    }
    calclulateMinScore();
    calclulateMaxScore();
    maxQuestion();
  });

  document.getElementById("option2").addEventListener("click", () => {
    let option2InnerText = option2.innerText;

    if (option2InnerText == questions[currentQuestion].correct_answer) {
      showCorrectTag();
      calculateCurrentScore();
      option2.style.backgroundColor = "green";
    } else {
      showInCorrectTag();
    }
    calclulateMinScore();
    calclulateMaxScore();
    maxQuestion();
  });

  document.getElementById("option3").addEventListener("click", () => {
    let option3InnerText = option3.innerText;

    if (option3InnerText == questions[currentQuestion].correct_answer) {
      showCorrectTag();
      calculateCurrentScore();
      calclulateMinScore();
      option3.style.backgroundColor = "green";
      maxQuestion();
    } else {
      showInCorrectTag();
    }
    calclulateMinScore();
    calclulateMaxScore();
    maxQuestion();
  });

  document.getElementById("option4").addEventListener("click", () => {
    let option4InnerText = option4.innerText;

    if (option4InnerText == questions[currentQuestion].correct_answer) {
      showCorrectTag();
      calculateCurrentScore();
      maxQuestion();
      option4.style.backgroundColor = "green";
    } else {
      showInCorrectTag();
    }
    calclulateMinScore();
    calclulateMaxScore();
    maxQuestion();
  });
}

function resetPropertiesNextQuestion() {
  option1.style.backgroundColor = "";
  option2.style.backgroundColor = "";
  option3.style.backgroundColor = "";
  option4.style.backgroundColor = "";

  option1.disabled = false;
  option2.disabled = false;
  option3.disabled = false;
  option4.disabled = false;
  button.style.display = "none";
  correctText.style.display = "none";
  sorryText.style.display = "none";
}

function calculateCurrentScore() {
  initialScore++;
  let currentScore = (initialScore / totalQuestion) * 100;
  let score = document.getElementById("score");
  score.innerText = `Score ${Math.round(currentScore)}%`;
  let scoreBar = document.getElementById("score-bar-width");
  scoreBar.style.width = `${currentScore}%`;
  scoreBar.style.backgroundColor = "gray";
}

function calclulateMinScore() {
  let remainingQuestion = totalQuestion - currentQuestion - 1;

  if (remainingQuestion >= 2) {
    let minScore = ((remainingQuestion - initialScore) / totalQuestion) * 100;
    let scoreBar = document.getElementById("min-score-bar-width");
    scoreBar.style.width = `${minScore}%`;
    scoreBar.style.backgroundColor = "black";
  }
}

function calclulateMaxScore() {
  let remainingQuestion = totalQuestion - currentQuestion - 1;
  let maxScore = ((initialScore + remainingQuestion) / totalQuestion) * 100;
  let score = document.getElementById("max-score");
  score.innerText = `Max Score ${Math.round(maxScore)}%`;
  let scoreBar = document.getElementById("max-score-bar-width");
  scoreBar.style.width = `${maxScore}%`;
  scoreBar.style.backgroundColor = "rgb(167, 181, 194)";
}

function maxQuestion() {
  if (currentQuestion == totalQuestion - 1) {
    option1.disabled = true;
    option2.disabled = true;
    option3.disabled = true;
    option4.disabled = true;
    button.style.display = "none";
    quizCompleted.innerText = "Quiz Completed :)";
  }
}

document.getElementById("next-question").addEventListener("click", () => {
  resetPropertiesNextQuestion();
  if (currentQuestion < totalQuestion) {
    currentQuestion++;
    quizApp(currentQuestion);
  }
});

quizApp();
