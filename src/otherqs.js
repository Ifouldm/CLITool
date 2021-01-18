function otherQuestions() {
    const otherQs = [
        {
            type: 'list',
            name: 'projectType',
            message: 'What type of project is this?',
            choices: ['P5', 'Other browser based', 'Node', 'Node & Browser'],
        },
    ];
    inquirer.prompt(otherQs).then((ans) => {
        console.log(JSON.stringify(ans));
    });
}

module.exports = otherQuestions;
