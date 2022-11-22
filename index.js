// const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const Markdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Github username",
      name: "userName",
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
      type: "input",
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "checkbox",
      message: "What kind of license should your project have?",
      choices: ["MIT", "GPLv2", "GPLv3", "IBM"],
      name: "license",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "installation",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usage",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributions",
    },
  ]);
};

// TODO: Create a function to write README file
// const generateREADME = ({
//   userName,
//   emailAddress,
//   projectDescription,
//   license,
//   dependencies,
//   test,
//   userInfo,
//   contributions,
//   projectName,
// }) =>
//   ` #  Readme Generator
//       ${projectName}

// ## Description
//  ${projectDescription}
// ## Installation
// ${dependencies}
// ## Usage
// ${userInfo}
// ## Contributions
// ${contributions}
// ## Tests
// ${test}
// ## License
// ${license}
// ## Questions
// ${userName} ${emailAddress}
//         `;

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((response) => {
      const mark = Markdown.generateMarkdown(response);
      fs.writeFile("README.md", mark, function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log("Successfully wrote to README.md");
        }
      });
    })
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
