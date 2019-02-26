const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const packageExists = nodePath =>
  fs.existsSync(path.resolve(process.cwd(), nodePath));

module.exports = {
  prompt: ({ prompter, args }) =>
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of the package',
        default: '',
        filter: value => value,
        validate: (value) => {
          const validName = /.+/.test(value);
          if (!validName) return 'The name is required';
          if (packageExists(path.join(`packages/${value}`)))
            return 'Package exists';
          return true;
        }
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select the type of component',
        choices: () => [
          { name: 'Stateless Function', value: 'sfc' },
          { name: 'Class', value: 'class' }
        ]
      }
    ])
};
