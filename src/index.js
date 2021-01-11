const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const projectDir = path.basename(process.cwd());

console.log('Create a new JavaScript project');

function p5Questions() {
    const p5Qs = [
        {
            type: 'checkbox',
            name: 'includes',
            message: 'Which elements would you like to include?',
            choices: [
                { name: 'P5', checked: true },
                { name: 'P5 DOM' },
                { name: 'P5 Sound' },
                { name: 'Matter JS' },
                { name: 'ML5' },
            ],
            default: [true, false, false, false, false],
        },
    ];
    inquirer.prompt(p5Qs).then((answers) => {
        console.log(JSON.stringify(answers));
    });
}

function otherQuestions() {
    const otherQs = [
        {
            type: 'list',
            name: 'projectType',
            message: 'What type of project is this?',
            choices: ['P5', 'Other browser based', 'Node', 'Node & Browser'],
        },
    ];
    inquirer.prompt(otherQs).then((answers) => {
        console.log(JSON.stringify(answers));
    });
}

function nodeQuestions() {
    const nodeQs = [
        {
            type: 'list',
            name: 'projectType',
            message: 'What type of project is this?',
            choices: ['P5', 'Other browser based', 'Node', 'Node & Browser'],
        },
    ];
    inquirer.prompt(nodeQs).then((answers) => {
        console.log(JSON.stringify(answers));
    });
}

function nodeBrowserQuestions() {
    const nodeBrowswerQs = [
        {
            type: 'list',
            name: 'projectType',
            message: 'What type of project is this?',
            choices: ['P5', 'Other browser based', 'Node', 'Node & Browser'],
        },
    ];
    inquirer.prompt(nodeBrowswerQs).then((answers) => {
        console.log(JSON.stringify(answers));
    });
}

const questions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is the name of the project?',
        default: projectDir,
    },
    {
        type: 'list',
        name: 'projectType',
        message: 'What type of project is this?',
        choices: ['P5', 'Other browser based', 'Node', 'Node & Browser'],
    },
];

inquirer.prompt(questions).then((answers) => {
    switch (answers.projectType) {
    case 'P5':
        p5Questions();
        break;
    case 'Other browser based':
        otherQuestions();
        break;
    case 'Node':
        nodeQuestions();
        break;
    case 'Node & Browser':
        nodeBrowserQuestions();
        break;
    default:
        break;
    }
});

// {
//     type: 'confirm',
//     name: 'eslintEnabled',
//     message: 'Do you want to enable ESLint?',
// },
