function renderLicenseBadge(license) {
  switch (license){
    case 'No License':
      return ''
    case 'Apache-2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'BSD-3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'MPL-2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case 'EPL-2.0':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  } 

}

function renderLicenseSection(license) {
  if (license === 'No License') {
    return `This application is not licensed`
  } else {
    return `This application is licensed by ${license}`
  }
}

function generateMarkdown(data) {
  return ` # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Content
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [License](#license)
  
  - [Contributing](#contributing)
  
  - [Tests](#tests)
  
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributions}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  If you have any questions, please reach out to me on GitHub or by email:
  
  - [GitHub](https://github.com/${data.github})
  
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;