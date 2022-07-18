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

  getPasswordConditionsText() {
    return cy.get('#text-password-requirements').should('be.visible');
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
}
