import { Common } from '../page-objects/common-page';
const common = new Common();
export class SignUp {

  getPageLogo() {
    return cy.get('a[data-testid="link-login-getcloudapp"]');
  }

  getPageTitle() {
    return cy.get('h1').should('be.visible');
  }

  getSignUpWithGoogleButton() {
    return cy.get('span')
      .contains('Sign up with Google ');
  }

  getSignUpWithAppleButton() {
    return cy.get('span')
      .contains('Sign up with Apple ');
  }

  getOptionTitle() {
    return cy.get('small')
      .contains('or sign up with email');
  }

  getEmailInput() {
    return cy.get('#email');
  }

  getPasswordInput() {
    return cy.get('#password');
  }

  getPasswordConditionsText() {
    return cy.get('#text-password-requirements').should('be.visible');
  }

  getSignUpButton() {
    return cy.get('input[type="submit"]');
  }

  getSignUpWithSSOLink() {
    return cy.get('a[href="/sso/new"]');
  }

  getHaveAnAccountText() {
    return cy.get('li')
      .contains('Have an account?');
  }

  getSignInLink() {
    return cy.get('a[href="/login"]');
  }

  validateSignUpToastMessage(message) {
    common.getToastMessage()
      .then($element => {
        const text = $element.text();
        expect(text).to.be.eq(message);
      });
  }
}
