// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const { writeFile } = require("fs").promises;
class Markdown {
  static renderLicenseBadge(license) {
    const badges = {
      MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      GPLv2:
        "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)",
      GPLv3:
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
      IBM: "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)",
    };
    return badges[license];
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  static renderLicenseLink(license) {
    const licenseLinks = {
      MIT: '[MIT](https://opensource.org/licenses/MIT)',
      GPLv2: '[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      GPLv3: '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
      IBM: "[IBM](https://opensource.org/licenses/IPL-1.0)",
    };
    return licenseLinks[license];
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  static renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license`;
    } else {
      return " ";
    }
  }

  // TODO: Create a function to generate markdown for README
  // template literal, right to file to string take this output
  // create readme in this string then output to file.
  static generateMarkdown(data) {
    return `# ${data.projectName}

${this.renderLicenseBadge(data.license)}

## Table of Contents  
-[Project Description](#projectDescription)  
-[Installation](#dependancies)  
-[Usage](#userInfo)  
-[Contributions](#contributions)  
-[Tests](#test)  
-[Questions](#Questions)  
-[License](#license)  

## Description  
${data.projectDescription}
## Installation  
${data.dependencies} 
## Usage  
${data.userInfo} 
## Contributions  
${data.contributions} 
## Tests  
${data.test} 
## License  
${this.renderLicenseSection(data.license)}  

  
## Questions  

If there are any additional questions or inquires feel free to reach out to me.  
Github Username:${data.userName}  
Email:${data.emailAddress}  
          `;
  }
}
module.exports = Markdown;
