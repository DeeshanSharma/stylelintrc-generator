import centerAlign from 'center-align';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

clear();

const display = {
  options: ['greenBright', 'yellowBright', 'cyanBright'],
  strings: [
    `${figlet.textSync('stylelintrc-generator')}`,
    '\nThis package is developed by Deeshan Sharma.',
    '\nSee the source code here https://github.com/DeeshanSharma/stylelintrc-generator. Give it a star if you like it.\n',
  ],
};

function paintTerminal(options = display.options, string = display.strings) {
  const terminalWidth = process.stdout.columns;
  for (let i = 0; i < 3; i += 1) {
    console.log(
      chalk`{${options[i]} ${centerAlign(string[i], terminalWidth)}}`
    );
  }
}

export default paintTerminal;
