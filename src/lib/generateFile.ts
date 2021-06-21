import chalk from 'chalk';
import { writeFileSync } from 'fs';
import Listr from 'listr';

function generateFile(
  stylelintrcConfig: object,
  ctx: Listr.ListrContext,
  task: Listr.ListrTaskWrapper
) {
  try {
    writeFileSync(
      '.stylelintrc.json',
      JSON.stringify(stylelintrcConfig, null, 2)
    );
    task.title = chalk`{greenBright Successfully Generated your file}`;
    return Promise.resolve('ok');
  } catch (err) {
    ctx.isStylelintrc = false;
    task.title = chalk`{redBright Generating stylelintrc.json file}`;
    return Promise.reject(new Error("Couldn't create file"));
  }
}

export default generateFile;
