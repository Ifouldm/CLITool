const inquirer = require('inquirer');

async function p5Questions(answers) {
    let res = await inquirer.prompt([
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
    ]);
    res = { ...answers, ...res };
    return res;
}

module.exports = p5Questions;
