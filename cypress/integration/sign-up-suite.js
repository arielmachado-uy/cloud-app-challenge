import { Common } from '../fixtures/page-objects/common-page';
import { SignUp } from '../fixtures/page-objects/sign-up-page';

// This piece of code was added because of an error in the application
// --> ReferenceError: grecaptcha is not defined
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

  it('Sign Up page smoke validations', () => {
    // Validate Sign Up page url
    cy.url().should('contains', 'signup');

    // Page elements validation
    signUp.getPageLogo().should('be.visible');
    signUp.getPageTitle().should('have.text', 'Get started');
    signUp.getSignUpWithGoogleButton().should('be.visible');
    signUp.getSignUpWithAppleButton().should('be.visible');
    signUp.getOptionTitle().should('be.visible');

    // Input fields
    common.getLabel('Email').should('be.visible');
    signUp.getEmailInput().should('be.visible');
    common.getLabel('Password').should('be.visible');
    signUp.getPasswordInput().should('be.visible');
    signUp.getPasswordConditionsText().should('have.text', 'Must be at least 8 characters long, contain uppercase letters and a number.')

    signUp.getSignUpButton().should('be.visible');

    signUp.getSignUpWithSSOLink().should('be.visible');
    signUp.getHaveAnAccountText().should('be.visible');
    signUp.getSignInLink().should('be.visible');
  });

  it('Sign Up - Manual Sign Up', () => {
    // Get a random email every time
    const uuid = () => Cypress._.random(0, 1e8)
    const id = uuid();
    const randomEmail = `user${id}@mailinator.com`

    signUp.getEmailInput().type(randomEmail);
    signUp.getPasswordInput().type('Just4Pass');
    signUp.getSignUpButton().click();

    // Validate Dashboard page url
    cy.url().should('contains', 'onboarding/downloads');

    //TODO: Add more validations
  });
})