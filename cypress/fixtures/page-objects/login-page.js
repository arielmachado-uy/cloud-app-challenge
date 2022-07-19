export class Login {

  getEmailInput() {
    return cy.get('#email');
  }

  getPasswordInput() {
    return cy.get('#password');
  }

  getSignInButton() {
    return cy.get('input[type="submit"]');
  }
}