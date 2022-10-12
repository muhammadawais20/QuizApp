var questions = [
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "hard",
        question: "What was the name of the hero in the 80s animated video game Dragon's Lair?",
        correct_answer: "Dirk the Daring",
        incorrect_answers: [
            "Arthur",
            "Sir Toby Belch",
            "Guy of Gisbourne"
        ]
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
            "Homo Neanderthalensis"
        ]
    },
    {
        category: "Entertainment: Books",
        type: "multiple",
        difficulty: "hard",
        question: "What is Ron Weasley's middle name",
        correct_answer: "Bilius",
        incorrect_answers: [
            "Arthur",
            "John",
            "Dominic"
        ]
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
            "Robert Crumb"
        ]
    },
    {
        category: "Entertainment: Board Games",
        type: "multiple",
        difficulty: "medium",
        question: "At the start of a standard game of the Monopoly if you throw a double six which square would you land on?",
        correct_answer: "Electric Company",
        incorrect_answers: [
            "Water Works",
            "Chance",
            "Community Chest"
        ]
    },
    {
        category: "Geography",
        type: "multiple",
        difficulty: "easy",
        question: "What is the capital of Jamaica",
        correct_answer: "Kingston",
        incorrect_answers: [
            "Rio de Janeiro",
            "Dar es Salaam",
            "Kano"
        ]
    },
    {
        category: "History",
        type: "multiple",
        difficulty: "medium",
        question: "When did Jamaica recieve its independence from England ",
        correct_answer: "1962",
        incorrect_answers: [
            "1492",
            "1963",
            "1987"
        ]
    },
    {
        category: "Animals",
        type: "boolean",
        difficulty: "easy",
        question: "Kangaroos keep food in their pouches next to their children.",
        correct_answer: "False",
        incorrect_answers: [
            "True"
        ]
    },
    {
        category: "General Knowledge",
        type: "multiple",
        difficulty: "medium",
        question: "In 2013 how much money was lost by Nigerian scams",
        correct_answer: "412.7 Billion",
        incorrect_answers: [
            "495 Million",
            "4956 Million",
            "42.7 Billion"
        ]
    },
    {
        category: "History",
        type: "multiple",
        difficulty: "medium",
        question: "How old was Lyndon B. Johnson when he assumed the role of President of the United States",
        correct_answer: "55",
        incorrect_answers: [
            "50",
            "60",
            "54"
        ]
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "hard",
        question: "In World of Warcraft loreC who organized the creation of the Paladins",
        correct_answer: "Alonsus Faol",
        incorrect_answers: [
            "Uther the Lightbringer",
            "Alexandros Mograine",
            "SargerasC The Daemon Lord"
        ]
    },
    {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "medium",
        question: "In the game 2Subnautica2C a 2Cave Crawler2 will attack you.",
        correct_answer: "True",
        incorrect_answers: [
            "False"
        ]
    },
    {
        category: "Entertainment: Japanese Anime 6 Manga",
        type: "multiple",
        difficulty: "medium",
        question: "What is the name of the device that allows for infinite energy in the anime 2Dimension W2",
        correct_answer: "Coils",
        incorrect_answers: [
            "Wires",
            "Collectors",
            "Tesla"
        ]
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "medium",
        question: "What is the name of Cream the Rabbit7s mom in the 2Sonic the Hedgehog2 series",
        correct_answer: "Vanilla",
        incorrect_answers: [
            "Peach",
            "Strawberry",
            "Mint"
        ]
    },
    {
        category: "History",
        type: "multiple",
        difficulty: "easy",
        question: "These two countries held a commonwealth from the 16th to 18th century.",
        correct_answer: "Poland and Lithuania",
        incorrect_answers: [
            "Hutu and Rwanda",
            "North Korea and South Korea",
            "Bangladesh and Bhutan"
        ]
    },
    {
        category: "Entertainment: Television",
        type: "multiple",
        difficulty: "hard",
        question: "Which of these voices wasn7t a choice for the House AI in 2The Simpsons Treehouse of Horror2 shortC House of Whacks",
        correct_answer: "George Clooney",
        incorrect_answers: [
            "Matthew Perry",
            "Dennis Miller",
            "Pierce Brosnan"
        ]
    },
    {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "medium",
        question: "From which album is the Gorillaz songC 2On Melancholy Hill2 featured in",
        correct_answer: "Plastic Beach",
        incorrect_answers: [
            "Demon Days",
            "Humanz",
            "The Fall"
        ]
    },
    {
        category: "General Knowledge",
        type: "boolean",
        difficulty: "easy",
        question: "Scotland voted to become an independent country during the referendum from September 2014.",
        correct_answer: "False",
        incorrect_answers: [
            "True"
        ]
    },
    {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "medium",
        question: "In Left 4 DeadC which campaign has the protagonists going through a subway in order to reach a hospital for evacuation",
        correct_answer: "No Mercy",
        incorrect_answers: [
            "Subway Sprint",
            "Hospital Havoc",
            "Blood Harvest"
        ]
    },
    {
        category: "History",
        type: "multiple",
        difficulty: "hard",
        question: "What was the last colony the UK ceded marking the end of the British Empire",
        correct_answer: "Hong Kong",
        incorrect_answers: [
            "India",
            "Australia",
            "Ireland"
        ]
    }
]


function quizApp(currentQuestion = 0, initialScore = 0) {

    var totalQuestion = questions.length;

    var percentageBar = (((currentQuestion + 1) / totalQuestion) * 100);

    var topBarWidth = document.getElementById("question-top-bar-width");
    topBarWidth.style.width = `${percentageBar}%`;
    topBarWidth.style.backgroundColor = 'gray';

    var currentQues = document.getElementById("totalQuestion");
    currentQues.innerText = `Question ${currentQuestion + 1} of ${totalQuestion}`;

    var category = document.getElementById("category");
    category.innerText = questions[currentQuestion].category;

    var question = document.getElementById("question");
    question.innerText = questions[currentQuestion].question;

    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var option4 = document.getElementById("option4");

    option1.innerText = questions[currentQuestion].correct_answer;
    option2.innerText = questions[currentQuestion].incorrect_answers[0];
    option3.innerText = questions[currentQuestion].incorrect_answers[1];
    option4.innerText = questions[currentQuestion].incorrect_answers[2];

    var button = document.getElementById('next-question');
    var correctText = document.getElementById('correct');
    var sorryText = document.getElementById('sorry');
    var quizCompleted = document.getElementById('quiz-completed');

    button.style.display = 'none';
    correctText.style.display = 'none';
    sorryText.style.display = 'none';

    function maxQuestion() {
        if (currentQuestion == totalQuestion - 1) {

            option1.disabled = true;
            option2.disabled = true;
            option3.disabled = true;
            option4.disabled = true;

            button.style.display = 'none';
            quizCompleted.innerText = 'Quiz Completed :)';
        }
    }

    function rightAnswer() {

        if (questions[currentQuestion].correct_answer == option1.innerText) {

            button.style.display = 'block';
            option1.style.backgroundColor = 'green';
            correctText.style.display = 'block';

            option1.disabled = true;
            option2.disabled = true;
            option3.disabled = true;
            option4.disabled = true;

            initialScore++;

            var percentage = (initialScore / totalQuestion) * 100;
            var score = document.getElementById("score");
            score.innerText = `Score ${Math.round(percentage)}%`;

            var scoreBar = document.getElementById("score-bar-width");
            scoreBar.style.width = `${percentage}%`;
            scoreBar.style.backgroundColor = 'gray';
        }

        maxQuestion();
    }

    function wrongAnswer() {
        button.style.display = 'block';
        sorryText.style.display = 'block';

        option1.disabled = true;
        option2.disabled = true;
        option3.disabled = true;
        option4.disabled = true;

        maxQuestion();
    }

    function nextQuestion() {
        currentQuestion++;
        quizApp(currentQuestion, initialScore);
    }

    document.getElementById('option1').addEventListener("click", rightAnswer);
    document.getElementById('option2').addEventListener("click", wrongAnswer);
    document.getElementById('option3').addEventListener("click", wrongAnswer);
    document.getElementById('option4').addEventListener("click", wrongAnswer);

    document.getElementById('next-question').addEventListener("click", () => {

        nextQuestion();

        option1.disabled = false;
        option2.disabled = false;
        option3.disabled = false;
        option4.disabled = false;
        button.style.display = 'none';
        correctText.style.display = 'none';
        sorryText.style.display = 'none';
        option1.style.backgroundColor = '';
    });
}

quizApp();