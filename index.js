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
        choices: ['No License', 'Apache', 'Boost', 'BSD 2', 'BSD 3', 'CC 0', 'Eclipse', 'GNU GPL3', 'GNU AGPL3', 'GNU GPL2', 'MIT', 'MPL', 'Unlicense']
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
