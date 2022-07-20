export class TopBar {
  getUserProfileButton() {
    return cy.get('span.username');
  }

  getSignOutButton() {
    return cy.get('a[data-testid="dropdown-link-sign_out"]');
  }
}