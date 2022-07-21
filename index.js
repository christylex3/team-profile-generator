// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// An array of questions that asks about the team manager
const teamManagerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'teamManagerName',
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'teamManagerID'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'teamManagerEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'teamManagerOfficeNum'
    },
];

// An array of questions that asks about the engineer
const engineerQuestions = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerID'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'engineerGitHub'
    },
];

// An array of questions that asks about the intern
const internQuestions = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'internID'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What school does the intern attend?",
        name: 'internSchool'
    },
];

const memberQuestion = [
    {
        type: 'list',
        message: "Would you like to add another team member?",
        name: 'userChoice',
        choices: ['Engineer', 'Intern', 'No, that is all'],
    }
];


// Initializes app
function init() {
    inquirer
        .prompt(teamManagerQuestions)
        .then(recallInquirer())
        .then((data) => {
            console.log(data);
        });
};

// Helper method - lets engineeer and intern questions become recursive
function recallInquirer() {
    inquirer
        .prompt(memberQuestion)
        .then((data) => {
            if (data.userChoice == "Engineer") {
                // method of inquirer for engineer
                // then recall this method
            } else if (data.userChoice == "Intern") {
                // method of inquirer for intern
                // then recall this method
            } else {
                console.log(data);
                console.log("Team Profile has been updated.");
            }
        })
}

// Calls init() to initialize app
init();