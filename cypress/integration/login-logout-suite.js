import { Login } from '../fixtures/page-objects/login-page';

// This piece of code was added because of an error in the application
// --> ReferenceError: grecaptcha is not defined
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Login-Logout automation suite', () => {

  const login = new Login();

  beforeEach(function () {
    // Visit sign up page using base url + page name
    cy.visit('/login');
  });

  it('Login page - Manual login', () => {

    // Sign up using the API and then login with corresponding username
    cy.generateRandomEmail()
      .then(randomEmail => {
        //Signing Up using the API to avoid flaky tests
        cy.apiSignUp(randomEmail, 'S0mething');

        // Wait 1 second for the API process to finish
        cy.wait(1000)

        // Login using the credentials
        login.getEmailInput().type(randomEmail);
      })
    login.getPasswordInput().type('S0mething');
    login.getSignInButton().click();

    // Validate Dashboard page url
    cy.url().should('contains', 'dashboard');
  })
})