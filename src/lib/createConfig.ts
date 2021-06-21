import getUserInput from './getUserInput';

interface Stylelintrc {
  extends: string[];
  plugins: string[];
  rules: {};
}

let stylelintrcConfig: Stylelintrc = {
  extends: [],
  plugins: [],
  rules: {},
};

const packages = ['stylelint'];

async function createConfig() {
  const userConfig = await getUserInput();
  switch (userConfig.isBem) {
    case true:
      packages.push('stylelint-selector-bem-pattern');
      stylelintrcConfig = {
        ...stylelintrcConfig,
        plugins: [
          ...stylelintrcConfig.plugins,
          'stylelint-selector-bem-pattern',
        ],
      };
      break;

    default:
      break;
  }
  switch (userConfig.isSass) {
    case true:
      packages.push('stylelint-scss');
      stylelintrcConfig = {
        ...stylelintrcConfig,
        plugins: [...stylelintrcConfig.plugins, 'stylelint-scss'],
      };
      break;

    default:
      break;
  }
  switch (userConfig.isPrettier) {
    case true:
      packages.push(
        'stylelint-prettier',
        'prettier',
        'stylelint-config-prettier'
      );
      stylelintrcConfig = {
        ...stylelintrcConfig,
        extends: [
          ...stylelintrcConfig.extends,
          'stylelint-prettier/recommended',
        ],
        plugins: [...stylelintrcConfig.plugins, 'stylelint-prettier'],
      };
      break;

    default:
      break;
  }

  return {
    stylelintrcConfig,
    packages,
    packageManager: userConfig.packageManager,
  };
}

export default createConfig;
