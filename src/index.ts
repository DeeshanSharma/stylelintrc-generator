#!/usr/bin/env node

import createConfig from './lib/createConfig';
import paintTerminal from './lib/paintTerminal';
import runTasks from './lib/tasks';

(async () => {
  paintTerminal();
  const { stylelintrcConfig, packages, packageManager } = await createConfig();
  runTasks(stylelintrcConfig, packages, packageManager);
})();
