import inquirer from 'inquirer';

interface Answers {
  isBem: boolean;
  isSass: boolean;
  isPrettier: boolean;
  packageManager: string;
}

async function getUserInput() {
  const answers: Answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'isBem',
      message: 'Would you like to use bem pattern?',
      choices: [
        {
          value: true,
          name: 'Yes',
        },
        {
          value: false,
          name: 'No',
        },
      ],
      default: true,
    },
    {
      type: 'list',
      name: 'isSass',
      message: 'Do you use SCSS/SASS in your project?',
      choices: [
        {
          value: true,
          name: 'Yes',
        },
        {
          value: false,
          name: 'No',
        },
      ],
      default: false,
    },
    {
      type: 'list',
      name: 'isPrettier',
      message: 'Do you use Prettier as code formatter?',
      choices: [
        {
          value: true,
          name: 'Yes',
        },
        {
          value: false,
          name: 'No',
        },
      ],
      default: true,
    },
    {
      type: 'list',
      name: 'packageManager',
      message: 'Which package manager you use?',
      choices: ['yarn', 'npm'],
      default: 'npm',
    },
  ]);
  return answers;
}

export default getUserInput;
