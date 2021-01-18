#! /usr/bin/env node

const path = require('path');
const inquirer = require('inquirer');
const p5Questions = require('./p5qs');

const projectDir = path.basename(process.cwd());

let answers = {};

console.log('Create a new JavaScript project');

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

async function runQuestions() {
    answers = await inquirer.prompt(questions);

    if (answers.projectType === 'P5') {
        answers = await p5Questions(answers);
    }
    console.log(`Answers: ${JSON.stringify(answers)}`);
}

runQuestions();
