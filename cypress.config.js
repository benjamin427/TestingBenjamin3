const { defineConfig } = require("cypress");
const createBuilder = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberpreprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const builder = createBuilder({
        plugins: [createEsbuildPlugin(config)]
      })
      on('file:preprocessor', builder);
      addCucumberpreprocessor(on, config);
      return config;
    },
    specPattern: "**/*.feature",
    reporter: "../node_modules/mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      quite: false
    }
  },
});
