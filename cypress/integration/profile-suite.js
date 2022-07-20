import { Profile } from '../fixtures/page-objects/profile-page';
import { TopBar } from '../fixtures/page-objects/topbar';

// This piece of code was added because of an error in the application
// --> ReferenceError: grecaptcha is not defined
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('User Profile automation suite', () => {

  const topBar = new TopBar();
  const profile = new Profile();

  it('Update profile avatar', () => {

    // Generating a random email
    cy.generateRandomEmail().as('randomEmail');

    // Signing up with a new user using the API
    cy.get('@randomEmail')
      .then(email => {
        cy.apiSignUp(email, 'S0mething');
      })

    // Sign in with the new user using the API
    cy.get('@randomEmail')
      .then(email => {
        cy.apiSignIn(email, 'S0mething');
      })

    // Visiting the site with the user already logged in programmatically
    cy.visit('/');

    // Click on the user icon at the top right of the page
    topBar.getUserProfileButton().click();
    // Added a wait just to demo what I am doing, Cypress is really fast
    cy.wait(1000)
    topBar.getSettingsButton().click();

    // Attach the image inside the profile page avatar drop zone
    profile.getImageDropZone()
      .attachFile('avatar_sample.png', { subjectType: 'drag-n-drop' });

    profile.getSubmitButton().click();
    profile.validateProfileToastMessage('Account updated successfully');
  })
})