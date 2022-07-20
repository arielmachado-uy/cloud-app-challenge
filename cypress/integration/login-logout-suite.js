import { Dashboard } from '../fixtures/page-objects/dashboard';
import { Login } from '../fixtures/page-objects/login-page';
import { Sidebar } from '../fixtures/page-objects/sidebar-menu';
import { TopBar } from '../fixtures/page-objects/topbar';

// This piece of code was added because of an error in the application
// --> ReferenceError: grecaptcha is not defined
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Login-Logout automation suite', () => {

  const login = new Login();
  const sidebar = new Sidebar();
  const dashboard = new Dashboard();
  const topBar = new TopBar();

  it('Manual Login', () => {
    cy.visit('/login');

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

    // Basic validations
    // Validate Dashboard page url
    cy.url().should('contains', 'dashboard');

    // Sidebar validations
    sidebar.validateMenuOptions(['Files', 'Collections']);
    sidebar.validateSubmenuOptions(['All files', 'Recent', 'Favorites', 'Trash',]);

    // Dashboard page validations
    dashboard.getDashboardTitle().should('have.text', ' Start creating and sharing content today with CloudApp');
    dashboard.getVideoThumbnail().should('exist');
    dashboard.getDownloadAppButton().should('be.visible');

  })

  it('Manual Logout', () => {

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
    topBar.getSignOutButton().click();

    // Basic validations
    // Validate Login page url
    cy.url().should('contains', 'login');
    login.getEmailInput().should('be.visible');
    login.getPasswordInput().should('be.visible');
  })
})