const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input

const questions = [];

questions
  .prompt([
    {
      type: "input",
      message: "What is your Github username",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "emailAddress",
    },
    {
      type: "input",
      message: "What is the project name?",
      name: "projectName",
    },
    {
      type: "description",
      message: "Please write a short description of your project",
      name: "projectDescription",
    },
    {
      type: "input",
      message: "What kind of license should your project have?",
      name: "license",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "dependancies",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "test",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "userInfo",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributions",
    },
  ])
  //   Promise object that has a then method and a catch method. status: pending, fufilled, rejected
  //   need to create the ternary operator
  .then((response) => {
    fs.writeFile("README.md", JSON.stringify(response), (err) => {
      err ? console.error(err) : console.log("success");
    });
  });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
