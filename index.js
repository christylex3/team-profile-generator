// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// An array of questions that asks about the team manager
const teamManagerQuestions = [
    "What is the team manager's name?",
    "What is the team manager's employee ID?",
    "What is the team manager's email?",
    "What is the team manager's office number?"
];

// An array of questions that asks about the engineer
const engineerQuestions = [
    "What is the engineer's name?",
    "What is the engineer's employee ID?",
    "What is the engineer's email?",
    "What is the engineer's GitHub username?"
];