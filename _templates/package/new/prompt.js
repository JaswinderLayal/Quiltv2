const fs = require('fs');
const path = require('path');

const componentExists = (nodePath, name) =>
  fs.existsSync(path.resolve(process.cwd(), nodePath, name)) ||
  fs.existsSync(path.resolve(process.cwd(), nodePath, `${name}.js`));

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's name of your package ?",
    validate: (value, answers) => {
      const validName = /.+/.test(value);
      if (!validName) return 'The name is required';
      return true;
    },
  },
];
