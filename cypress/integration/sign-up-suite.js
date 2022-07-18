import { Common } from '../fixtures/page-objects/common-page';
import { SignUp } from '../fixtures/page-objects/sign-up-page';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Sign Up automation suite', () => {

  const signUp = new SignUp();
  const common = new Common();

  beforeEach(function () {
    // Visit sign up page using base url + page name
    cy.visit('/signup');
  });

  it.only('Sign Up page smoke validations', () => {
    // Validate Sign Up page url
    cy.url().should('contains', 'signup');

    // Page elements validation
    signUp.getPageLogo().should('be.visible');
    signUp.getPageTitle().should('have.text', 'Get started');
    signUp.getSignUpWithGoogleButton().should('be.visible');
    signUp.getSignUpWithAppleButton().should('be.visible');
    signUp.getOptionTitle().should('be.visible');

    common.getLabel('Email').should('be.visible');
    common.getLabel('Password').should('be.visible');

    signUp.getPasswordConditionsText().should('have.text', 'Must be at least 8 characters long, contain uppercase letters and a number.')

    signUp.getSignUpWithSSOLink().should('be.visible');
    signUp.getHaveAnAccountText().should('be.visible');
    signUp.getSignInLink().should('be.visible');
  });

  it('Sign Up - Manual Sign Up', () => {

  });
})