const licenseBadge = require"./licenseBadge";

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${licenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
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
  ${licenseBadge(userInput)}

  ## Contributing
  ${data.credit}

  ## Test
  ${data.tests}

  ## Questions
  If you have any questions, contact ${data.username} on GitHub.
`;
}

module.exports = generateMarkdown;
