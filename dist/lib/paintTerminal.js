"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const center_align_1 = __importDefault(require("center-align"));
const chalk_1 = __importDefault(require("chalk"));
const clear_1 = __importDefault(require("clear"));
const figlet_1 = __importDefault(require("figlet"));
clear_1.default();
const display = {
    options: ['greenBright', 'yellowBright', 'cyanBright'],
    strings: [
        `${figlet_1.default.textSync('stylelintrc-generator')}`,
        '\nThis package is developed by Deeshan Sharma.',
        '\nSee the source code here https://github.com/DeeshanSharma/stylelintrc-generator. Give it a star if you like it.\n',
    ],
};
function paintTerminal(options = display.options, string = display.strings) {
    const terminalWidth = process.stdout.columns;
    for (let i = 0; i < 3; i += 1) {
        console.log(chalk_1.default `{${options[i]} ${center_align_1.default(string[i], terminalWidth)}}`);
    }
}
exports.default = paintTerminal;
//# sourceMappingURL=paintTerminal.js.map