"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = require("fs");
function generateFile(stylelintrcConfig, ctx, task) {
    try {
        fs_1.writeFileSync('.stylelintrc.json', JSON.stringify(stylelintrcConfig, null, 2));
        task.title = chalk_1.default `{greenBright Successfully Generated your file}`;
        return Promise.resolve('ok');
    }
    catch (err) {
        ctx.isStylelintrc = false;
        task.title = chalk_1.default `{redBright Generating stylelintrc.json file}`;
        return Promise.reject(new Error("Couldn't create file"));
    }
}
exports.default = generateFile;
//# sourceMappingURL=generateFile.js.map