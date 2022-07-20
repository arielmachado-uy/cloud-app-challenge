export class TopBar {
  getUserProfileButton() {
    return cy.get('span.username');
  }

  getSignOutButton() {
    return cy.get('a[data-testid="dropdown-link-sign_out"]');
  }

  getSettingsButton() {
    return cy.get('a[data-testid="dropdown-link-settings"]');
  }
}