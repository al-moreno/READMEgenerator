// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = 
    [{
      type:"input",
      message:"What is the title of your README.md document?",
      name:"title"
    },
    {
      type:"input",
      message:"What description would you like to add?",
      name:"description",
    },
    {
      type:"input",
      message:"What are the required installation instructions?",
      name:"installation",
      default: "npm install"
    },
    {
      type:"input",
      message:"What usage information would you like to include?",
      name:"usageInfo"
    },
    {
      type:"input",
      message:"Who were the contributors to your project?",
      name:"contributors"
    },
    {
      type:"input",
      message:"Please provide the project?",
      name:"test",
      default: "npm test"
    },
    {
      type: "checkbox",
      message: "Which license would you like to include?",
      choices: [
        "MIT",
        "BSD",
        "GPL",
      ],
      name: "license",
      default: "MIT"
    },
    {
      type:"username",
      message:"What is your GitHub Username?",
      name: "username"
    },
    {
      type:"email",
      message:"Should there be any questions, what email may you be reached at?",
      name:"email"
    }
  ]

// })
inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;
            
          fs.writeFile("README.md", generateMarkdown(data), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });



function init() {

}

init();