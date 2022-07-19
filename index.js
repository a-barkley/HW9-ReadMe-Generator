const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Project title: '
    },
    {
        name: 'description',
        message: 'Brief description of project: '
    },
    {
        name: 'installation',
        message: 'Installation instructions: ',
    },
    {
        name: 'usage',
        message: 'Usage information:',
    },
    {
        name: 'contributions',
        message: 'Contribution guidelines: '
    },
    {
        name: 'test',
        message: 'Test instructions: '
    },
    {
        name: 'license',
        message: 'Choose a license: ',
        type: 'list',
        choices: ['No License', 'Apache-2.0', 'BSD-3-Clause', 'MIT', 'MPL-2.0', 'EPL-2.0']
    },
    {
        name: 'github',
        message: 'Enter your GitHub URL: '
    },
    {
        name: 'email',
        message: 'Enter your email address: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => console.log(err))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('./new/README.md', answers);
        })
        .catch((error) => {
            console.log(error);
        });
}       

// Function call to initialize app
init();
