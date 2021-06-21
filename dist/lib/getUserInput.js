"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function getUserInput() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer_1.default.prompt([
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
    });
}
exports.default = getUserInput;
//# sourceMappingURL=getUserInput.js.map