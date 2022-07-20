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

// An array of questions that asks about the intern
const internQuestions = [
    "What is the intern's name?",
    "What is the intern's employee ID?",
    "What is the intern's email?",
    "What school does the intern attend?"
];

// Initializes app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: teamManagerQuestions[0],
                name: 'teamManagerName'
            },
            {
                type: 'input',
                message: teamManagerQuestions[1],
                name: 'teamManagerID'
            },
            {
                type: 'input',
                message: teamManagerQuestions[2],
                name: 'teamManagerEmail'
            },
            {
                type: 'input',
                message: teamManagerQuestions[3],
                name: 'teamManagerOfficeNum'
            },
            {
                type: 'list',
                message: "Would you like to add another team member?",
                choice: ['Engineer', 'Intern', 'No, that is all']
            },
        ])
        .then().catch();

}

// Calls init() to initialize app
init();