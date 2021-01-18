/* eslint-disable no-unused-vars */
const fs = require('fs');

const dependencies = {
    p5: '1.2.0',
};

const scripts = {
    p5: '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.2.0/p5.min.js" integrity="sha512-b/htz6gIyFi3dwSoZ0Uv3cuv3Ony7EeKkacgrcVg8CMzu90n777qveu0PBcbZUA7TzyENGtU+qZRuFAkfqgyoQ==" crossorigin="anonymous"></script>',
};

const plugins = ['es-lint'];
const configs = ['es-lint'];

/**
 * A utility function to add a dependency to a package.json
 * @param {string} depName - The name of the dependency to be added
 * @param {boolean} dev - Whether it is a development dependency
 */
function addDependancy(depName, dev = false) {
    if (depName in dependencies === false) {
        console.error('Dependency not found');
        return;
    }
    let filename = 'src/templates/package.json';
    if (fs.existsSync('package.json')) {
        filename = 'package.json';
    }
    const packageJson = JSON.parse(fs.readFileSync(filename));
    const depVer = dependencies[depName];
    if (dev) {
        packageJson.devDependencies[depName] = depVer;
    } else {
        packageJson.dependencies[depName] = depVer;
    }
    console.log(JSON.stringify(packageJson, null, 4));
    // fs.writeFileSync('package.json', packageJson);
}

/**
 * A utility function to add a plugin to a ES-Lint config file
 * @param {string} plugin - The name of the plugin to be added to the ES-Lint config file
 */
function addLintPlugin(plugin) {
    if (!plugins.includes(plugin)) {
        console.error('Plugin not found');
        return;
    }
    let filename = 'src/templates/.eslintrc.json';
    if (fs.existsSync('.eslintrc.json')) {
        filename = '.eslintrc.json';
    }
    const lintJson = JSON.parse(fs.readFileSync(filename));
    if (!lintJson.plugins) {
        lintJson.plugins = [];
    }
    lintJson.plugins.push(plugin);
    console.log(JSON.stringify(lintJson, null, 4));
    // fs.writeFileSync('package.json', packageJson);
}

/**
 * A utility function to add a plugin to a ES-Lint config file
 * @param {string} config - The name of the config to be extended by the root ES-Lint config file
 */
function addLintExtends(config) {
    if (!configs.includes(config)) {
        console.error('Config not found');
        return;
    }
    let filename = 'src/templates/.eslintrc.json';
    if (fs.existsSync('.eslintrc.json')) {
        filename = '.eslintrc.json';
    }
    const lintJson = JSON.parse(fs.readFileSync(filename));
    if (!lintJson.extends) {
        lintJson.extends = [];
    }
    lintJson.extends.push(config);
    console.log(JSON.stringify(lintJson, null, 4));
    // fs.writeFileSync('package.json', packageJson);
}

/**
 * A utility function to add script tags to a template HTML document
 * @param {string} scriptsToAdd - The name of the script to be added to the template HTML document
 */
function addHTMLStarter(scriptsToAdd) {
    if (scriptsToAdd.any((scr) => scr in dependencies === false)) {
        console.error('Dependency not found');
        return;
    }
    const htmlTemplate = fs.readFileSync('src/templates/index.html');
    const scriptTags = scriptsToAdd.map((scr) => scripts[scr]).join('\n');
    const html = htmlTemplate.toString().replace('<!scripts>', scriptTags);
    // fs.writeFileSync('index.html', html);
}

module.exports = {
    addDependancy, addHTMLStarter, addLintExtends, addLintPlugin,
};
