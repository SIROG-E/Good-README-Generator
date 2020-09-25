const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
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
        type: "list",
        name: "license",
        message: "Please choose a license:",
        choices: [
            "MIT",
            "GPL"
            "Apache",
            "Boost",
            
            "Mozilla",
            "Perl(aka Artistic)",
            "Unlicense",
        ]

    },{
        type: "input",
        name: "contributing",
        message: "Please provide your Github username (if more than one contributor, separate names with a comma and no space!): "
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide tests instructions: "
    },
    {
        type: "input",
        name: "questions",
        message: "Please enter  your email address where you can be reached for additional questions:",
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
];

// function to write README file
// function writeToFile(fileName, data) {
//     const queryUrl = `http:api.github.com/users/${data.username}`;
// }

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

});

}

// function call to initialize program
init();
