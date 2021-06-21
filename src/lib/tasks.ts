import chalk from 'chalk';
import execa from 'execa';
import { accessSync, constants } from 'fs';
import Listr from 'listr';
import { join } from 'path';
import generateFile from './generateFile';

function isPackageFile(ctx: Listr.ListrContext, task: Listr.ListrTaskWrapper) {
  const filePath = join(process.cwd(), 'package.json');
  try {
    accessSync(filePath, constants.F_OK);
    ctx.isPackageFile = true;
    task.title = chalk`{greenBright package.json found}`;
    return Promise.resolve('ok');
  } catch (err) {
    task.title = chalk`{redBright Checking package.json file}`;
    return Promise.reject(new Error('package.json not found'));
  }
}

function runTasks(
  stylelintrc: object,
  packages: string[],
  packageManager: string
) {
  const npmInstall: Listr.ListrTask[] = packages.map((Package: string) => ({
    title: chalk`{yellowBright Installing ${Package}}`,
    task: (ctx, task) =>
      execa('npm', ['i', '-D', Package]).then(() => {
        task.title = chalk`{greenBright ${Package} Installed}`;
      }),
  }));

  const yarnAdd: Listr.ListrTask[] = packages.map((Package) => ({
    title: chalk`{yellowBright Installing ${Package}}`,
    task: (ctx, task) =>
      execa('yarn', ['add', '-D', Package]).then(() => {
        task.title = chalk`{greenBright ${Package} Installed}`;
      }),
  }));

  const tasks = new Listr(
    [
      {
        title: chalk`{yellowBright Checking package.json file}`,
        task: (ctx, task) => isPackageFile(ctx, task),
      },
      {
        title: chalk`{yellowBright Creating package.json for you}`,
        task: (ctx, task) =>
          execa('npm', ['init', '-y']).then(() => {
            task.title = chalk`{greenBright Created package.json successfully}`;
          }),
        skip: (ctx) => {
          if (ctx.isPackageFile) return 'package.json already exists';
        },
      },
      {
        title: chalk`{whiteBright Installing dependencies using yarn}`,
        enabled: () => packageManager === 'yarn',
        task: () => new Listr(yarnAdd, { exitOnError: false }),
      },
      {
        title: chalk`{whiteBright Installing dependencies using npm}`,
        enabled: () => packageManager === 'npm',
        task: () => new Listr(npmInstall, { exitOnError: false }),
      },
      {
        title: chalk`{yellowBright Generating stylelintrc.json file}`,
        task: (ctx, task) => generateFile(stylelintrc, ctx, task),
      },
      {
        title: chalk`Please create a .stylelintrc.json file and paste these configuration in it    {redBright IGNORE ->}`,
        enabled: (ctx) => ctx.isStylelintrc === false,
        skip: () => {
          if (stylelintrc) {
            execa('echo', [JSON.stringify(stylelintrc)]).stdout.pipe(
              process.stdout
            );
          }
        },
        task: () => {},
      },
    ],
    { exitOnError: false }
  );

  tasks.run().catch(() => {});
}

export default runTasks;
