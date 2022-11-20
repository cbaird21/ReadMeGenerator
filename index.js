const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
// TODO: Create an array of questions for user input

const promptUser = () => {
  return (
    inquirer
      .prompt([
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
      })
  );
};

// TODO: Create a function to write README file
function writeToFile() {
  const generateREADME = ({
    userName,
    emailAddress,
    projectDescription,
    license,
    dependencies,
    test,
    userInfo,
    contributions,
  }) =>
    ` ## ${projectName}  
        # Description  
        ${projectDescription}  
        # Installation  
        ${dependencies}  
        #Usage  
        ${userInfo}  
        #Contributions  
        ${contributions}  
        #Tests  
        ${test}  
        #License  
        ${license}  
        #Questions  
        ${userName}  
        ${emailAddress}  
        `;
}

// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((response) => writeFile("README.md", generateREADME(response)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
