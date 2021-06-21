"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const execa_1 = __importDefault(require("execa"));
const fs_1 = require("fs");
const listr_1 = __importDefault(require("listr"));
const path_1 = require("path");
const generateFile_1 = __importDefault(require("./generateFile"));
function isPackageFile(ctx, task) {
    const filePath = path_1.join(process.cwd(), 'package.json');
    try {
        fs_1.accessSync(filePath, fs_1.constants.F_OK);
        ctx.isPackageFile = true;
        task.title = chalk_1.default `{greenBright package.json found}`;
        return Promise.resolve('ok');
    }
    catch (err) {
        task.title = chalk_1.default `{redBright Checking package.json file}`;
        return Promise.reject(new Error('package.json not found'));
    }
}
function runTasks(stylelintrc, packages, packageManager) {
    const npmInstall = packages.map((Package) => ({
        title: chalk_1.default `{yellowBright Installing ${Package}}`,
        task: (ctx, task) => execa_1.default('npm', ['i', '-D', Package]).then(() => {
            task.title = chalk_1.default `{greenBright ${Package} Installed}`;
        }),
    }));
    const yarnAdd = packages.map((Package) => ({
        title: chalk_1.default `{yellowBright Installing ${Package}}`,
        task: (ctx, task) => execa_1.default('yarn', ['add', '-D', Package]).then(() => {
            task.title = chalk_1.default `{greenBright ${Package} Installed}`;
        }),
    }));
    const tasks = new listr_1.default([
        {
            title: chalk_1.default `{yellowBright Checking package.json file}`,
            task: (ctx, task) => isPackageFile(ctx, task),
        },
        {
            title: chalk_1.default `{yellowBright Creating package.json for you}`,
            task: (ctx, task) => execa_1.default('npm', ['init', '-y']).then(() => {
                task.title = chalk_1.default `{greenBright Created package.json successfully}`;
            }),
            skip: (ctx) => {
                if (ctx.isPackageFile)
                    return 'package.json already exists';
            },
        },
        {
            title: chalk_1.default `{whiteBright Installing dependencies using yarn}`,
            enabled: () => packageManager === 'yarn',
            task: () => new listr_1.default(yarnAdd, { exitOnError: false }),
        },
        {
            title: chalk_1.default `{whiteBright Installing dependencies using npm}`,
            enabled: () => packageManager === 'npm',
            task: () => new listr_1.default(npmInstall, { exitOnError: false }),
        },
        {
            title: chalk_1.default `{yellowBright Generating stylelintrc.json file}`,
            task: (ctx, task) => generateFile_1.default(stylelintrc, ctx, task),
        },
        {
            title: chalk_1.default `Please create a .stylelintrc.json file and paste these configuration in it    {redBright IGNORE ->}`,
            enabled: (ctx) => ctx.isStylelintrc === false,
            skip: () => {
                if (stylelintrc) {
                    execa_1.default('echo', [JSON.stringify(stylelintrc)]).stdout.pipe(process.stdout);
                }
            },
            task: () => { },
        },
    ], { exitOnError: false });
    tasks.run().catch(() => { });
}
exports.default = runTasks;
//# sourceMappingURL=tasks.js.map