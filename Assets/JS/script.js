// Creating Object constructors.

// A constructor for questions.
function Question(text, answers)
{
    this.questiontext = text;       //The question itself.
    this.questionanswers = answers; //An array of potential answers.
}

// A constructor for answers, both correct and false.
function Answer(text, correct)
{
    this.answertext = text;     //The answer in string form.
    this.iscorrect = correct;   //Whether its correct or not.
}

// A constructor for highscore entries.
function HSEntry(initials, score)
{
    this.playerinitials = initials; //The 2 char string of initials.
    this.highscore = score;         //That players score.
}

// Creating Variables.

var questionsArray = [];//Array of Question objects.
var scoreBoard = [];    //Array of high score entry objects.

// Creating functions.

// Sets up the arrays needed.
function initialize()
{
    buildQuestions();
    buildScoreBoard();

    //TODO: DELETE THIS
    console.log(questionsArray);
}

// Helper function to build the question array.
// A little ugly. Each line creates a question object with the answer and an array of answer objects and adds it to the questions array.
function buildQuestions()
{
    questionsArray.push(new Question("In which HTML tag would you put JavaScript?", [new Answer("<script>", true), new Answer("<body>", false), new Answer("<link>", false), new Answer("<meta>", false)]));
    questionsArray.push(new Question("Which part of the box model is the inner most?", [new Answer("Margin", false), new Answer("Border", false), new Answer("Padding", false), new Answer("Content", true)]));
    questionsArray.push(new Question("How does one access a property of an object?", [new Answer("object.property", false), new Answer("object[\"property\"]", false), new Answer("Both", true)]));
    questionsArray.push(new Question("console.log() is most often used to give information to whom?", [new Answer("The user", false), new Answer("The dev", true)]));
    questionsArray.push(new Question("Which popular social media company created BootStrap in an attempt to make their jobs easier?", [new Answer("Facebook", false), new Answer("Instagram", false), new Answer("Twitter", true), new Answer("YouTube", false)]));
    questionsArray.push(new Question("The first element in an array is indexed at?", [new Answer("0", true), new Answer("1", false)]));
}

// Helper function to build the score board array.
function buildScoreBoard()
{
    for (var i = 0; i < 10; i++)
        scoreBoard.push(new HSEntry("AA", 0));//Using "AA" and 0 as the default.
}

function changetoScoreBoard()
{
    
}

function changetoQuiz()
{

}

function changetoResults()
{

}

// Attaching functions to listeners.

document.getElementById("viewscores").onclick = changetoScoreBoard;

// Calling a funtion to set up stuff.

initialize();