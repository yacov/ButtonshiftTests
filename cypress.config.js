const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'irkssg',
  e2e: {
    experimentalStudio:true,
    baseUrl: 'https://dev-fe.buttonshift.com/',
    baseApiUrl: 'https://dev-be.buttonshift.com/api/v1',
    env: {
      defaultUsername: 'uttam@fotoley.com',
      defaultPassword: 'test@123',
      access_token: '',
      refresh_token: '',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
