describe('Login to the app', () => {
  before( () => {
cy.loginUI();
  })

  it('Update Profile', function() {
    cy.openSideMenu();
    cy.clickButtonOnSideMenu('Edit Profile');
    cy.contains('Full Name').next().find('button.edit-button').click();
    cy.get("input[name='full_name']").clear().type('Full Name');
    cy.contains('button', 'Continue').click();
    cy.contains('button', 'Continue').click();
    cy.contains('button', 'Continue').click();
    cy.contains('button', 'Continue').click();
    cy.get('.css-1vyy1ka > .MuiBox-root > .MuiTypography-root').should('have.text', 'Bio');
    cy.contains('Save').click();
    cy.contains('Updated successfully').should('be.visible');
    cy.contains('Full Name').next().find('button.edit-button').click();
    cy.get("input[name='full_name']").should('have.value', 'Full Name');
  });
})
