// const licenseBadge = require("licenseBadge");

//![](https://img.shields.io/static/v1?label=${data.license}&message=${data.username}&color=ab8c9b)
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## **${data.title}**
  
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is license by: ${data.license} 

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.tests}

  ## Questions
  If you have any questions, contact ${data.username} at ${data.questions}
  
  ## Repository
  - [Project Repo](${data.repo})
  
  ## GitHub
  ![Image of me](${data.githubInfo.githubImage})
  - ${data.githubInfo.name}
  - [GitHub Profile](${data.githubInfo.profile})
  - <${data.githubInfo.email}>
`;
}

module.exports = generateMarkdown;
