const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Can you provide a description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "Can you provide the usage information?"
    },
    {
        type: "input",
        name: "licence",
        message: "Please provide the app licence or your badge link"
    },{
        type: "input",
        name: "contributing",
        message: "Please provide your Github username: "
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide tests instructions: "
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const queryUrl = `http:api.github.com/users/${data.username}`;
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
