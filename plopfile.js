/** @param {import('plop').NodePlopAPI} plop */
const addStoreCli = (plop) => {
  plop.setGenerator('store', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'what is your store name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stores/use{{pascalCase name}}Store.ts',
        templateFile: 'plopTemplates/store.hbs',
      },
      {
        type: 'append',
        path: 'src/stores/index.ts',
        pattern: /(.|\n)*;/,
        template: `export * from './use{{pascalCase name}}Store';`,
      },
    ],
  });
};

/** @param {import('plop').NodePlopAPI} plop */
const addComposable = (plop) => {
  plop.setGenerator('composable', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'what is your composable name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'composables/{{name}}.ts',
        templateFile: 'plopTemplates/composable.hbs',
      },
      {
        type: 'append',
        path: 'composables/index.ts',
        pattern: /(.|\n)*;/,
        template: `export * from './{{name}}';`,
      },
    ],
  });
};

/**
 * @param {import('plop').NodePlopAPI} plop
 */
const cli = (plop) => {
  addStoreCli(plop);
  addComposable(plop);
};

export default cli;
