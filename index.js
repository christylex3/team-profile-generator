// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Importing other files
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
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
    fs.writeFile(`./src/${fileName}`, fileContents, (err) =>
        err ? console.error(err) : console.log("The team profile has been updated.")
    );
    // need to send the file into src

}

function generateHTMLFile() {
    // add in the basics of HTML
    // use bootstrap to make cards
    return `${renderHtmlHead()}<body>${renderHtmlBody()}${renderHtmlCards()}</body>\n</html>`;

}

// Helper method - adds the basic set-up of HTML and incorporates Bootstrap
function renderHtmlHead() {
    return `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n\t<meta http-equiv="X-UA-Compatible" content="ie=edge" />\n\t<title>Team Profile</title>\n\t<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">\n</head>\n\n`;
}

function renderHtmlBody() {
    return `\n<header class="d-flex justify-content-center bg-dark">\n\t<h1 class="text-white p-5">My Team</h1>\n</header>\n<main>\n\t<section class="d-flex flex-row justify-content-center flex-wrap">\n`;
}

function renderHtmlCards() {
    // Manager card
    var managerCard = `<article class="m-5 border shadow-lg">\n\t<section class="p-3 bg-primary text-white">\n\t<h2>${managerPerson.getName()}</h2>\n\t<article class="d-flex">\n\t<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"\n\tclass="mr-2 bi bi-cup-hot-fill align-self-center" viewBox="0 0 16 16">\n<path fill-rule="evenodd"\n\td="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z" />\n<path
d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />\n</svg>\n<h3>${managerPerson.getRole()}</h3>\n</article>\n</section>\n<section class="p-3 bg-light d-flex flex-column">\n\t<p class="p-2 bg-white border">ID: ${managerPerson.getId()}</p>\n<p class="p-2 bg-white border">Email: <a href="mailto:${managerPerson.getEmail()}">${managerPerson.getEmail()}</a></p>\n<p class="p-2 bg-white border">Office Number: ${managerPerson.getOfficeNumber()}</p>\n</section>\n</article>`;

    // make a for-loop that goes through the array of intern and engineer
    var engineerCard = ``;
    for (let i = 0; i < engineerArray.length; i++) {
        engineerCard += `<article class="m-5 border shadow-lg">
        <section class="p-3 bg-primary text-white">
            <h2>${engineerArray[i].getName()}</h2>
            <section class="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-pc-display-horizontal align-self-center mr-2" viewBox="0 0 16 16">
                    <path
                        d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
                </svg>
                <h3>${engineerArray[i].getRole()}</h3>
            </section>
        </section>
        <section class="p-3 bg-light d-flex flex-column">
            <p class="p-2 bg-white border">ID: ${engineerArray[i].getId()}</p>
            <p class="p-2 bg-white border">Email: <a href="mailto:${engineerArray[i].getEmail()}">${engineerArray[i].getEmail()}</a></p>
            <p class="p-2 bg-white border">GitHub: <a href="https://github.com/${engineerArray[i].getGitHub()}" target="_blank">${engineerArray[i].getGitHub()}</a></p>
        </section>
    </article>`
    }

    var internCard = ``;
    for (let i = 0; i < internArray.length; i++) {
        internCard += `<article class="m-5 border shadow-lg">
        <section class="p-3 bg-primary text-white">
            <h2>${internArray[i].getName()}</h2>
            <section class="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-lightbulb align-self-center mr-2" viewBox="0 0 16 16">
                    <path
                        d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                </svg>
                <h3>${internArray[i].getRole()}</h3>
            </section>

        </section>
        <section class="p-3 bg-light d-flex flex-column">
            <p class="p-2 bg-white border">ID: ${internArray[i].getId()}</p>
            <p class="p-2 bg-white border">Email: <a href="mailto:${internArray[i].getEmail()}">${internArray[i].getEmail()}</a></p>
            <p class="p-2 bg-white border">School: ${internArray[i].getSchool()}</p>
        </section>
        </article>`
    }
    return `${managerCard}\n${engineerCard}\n${internCard}`;
}


// Calls startQuestions()
startQuestions();