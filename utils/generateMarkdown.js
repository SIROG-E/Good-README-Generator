const licenseBadge = require("./licenseBadge");

//![](https://img.shields.io/static/v1?label=${data.license}&message=${data.username}&color=ab8c9b)
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## **${data.title}**

  ${licenseBadge(data)}
  [![GitHub license](https://img.shields.io/badge/Made%20by-SIROG--E-ab8c9b?style=flat&logo=github)](http://https://github.com/SIROG-E)  
  
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
  This project is licensed by: ${licenseBadge(data)} 

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