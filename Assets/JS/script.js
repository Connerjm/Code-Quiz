// Creating Object constructors.

// A constructor for questions.
function Question(text, answers)
{
    this.questiontext = text;       //The question itself.
    this.questionanswers = answers; //An array of potential answers.
}

// A constructor for answers, both correct and false.
function Answers(text, correct)
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