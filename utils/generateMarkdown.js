const licenseBadge = require"./licenseBadge";

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## **${data.title}**

  ${licenseBadge(data)}

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
  ${licenseBadge(data)}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.tests}

  ## Questions
  If you have any questions, contact ${data.username} at ${data.questions}
  
  ## Repository
  - [Project Repo](${data.repo})
  
  ## GitHub
  ![Image of me](${githubInfo.githubImage})
  - ${githubInfo.name}
  - [GitHub Profile](${githubInfo.profile})
  - <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;
