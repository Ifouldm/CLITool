function nodeQuestions() {
    const nodeQs = [
        {
            type: 'list',
            name: 'projectType',
            message: 'What type of project is this?',
            choices: ['P5', 'Other browser based', 'Node', 'Node & Browser'],
        },
    ];
    inquirer.prompt(nodeQs).then((ans) => {
        console.log(JSON.stringify(ans));
    });
}

module.exports = nodeQuestions;
