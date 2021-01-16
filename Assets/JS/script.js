// Object Constructors.

function Question(text, answers)// A constructor for questions.
{
    this.questiontext = text;       //The question itself.
    this.questionanswers = answers; //An array of potential answers.
}

function Answer(text, correct)// A constructor for answers, both correct and false.
{
    this.answertext = text;     //The answer in string form.
    this.iscorrect = correct;   //Whether its correct or not.
}

function HSEntry(initials, score)// A constructor for highscore entries.
{
    this.playerinitials = initials; //The 2 char string of initials.
    this.highscore = score;         //That players score.
}

// Page Elements

var mainpage = document.getElementById("welcomepage");
var quizpage = document.getElementById("quizpage");
var answersbox = document.getElementById("answerboxes");
var resultspage = document.getElementById("resultspage");
var scorepage = document.getElementById("scoreboardpage");
var model = document.getElementById("model");
var initialsbox = document.getElementById("initials");

// Variables.

var questionsArray = [];//Array of Question objects.
var scoreBoard = [];    //Array of high score entry objects.

var userscore;
var maxscore;
var timeperquestion = 10;
var time;

// Main Functions.

function initialize()// Sets up the arrays and variables needed.
{
    buildQuestions();
    maxscore = questionsArray.length;
    maxscore = timeperquestion * questionsArray.length;
    time = maxscore * 1000;

    if (localStorage.getItem("scoreboard") !== null)
        scoreBoard = JSON.parse(localStorage.getItem("scoreboard"));
    else
        buildScoreBoard();

    renderScoreBoard();
}

function beginquiz()//Starts the quiz.
{
    shufflefull();
    //nextquestion()
    //Start timer.
}

function nextquestion(i)//Puts the new question and answers in the page elements.
{
    //Get a question from the array.
    var aquestion = questionsArray[i];
    //Populate the question.
    quizpage.children[0].textContent = aquestion.questiontext;
    //Build the button divs and put the answers in them.
    answersbox.innerHTML = "";
    for (var i = 0; i < aquestion.questionanswers.length; i++)
    {
        var newdiv = document.createElement('div.answer.mono');
        newdiv.textContent = aquestion.questionanswers[i];
        answersbox.appendChild(newdiv);
    }
}

// Helper Functions.

function buildQuestions()//Builds the question array.
{
    //Just a heads up, I know this is ugly.
    //In short, this creates a new question with its answers and pushes it onto the array.
    questionsArray.push(new Question("In which HTML tag would you put JavaScript?", [new Answer("<script>", true), new Answer("<body>", false), new Answer("<link>", false), new Answer("<meta>", false)]));
    questionsArray.push(new Question("Which part of the box model is the inner most?", [new Answer("Margin", false), new Answer("Border", false), new Answer("Padding", false), new Answer("Content", true)]));
    questionsArray.push(new Question("How does one access a property of an object?", [new Answer("object.property", false), new Answer("object[\"property\"]", false), new Answer("Both", true)]));
    questionsArray.push(new Question("console.log() is most often used to give information to whom?", [new Answer("The user", false), new Answer("The dev", true)]));
    questionsArray.push(new Question("Which popular social media company created BootStrap in an attempt to make their jobs easier?", [new Answer("Facebook", false), new Answer("Instagram", false), new Answer("Twitter", true), new Answer("YouTube", false)]));
    questionsArray.push(new Question("The first element in an array is indexed at?", [new Answer("0", true), new Answer("1", false)]));
}

function buildScoreBoard()//Builds the score board array.
{
    for (var i = 0; i < 10; i++)
        scoreBoard.push(new HSEntry("AA", 0));//Using "AA" and 0 as the default.
}

function renderScoreBoard()//Renders the scores to the table on the score board page.
{
    var tableElement = scorepage.children[2].children[0];
    for (var i = 1; i < tableElement.children.length; i++)
    {
        tableElement.children[i].children[0].textContent = scoreBoard[i - 1].playerinitials;
        tableElement.children[i].children[1].textContent = scoreBoard[i - 1].highscore;
    }
}

function addScoreBoardEntry()//Adds a new entry to the high score list.
{
    if (initialsbox.value.length === 2)
    {
        scoreBoard.push(new HSEntry(initialsbox.value, userscore));
        closeModal();
        saveScoreBoard();
    }
}

function saveScoreBoard()//Saves the score board locally, after sorting it.
{
    scoreBoard.sort(function(a, b){return a.highscore - b.highscore});
    localStorage.setItem("scoreboard", JSON.stringify(scoreBoard));
}

function percentage()//Returns the percentage score.
{
    return Math.floor((userscore / maxscore) * 100);
}

function shufflefull()//Shuffles all the questions as well as the answers for each.
{
    arrayshuffle(questionsArray);
    for (var i = 0; i < questionsArray.length; i++)
    {
        var singlequestion = questionsArray[i];
        arrayshuffle(singlequestion.questionanswers);
    }
}

function arrayshuffle(array)//Shuffles an array. Using Fisher-Yates shuffle as found on stack overflow.
{
    var currentindex = array.length, tempValue, randomindex;

    while (0 !== currentindex)
    {
        randomindex = Math.floor(Math.random() * currentindex);
        currentindex -= 1;

        tempValue = array[currentindex];
        array[currentindex] = array[randomindex];
        array[randomindex] = tempValue;
    }
}

function changetoScoreBoard()//Changes the page to the score board.
{
    mainpage.style.display = "none";
    quizpage.style.display = "none";
    resultspage.style.display = "none";
    scorepage.style.display = "block";
}

function changetoQuiz()//Changes the page to the quiz.
{
    mainpage.style.display = "none";
    quizpage.style.display = "block";
    resultspage.style.display = "none";
    scorepage.style.display = "none";
}

function changetoResults()//Changes the page to the results screen.
{
    mainpage.style.display = "none";
    quizpage.style.display = "none";
    resultspage.style.display = "block";
    scorepage.style.display = "none";
}

function openModal()//Opens the pop up.
{
    modal.style.display  = "block";
}

function closeModal()//Closes the pop up.
{
    modal.style.display  = "none";
    initialsbox.value = "";
}

// Attaching functions to listeners.

document.getElementById("viewscores").onclick = changetoScoreBoard;
document.getElementById("startbutton").onclick = changetoQuiz;
document.getElementById("nextquestion").onclick
document.getElementById("submitscore").onclick = openModal;
document.getElementById("resultsquiz").onclick = changetoQuiz;
document.getElementById("scoreboardquiz").onclick = changetoQuiz;
document.getElementById("cancel").onclick = closeModal;
document.getElementById("submit").onclick = addScoreBoardEntry;

// Calling a funtion to get the ball rolling.

initialize();