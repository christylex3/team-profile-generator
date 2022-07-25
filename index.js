// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Importing other files
const Employee = require("./lib/Employee");
const Intern = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

var managerPerson;
var engineerPerson;
var internPerson;

// Arrays to hold data for employees
// var managerArray = [];
var engineerArray = [];
var internArray = [];



// An array of questions that asks about the team manager
const teamManagerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOfficeNum'
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
        name: 'engineerId'
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
        name: 'internId'
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

// An array that asks about adding another team member
const memberQuestion = [
    {
        type: 'list',
        message: "Would you like to add another team member?",
        name: 'userChoice',
        choices: ['Engineer', 'Intern', 'No, that is all'],
    }
];


// Begins prompting the user with questions to build a team profile
function startQuestions() {
    inquirer
        .prompt(teamManagerQuestions)
        .then((teamManagerData) => {
            console.log(teamManagerData);
            managerPerson = new Manager(
                teamManagerData.managerName,
                teamManagerData.managerId,
                teamManagerData.managerEmail,
                teamManagerData.managerOfficeNum
            );
            console.log(managerPerson);
            engineerArray = [];
            internArray = [];
            recallInquirer();
        });
}

// Helper method - lets engineeer and intern questions become recursive
function recallInquirer() {
    inquirer
        .prompt(memberQuestion)
        .then((data) => {

            // If user chooses 'Engineer', then prompt user with engineerQuestions
            // Calls function again
            if (data.userChoice == "Engineer") {
                inquirer
                    .prompt(engineerQuestions)
                    .then((engineerData) => {
                        console.log(engineerData);
                        engineerPerson = new Engineer(
                            engineerData.engineerName,
                            engineerData.engineerId,
                            engineerData.engineerEmail,
                            engineerData.engineerGitHub
                        );
                        engineerArray.push(engineerPerson);
                        recallInquirer();
                    });

                // If user chooses 'Engineer', then prompt user with internQuestions
                // Calls function again
            } else if (data.userChoice == "Intern") {
                inquirer
                    .prompt(internQuestions)
                    .then((internData) => {
                        console.log(internData);
                        internPerson = new Intern(
                            internData.internName,
                            internData.internId,
                            internData.internEmail,
                            internData.internSchool
                        );
                        internArray.push(internPerson);
                        recallInquirer();
                    });

            } else {
                console.log(data);
                console.log("Test, test");
                // method that writes the HTML file with Bootstrap
                writeToFile("teamProfile.html");

            }
        })
}

function writeToFile(fileName) {
    var fileContents = generateHTMLFile();
    fs.writeFile(fileName, fileContents, (err) =>
        err ? console.error(err) : console.log("The team profile has been updated.")
    );
    // need to send the file into src

}

function generateHTMLFile() {
    // add in the basics of HTML
    // use bootstrap to make cards
    return `${renderHtmlHead}<body>${renderHtmlBody}${renderHtmlCards}</body>\n</html>`;

}

// Helper method - adds the basic set-up of HTML and incorporates Bootstrap
function renderHtmlHead() {
    return `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge" />\n\t<title>Team Profile</title>\n\t<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">\n</head>\n\n`;
}

function renderHtmlBody() {
    return `\n<header class="d-flex justify-content-center bg-dark">\n\t<h1 class="text-white p-5">My Team</h1>\n</header>\n<main>\n\t<section class="d-flex flex-row justify-content-center flex-wrap">\n`;
}

function renderHtmlCards() {
    // make a for-loop that goes through the array of intern and engineer
    return ``;
}


// Calls startQuestions()
startQuestions();