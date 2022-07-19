const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        name: 'title',
        message: 'Project title:'
    },
    {
        name: 'description',
        message: 'Brief description of project:'
    },
    {
        name: 'installation',
        message: 'Installation instructions:',
    },
    {
        name: 'usage',
        message: 'Usage information:',
    },
    {
        name: 'contributions',
        message: 'Contribution guidelines:'
    },
    {
        name: 'test',
        message: 'Test instructions:'
    },
    {
        name: 'license',
        message: 'Choose a license:',
        type: 'list',
        choices: ['No License', 'Apache-2.0', 'BSD-3-Clause', 'MIT', 'MPL-2.0', 'EPL-2.0']
    },
    {
        name: 'github',
        message: 'Enter your GitHub profile:'
    },
    {
        name: 'email',
        message: 'Enter your email address:'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => console.log(err))
}

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

init();