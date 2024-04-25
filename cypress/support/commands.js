// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username=Cypress.env('defaultUsername'), password=Cypress.env('defaultPassword')) => {
    cy.api('POST', '/auth/token/', {
      username: username,
      password: password,
    }).then((response) => {
        Cypress.env('access_token', response.body.data.access_token);
        Cypress.env('refresh_token', response.body.data.refresh_token);
    });
  });

Cypress.Commands.add('loginUI', (username = Cypress.env('defaultUsername'), password = Cypress.env('defaultPassword')) => {
    cy.visit('/')
    cy.get('.css-6mcc7m').click();
    cy.get('#mui-2').clear();
    cy.get('#mui-2').type(username);
    cy.get('.css-bs0ocn > .MuiButtonBase-root > svg > path').click();
    cy.get('#mui-3').clear();
    cy.get('#mui-3').type(password);
    cy.get('.css-bs0ocn > .MuiButton-contained').click();
});

Cypress.Commands.add('openSideMenu', () => {
    cy.get("button[aria-controls='Menu-actions']", {timeout: 10000}).click();
    cy.get("div#Menu-actions[role='menu']", {timeout: 10000}).should('be.visible');
});

Cypress.Commands.add('clickButtonOnSideMenu', (name) => {
    cy.get(`[aria-label="${name}"]`).click();
});

  Cypress.Commands.add('generateUniqueEmail', () => {
    const timestamp = new Date().getTime();
    const uniqueEmail = `testuser${timestamp}@example.com`;
    Cypress.env('uniqueEmail', uniqueEmail);
  });

