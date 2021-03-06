# Code-Quiz

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Launch](#launch)
- [Images](#Images)
- [To Do](#to-do)
- [Issues](#issues)

## Introduction

This is the fourth homework in the bootcamp. My task will be to create a simple web application that allows the user to take a timed multiple choice quiz with coding questions to receive a score. It will feature a responsive layout with a header housing the highscore button and timer. The main content will by the questions that will dynamically replace each other as questions are answered till the quiz is complete. After the quiz, the user will be able to input their initials to save their score to the high score list.

The acceptance criteria is as follows:

- [x] Upon clicking the start button, a timer starts and the first question will be revealed.
- [x] After answering a question, another one will be presented.
- [x] If the answer is incorrect, time is subtracted from the clock.
- [x] Upon answering all questions or the time runs out, the game is over.
- [x] After the game, the user may save their initials and score.

## Technologies

Project is created with:

- HTML
- CSS
- JavaScript featuring web APIs

## Launch

- [GitHub Repository](https://github.com/Connerjm/Code-Quiz)
- [Deployment](https://connerjm.github.io/Code-Quiz/)

## Images

The welcome page.
![Welcome](Assets/Images/Welcome.png)

Currently taking the quiz.
![Quiz](Assets/Images/Quiz.png)

End of quiz results.
![Finish](Assets/Images/Finish.png)

Viewing the Score Board
![Scoreboard](Assets/Images/Scoreboard.png)

## To Do

- [ ] Add a difficulty setting.
- [x] Shuffle the questions and answers so the user can't just memorize position of correct answer.
- [ ] Add a prefacing countdown before the quiz timer starts.
- [ ] Clean up this damn JS code. (I have given up. Everytime I change anything, so many things break.)
- [ ] Force the characters in the initial submission box to be capitals.

## Issues

- Something about the loading when the application initially opens causes the elements to pop since they show up before some of the CSS is applied.
