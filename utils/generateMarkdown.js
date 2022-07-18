// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}
  
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


  
  ## Contributing
  
  ${data.contributions}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  If you have any questions, please reach out to me on GitHub or by email:
  
  - [GitHub](${data.github})
  
  - Email: ${data.email}

  `;
}

module.exports = generateMarkdown;