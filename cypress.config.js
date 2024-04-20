const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'irkssg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
